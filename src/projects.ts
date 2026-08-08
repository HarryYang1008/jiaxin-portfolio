export type StorySection = {
  label: string;
  title: string;
  body: string;
};

export type ProjectImage = string | {
  src: string;
  label?: string;
  caption?: string;
  alt?: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  year: string | null;
  category: string;
  role: string | null;
  client: string;
  tags: string[];
  canvaUrl: string;
  images: ProjectImage[];
  featured: boolean;
  index: string;
  visual: "word" | "terrain" | "signal" | "field";
  sections: StorySection[] | null;
  deliverables: string[];
  reflection: string | null;
};

function placeholderImages(slug: string) {
  return [
    `https://picsum.photos/seed/${slug}-cover/1800/1125`,
    `https://picsum.photos/seed/${slug}-detail-a/1400/1000`,
    `https://picsum.photos/seed/${slug}-detail-b/1400/1000`,
  ];
}

export const projects: Project[] = [
  {
    slug: "words-with-friends",
    title: "Words With Friends",
    shortTitle: "Words / Friends",
    subtitle: "A single word can carry a lifetime.",
    year: null,
    category: "Film & Copywriting",
    role: "Copywriter",
    client: "Words With Friends",
    tags: ["Film", "Script", "Emotional storytelling"],
    canvaUrl: "https://canva.link/j5w5q7tcx0ctf3a",
    images: placeholderImages("words-with-friends"),
    featured: true,
    index: "01",
    visual: "word",
    sections: [
      {
        label: "The opening",
        title: "Not a game. A bridge.",
        body: "Words With Friends already connects people across a board. The opportunity was to make that connection feel human again: less about scoring points, more about the memories hiding inside ordinary words.",
      },
      {
        label: "The insight",
        title: "Language remembers what we forget.",
        body: "A familiar word can reopen a place, a person, an entire season. The campaign turns each play into a trigger for memory—and the screen into a quiet route back to someone who once mattered.",
      },
      {
        label: "The idea",
        title: "Reunion",
        body: "A 90-second film follows George as an invitation from an old friend arrives on his iPad. CAMPING. PUPPY. Each move cuts to a shared memory, and a life that had grown still begins moving again.",
      },
      {
        label: "The execution",
        title: "Small words. Cinematic consequences.",
        body: "The script moves between quiet present-day rituals and warm, kinetic flashbacks. The game interface stays secondary; expression, pacing and the space between turns carry the emotion.",
      },
    ],
    deliverables: ["90-second film script", "Narrative concept", "Storyboard direction"],
    reflection: "The strongest product truth was not competition. It was continuity—the possibility that a friendship can resume with one small move.",
  },
  {
    slug: "lego-national-parks",
    title: "LEGO × National Parks",
    shortTitle: "Build the Wild",
    subtitle: "Turning conservation into something you can build, share and protect.",
    year: "2025",
    category: "Integrated Campaign",
    role: "Creative & Visual Designer",
    client: "LEGO × National Parks",
    tags: ["Integrated", "Social", "Experience", "OOH"],
    canvaUrl: "https://canva.link/dfd2z6es16kn7ow",
    images: [
      {
        src: "media/lego-national-parks/lego1.png",
        label: "LEGO × National Parks · Trash Bin",
      },
      {
        src: "media/lego-national-parks/lego2.png",
        label: "LEGO × National Parks · Merchandise",
        caption: "Related merchandise yields a stronger promotional effect",
      },
      {
        src: "media/lego-national-parks/lego3.png",
        label: "LEGO × National Parks · Rebuild With Imagination",
        caption: "Grand National Park",
      },
    ],
    featured: true,
    index: "02",
    visual: "terrain",
    sections: [
      {
        label: "The challenge",
        title: "Make conservation feel playable.",
        body: "Environmental action can feel distant and abstract. The campaign reframed national parks through a language built for curiosity: the tactile, optimistic world of LEGO.",
      },
      {
        label: "The strategy",
        title: "Build wonder before asking for action.",
        body: "The experience meets audiences across social, outdoor, digital and physical touchpoints—using play as the entry point and care for real landscapes as the lasting message.",
      },
      {
        label: "The concept",
        title: "Real landscapes, rebuilt in imagination.",
        body: "An interactive app feature transforms national-park scenery into LEGO-style worlds, inviting visitors to see familiar terrain with fresh attention and share their own point of view.",
      },
      {
        label: "The system",
        title: "One idea, built across every surface.",
        body: "Social stories, OOH concepts, campaign visuals and merchandise extend the same visual logic beyond the screen—turning a collaboration into a connected brand experience.",
      },
    ],
    deliverables: ["Campaign identity", "Social system", "OOH concepts", "Interactive app concept", "Merchandise"],
    reflection: "A partnership becomes powerful when each brand changes how the other is understood: LEGO makes nature feel participatory; the parks give play a purpose.",
  },
  {
    slug: "reco",
    title: "Reco",
    shortTitle: "Reco",
    subtitle: "A social-first system that turns recommendations into stories worth following.",
    year: "2025",
    category: "Strategy & Copywriting",
    role: "Media Strategy & Copywriter",
    client: "Reco",
    tags: ["Strategy", "UGC", "Influencer", "Client pitch"],
    canvaUrl: "https://canva.link/txh9vdf5lg5qlpe",
    images: placeholderImages("reco"),
    featured: true,
    index: "03",
    visual: "signal",
    sections: [
      {
        label: "The challenge",
        title: "From utility to community.",
        body: "Reco needed to become more than a place to save recommendations. The brief called for a reason to participate—and a media system capable of turning individual discoveries into collective momentum.",
      },
      {
        label: "The insight",
        title: "People trust the story around a place.",
        body: "A recommendation becomes persuasive when it carries a point of view. That made real voices, not polished brand claims, the campaign’s most valuable media.",
      },
      {
        label: "The strategy",
        title: "Design for the handoff.",
        body: "A six-month social and influencer framework gives every channel a role: spark a discovery, invite a response, then pass the story back to the community through user-generated content.",
      },
      {
        label: "The outcome",
        title: "A plan built to keep moving.",
        body: "The final client pitch connected content cadence, creator participation and narrative guidance into one media-led platform for engagement and app adoption.",
      },
    ],
    deliverables: ["Media strategy", "Six-month content plan", "Influencer framework", "Campaign copy", "Live client pitch"],
    reflection: "Community is not a campaign aesthetic. It is a behavior the system has to make easy, visible and rewarding.",
  },
  {
    slug: "want-want",
    title: "Want Want",
    shortTitle: "Want Want",
    subtitle: "A campaign study for Want Want. Full editorial case-study copy will follow the original presentation.",
    year: null,
    category: "Campaign Study",
    role: null,
    client: "Want Want",
    tags: ["Campaign"],
    canvaUrl: "https://canva.link/gdrw3q6opq4na9p",
    images: placeholderImages("want-want"),
    featured: false,
    index: "04",
    visual: "field",
    sections: null,
    deliverables: [],
    reflection: null,
  },
  ...[
    ["spirit-airlines", "Spirit Airlines", "Brand Script", "https://canva.link/bl8c54os5w0cbob"],
    ["liquid-death", "Liquid Death", "Battle Design & Web", "https://canva.link/xuxlnijmu5m5ev3"],
    ["insomnia-byom", "Insomnia Cookies — BYOM", "Campaign", "https://canva.link/792pjkrbqfkf365"],
    ["insomnia-night-mode", "Insomnia Cookies — Night Mode", "Campaign", "https://canva.link/82l7bnqdec56sqh"],
    ["starface", "Starface", "Campaign", "https://canva.link/i491047zjyfmsku"],
    ["mcdonalds", "McDonald’s", "Brand Presentation", "https://canva.link/20txbuidl4scabo"],
    ["giffords", "Gifford’s", "Script", "https://canva.link/syzb818mj35luqh"],
    ["delivery-app", "Delivery App", "Data & Analysis", "https://canva.link/yt0n4ehg35txgxa"],
    ["seattle-times", "The Seattle Times", "Report", "https://canva.link/mduo0w36e3qjiny"],
    ["universal-orlando", "Universal Orlando Resort", "Campaign", "https://canva.link/0ermbybnhglelg3"],
  ].map(([slug, title, category, canvaUrl], i): Project => ({
    slug,
    title,
    shortTitle: title,
    subtitle: "Source presentation available for review.",
    year: null,
    category,
    role: null,
    client: title,
    tags: [category],
    canvaUrl,
    images: placeholderImages(slug),
    featured: false,
    index: String(i + 5).padStart(2, "0"),
    visual: "field",
    sections: null,
    deliverables: [],
    reflection: null,
  })),
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
