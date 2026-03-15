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
    format: "Dokudrama-Serie «Es geschah am…» · Folge 7",
    broadcaster: "SRF",
    duration: "92 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:c72f10b3-1fb4-4a80-b12c-b2d264843948&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "Funktion", value: "Herstellungsleitung" },
      { label: "Regie", value: "Wendy Pillonel" },
      { label: "Kamera", value: "René Schönenberger" },
      { label: "Schnitt", value: "Nicole Hussy" },
      { label: "Produzent", value: "Rolf Elsener" },
    ],
  },
  {
    id: "buehrle-kunstraub",
    title: "Der Bührle-Kunstraub",
    year: 2023,
    format: "Dokudrama-Serie «Es geschah am…» · Folge 6",
    broadcaster: "SRF",
    duration: "99 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:231ec8f0-755d-44d3-9113-e677dc8cc106&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "Funktion", value: "Produktionsleitung" },
      { label: "Regie", value: "Stefan Jäger" },
      { label: "Kamera", value: "René Schönenberger" },
      { label: "Schnitt", value: "Nicole Hussy" },
      { label: "Produzent", value: "Rolf Elsener" },
    ],
  },
  {
    id: "sr111-halifax",
    title: "SR111 – Absturz über Halifax",
    year: 2022,
    format: "Dokudrama-Serie «Es geschah am…» · Folge 5",
    broadcaster: "SRF",
    duration: "95 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:0c987c98-2c6f-4d6e-9927-9e241a0ecac5&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "Funktion", value: "Produktionsleitung" },
      { label: "Regie", value: "Chanelle Eidenbenz" },
      { label: "Kamera", value: "René Schönenberger" },
      { label: "Schnitt", value: "Nicole Hussy" },
      { label: "Produzent", value: "Rolf Elsener" },
    ],
  },
  {
    id: "attentat-zug",
    title: "Das Attentat von Zug",
    year: 2021,
    format: "Dokudrama-Serie «Es geschah am…» · Folge 4",
    broadcaster: "SRF",
    duration: "100 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:6bcb6a8a-97a6-49ff-9097-9413d02e9be0&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "Funktion", value: "Produktionsleitung" },
      { label: "Regie", value: "Daniel von Aarburg" },
      { label: "Kamera", value: "René Schönenberger" },
      { label: "Schnitt", value: "Nicole Hussy" },
      { label: "Produzent", value: "Rolf Elsener" },
    ],
  },
  {
    id: "bis-dass-der-tod",
    title: "Bis dass der Tod uns scheidet",
    year: 2020,
    format: "Dokudrama-Serie «Es geschah am…» · Folge 3",
    broadcaster: "SRF",
    duration: "91 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:10e9b32e-3359-4c5d-8c0a-ccb0aa0b2a77&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "Funktion", value: "Produktionsleitung" },
      { label: "Regie", value: "Wendy Pillonel" },
      { label: "Kamera", value: "René Schönenberger" },
      { label: "Schnitt", value: "Nicole Hussy" },
      { label: "Produzent", value: "Rolf Elsener" },
    ],
  },
  {
    id: "postraub",
    title: "Der Postraub des Jahrhunderts",
    year: 2020,
    format: "Dokudrama-Serie «Es geschah am…» · Folge 2",
    broadcaster: "SRF",
    duration: "99 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:61e343de-ebe6-4e51-ac42-b656eeff5215&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "Funktion", value: "Produktionsleitung" },
      { label: "Regie", value: "Wendy Pillonel" },
      { label: "Kamera", value: "René Schönenberger" },
      { label: "Schnitt", value: "Nicole Hussy" },
      { label: "Produzent", value: "Rolf Elsener" },
    ],
  },
  {
    id: "geisterzug-spiez",
    title: "Der Geisterzug von Spiez",
    year: 2019,
    format: "Dokudrama-Serie «Es geschah am…» · Folge 1",
    broadcaster: "SRF",
    duration: "107 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:0d1ac273-8f18-4de4-90d2-5949f0a6e1af&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "Funktion", value: "Produktionsleitung" },
      { label: "Regie", value: "Marc Schippert" },
      { label: "Kamera", value: "René Schönenberger" },
      { label: "Schnitt", value: "Nicole Hussy" },
      { label: "Produzent", value: "Rolf Elsener" },
    ],
  },
  {
    id: "der-unschuldige",
    title: "Der Unschuldige",
    year: 2018,
    format: "Spielfilm",
    broadcaster: "8horses · Augenschein",
    duration: "114 min",
    embedUrl:
      "https://player.vimeo.com/video/289874675?h=c0006d5fb9&title=0&byline=0&portrait=0",
    embedType: "vimeo",
    credits: [
      { label: "Funktion", value: "Focal Stage Produktionsleitung" },
      { label: "Regie", value: "Simon Jaquemet" },
      { label: "Kamera", value: "Gabriel Sandru" },
      { label: "Schnitt", value: "Christof Schertenleib" },
      { label: "Produzenten", value: "Tolga Dilsiz, Aurelius Eisenreich" },
    ],
  },
  {
    id: "zwischenstopp",
    title: "Zwischenstopp",
    year: 2017,
    format: "Kurzfilm",
    broadcaster: "2:1 Film",
    duration: "18 min",
    embedUrl:
      "https://player.vimeo.com/video/219877427?h=04c073922e&title=0&byline=0&portrait=0",
    embedType: "vimeo",
    credits: [
      { label: "Funktion", value: "Produktionsleitung" },
      { label: "Regie", value: "Cosima Frei" },
      { label: "Kamera", value: "Valentino Vigniti" },
      { label: "Schnitt", value: "Mirjam Zimmermann" },
      { label: "Produzentin", value: "Rhea Plangg" },
    ],
  },
  {
    id: "peripherie",
    title: "Peripherie",
    year: 2016,
    format: "Episoden-Spielfilm",
    broadcaster: "ZHdK",
    duration: "82 min",
    embedUrl:
      "https://player.vimeo.com/video/181904697?h=7bb682a7c7&title=0&byline=0&portrait=0",
    embedType: "vimeo",
    credits: [
      { label: "Funktion", value: "Aufnahmeleitung Episode «Eddie»" },
      { label: "Regie", value: "Wendy Pillonel" },
      { label: "Kamera", value: "Lukas Graf" },
      { label: "Schnitt", value: "Fleur Matson" },
      { label: "Produzent", value: "Filippo Bonacci" },
    ],
  },
];
