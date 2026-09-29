export interface FilmCredit {
  label: string;
  value: string;
}

export interface FilmStill {
  src: string; // filename, e.g. "film-tsunami-1.png" — resolved at runtime via filmAssets
  alt: string;
}

export interface Film {
  id: string;
  title: string;
  year: number;
  format: string;
  broadcaster: string;
  duration: string;
  embedUrl: string;
  embedType: "srf" | "vimeo";
  credits: FilmCredit[];
  tags: string[];
  stills: FilmStill[];
  description: string;
  metaLine: string;
  status: "released" | "in-production";
  coverStillIndex?: number;
}

export const filmsData: Film[] = [
  {
    id: "tsunami-2004",
    title: "Der Tsunami von 2004",
    year: 2024,
    format: "Docudrama series «Es geschah am…» · Episode 7",
    broadcaster: "SRF",
    duration: "92 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:c72f10b3-1fb4-4a80-b12c-b2d264843948&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "Role", value: "Line Producer" },
      { label: "Director", value: "Wendy Pillonel" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
    tags: ["TV"],
    coverStillIndex: 4,
    stills: [
      { src: "film-tsunami-1.png", alt: "Der Tsunami von 2004 — Still 1" },
      { src: "film-tsunami-2.png", alt: "Der Tsunami von 2004 — Still 2" },
      { src: "film-tsunami-3.png", alt: "Der Tsunami von 2004 — Still 3" },
      { src: "film-tsunami-4.png", alt: "Der Tsunami von 2004 — Still 4" },
      { src: "film-tsunami-5.png", alt: "Der Tsunami von 2004 — Still 5" },
      { src: "film-tsunami-6.png", alt: "Der Tsunami von 2004 — Still 6" },
    ],
    description: `A father searches for his wife and daughter after the 2004 tsunami — a story about loss, survival and the long way back to hope.

This SRF docudrama follows the Brefin family, torn apart by the tsunami in Southeast Asia on 26 December 2004.

As line producer, the core challenge was translating a story with international scale into a production design that was both visually convincing and financially realistic. Interior environments were built and staged in Zurich, while selected exterior sequences were shot on location in Thailand.

The production combined studio work, international coordination and targeted location shooting — balancing impact, realism and budget constraints.`,
    metaLine: "TV · SRF · Docudrama · 2024 · 92 min",
    status: "released",
  },
  {
    id: "buehrle-kunstraub",
    title: "Der Bührle-Kunstraub",
    year: 2023,
    format: "Docudrama series «Es geschah am…» · Episode 6",
    broadcaster: "SRF",
    duration: "99 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:231ec8f0-755d-44d3-9113-e677dc8cc106&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "Role", value: "Production Manager" },
      { label: "Director", value: "Stefan Jäger" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
    tags: ["TV"],
    coverStillIndex: 4,
    stills: [
      { src: "film-buehrle-1.jpg", alt: "Der Bührle-Kunstraub — Still 1" },
      { src: "film-buehrle-2.jpg", alt: "Der Bührle-Kunstraub — Still 2" },
      { src: "film-buehrle-3.jpg", alt: "Der Bührle-Kunstraub — Still 3" },
      { src: "film-buehrle-4.jpg", alt: "Der Bührle-Kunstraub — Still 4" },
      { src: "film-buehrle-5.jpg", alt: "Der Bührle-Kunstraub — Still 5" },
      { src: "film-buehrle-6.jpg", alt: "Der Bührle-Kunstraub — Still 6" },
    ],
    description: `A major art heist, an international investigation and the recovery of stolen masterpieces.

The film tells the story of the 2008 robbery at Zurich's Bührle Museum and the subsequent recovery of the stolen works.

A central task was establishing trust with key stakeholders, including the Bührle Foundation and contemporary witnesses. From a production perspective, the challenge was to create an international narrative while shooting primarily in Switzerland.`,
    metaLine: "TV · SRF · Docudrama · 2023 · 99 min",
    status: "released",
  },
  {
    id: "sr111-halifax",
    title: "SR111 – Absturz über Halifax",
    year: 2022,
    format: "Docudrama series «Es geschah am…» · Episode 5",
    broadcaster: "SRF",
    duration: "95 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:0c987c98-2c6f-4d6e-9927-9e241a0ecac5&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "Role", value: "Production Manager" },
      { label: "Director", value: "Chanelle Eidenbenz" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
    tags: ["TV"],
    coverStillIndex: 4,
    stills: [
      { src: "film-sr111-1.jpg", alt: "Swissair 111 – Absturz über Halifax — Still 1" },
      { src: "film-sr111-2.jpg", alt: "Swissair 111 – Absturz über Halifax — Still 2" },
      { src: "film-sr111-3.jpg", alt: "Swissair 111 – Absturz über Halifax — Still 3" },
      { src: "film-sr111-4.jpg", alt: "Swissair 111 – Absturz über Halifax — Still 4" },
      { src: "film-sr111-5.jpg", alt: "Swissair 111 – Absturz über Halifax — Still 5" },
      { src: "film-sr111-6.jpg", alt: "Swissair 111 – Absturz über Halifax — Still 6" },
    ],
    description: `Swissair flight SR111 crashes off the coast of Halifax. 229 people die.

A reconstruction of the most significant aviation disaster in Swiss history, with a strong focus on technical credibility and responsible storytelling.

The main production challenge was recreating aircraft environments without access to original equipment. This led to a hybrid solution using aviation training mock-ups, adapted interiors and simulator-based scenes.`,
    metaLine: "TV · SRF · Docudrama · 2022 · 95 min",
    status: "released",
  },
  {
    id: "attentat-zug",
    title: "Das Attentat von Zug",
    year: 2021,
    format: "Docudrama series «Es geschah am…» · Episode 4",
    broadcaster: "SRF",
    duration: "100 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:6bcb6a8a-97a6-49ff-9097-9413d02e9be0&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "Role", value: "Production Manager" },
      { label: "Director", value: "Daniel von Aarburg" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
    tags: ["TV"],
    coverStillIndex: 2,
    stills: [
      { src: "film-attentat-zug-1.jpg", alt: "Das Attentat von Zug — Still 1" },
      { src: "film-attentat-zug-2.jpg", alt: "Das Attentat von Zug — Still 2" },
      { src: "film-attentat-zug-3.jpg", alt: "Das Attentat von Zug — Still 3" },
      { src: "film-attentat-zug-4.jpg", alt: "Das Attentat von Zug — Still 4" },
      { src: "film-attentat-zug-5.jpg", alt: "Das Attentat von Zug — Still 5" },
      { src: "film-attentat-zug-6.jpg", alt: "Das Attentat von Zug — Still 6" },
    ],
    description: `An attack on the Zug cantonal parliament that changed Switzerland.

A story that required a particularly restrained and responsible approach to staging.

The production deliberately avoided an action-driven depiction, focusing instead on reduction and suggestion. Location work, expert consultation and careful visual decisions ensured both accuracy and sensitivity.`,
    metaLine: "TV · SRF · Docudrama · 2021 · 100 min",
    status: "released",
  },
  {
    id: "bis-dass-der-tod",
    title: "Bis dass der Tod uns scheidet",
    year: 2020,
    format: "Docudrama series «Es geschah am…» · Episode 3",
    broadcaster: "SRF",
    duration: "91 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:10e9b32e-3359-4c5d-8c0a-ccb0aa0b2a77&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "Role", value: "Production Manager" },
      { label: "Director", value: "Wendy Pillonel" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
    tags: ["TV"],
    coverStillIndex: 3,
    stills: [
      { src: "film-bisdassdertod-1.jpg", alt: "Bis dass der Tod uns scheidet — Still 1" },
      { src: "film-bisdassdertod-2.jpg", alt: "Bis dass der Tod uns scheidet — Still 2" },
      { src: "film-bisdassdertod-3.jpg", alt: "Bis dass der Tod uns scheidet — Still 3" },
      { src: "film-bisdassdertod-4.jpg", alt: "Bis dass der Tod uns scheidet — Still 4" },
      { src: "film-bisdassdertod-5.jpg", alt: "Bis dass der Tod uns scheidet — Still 5" },
      { src: "film-bisdassdertod-6.jpg", alt: "Bis dass der Tod uns scheidet — Still 6" },
    ],
    description: `A wedding celebration on Lake Lucerne ends in catastrophe.

A historically set production with high demands on costume, set design and coordination.

The shipwreck sequence was realised as a practical stunt under complex conditions on Lake Lucerne. Combined with pandemic-related constraints, the project required precise planning, flexibility and strong coordination.`,
    metaLine: "TV · SRF · Docudrama · 2020 · 91 min",
    status: "released",
  },
  {
    id: "postraub",
    title: "Der Postraub des Jahrhunderts",
    year: 2020,
    format: "Docudrama series «Es geschah am…» · Episode 2",
    broadcaster: "SRF",
    duration: "99 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:61e343de-ebe6-4e51-ac42-b656eeff5215&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "Role", value: "Production Manager" },
      { label: "Director", value: "Wendy Pillonel" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
    tags: ["TV"],
    coverStillIndex: 3,
    stills: [
      { src: "film-postraub-1.png", alt: "Der Postraub des Jahrhunderts — Still 1" },
      { src: "film-postraub-2.png", alt: "Der Postraub des Jahrhunderts — Still 2" },
      { src: "film-postraub-3.png", alt: "Der Postraub des Jahrhunderts — Still 3" },
      { src: "film-postraub-4.png", alt: "Der Postraub des Jahrhunderts — Still 4" },
      { src: "film-postraub-5.png", alt: "Der Postraub des Jahrhunderts — Still 5" },
      { src: "film-postraub-6.png", alt: "Der Postraub des Jahrhunderts — Still 6" },
    ],
    description: `One of Switzerland's largest robberies — and the story behind it.

Produced under tight budget constraints, the project relied on a lean setup and precise scheduling.

Sensitive locations, safety requirements and coordination with authorities were central to the production framework.`,
    metaLine: "TV · SRF · Docudrama · 2020 · 99 min",
    status: "released",
  },
  {
    id: "geisterzug-spiez",
    title: "Der Geisterzug von Spiez",
    year: 2019,
    format: "Docudrama series «Es geschah am…» · Episode 1",
    broadcaster: "SRF",
    duration: "107 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:0d1ac273-8f18-4de4-90d2-5949f0a6e1af&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "Role", value: "Production Manager" },
      { label: "Director", value: "Marc Schippert" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
    tags: ["TV"],
    coverStillIndex: 1,
    stills: [
      { src: "film-geisterzug-1.png", alt: "Der Geisterzug von Spiez — Still 1" },
      { src: "film-geisterzug-2.png", alt: "Der Geisterzug von Spiez — Still 2" },
      { src: "film-geisterzug-3.png", alt: "Der Geisterzug von Spiez — Still 3" },
      { src: "film-geisterzug-4.png", alt: "Der Geisterzug von Spiez — Still 4" },
      { src: "film-geisterzug-5.png", alt: "Der Geisterzug von Spiez — Still 5" },
      { src: "film-geisterzug-6.png", alt: "Der Geisterzug von Spiez — Still 6" },
    ],
    description: `A runaway freight train and a race against time.

The pilot episode of Es geschah am … set the production parameters for the series.

Working with limited resources, the focus was on efficient structures and high authenticity through real locations such as trains and signal boxes.`,
    metaLine: "TV · SRF · Docudrama · 2019 · 107 min",
    status: "released",
  },
  {
    id: "der-unschuldige",
    title: "Der Unschuldige",
    year: 2018,
    format: "Feature film",
    broadcaster: "8horses · Augenschein",
    duration: "114 min",
    embedUrl:
      "https://player.vimeo.com/video/289874675?h=c0006d5fb9&title=0&byline=0&portrait=0",
    embedType: "vimeo",
    credits: [
      { label: "Role", value: "Focal Stage Production Manager" },
      { label: "Director", value: "Simon Jaquemet" },
      { label: "Camera", value: "Gabriel Sandru" },
      { label: "Editing", value: "Christof Schertenleib" },
      { label: "Executive Producers", value: "Tolga Dilsiz, Aurelius Eisenreich" },
    ],
    tags: ["CINEMA"],
    coverStillIndex: 0,
    stills: [
      { src: "film-der-unschuldige-1.png", alt: "Der Unschuldige — Titelbild" },
      { src: "film-der-unschuldige-2.png", alt: "Der Unschuldige — Ruth vor Publikum" },
      { src: "film-der-unschuldige-3.png", alt: "Der Unschuldige — Familie am Esstisch" },
      { src: "film-der-unschuldige-4.png", alt: "Der Unschuldige — Ruth allein im Saal" },
      { src: "film-der-unschuldige-5.png", alt: "Der Unschuldige — Nachtszene in Blau" },
      { src: "film-der-unschuldige-6.png", alt: "Der Unschuldige — Konfrontation" },
    ],
    description: "Feature film directed by Simon Jaquemet, produced by 8horses and Augenschein.",
    metaLine: "Cinema · 8horses · Augenschein · Feature film · 2018",
    status: "released",
  },
  {
    id: "zwischenstopp",
    title: "Zwischenstopp",
    year: 2017,
    format: "Short film",
    broadcaster: "2:1 Film",
    duration: "18 min",
    embedUrl:
      "https://player.vimeo.com/video/219877427?h=04c073922e&title=0&byline=0&portrait=0",
    embedType: "vimeo",
    credits: [
      { label: "Role", value: "Production Manager" },
      { label: "Director", value: "Cosima Frei" },
      { label: "Camera", value: "Valentino Vigniti" },
      { label: "Editing", value: "Mirjam Zimmermann" },
      { label: "Executive Producer", value: "Rhea Plangg" },
    ],
    tags: ["CINEMA"],
    coverStillIndex: 0,
    stills: [
      { src: "film-zwischenstopp-1.png", alt: "Zwischenstopp — Titelbild" },
      { src: "film-zwischenstopp-2.png", alt: "Zwischenstopp — Fahrerin im Spiegel" },
      { src: "film-zwischenstopp-3.png", alt: "Zwischenstopp — Passagiere im Bus" },
      { src: "film-zwischenstopp-4.png", alt: "Zwischenstopp — Junger Mann am Bus" },
      { src: "film-zwischenstopp-5.png", alt: "Zwischenstopp — Busbahnhof" },
      { src: "film-zwischenstopp-6.png", alt: "Zwischenstopp — Gespräch im Bus" },
    ],
    description: "Short film directed by Cosima Frei, produced by 2:1 Film.",
    metaLine: "Cinema · 2:1 Film · Short film · 2017",
    status: "released",
  },
  {
    id: "peripherie",
    title: "Peripherie",
    year: 2016,
    format: "Episodic feature film",
    broadcaster: "ZHdK",
    duration: "82 min",
    embedUrl:
      "https://player.vimeo.com/video/181904697?h=7bb682a7c7&title=0&byline=0&portrait=0",
    embedType: "vimeo",
    credits: [
      { label: "Role", value: "Floor Manager Episode «Eddie»" },
      { label: "Director", value: "Wendy Pillonel" },
      { label: "Camera", value: "Lukas Graf" },
      { label: "Editing", value: "Fleur Matson" },
      { label: "Executive Producer", value: "Filippo Bonacci" },
    ],
    tags: ["CINEMA"],
    coverStillIndex: 0,
    stills: [
      { src: "film-peripherie-1.png", alt: "Peripherie — Titelbild" },
      { src: "film-peripherie-2.png", alt: "Peripherie — Junge Frau mit Kopfhörern" },
      { src: "film-peripherie-3.png", alt: "Peripherie — Mann in Verzweiflung" },
      { src: "film-peripherie-4.png", alt: "Peripherie — Eddie raucht" },
      { src: "film-peripherie-5.png", alt: "Peripherie — Mädchen im Auto" },
      { src: "film-peripherie-6.png", alt: "Peripherie — Feuerwerk" },
    ],
    description: "Episodic feature film project by ZHdK Master students, produced at ZHdK.",
    metaLine: "Cinema · ZHdK · Episodic feature film · 2016",
    status: "released",
  },
];
