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
    id: "fleeting-moments",
    title: "Fleeting Moments",
    year: "2024",
    location: "Tokyo, JP",
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
      { src: action1, alt: "Action shot 1", layout: "full" },
      { src: action2, alt: "Action shot 2", layout: "half" },
      { src: action3, alt: "Action shot 3", layout: "half" },
      { src: action4, alt: "Action shot 4", layout: "full" },
      { src: action5, alt: "Action shot 5", layout: "half" },
      { src: action6, alt: "Action shot 6", layout: "half" },
    ],
  },
  {
    id: "human-traces",
    title: "Human Traces",
    year: "2024",
    location: "Verschiedene Orte",
    category: "Action",
    cover: action3,
    excerpt: "Porträts von Handwerkern und ihren verschwindenden Berufen.",
    description:
      "Human Traces porträtiert Menschen, deren Handwerk vom Verschwinden bedroht ist.",
    background:
      "Über zwei Jahre besuchte ich Werkstätten in ganz Europa.",
    technical:
      "Natürliches Fensterlicht, keine künstliche Beleuchtung. 85mm Festbrennweite.",
    quote: "Die schönsten Geschichten stehen in den Händen der Menschen.",
    images: [
      { src: action4, alt: "Handwerker bei der Arbeit", layout: "full" },
      { src: action5, alt: "Hände am Werkstück", layout: "half" },
      { src: action6, alt: "Werkstatt-Details", layout: "half" },
    ],
  },
  {
    id: "coastal-erosion",
    title: "Coastal Erosion",
    year: "2023",
    location: "Normandie, FR",
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
      { src: travel1, alt: "Street scene 1", layout: "full" },
      { src: travel2, alt: "Street scene 2", layout: "half" },
      { src: travel3, alt: "Street scene 3", layout: "half" },
      { src: travel4, alt: "Street scene 4", layout: "full" },
      { src: travel5, alt: "Street scene 5", layout: "half" },
    ],
  },
  {
    id: "northern-light",
    title: "Northern Light",
    year: "2022",
    location: "Lofoten, NO",
    category: "Travel",
    cover: travel3,
    excerpt: "Arktische Lichtstimmungen zwischen Tag und Nacht.",
    description:
      "Northern Light ist eine Serie über das besondere Licht des hohen Nordens.",
    background:
      "Zwei Winter auf den Lofoten, bei Temperaturen bis -25°C.",
    technical:
      "Weitwinkel (14mm) auf Vollformat. ISO 3200-6400 für Nordlichter.",
    images: [
      { src: travel4, alt: "Northern scene 1", layout: "full" },
      { src: travel5, alt: "Northern scene 2", layout: "half" },
      { src: travel1, alt: "Northern scene 3", layout: "half" },
    ],
  },
  {
    id: "urban-silence",
    title: "Urban Silence",
    year: "2024",
    location: "Berlin, DE",
    category: "Projects",
    cover: projects1,
    excerpt: "Geometrische Reduktion urbaner Strukturen auf ihr visuelles Minimum.",
    description:
      "Urban Silence ist eine fortlaufende Serie, die sich der architektonischen Abstraktion widmet.",
    background:
      "Die Serie entstand über einen Zeitraum von sechs Monaten, vorwiegend in den Randgebieten Berlins.",
    technical:
      "Aufgenommen mit einer Mittelformatkamera bei ISO 100.",
    quote: "Architektur wird erst lesbar, wenn man die Menschen ausblendet.",
    images: [
      { src: projects1, alt: "Making of 1", layout: "full" },
      { src: projects2, alt: "Making of 2", layout: "half" },
      { src: projects3, alt: "Making of 3", layout: "half" },
      { src: projects4, alt: "Making of 4", layout: "full" },
      { src: projects5, alt: "Making of 5", layout: "half" },
    ],
  },
  {
    id: "industrial-poetry",
    title: "Industrial Poetry",
    year: "2023",
    location: "Ruhrgebiet, DE",
    category: "Projects",
    cover: projects3,
    excerpt: "Vergessene Räume industrieller Vergangenheit.",
    description:
      "Industrial Poetry erkundet verlassene Industriebauten als Kathedralen einer vergangenen Epoche.",
    background:
      "Die Bilder entstanden in stillgelegten Zechen, Stahlwerken und Fabrikhallen des Ruhrgebiets.",
    technical:
      "Stativ-basiert mit HDR-Technik für den extremen Dynamikumfang.",
    images: [
      { src: projects4, alt: "Industrial scene 1", layout: "full" },
      { src: projects5, alt: "Industrial scene 2", layout: "half" },
      { src: projects1, alt: "Industrial scene 3", layout: "half" },
    ],
  },
];
