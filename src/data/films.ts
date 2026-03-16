export interface FilmCredit {
  label: string;
  value: string;
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
      { label: "My position", value: "Line Producer" },
      { label: "Director", value: "Wendy Pillonel" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
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
      { label: "My position", value: "Production Manager" },
      { label: "Director", value: "Stefan Jäger" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
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
      { label: "My position", value: "Production Manager" },
      { label: "Director", value: "Chanelle Eidenbenz" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
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
      { label: "My position", value: "Production Manager" },
      { label: "Director", value: "Daniel von Aarburg" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
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
      { label: "My position", value: "Production Manager" },
      { label: "Director", value: "Wendy Pillonel" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
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
      { label: "My position", value: "Production Manager" },
      { label: "Director", value: "Wendy Pillonel" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
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
      { label: "My position", value: "Production Manager" },
      { label: "Director", value: "Marc Schippert" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
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
      { label: "My position", value: "Focal Stage Production Manager" },
      { label: "Director", value: "Simon Jaquemet" },
      { label: "Camera", value: "Gabriel Sandru" },
      { label: "Editing", value: "Christof Schertenleib" },
      { label: "Executive Producers", value: "Tolga Dilsiz, Aurelius Eisenreich" },
    ],
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
      { label: "My position", value: "Production Manager" },
      { label: "Director", value: "Cosima Frei" },
      { label: "Camera", value: "Valentino Vigniti" },
      { label: "Editing", value: "Mirjam Zimmermann" },
      { label: "Executive Producer", value: "Rhea Plangg" },
    ],
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
      { label: "My position", value: "Floor Manager Episode «Eddie»" },
      { label: "Director", value: "Wendy Pillonel" },
      { label: "Camera", value: "Lukas Graf" },
      { label: "Editing", value: "Fleur Matson" },
      { label: "Executive Producer", value: "Filippo Bonacci" },
    ],
  },
];
