import action1 from "@/assets/action-1.jpg";
import action2 from "@/assets/action-2.jpg";
import action3 from "@/assets/action-3.jpg";
import action4 from "@/assets/action-4.jpg";
import action5 from "@/assets/action-5.jpg";
import action6 from "@/assets/action-6.jpg";
import actionHero from "@/assets/action-hero.jpg";

import travel1 from "@/assets/travel-1.jpg";
import travel2 from "@/assets/travel-2.jpg";
import travel3 from "@/assets/travel-3.jpg";
import travel4 from "@/assets/travel-4.jpg";
import travel5 from "@/assets/travel-5.jpg";
import travelHero from "@/assets/travel-hero.jpg";

import projects1 from "@/assets/projects-1.jpg";
import projects2 from "@/assets/projects-2.jpg";
import projects3 from "@/assets/projects-3.jpg";
import projects4 from "@/assets/projects-4.jpg";
import projects5 from "@/assets/projects-5.jpg";
import projectsHero from "@/assets/projects-hero.jpg";

import projectsYoo1 from "@/assets/projects-yoo-1.jpg";
import projectsYoo2 from "@/assets/projects-yoo-2.jpg";
import projectsYoo3 from "@/assets/projects-yoo-3.jpg";
import projectsYoo4 from "@/assets/projects-yoo-4.jpg";
import projectsYoo5 from "@/assets/projects-yoo-5.jpg";
import projectsYoo6 from "@/assets/projects-yoo-6.jpg";
import projectsYoo7 from "@/assets/projects-yoo-7.jpg";

export type SeriesCategory = "Action" | "Travel" | "Projects";

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
  "Action",
  "Travel",
  "Projects",
];

export const categoryHeroes: Record<SeriesCategory, string> = {
  Action: actionHero,
  Travel: travelHero,
  Projects: projectsHero,
};

export const seriesData: Series[] = [
  {
    id: "action",
    title: "Action",
    year: "2024",
    location: "Schweiz",
    category: "Action",
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
    id: "travel",
    title: "Travel",
    year: "2023",
    location: "Verschiedene Orte",
    category: "Travel",
    cover: travel1,
    excerpt: "Langzeitbelichtungen an der Grenze zwischen Land und Meer.",
    description:
      "Coastal Erosion dokumentiert die langsame Transformation der Küstenlinie.",
    background:
      "Drei Wochen allein an der normannischen Küste, oft bei Sturm und Regen.",
    technical:
      "ND-Filter (10-Stop) für Belichtungszeiten von 30 Sekunden bis 4 Minuten.",
    images: [
      { src: travel1, alt: "Travel 1", layout: "full" },
      { src: travel2, alt: "Travel 2", layout: "half" },
      { src: travel3, alt: "Travel 3", layout: "half" },
      { src: travel4, alt: "Travel 4", layout: "full" },
      { src: travel5, alt: "Travel 5", layout: "half" },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    year: "2024",
    location: "Schweiz",
    category: "Projects",
    cover: projects1,
    excerpt: "Geometrische Reduktion urbaner Strukturen auf ihr visuelles Minimum.",
    description:
      "Urban Silence ist eine fortlaufende Serie, die sich der architektonischen Abstraktion widmet.",
    background:
      "Die Serie entstand über einen Zeitraum von sechs Monaten.",
    technical:
      "Aufgenommen mit einer Mittelformatkamera bei ISO 100.",
    images: [
      { src: projects1, alt: "Project 1", layout: "full" },
      { src: projects2, alt: "Project 2", layout: "half" },
      { src: projects3, alt: "Project 3", layout: "half" },
      { src: projects4, alt: "Project 4", layout: "full" },
      { src: projects5, alt: "Project 5", layout: "half" },
    ],
  },
  {
    id: "yoo-beanies",
    title: "YOO Beanies",
    year: "2025",
    location: "Schweiz",
    category: "Projects",
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
];
