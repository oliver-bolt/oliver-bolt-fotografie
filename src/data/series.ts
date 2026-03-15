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
    excerpt: "Silhouetten und Lichtspiele im urbanen Dschungel.",
    description:
      "Fleeting Moments fängt die vergänglichen Augenblicke ein, in denen Licht und menschliche Bewegung für den Bruchteil einer Sekunde ein perfektes Bild formen.",
    background:
      "Vier Wochen in Tokyo, täglich 12-14 Stunden auf der Straße.",
    technical:
      "Leica M mit 35mm Festbrennweite. Hohe ISO-Werte (1600-6400) für schnelle Verschlusszeiten.",
    images: [
      { src: action1, alt: "Action 1", layout: "full" },
      { src: action2, alt: "Action 2", layout: "half" },
      { src: action3, alt: "Action 3", layout: "half" },
      { src: action4, alt: "Action 4", layout: "full" },
      { src: action5, alt: "Action 5", layout: "half" },
      { src: action6, alt: "Action 6", layout: "half" },
    ],
  },
  {
    id: "new-zealand",
    title: "New Zealand",
    year: "2024",
    location: "Neuseeland",
    category: "Personal",
    cover: travelNz1,
    excerpt: "Zwischen Fjorden, Gletschern und endlosen Küsten.",
    description:
      "Eine visuelle Reise durch die kontrastreichen Landschaften Neuseelands – von den Südalpen bis zur rauen Westküste.",
    background:
      "Vier Wochen Roadtrip durch beide Inseln, eingefangen in atmosphärischen Lichtstimmungen.",
    technical:
      "Fokus auf natürliche Texturen und die massive Skala der Landschaft.",
    images: [
      { src: travelNz1, alt: "New Zealand 1", layout: "full" },
      { src: travelNz5, alt: "New Zealand 5", layout: "half" },
      { src: travelNz6, alt: "New Zealand 6", layout: "half" },
      { src: travelNz2, alt: "New Zealand 2", layout: "full" },
      { src: travelNz3, alt: "New Zealand 3", layout: "half" },
      { src: travelNz8, alt: "New Zealand 8", layout: "half" },
      { src: travelNz9, alt: "New Zealand 9", layout: "full" },
      { src: travelNz4, alt: "New Zealand 4", layout: "half" },
      { src: travelNz10, alt: "New Zealand 10", layout: "half" },
      { src: travelNz7, alt: "New Zealand 7", layout: "full" },
    ],
  },
  {
    id: "yoo-beanies",
    title: "YOO Beanies",
    year: "2025",
    location: "Schweiz",
    category: "Commissions",
    cover: projectsYoo1,
    excerpt: "Farbstarkes Beanie-Shooting für YOO — Portrait trifft Produkt.",
    description:
      "Ein energiegeladenes Shooting für das Schweizer Label YOO, das handgefertigte Beanies in Szene setzt.",
    background:
      "Entstanden an verschiedenen urbanen Locations in der Schweiz.",
    technical:
      "Blitzlicht und natürliches Licht kombiniert für kontrastreiche Portraits.",
    images: [
      { src: projectsYoo1, alt: "YOO Beanies 1", layout: "half" },
      { src: projectsYoo2, alt: "YOO Beanies 2", layout: "half" },
      { src: projectsYoo3, alt: "YOO Beanies 3", layout: "half" },
      { src: projectsYoo4, alt: "YOO Beanies 4", layout: "half" },
      { src: projectsYoo5, alt: "YOO Beanies 5", layout: "full" },
      { src: projectsYoo6, alt: "YOO Beanies 6", layout: "half" },
      { src: projectsYoo7, alt: "YOO Beanies 7", layout: "half" },
    ],
  },
  {
    id: "frauenstreik-2025",
    title: "Frauenstreik 2025",
    year: "2025",
    location: "St. Gallen",
    category: "Stories",
    cover: frauenstreik1,
    excerpt: "Dokumentation des Frauenstreiks 2025 in St. Gallen.",
    description:
      "Emotionale Momentaufnahmen vom Frauenstreik 2025 — Protest, Solidarität und Energie auf den Strassen von St. Gallen.",
    background:
      "Reportage-Dokumentation des feministischen Streiktags in St. Gallen.",
    technical:
      "Schnelle Reportage-Fotografie mit natürlichem Licht.",
    images: [
      { src: frauenstreik1, alt: "Frauenstreik 1", layout: "full" },
      { src: frauenstreik2, alt: "Frauenstreik 2", layout: "half" },
      { src: frauenstreik3, alt: "Frauenstreik 3", layout: "half" },
      { src: frauenstreik4, alt: "Frauenstreik 4", layout: "full" },
      { src: frauenstreik5, alt: "Frauenstreik 5", layout: "half" },
      { src: frauenstreik6, alt: "Frauenstreik 6", layout: "half" },
      { src: frauenstreik7, alt: "Frauenstreik 7", layout: "full" },
    ],
  },
  {
    id: "sternwarte-2025",
    title: "Tagblatt Sommerserie",
    year: "2025",
    location: "St. Gallen",
    category: "Stories",
    cover: sternwarte1,
    excerpt: "Ein Blick in die Sterne — Sternwarte Kantonsschule am Burggraben.",
    description:
      "Für die Tagblatt Sommerserie 2025 entstand diese Reportage in der historischen Sternwarte der Kantonsschule am Burggraben.",
    background:
      "Entstanden als Teil einer redaktionellen Serie über besondere Orte in St. Gallen.",
    technical:
      "Available Light und Langzeitbelichtungen in der Dämmerung und Nacht.",
    images: [
      { src: sternwarte1, alt: "Sternwarte Aussenansicht", layout: "full" },
      { src: sternwarte2, alt: "Sternwarte bei Nacht", layout: "half" },
      { src: sternwarte3, alt: "Sternwarte Kuppel", layout: "half" },
      { src: sternwarte4, alt: "Teleskop Interior", layout: "full" },
      { src: sternwarte5, alt: "Mond Detailaufnahme", layout: "half" },
      { src: sternwarte6, alt: "Portrait in der Sternwarte", layout: "half" },
    ],
  },
  {
    id: "druegg-2025",
    title: "DRÜEGG Streetart",
    year: "2025",
    location: "Uzwil",
    category: "Stories",
    cover: druegg4,
    excerpt: "Farbenexplosion auf dem Schulhausplatz — Streetart-Projekt Drüegg Uzwil.",
    description:
      "Dokumentation des Streetart-Projekts DRÜEGG auf dem Schulhausplatz in Uzwil — ein farbgewaltiges Gesamtkunstwerk zwischen Architektur und urbanem Spielplatz.",
    background:
      "Entstanden während der Umsetzung des Wandgemäldes auf dem Pausenplatz des Schulhauses Drüegg in Uzwil.",
    technical:
      "Drohnenaufnahmen, Weitwinkel und Details bei natürlichem Tageslicht.",
    images: [
      { src: druegg1, alt: "DRÜEGG Skizze und Sneaker", layout: "half" },
      { src: druegg2, alt: "DRÜEGG Basketballkorb", layout: "half" },
      { src: druegg3, alt: "DRÜEGG Künstler bei der Arbeit", layout: "half" },
      { src: druegg4, alt: "DRÜEGG Drohnenansicht Personen", layout: "half" },
      { src: druegg5, alt: "DRÜEGG Drohne Gesamtansicht", layout: "full" },
      { src: druegg6, alt: "DRÜEGG Detail Muster", layout: "full" },
    ],
  },
];
