import action1 from "@/assets/action-1.jpg";
import action2 from "@/assets/action-2.jpg";
import action3 from "@/assets/action-3.jpg";
import action4 from "@/assets/action-4.jpg";
import action5 from "@/assets/action-5.jpg";
import action6 from "@/assets/action-6.jpg";
import actionHero from "@/assets/action-hero.jpg";

import travelHero from "@/assets/travel-hero.jpg";

import travelNz1 from "@/assets/travel-nz-1.jpg";
import travelNz2 from "@/assets/travel-nz-2.jpg";
import travelNz3 from "@/assets/travel-nz-3.jpg";
import travelNz4 from "@/assets/travel-nz-4.jpg";
import travelNz5 from "@/assets/travel-nz-5.jpg";
import travelNz6 from "@/assets/travel-nz-6.jpg";
import travelNz7 from "@/assets/travel-nz-7.jpg";
import travelNz8 from "@/assets/travel-nz-8.jpg";
import travelNz9 from "@/assets/travel-nz-9.jpg";
import travelNz10 from "@/assets/travel-nz-10.jpg";


import projectsYoo1 from "@/assets/projects-yoo-1.jpg";
import projectsYoo2 from "@/assets/projects-yoo-2.jpg";
import projectsYoo3 from "@/assets/projects-yoo-3.jpg";
import projectsYoo4 from "@/assets/projects-yoo-4.jpg";
import projectsYoo5 from "@/assets/projects-yoo-5.jpg";
import projectsYoo6 from "@/assets/projects-yoo-6.jpg";
import projectsYoo7 from "@/assets/projects-yoo-7.jpg";

import frauenstreik1 from "@/assets/projects-frauenstreik-1.jpg";
import frauenstreik2 from "@/assets/projects-frauenstreik-2.jpg";
import frauenstreik3 from "@/assets/projects-frauenstreik-3.jpg";
import frauenstreik4 from "@/assets/projects-frauenstreik-4.jpg";
import frauenstreik5 from "@/assets/projects-frauenstreik-5.jpg";
import frauenstreik6 from "@/assets/projects-frauenstreik-6.jpg";
import frauenstreik7 from "@/assets/projects-frauenstreik-7.jpg";

import sternwarte1 from "@/assets/projects-sternwarte-1.jpg";
import sternwarte2 from "@/assets/projects-sternwarte-2.jpg";
import sternwarte3 from "@/assets/projects-sternwarte-3.jpg";
import sternwarte4 from "@/assets/projects-sternwarte-4.jpg";
import sternwarte5 from "@/assets/projects-sternwarte-5.jpg";
import sternwarte6 from "@/assets/projects-sternwarte-6.jpg";

import druegg1 from "@/assets/projects-druegg-1.jpg";
import druegg2 from "@/assets/projects-druegg-2.jpg";
import druegg3 from "@/assets/projects-druegg-3.jpg";
import druegg4 from "@/assets/projects-druegg-4.jpg";
import druegg5 from "@/assets/projects-druegg-5.jpg";
import druegg6 from "@/assets/projects-druegg-6.jpg";

export type SeriesCategory = "Stories" | "Commissions" | "Personal";

export interface SeriesImage {
  src: string;
  alt: string;
  layout: "full" | "half";
}

export interface Series {
  id: string;
  title: string;
  year: string;
  location: string;
  category: SeriesCategory;
  cover: string;
  heroImage?: string;
  excerpt: string;
  description: string;
  background: string;
  technical: string;
  quote?: string;
  images: SeriesImage[];
}

export const seriesCategories: SeriesCategory[] = [
  "Stories",
  "Commissions",
  "Personal",
];

export const categoryHeroes: Record<SeriesCategory, string> = {
  Stories: projectsYoo1,
  Commissions: actionHero,
  Personal: travelHero,
};

export const seriesData: Series[] = [
  {
    id: "amplid",
    title: "Amplid",
    year: "2024",
    location: "Schweiz",
    category: "Commissions",
    cover: action1,
    excerpt: "Snowboard photography for Amplid — shot across Vorarlberg during the 2024/25 season.",
    description:
      "Action and rider photography for Amplid, the snowboard brand founded by Peter Bauer. Shot with rider Benny Deeg across locations in Vorarlberg and Bregenzerwald, Austria, during the 2024/25 season — featuring the Ohana Vibes and Cab Driver boards.",
    background: "",
    technical: "",
    images: [
      { src: action1, alt: "Snowboarder riding powder in Vorarlberg — Amplid shooting", layout: "full" },
      { src: action2, alt: "Rider Benny Deeg on Amplid board in Bregenzerwald, Austria", layout: "half" },
      { src: action3, alt: "Snowboard action in deep snow — Amplid season 2024/25", layout: "half" },
      { src: action4, alt: "Snowboarding in the Austrian Alps — Amplid Ohana Vibes", layout: "full" },
      { src: action5, alt: "Rider portrait in winter landscape — Amplid commission", layout: "half" },
      { src: action6, alt: "Snowboard turn in fresh powder — Vorarlberg, Austria", layout: "half" },
    ],
  },
  {
    id: "new-zealand",
    title: "New Zealand",
    year: "2024",
    location: "Neuseeland",
    category: "Personal",
    cover: travelNz1,
    excerpt: "Landscapes and light from a four-week road trip through New Zealand's South and North Island.",
    description:
      "Four weeks in a campervan, starting from Wellington and crossing to the South Island by ferry. Fjords, glaciers, coast and open road — photographed during a road trip through New Zealand in 2024.",
    background: "",
    technical: "",
    images: [
      { src: travelNz1, alt: "Mountain landscape, South Island New Zealand", layout: "full" },
      { src: travelNz5, alt: "Coastal scenery, New Zealand road trip 2024", layout: "half" },
      { src: travelNz6, alt: "Fjord landscape, South Island New Zealand", layout: "half" },
      { src: travelNz2, alt: "Glacier valley, New Zealand South Island", layout: "full" },
      { src: travelNz3, alt: "Road through mountain pass, New Zealand", layout: "half" },
      { src: travelNz8, alt: "Coastline at dusk, New Zealand", layout: "half" },
      { src: travelNz9, alt: "Lake and mountains, South Island New Zealand", layout: "full" },
      { src: travelNz4, alt: "Forest and mist, New Zealand landscape", layout: "half" },
      { src: travelNz10, alt: "Sunset over ocean, New Zealand coast", layout: "half" },
      { src: travelNz7, alt: "Open road, New Zealand campervan trip 2024", layout: "full" },
    ],
  },
  {
    id: "yoo-beanies",
    title: "YOO Beanies",
    year: "2025",
    location: "Schweiz",
    category: "Commissions",
    cover: projectsYoo1,
    excerpt: "Product and portrait photography for YOO — a handmade beanie label from southern Germany.",
    description:
      "Product and portrait photography for YOO, a beanie label from the Allgäu. Every piece is handmade from repurposed garments — old jackets, reclaimed materials. Shot across different locations in Bregenz, Austria.",
    background: "",
    technical: "",
    images: [
      { src: projectsYoo1, alt: "Portrait with YOO handmade beanie, Bregenz", layout: "half" },
      { src: projectsYoo2, alt: "YOO beanie product shot — repurposed materials", layout: "half" },
      { src: projectsYoo3, alt: "Model wearing YOO beanie, street portrait Bregenz", layout: "half" },
      { src: projectsYoo4, alt: "YOO beanie detail — handmade from reclaimed garments", layout: "half" },
      { src: projectsYoo5, alt: "Portrait photography for YOO beanie label", layout: "full" },
      { src: projectsYoo6, alt: "YOO beanie lifestyle shot, Bregenz Austria", layout: "half" },
      { src: projectsYoo7, alt: "Product and portrait — YOO Beanies commission", layout: "half" },
    ],
  },
  {
    id: "frauenstreik-2025",
    title: "Frauenstreik 2025",
    year: "2025",
    location: "St. Gallen",
    category: "Stories",
    cover: frauenstreik1,
    excerpt: "Documentary work from the feminist strike on 14 June 2025 in St. Gallen.",
    description:
      "Documentary photography from the feminist strike day on 14 June 2025 in St. Gallen. Protest, solidarity and energy on the streets.",
    background: "",
    technical: "",
    images: [
      { src: frauenstreik1, alt: "Feminist strike 2025, demonstration in St. Gallen", layout: "full" },
      { src: frauenstreik2, alt: "Protesters marching, Frauenstreik St. Gallen 2025", layout: "half" },
      { src: frauenstreik3, alt: "Signs and solidarity at the feminist strike, St. Gallen", layout: "half" },
      { src: frauenstreik4, alt: "Documentary photography — Frauenstreik 14 June 2025", layout: "full" },
      { src: frauenstreik5, alt: "Crowd at the feminist strike day, St. Gallen Switzerland", layout: "half" },
      { src: frauenstreik6, alt: "Protest scene, Frauenstreik 2025 St. Gallen", layout: "half" },
      { src: frauenstreik7, alt: "Street protest, feminist strike St. Gallen 2025", layout: "full" },
    ],
  },
  {
    id: "sternwarte-2025",
    title: "Tagblatt Sommerserie",
    year: "2025",
    location: "St. Gallen",
    category: "Stories",
    cover: sternwarte1,
    excerpt: "The observatory at Kantonsschule am Burggraben, St. Gallen — editorial work for the St. Galler Tagblatt.",
    description:
      "Editorial photography for the St. Galler Tagblatt summer series 2025 — a look inside the observatory at Kantonsschule am Burggraben, St. Gallen.",
    background: "",
    technical: "",
    images: [
      { src: sternwarte1, alt: "Observatory exterior, Kantonsschule am Burggraben St. Gallen", layout: "full" },
      { src: sternwarte2, alt: "Observatory at night, St. Gallen — Tagblatt editorial", layout: "half" },
      { src: sternwarte3, alt: "Observatory dome, Kantonsschule am Burggraben", layout: "half" },
      { src: sternwarte4, alt: "Telescope interior, observatory St. Gallen", layout: "full" },
      { src: sternwarte5, alt: "Moon detail through telescope, St. Gallen observatory", layout: "half" },
      { src: sternwarte6, alt: "Portrait inside the observatory — Tagblatt summer series 2025", layout: "half" },
    ],
  },
  {
    id: "druegg-2025",
    title: "DRÜEGG Streetart",
    year: "2025",
    location: "Uzwil",
    category: "Stories",
    cover: druegg4,
    excerpt: "Documenting artist Dominik Rüegg's mural project at a primary school in Uzwil.",
    description:
      "Documentation of a large-scale mural by artist Dominik Rüegg (Drüegg) at Primarschule Uzwil. A cultural project in collaboration with Kulturagent:innen — colour, architecture and process on the schoolyard.",
    background: "",
    technical: "",
    images: [
      { src: druegg1, alt: "Sketch and sneaker detail — Drüegg street art project Uzwil", layout: "half" },
      { src: druegg2, alt: "Basketball hoop on painted schoolyard, Primarschule Uzwil", layout: "half" },
      { src: druegg3, alt: "Artist Dominik Rüegg painting mural at Drüegg Uzwil", layout: "half" },
      { src: druegg4, alt: "Aerial view of mural in progress — Drüegg schoolyard Uzwil", layout: "half" },
      { src: druegg5, alt: "Drone shot of completed Drüegg mural, Primarschule Uzwil", layout: "full" },
      { src: druegg6, alt: "Detail of colourful mural pattern — Drüegg street art Uzwil", layout: "full" },
    ],
  },
];
