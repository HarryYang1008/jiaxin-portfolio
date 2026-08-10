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

function portfolioImages(slug: string, title: string): ProjectImage[] {
  return [
    { src: `media/${slug}/cover.jpg`, label: `${title} · Cover` },
    { src: `media/${slug}/detail-a.jpg`, label: `${title} · Strategy and concept` },
    { src: `media/${slug}/detail-b.jpg`, label: `${title} · Execution` },
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
    images: portfolioImages("words-with-friends", "Words With Friends"),
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
    images: portfolioImages("reco", "Reco"),
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
    shortTitle: "Want Want Now Now",
    subtitle: "Reactivating a childhood icon for the short-video generation.",
    year: "2025",
    category: "Brand Reactivation",
    role: "Strategist & Creative",
    client: "Want Want",
    tags: ["Strategy", "Social", "UGC", "Gen Z"],
    canvaUrl: "https://canva.link/gdrw3q6opq4na9p",
    images: portfolioImages("want-want", "Want Want Now Now"),
    featured: false,
    index: "04",
    visual: "field",
    sections: [
      {
        label: "The challenge",
        title: "Familiar, loved—and missing from the feed.",
        body: "Want Want still carries enormous emotional equity from its iconic commercials, mascot and packaging. But Gen Z now encounters culture through Douyin, RED and Reels, while the brand's strongest memories remain tied to the television era.",
      },
      {
        label: "The insight",
        title: "Nostalgia only works when it is reactivated.",
        body: "A childhood favorite cannot live on recognition alone. For nostalgia to influence daily behavior, it has to become expressive, playable and easy to remix inside the media habits people already have.",
      },
      {
        label: "The idea",
        title: "Want Want Now Now.",
        body: "The platform brings the brand's original personality into short-form culture through filters, ASMR, stickers, mood content and memes. It is a playful glow-up rather than a rebrand: the same warmth, made present again.",
      },
      {
        label: "The shift",
        title: "From being remembered to being seen again.",
        body: "A consistent system of participatory formats turns passive memory into repeatable interaction—building visibility, UGC, renewed purchase consideration and cultural relevance without abandoning what people already love.",
      },
    ],
    deliverables: ["Brand reactivation strategy", "Short-form content system", "Social executions", "UGC toolkit", "Impact framework"],
    reflection: "The strongest nostalgia strategy does not recreate the past. It gives a familiar feeling a behavior that belongs to the present.",
  },
  {
    slug: "spirit-airlines",
    title: "Spirit Airlines",
    shortTitle: "The Missing Friend",
    subtitle: "A deal so good it makes the rest of the world disappear.",
    year: null,
    category: "Brand Film & Copywriting",
    role: "Copywriter",
    client: "Spirit Airlines",
    tags: ["Film", "Script", "Comedy", "Travel"],
    canvaUrl: "https://canva.link/bl8c54os5w0cbob",
    images: portfolioImages("spirit-airlines", "Spirit Airlines"),
    featured: false,
    index: "05",
    visual: "signal",
    sections: [
      { label: "The challenge", title: "Make a low fare feel impossible to ignore.", body: "Spirit's strongest product truth is the double-take: the instant a price looks so good that everything else stops mattering. The brief was to turn that tiny reaction into a memorable brand story." },
      { label: "The insight", title: "A great deal temporarily rewrites reality.", body: "When the right flight appears, attention collapses around it. Plans change, priorities disappear and the destination suddenly feels closer than whatever is happening in front of you." },
      { label: "The idea", title: "The Missing Friend.", body: "A haunted-forest setup turns the booking moment into a literal vanishing act. Josh sees a limited-time Miami fare, taps Book and disappears in a flash—leaving his friends, and the horror genre, behind." },
      { label: "The execution", title: "From fog to full sun in one cut.", body: "The sixty-second script contrasts a tense night forest with a bright Miami beach, using Spirit yellow as the portal between them. The tonal reveal lands the promise: deals that feel like magic." },
    ],
    deliverables: ["60-second film concept", "Finished script", "Storyboard direction", "Tagline system"],
    reflection: "The fare is the proof; the story's job is to dramatize the irrational speed with which a good price changes your mind.",
  },
  {
    slug: "liquid-death",
    title: "Liquid Death",
    shortTitle: "The Prop Star",
    subtitle: "Turning every bottle into an instant Halloween costume prop.",
    year: null,
    category: "Product & Experiential Concept",
    role: "Creative & Art Direction",
    client: "Liquid Death",
    tags: ["Halloween", "Packaging", "Digital", "Experience"],
    canvaUrl: "https://canva.link/xuxlnijmu5m5ev3",
    images: portfolioImages("liquid-death", "The Prop Star"),
    featured: false,
    index: "06",
    visual: "field",
    sections: [
      { label: "The tension", title: "More parties than costumes.", body: "Halloween invitations multiply faster than people can plan looks. The gap is not enthusiasm—it is the time, effort and expense of becoming someone new for every room." },
      { label: "The brand fit", title: "Liquid Death already behaves like a prop.", body: "The tall can, aggressive voice and irreverent visual language make the product feel closer to an accessory than ordinary water. That behavior became the starting point." },
      { label: "The idea", title: "The Prop Star.", body: "Limited-edition bottle designs transform hydration into recognizable character props. An everyday outfit plus one can becomes a complete, camera-ready Halloween identity." },
      { label: "The system", title: "Dress. Slay. Do it again.", body: "A digital selector pairs bottles with instant characters, letting partygoers switch identities across the night without planning, panic or a second costume." },
    ],
    deliverables: ["Big idea", "Limited-edition packaging", "Character system", "Interactive web concept", "Campaign copy"],
    reflection: "The most ownable extension did not decorate the bottle. It made the bottle perform a new social role.",
  },
  {
    slug: "insomnia-byom",
    title: "Insomnia Cookies — BYOM",
    shortTitle: "Bring Your Own Milk",
    subtitle: "A zero-proof pregame built around cookies, milk and dorm-room ritual.",
    year: null,
    category: "Brand Experience",
    role: "Creative & Copywriter",
    client: "Insomnia Cookies",
    tags: ["Experience", "Packaging", "Campus", "Copy"],
    canvaUrl: "https://canva.link/792pjkrbqfkf365",
    images: portfolioImages("insomnia-byom", "Bring Your Own Milk"),
    featured: false,
    index: "07",
    visual: "word",
    sections: [
      { label: "The challenge", title: "Give first-year students a ritual of their own.", body: "Boston College freshmen want the shared energy of a college pregame, but a campus without Greek life offers fewer natural entry points. The opportunity was to create belonging without imitating alcohol culture literally." },
      { label: "The insight", title: "The best rituals come with objects and language.", body: "A repeatable moment becomes memorable when people can hold it, photograph it and quote it. Cookies and milk already have the behavior; they needed a playful campus code." },
      { label: "The idea", title: "BYOM: Bring Your Own Milk.", body: "A classic milk carton arrives filled with cookies and collectible Insomnia shot glasses, each marked with the perfect milk pour and lines like 'dunk responsibly' and 'zero proof, I promise.'" },
      { label: "The experience", title: "Take a shot… of milk, obviously.", body: "The carton, nutrition-facts parody and glassware turn late-night snacking into a safe social ceremony designed for dorm rooms, group selfies and stories students keep retelling." },
    ],
    deliverables: ["Experience concept", "Packaging system", "Collectible glassware", "Copy platform", "Campus activation"],
    reflection: "Belonging does not require copying an existing ritual. A brand can create a better one from a behavior it already owns.",
  },
  {
    slug: "insomnia-night-mode",
    title: "Insomnia Cookies — Night Mode",
    shortTitle: "Night Mode ON",
    subtitle: "A welcome kit that turns the first lonely nights of college into comfort.",
    year: null,
    category: "Brand Experience",
    role: "Creative Strategist",
    client: "Insomnia Cookies",
    tags: ["Experience", "Campus", "UGC", "Retention"],
    canvaUrl: "https://canva.link/82l7bnqdec56sqh",
    images: portfolioImages("insomnia-night-mode", "Night Mode ON"),
    featured: false,
    index: "08",
    visual: "signal",
    sections: [
      { label: "The challenge", title: "Freshman nights can feel longer than freshman days.", body: "New dorm rooms, missing routines and distance from home become most visible after the lights go out. Insomnia already owns late-night delivery; the opportunity was to own late-night reassurance." },
      { label: "The insight", title: "Comfort becomes trust when it arrives before the craving.", body: "Students remember the brand that understands what the moment feels like, not only what they want to eat. A useful gesture can turn a first purchase into a relationship." },
      { label: "The idea", title: "Night Mode ON.", body: "Warm cookies arrive with a Moon plush, silk pajamas, an eye mask, 'Open When…' cards, coupons and a Study & Chill playlist. The empty box transforms with string lights into a dorm-room night light." },
      { label: "The behavior", title: "#HereForTheNights.", body: "The kit creates an unboxing moment students can share while every component keeps working afterward—building comfort, repeat visits and a sense that Insomnia is present all semester." },
    ],
    deliverables: ["Welcome-kit concept", "Transforming package", "UGC framework", "Retention strategy", "Campaign hashtag"],
    reflection: "A useful brand experience can be both acquisition and care: the emotional value is what makes the commercial behavior last.",
  },
  {
    slug: "starface",
    title: "Starface",
    shortTitle: "Confidence, Activated",
    subtitle: "Three public experiences that turn breakout anxiety into playful expression.",
    year: null,
    category: "Activation Concepts",
    role: "Creative Strategist",
    client: "Starface",
    tags: ["Activation", "Guerilla", "Community", "Social"],
    canvaUrl: "https://canva.link/i491047zjyfmsku",
    images: portfolioImages("starface", "Starface Concept Proposal"),
    featured: false,
    index: "09",
    visual: "field",
    sections: [
      { label: "The opportunity", title: "Move confidence beyond the bathroom mirror.", body: "Starface already reframes acne care as color, choice and self-expression. The next step was to give that optimism a public, participatory form before the moments when confidence matters most." },
      { label: "Concept one", title: "Inner Rock Star Station.", body: "A bold pop-up outside schools, interviews, festivals and social venues lets people choose patches, absorb motivational prompts and turn pre-event nerves into a visible confidence ritual." },
      { label: "Concept two", title: "Starface Signs.", body: "A zodiac fortune machine reads a visitor's sign, dispenses a color-matched patch and extends online through personalized recommendations and discount codes—making acne care cosmic, social and collectible." },
      { label: "Concept three", title: "The Acne Diary.", body: "An oversized notebook wall invites people to write or draw memorable breakout stories in exchange for patches, transforming awkward private moments into a funny collective record and shareable social trend." },
    ],
    deliverables: ["Three activation platforms", "Pop-up experience", "Guerilla installation", "Participation mechanics", "Social extensions"],
    reflection: "Starface is strongest when the patch is not the end product—it is permission to participate without hiding.",
  },
  {
    slug: "mcdonalds",
    title: "McDonald’s",
    shortTitle: "AI You Can See",
    subtitle: "Repositioning restaurant AI from a flawed conversation to smarter menu guidance.",
    year: "2025",
    category: "Technology Strategy",
    role: "Researcher & Strategist",
    client: "McDonald’s",
    tags: ["AI", "CX", "Research", "Ethics"],
    canvaUrl: "https://canva.link/20txbuidl4scabo",
    images: portfolioImages("mcdonalds", "McDonald’s AI Strategy"),
    featured: false,
    index: "10",
    visual: "terrain",
    sections: [
      { label: "The problem", title: "Conversational AI adds friction where speed matters most.", body: "Drive-thru voice systems struggle with accents, noise and customized orders, forcing repeated corrections and employee intervention. A tool meant to improve efficiency can create longer lines and more frustration." },
      { label: "The insight", title: "Customers want accuracy, not a conversation with AI.", body: "AI is better at detecting patterns than interpreting every spoken order. Its most credible role is helping people decide faster, not pretending to replace the human taking the order." },
      { label: "The strategy", title: "Support what customers see, not what they say.", body: "Dynamic menus can respond to time, weather, inventory, traffic and app history, prioritizing relevant or faster-to-prepare choices while leaving confirmation to people or touch interfaces." },
      { label: "The guardrails", title: "Personalization needs visible boundaries.", body: "A hybrid model must explain recommendations, protect behavioral data and avoid steering children or vulnerable customers toward high-margin or less healthy options without transparency." },
    ],
    deliverables: ["Technology audit", "Consumer analysis", "Strategic recommendation", "Hybrid service model", "Ethical framework"],
    reflection: "The smartest use of AI is often the least theatrical one: put prediction where it removes a decision, not where it creates another conversation.",
  },
  {
    slug: "giffords",
    title: "Gifford’s Famous Ice Cream",
    shortTitle: "No Shortcuts. Ever.",
    subtitle: "A deadpan factory-tour film about the Maine way of doing things.",
    year: null,
    category: "Film & Copywriting",
    role: "Copywriter",
    client: "Gifford’s Famous Ice Cream",
    tags: ["Film", "Script", "Comedy", "Brand truth"],
    canvaUrl: "https://canva.link/syzb818mj35luqh",
    images: portfolioImages("giffords", "Gifford’s — No Shortcuts"),
    featured: false,
    index: "11",
    visual: "word",
    sections: [
      { label: "The brand truth", title: "In Maine, care is ordinary.", body: "Gifford's makes ice cream close to the farms, fields and people behind it. 'No shortcuts' works because it does not feel like a corporate claim—it feels like the local expectation." },
      { label: "The tension", title: "What if someone suggests a shortcut anyway?", body: "A serious factory tour and an elementary-school question create the perfect collision between wholesome craft and absurd efficiency." },
      { label: "The idea", title: "We Don't Take Shortcuts.", body: "A child asks why Gifford's cannot feed strawberries directly to cows and freeze the resulting milk. The exhausted guide signals security: apparently this is not the first shortcut proposal." },
      { label: "The tone", title: "Straight-faced until the final scoop.", body: "The thirty-second script keeps every performance sincere, letting the surreal removal of the child land the brand line: Gifford's. No shortcuts. Ever." },
    ],
    deliverables: ["30-second film concept", "Finished script", "Comedic direction", "Brand end line"],
    reflection: "A product claim becomes memorable when the comedy tests it—and the brand refuses to blink.",
  },
  {
    slug: "delivery-app",
    title: "Food Delivery App Study",
    shortTitle: "What Drives the Order",
    subtitle: "Researching how cost, culture and service shape U.S. college students’ platform choices.",
    year: null,
    category: "Consumer Research",
    role: "Researcher & Analyst",
    client: "Academic Research",
    tags: ["Survey", "Data", "Consumer behavior", "Strategy"],
    canvaUrl: "https://canva.link/yt0n4ehg35txgxa",
    images: portfolioImages("delivery-app", "Food Delivery App Study"),
    featured: false,
    index: "12",
    visual: "signal",
    sections: [
      { label: "The question", title: "What actually determines app preference?", body: "The study examined how U.S. college students aged 18–25 choose among Uber Eats, DoorDash and smaller services, testing price, service quality, usability, social influence and cultural food access." },
      { label: "The method", title: "Turn everyday ordering into measurable behavior.", body: "A Qualtrics survey combined platform choice, ordering frequency, Likert-scale importance ratings, barriers and open-ended experience questions, followed by descriptive and inferential analysis." },
      { label: "The finding", title: "Cost dominates; culture still differentiates.", body: "High prices were the clearest barrier, while Uber Eats and DoorDash concentrated most usage. Asian and international respondents also surfaced limited access to culturally familiar food as an important platform-level difference." },
      { label: "The implication", title: "Design for student reality, not generic convenience.", body: "Student pricing, lower fees, culturally relevant restaurant supply, better cuisine filters and campus referral systems offer more leverage than interface polish alone." },
    ],
    deliverables: ["Research design", "Qualtrics survey", "Descriptive analysis", "Chi-square analysis", "Platform recommendations"],
    reflection: "Convenience earns trial, but affordability and cultural relevance decide whether convenience becomes a habit.",
  },
  {
    slug: "seattle-times",
    title: "The Seattle Times",
    shortTitle: "Your Stories, Your Seattle",
    subtitle: "A research-led digital strategy for making local journalism more accessible and participatory.",
    year: "2024",
    category: "Brand Research & Strategy",
    role: "Researcher & Strategist",
    client: "The Seattle Times",
    tags: ["Research", "Creative brief", "Social", "Local news"],
    canvaUrl: "https://canva.link/mduo0w36e3qjiny",
    images: portfolioImages("seattle-times", "The Seattle Times"),
    featured: false,
    index: "13",
    visual: "terrain",
    sections: [
      { label: "The challenge", title: "Local value is hidden behind digital friction.", body: "Younger audiences want relevant, trustworthy local news but often meet low awareness, paywall resistance and perceptions of political bias before they experience the reporting itself." },
      { label: "The research", title: "Listen across behavior, conversation and competition.", body: "Interviews, social listening, Meltwater analysis, audience data, brand review and a consumer journey map revealed where trust forms, where access breaks and how national platforms shape expectations." },
      { label: "The insight", title: "Young readers want news that connects them to a life they recognize.", body: "Accessibility matters, but so do relevance and participation. Local journalism becomes distinctive when it helps audiences understand, question and contribute to the community around them." },
      { label: "The idea", title: "Your Stories, Your Seattle.", body: "A digital-first platform uses live updates, polls, Q&As and social storytelling to turn trusted community reporting into an ongoing exchange rather than a one-way article experience." },
    ],
    deliverables: ["Audience research", "Brand analysis", "Consumer journey", "Creative brief", "Social and visual executions"],
    reflection: "The strongest defense of local journalism is not scale. It is making proximity feel useful, visible and shared.",
  },
  {
    slug: "universal-orlando",
    title: "Universal Orlando Resort",
    shortTitle: "Badge of (Dis)honor",
    subtitle: "A satirical award for the people winning the race to burnout.",
    year: null,
    category: "Guerilla Campaign",
    role: "Creative & Copywriter",
    client: "Universal Orlando Resort",
    tags: ["Guerilla", "Direct", "Satire", "Travel"],
    canvaUrl: "https://canva.link/0ermbybnhglelg3",
    images: portfolioImages("universal-orlando", "Badge of (Dis)honor"),
    featured: false,
    index: "14",
    visual: "field",
    sections: [
      { label: "The target", title: "Silicon Valley's most committed non-vacationers.", body: "Unused PTO, late-night status updates and cars still parked long after dark make burnout visible. The audience does not need another wellness reminder; it needs its unhealthy achievement reflected back." },
      { label: "The idea", title: "Your Badge Awaits.", body: "Cars left overnight receive a satirical 'Most Overworked and Least Rewarded' badge of dishonor, congratulating their owners for winning a race nobody should want to finish." },
      { label: "The object", title: "An award that works as evidence.", body: "The physical badge can be worn or hidden in the office, while a redesigned certificate makes the joke feel official enough to earn attention on the windshield and online." },
      { label: "The conversion", title: "Have a life. Take back your vacation.", body: "A QR code on the back turns recognition into action, leading recipients from a late-night parking lot to a Universal Orlando vacation invitation." },
    ],
    deliverables: ["Guerilla concept", "Physical badge", "Certificate design", "Direct-response mechanic", "Campaign copy"],
    reflection: "Satire opens the door because it acknowledges the behavior before asking the audience to change it.",
  },
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
