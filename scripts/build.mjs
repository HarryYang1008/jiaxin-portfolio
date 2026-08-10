import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "src");
const outDir = path.join(root, "site");

if (!outDir.startsWith(root + path.sep)) throw new Error("Unsafe output path");
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(path.join(outDir, "assets"), { recursive: true });

const projectSource = fs.readFileSync(path.join(srcDir, "projects.ts"), "utf8");
const compiled = ts.transpileModule(projectSource, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText;
const moduleUrl = `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`;
const { projects, featuredProjects } = await import(moduleUrl);

for (const file of ["jiaxin-sky.jpg", "jiaxin-zhang-resume.pdf", "og.png"]) {
  fs.copyFileSync(path.join(srcDir, file), path.join(outDir, "assets", file));
}
fs.copyFileSync(path.join(srcDir, "styles.css"), path.join(outDir, "assets", "styles.css"));
fs.copyFileSync(path.join(root, "scripts", "motion.js"), path.join(outDir, "assets", "motion.js"));
const mediaDir = path.join(srcDir, "media");
if (fs.existsSync(mediaDir)) fs.cpSync(mediaDir, path.join(outDir, "assets", "media"), { recursive: true });
fs.writeFileSync(path.join(outDir, ".nojekyll"), "", "utf8");

const esc = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const imageSrc = (src, base) => /^https?:\/\//.test(src) ? src : `${base}assets/${src.replace(/^\.\//, "")}`;

function head({ title, description, base }) {
  return `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${esc(description)}">
    <meta name="theme-color" content="#dfff3f">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <title>${esc(title)}</title>
    <link rel="stylesheet" href="${base}assets/styles.css">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2250%22 fill=%22%23160b2f%22/><text x=%2250%22 y=%2262%22 text-anchor=%22middle%22 font-size=%2240%22 fill=%22%23dfff3f%22>JZ</text></svg>">
  `;
}

function nav(base) {
  return `<header class="site-nav">
    <a class="nav-mark" href="${base}index.html" aria-label="Jiaxin Zhang — home">JZ</a>
    <nav aria-label="Primary navigation">
      <a href="${base}index.html#work">Work</a>
      <a href="${base}index.html#process">Process</a>
      <a href="${base}archive/index.html">Archive</a>
      <a href="${base}index.html#contact">Contact</a>
    </nav>
  </header>`;
}

function chrome(base) {
  return `<div class="scroll-progress" aria-hidden="true"></div>
  <div class="kinetic-label" aria-hidden="true">Think / Make / Move</div>
  ${nav(base)}`;
}

function imageData(image, fallbackLabel) {
  const media = typeof image === "string" ? { src: image } : image;
  const label = media.label ?? fallbackLabel;
  return { ...media, label, alt: media.alt ?? label };
}

function campaignImage(image, fallbackLabel, base, className = "", eager = false) {
  const media = imageData(image, fallbackLabel);
  const { src, label } = media;
  const isPlaceholder = /^https:\/\/picsum\.photos\//.test(src);
  const status = media.caption ?? (isPlaceholder ? "Image placeholder · replace in project data" : "Original project image");
  const alt = isPlaceholder ? "" : media.alt;
  return `<figure class="campaign-image ${className}"${isPlaceholder ? " data-image-placeholder" : ""}>
    <img src="${esc(imageSrc(src, base))}" alt="${esc(alt)}" loading="${eager ? "eager" : "lazy"}" decoding="async">
    <figcaption><span>${esc(label)}</span><span>${esc(status)}</span></figcaption>
  </figure>`;
}

function projectVisual(project, compact = false) {
  let visual = "";
  if (project.visual === "word") visual = `<div class="word-board"><span>RE</span><span>UN</span><span>ION</span></div>`;
  if (project.visual === "terrain") visual = `<div class="terrain"><i></i><i></i><i></i><i></i><i></i><i></i></div>`;
  if (project.visual === "signal") visual = `<div class="signal"><i></i><i></i><i></i><i></i></div>`;
  if (project.visual === "field") visual = `<div class="field-type">${esc(project.shortTitle)}</div>`;
  return `<div class="project-visual visual-${project.visual}${compact ? " is-compact" : ""}" aria-hidden="true"><span class="visual-index">${project.index}</span>${visual}</div>`;
}

function pageShell({ title, description, base, bodyClass = "", body }) {
  return `<!doctype html><html lang="en"><head>${head({ title, description, base })}</head>
  <body class="${bodyClass}" data-inner-page="${bodyClass ? "true" : "false"}">${chrome(base)}${body}
  <script src="${base}assets/motion.js" defer></script></body></html>`;
}

function homePage() {
  const work = featuredProjects.map((project) => `<article class="home-project">
    <a href="work/${project.slug}/index.html" aria-label="View ${esc(project.title)} case study">
      <div class="project-meta"><span>${project.index}</span><span>${esc(project.category)}</span><span>${esc(project.year ?? "Selected work")}</span></div>
      <h3>${esc(project.shortTitle)}</h3><p>${esc(project.subtitle)}</p>
      ${campaignImage(project.images[0], `${project.title} · Cover image`, "", "home-project-image")}
      ${projectVisual(project, true)}<span class="project-arrow" aria-hidden="true">↗</span>
    </a></article>`).join("");

  const process = [
    ["Listen", "Find the tension people feel but rarely say."], ["Frame", "Turn research into one sharp strategic truth."],
    ["Imagine", "Make the idea big enough to travel."], ["Build", "Give every channel a meaningful role."],
    ["Refine", "Remove everything the idea doesn’t need."],
  ].map(([name, description], i) => `<li><span>0${i + 1}</span><h3>${name}</h3><p>${description}</p></li>`).join("");

  const timeline = [
    ["2018", "First stage", "Community hosting taught me how to read a room."],
    ["2021", "USF", "Public health became integrated advertising—and curiosity found a language."],
    ["2024", "D&AD", "Art direction moved ideas from instinct into systems."],
    ["2025", "BU + AdLab", "Strategy, copy and brand experience started working as one."],
    ["Next", "Open brief", "Looking for the team that believes ambitious ideas can still feel human."],
  ].map(([year, title, text]) => `<article role="listitem"><span>${year}</span><h3>${title}</h3><p>${text}</p></article>`).join("");

  const body = `<main>
    <section class="opening" aria-labelledby="opening-title"><div class="eyebrow opening-eyebrow">A point of view, in progress</div>
      <h1 id="opening-title">Ideas should<br><em>move</em> people.</h1>
      <div class="opening-foot"><span>Creative advertising<br>built from human truths.</span><a href="#reveal" class="scroll-cue">Scroll to begin <span>↓</span></a></div>
    </section>
    <section class="identity-reveal" id="reveal" aria-labelledby="identity-title"><div class="portrait-wrap"><img src="assets/jiaxin-sky.jpg" alt="Jiaxin Zhang laughing on a beach beneath an expansive blue sky"></div>
      <div class="identity-copy"><span class="eyebrow light">Meet the mind behind the work</span><h2 id="identity-title">Jiaxin<br>Zhang.</h2><p>Creative strategist.<br>Art director.<br>Story collector.</p></div>
      <p class="identity-note">Boston ↔ everywhere<br>Available for creative opportunities</p>
    </section>
    <section class="manifesto" id="manifesto" aria-labelledby="manifesto-title"><div class="section-number">01 / Belief</div><h2 id="manifesto-title">I look for the feeling<br>before the format.</h2>
      <div class="manifesto-body"><p class="lead">The best advertising doesn’t interrupt culture. It earns a place inside it.</p><p>I move between strategy, words and visual systems to find the one human truth that can hold an entire campaign together—then build every touchpoint around it.</p></div>
    </section>
    <section class="selected-work" id="work" aria-labelledby="work-title"><div class="work-heading"><div class="section-number">02 / Selected campaigns</div><h2 id="work-title">Work that starts<br>with a reason.</h2></div><div class="project-list">${work}</div><a class="text-link" href="archive/index.html">Explore all fourteen projects ↗</a></section>
    <section class="process" id="process" aria-labelledby="process-title"><div class="section-number light">03 / How I think</div><h2 id="process-title">Clarity is the<br>most creative move.</h2><ol class="process-steps">${process}</ol></section>
    <section class="journey" aria-labelledby="journey-title"><div class="section-number">04 / Journey</div><h2 id="journey-title">A career built<br>across disciplines.</h2><div class="timeline" role="list">${timeline}</div></section>
    <section class="practice" aria-labelledby="practice-title"><div class="section-number">05 / Practice</div><h2 id="practice-title">Strategy <i>with</i> feeling.<br>Craft <i>with</i> purpose.</h2><div class="skill-lines"><span>Creative Strategy</span><span>Art Direction</span><span>Copywriting</span><span>Brand Experience</span><span>Social-first Thinking</span><span>Visual Storytelling</span></div></section>
    <section class="closing-statement" aria-label="Creative manifesto"><p>Make it clear.</p><p>Make it felt.</p><p>Make it stay.</p></section>
    <footer class="contact" id="contact"><div class="section-number light">06 / Say hello</div><h2>Have a brief,<br>a thought,<br><em>or a wild idea?</em></h2><a class="email-link" href="mailto:jiaxinz0620@gmail.com">jiaxinz0620@gmail.com ↗</a><div class="footer-meta"><span>Jiaxin Zhang © 2026</span><div><a href="assets/jiaxin-zhang-resume.pdf">Résumé</a><a href="archive/index.html">Archive</a></div><a href="#opening-title">Back to top ↑</a></div></footer>
  </main>`;
  return pageShell({ title: "Jiaxin Zhang — Creative Advertising", description: "Creative strategy, art direction and copywriting by Jiaxin Zhang.", base: "", body });
}

function archivePage() {
  const list = projects.map((project) => {
    const preview = imageData(project.images[0], `${project.title} · Archive preview`);
    return `<article><a href="../work/${project.slug}/index.html"><span class="archive-index">${project.index}</span><span class="archive-thumb"><img src="${esc(imageSrc(preview.src, "../"))}" alt="${esc(preview.alt)}" loading="lazy" decoding="async"></span><h2>${esc(project.title)}</h2><span class="archive-category">${esc(project.category)}</span><span class="archive-year">${esc(project.year ?? "Selected work")}</span><b aria-hidden="true">↗</b></a></article>`;
  }).join("");
  const body = `<main class="archive-page"><header class="archive-hero"><div class="eyebrow">Campaign index / ${projects.length} projects</div><h1>Every idea<br>leaves a trace.</h1><p>A living archive of campaigns, scripts, research, strategy and visual systems—each rebuilt from its original project presentation into a complete story.</p></header><section class="archive-list">${list}</section><footer class="archive-footer"><a href="../index.html">← Return to the story</a><a href="mailto:jiaxinz0620@gmail.com">Start a conversation ↗</a></footer></main>`;
  return pageShell({ title: "Campaign Archive — Jiaxin Zhang", description: "Selected campaign, strategy, writing and design work by Jiaxin Zhang.", base: "../", bodyClass: "archive-static", body });
}

function projectPage(project, index) {
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const overview = project.sections ? `<section class="case-overview"><div><span>Client</span><strong>${esc(project.client)}</strong></div><div><span>Role</span><strong>${esc(project.role ?? "—")}</strong></div><div><span>Disciplines</span><strong>${esc(project.tags.join(" · "))}</strong></div></section>` : "";
  let content;
  if (project.sections) {
    const beats = project.sections.map((section, i) => `<section class="story-beat"><div class="story-label">0${i + 1} / ${esc(section.label)}</div><h2>${esc(section.title)}</h2><p>${esc(section.body)}</p>${(i === 0 || i === 2) ? campaignImage(project.images[i === 0 ? 1 : 2], `${project.title} · Campaign image ${i === 0 ? "01" : "02"}`, "../../", "story-image") : ""}${i === 1 ? `<div class="story-pause" aria-hidden="true"><span>${esc(project.shortTitle)}</span></div>` : ""}</section>`).join("");
    content = `${overview}<div class="case-story">${beats}</div><section class="case-deliverables"><div class="story-label">The build</div><h2>From thought<br>to touchpoint.</h2><ul>${project.deliverables.map((item) => `<li>${esc(item)}</li>`).join("")}</ul></section><section class="reflection"><span>Reflection</span><blockquote>“${esc(project.reflection)}”</blockquote></section><a class="source-credit" href="${esc(project.canvaUrl)}" target="_blank" rel="noreferrer">View original source presentation ↗</a>`;
  } else {
    content = `<section class="source-note"><div class="story-label">Source note</div><h2>This story is still<br>being edited.</h2><p>The original presentation is preserved as the source of truth. Strategic details will appear here only after they have been reviewed and rewritten—never invented to fill a page.</p><a class="source-button" href="${esc(project.canvaUrl)}" target="_blank" rel="noreferrer">View source presentation ↗</a></section><section class="placeholder-gallery">${campaignImage(project.images[1], `${project.title} · Campaign image 01`, "../../")}${campaignImage(project.images[2], `${project.title} · Campaign image 02`, "../../")}</section>`;
  }
  const body = `<main class="case-page case-${project.visual}"><header class="case-hero"><div class="case-topline"><a href="../../archive/index.html">← Campaign archive</a><span>${project.index} / ${projects.length}</span></div><div class="case-kicker">${esc(project.category)}${project.year ? ` · ${esc(project.year)}` : ""}</div><h1>${esc(project.title)}</h1><p>${esc(project.subtitle)}</p><div class="case-visual-stack">${campaignImage(project.images[0], `${project.title} · Hero image`, "../../", "case-cover-image", true)}${projectVisual(project)}</div></header>${content}<nav class="case-next"><a href="../${previous.slug}/index.html"><span>Previous</span><strong>${esc(previous.title)}</strong></a><a href="../${next.slug}/index.html"><span>Next story</span><strong>${esc(next.title)} →</strong></a></nav></main>`;
  return pageShell({ title: `${project.title} — Jiaxin Zhang`, description: project.subtitle, base: "../../", bodyClass: `case-static case-${project.visual}`, body });
}

function writePage(relativeDir, html) {
  const directory = path.join(outDir, relativeDir);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, "index.html"), html, "utf8");
}

writePage("", homePage());
writePage("archive", archivePage());
projects.forEach((project, index) => writePage(path.join("work", project.slug), projectPage(project, index)));
fs.copyFileSync(path.join(outDir, "index.html"), path.join(outDir, "404.html"));
console.log(`Generated ${projects.length + 2} static pages in ${outDir}`);
