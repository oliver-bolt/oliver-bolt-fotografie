import action1 from "@/assets/action-1.jpg";
import action2 from "@/assets/action-2.jpg";
import action3 from "@/assets/action-3.jpg";
import action4 from "@/assets/action-4.jpg";
import action5 from "@/assets/action-5.jpg";
import action6 from "@/assets/action-6.jpg";
import action7 from "@/assets/action-7.jpg";
import action8 from "@/assets/action-8.jpg";
import action9 from "@/assets/action-9.jpg";
import action10 from "@/assets/action-10.jpg";
import action11 from "@/assets/action-11.jpg";
import action12 from "@/assets/action-12.jpg";
import action13 from "@/assets/action-13.jpg";
import action14 from "@/assets/action-14.jpg";
import action15 from "@/assets/action-15.jpg";
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
import tansania1 from "@/assets/tansania-1.jpg";
import tansania2 from "@/assets/tansania-2.jpg";
import tansania3 from "@/assets/tansania-3.jpg";
import tansania4 from "@/assets/tansania-4.jpg";
import tansania5 from "@/assets/tansania-5.jpg";
import tansania6 from "@/assets/tansania-6.jpg";
import tansania7 from "@/assets/tansania-7.jpg";
import tansania8 from "@/assets/tansania-8.jpg";
import tansania9 from "@/assets/tansania-9.jpg";
import tansania10 from "@/assets/tansania-10.jpg";
import tansania11 from "@/assets/tansania-11.jpg";



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
import riethuesli1 from "@/assets/riethuesli-1.jpg";
import riethuesli2 from "@/assets/riethuesli-2.jpg";
import riethuesli3 from "@/assets/riethuesli-3.jpg";
import riethuesli4 from "@/assets/riethuesli-4.jpg";
import riethuesli5 from "@/assets/riethuesli-5.jpg";
import riethuesli6 from "@/assets/riethuesli-6.jpg";
import riethuesli7 from "@/assets/riethuesli-7.jpg";
import riethuesli8 from "@/assets/riethuesli-8.jpg";
import riethuesli9 from "@/assets/riethuesli-9.jpg";
import riethuesli10 from "@/assets/riethuesli-10.jpg";
import riethuesli11 from "@/assets/riethuesli-11.jpg";

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
    cover: action8,
    excerpt: "Snowboard photography for Amplid — shot across Vorarlberg during the 2024/25 season.",
    description:
      "Action and rider photography for Amplid, the snowboard brand founded by Peter Bauer. Shot with rider Benny Deeg across locations in Vorarlberg and Bregenzerwald, Austria, during the 2024/25 season — featuring the Ohana Vibes and Cab Driver boards.",
    background: "",
    technical: "",
    images: [
      { src: action8, alt: "Backflip off a cliff — Amplid Ohana Vibes, Vorarlberg", layout: "full" },
      { src: action10, alt: "Rider on summit rock holding Amplid board overhead, Bregenzerwald", layout: "half" },
      { src: action11, alt: "Benny Deeg jumping with Amplid Ohana Vibes board, backcountry Austria", layout: "half" },
      { src: action12, alt: "Rider overlooking alpine panorama with Amplid board, Bregenzerwald", layout: "full" },
      { src: action7, alt: "Powder turn in deep snow shadow — Amplid shooting Vorarlberg", layout: "full" },
      { src: actionHero, alt: "Big air over kicker — Amplid Cab Driver, Austrian Alps", layout: "full" },
      { src: action1, alt: "Benny Deeg with Amplid board at mountain gas station, Vorarlberg", layout: "half" },
      { src: action2, alt: "Rider portrait with Amplid Cab Driver at fuel pump, Bregenzerwald", layout: "half" },
      { src: action14, alt: "Cliff drop on Amplid Ohana Vibes — backcountry Vorarlberg", layout: "full" },
      { src: action9, alt: "Benny Deeg portrait with snowboard on alpine slope, Amplid", layout: "half" },
      { src: action15, alt: "Amplid Ohana Vibes snowboard leaning against alpine pine tree", layout: "half" },
      { src: action3, alt: "Amplid Cab Driver board in snow with piste machines, Vorarlberg", layout: "full" },
      { src: action4, alt: "Amplid Cab Driver top sheet detail with bindings", layout: "half" },
      { src: action13, alt: "Snowboard tail imprint in fresh powder — Ohana Vibes detail", layout: "half" },
      { src: action6, alt: "Rail trick motion blur — Amplid Cab Driver, snowpark", layout: "full" },
      { src: action5, alt: "Benny Deeg hiking through forest with Amplid board, Bregenzerwald", layout: "half" },
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
    id: "tansania",
    title: "Tansania",
    year: "2023",
    location: "Tansania",
    category: "Personal",
    cover: tansania4,
    excerpt: "First time Africa — from the Serengeti to the summit of Kilimanjaro. One lens to travel.",
    description:
      "A journey through Tanzania in 2023 — from Arusha through the Serengeti on safari to a seven-day climb up Mount Kilimanjaro. Wildlife, wide landscapes and the people along the way. Shot on a single lens.",
    background: "",
    technical: "",
    images: [
      { src: tansania4, alt: "Giraffe feeding on acacia tree, Serengeti National Park Tanzania", layout: "half" },
      { src: tansania6, alt: "Zebras at dusk in the Serengeti savanna, Tanzania", layout: "half" },
      { src: tansania2, alt: "Maasai group walking across open plains near Arusha, Tanzania", layout: "half" },
      { src: tansania10, alt: "Moss-covered tree canopy in Kilimanjaro rainforest zone", layout: "half" },
      { src: tansania7, alt: "Maasai man in red shuka sitting alone in dry landscape, Tanzania", layout: "full" },
      { src: tansania3, alt: "Lioness resting in tall grass, Serengeti National Park", layout: "full" },
      { src: tansania11, alt: "Bird of prey over corrugated roof — Kilimanjaro basecamp", layout: "half" },
      { src: tansania9, alt: "Figure in fog on wooden platform, Kilimanjaro mountain hut", layout: "half" },
      { src: tansania8, alt: "Porters loading supplies at Kilimanjaro trailhead, rainforest zone", layout: "full" },
      { src: tansania5, alt: "Ikoma refreshment and curio shop near Serengeti entrance, Tanzania", layout: "half" },
      { src: tansania1, alt: "Three men on motorcycle, rural road near Arusha Tanzania", layout: "half" },
    ],
  },
  {
    id: "yoo-beanies",
    title: "YOO Beanies",
    year: "2025",
    location: "Schweiz",
    category: "Commissions",
    cover: projectsYoo1,
    excerpt: "Product and portrait photography for YOO — a label for handmade beanies from southern Germany.",
    description:
      "Product and portrait photography for YOO, a label for handmade beanies from the Allgäu. Every piece is made from repurposed garments — old jackets, reclaimed materials. Shot across different locations in Bregenz, Austria.",
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
    excerpt: "Documentary work from the feminist strike on the 14th of June 2025 in St. Gallen.",
    description:
      "Documentary photography from the feminist strike day on the 14th of June 2025 in St. Gallen. Protest, solidarity and energy on the streets.",
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
    excerpt: "The observatory at Kantonsschule am Burggraben, St. Gallen — editorial work for the newspaper St. Galler Tagblatt.",
    description:
      "Editorial photography for the newspaper St. Galler Tagblatt, summer series 2025 — a look inside the observatory at Kantonsschule am Burggraben, St. Gallen.",
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
  {
    id: "riethuesli-2025",
    title: "Kunst Schul Haus",
    year: "2025",
    location: "St. Gallen",
    category: "Stories",
    cover: riethuesli5,
    excerpt: "Over 25 artists turned a condemned schoolhouse into a street art canvas — one weekend before demolition.",
    description:
      "Documentation of Kunst Schul Haus, a street art project at the old Primarschulhaus Riethüsli in St. Gallen. Over 25 artists transformed the building into a collective canvas across one weekend in September 2025 — organized by Somewhere Lab before the school's demolition in 2026.",
    background: "",
    technical: "",
    images: [
      { src: riethuesli5, alt: "Tattooed hand holding phone and spray can against colorful mural wall, Kunst Schul Haus Riethüsli", layout: "full" },
      { src: riethuesli11, alt: "Artist painting giant realistic eye mural through concrete pillars, Schulhaus Riethüsli St. Gallen", layout: "full" },
      { src: riethuesli8, alt: "Artist on ladder painting flower-and-figure mural on school corner, Kunst Schul Haus", layout: "half" },
      { src: riethuesli10, alt: "Artist on ladder spraying colorful lettering wall, Riethüsli street art project", layout: "half" },
      { src: riethuesli6, alt: "Artist with gas mask painting portrait mural, low angle — Kunst Schul Haus St. Gallen", layout: "full" },
      { src: riethuesli4, alt: "Two artists painting St. Gallen train station mural with graffiti lettering, Schulhaus Riethüsli", layout: "full" },
      { src: riethuesli1, alt: "Artist on Stutz ladder spraying large character on school wall, lens flare — Riethüsli", layout: "half" },
      { src: riethuesli9, alt: "Two artists from above discussing colorful mural, Kunst Schul Haus Riethüsli", layout: "half" },
      { src: riethuesli7, alt: "Photorealistic mural — hands holding jar with toys, two artists on roof at dusk, Riethüsli", layout: "full" },
      { src: riethuesli2, alt: "Female artist painting black and white graphic panels on school fence, Riethüsli St. Gallen", layout: "half" },
      { src: riethuesli3, alt: "Artist crouching beside large black-and-white line mural with paint buckets, Schulhaus Riethüsli", layout: "half" },
    ],
  },
];
