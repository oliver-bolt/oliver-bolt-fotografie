import seriesUrban from "@/assets/series-urban.jpg";
import seriesCoastal from "@/assets/series-coastal.jpg";
import seriesStreet from "@/assets/series-street.jpg";
import seriesIndustrial from "@/assets/series-industrial.jpg";
import seriesNorthern from "@/assets/series-northern.jpg";
import seriesDocumentary from "@/assets/series-documentary.jpg";

export type SeriesCategory = "Street" | "Travel" | "Editorial";

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
  excerpt: string;
  description: string;
  background: string;
  technical: string;
  quote?: string;
  images: SeriesImage[];
}

export const seriesCategories: SeriesCategory[] = [
  "Street",
  "Travel",
  "Editorial",
];

export const seriesData: Series[] = [
  {
    id: "urban-silence",
    title: "Urban Silence",
    year: "2024",
    location: "Berlin, DE",
    category: "Editorial",
    cover: seriesUrban,
    excerpt: "Geometrische Reduktion urbaner Strukturen auf ihr visuelles Minimum.",
    description:
      "Urban Silence ist eine fortlaufende Serie, die sich der architektonischen Abstraktion widmet. In den Fassaden moderner Bauten suche ich nach dem Moment, in dem Funktion in Form übergeht – und Form in Stille. Die Bilder entstehen ausschließlich bei diffusem Licht, um harte Schatten zu vermeiden und die geometrische Klarheit zu maximieren.",
    background:
      "Die Serie entstand über einen Zeitraum von sechs Monaten, vorwiegend in den Randgebieten Berlins, wo Nachkriegsarchitektur und Neubauten aufeinandertreffen. Mich fasziniert die Spannung zwischen Brutalismus und zeitgenössischem Minimalismus.",
    technical:
      "Aufgenommen mit einer Mittelformatkamera bei ISO 100. Lange Belichtungszeiten und ein Stativ sind essentiell. Nachbearbeitung auf ein Minimum reduziert – nur Kontrast und Tonwertkorrekturen.",
    quote: "Architektur wird erst lesbar, wenn man die Menschen ausblendet.",
    images: [
      { src: seriesUrban, alt: "Geometrische Betonfassade", layout: "full" },
      { src: seriesUrban, alt: "Minimale Linien", layout: "half" },
      { src: seriesUrban, alt: "Schatten und Form", layout: "half" },
      { src: seriesUrban, alt: "Vertikale Struktur", layout: "full" },
      { src: seriesUrban, alt: "Fassadendetail", layout: "half" },
      { src: seriesUrban, alt: "Abstrakte Geometrie", layout: "half" },
    ],
  },
  {
    id: "coastal-erosion",
    title: "Coastal Erosion",
    year: "2023",
    location: "Normandie, FR",
    category: "Travel",
    cover: seriesCoastal,
    excerpt: "Langzeitbelichtungen an der Grenze zwischen Land und Meer.",
    description:
      "Coastal Erosion dokumentiert die langsame Transformation der Küstenlinie. Durch Langzeitbelichtungen von mehreren Minuten wird das Wasser zu einer ätherischen Fläche, die den rohen Fels noch dramatischer wirken lässt. Die Serie ist eine Meditation über Zeit und Vergänglichkeit.",
    background:
      "Drei Wochen allein an der normannischen Küste, oft bei Sturm und Regen. Jedes Bild erforderte Geduld – stundenlanges Warten auf das richtige Licht, die richtige Tide.",
    technical:
      "ND-Filter (10-Stop) für Belichtungszeiten von 30 Sekunden bis 4 Minuten. Stativ mit Gewichtsbeschwerung gegen Wind. Entwicklung in Schwarzweiß mit betonten Mitteltönen.",
    images: [
      { src: seriesCoastal, alt: "Felsküste mit Nebelmeer", layout: "full" },
      { src: seriesCoastal, alt: "Wellenbewegung", layout: "half" },
      { src: seriesCoastal, alt: "Klippe im Nebel", layout: "half" },
      { src: seriesCoastal, alt: "Erosionsmuster", layout: "full" },
      { src: seriesCoastal, alt: "Gezeiten", layout: "half" },
      { src: seriesCoastal, alt: "Stille Küste", layout: "half" },
    ],
  },
  {
    id: "fleeting-moments",
    title: "Fleeting Moments",
    year: "2024",
    location: "Tokyo, JP",
    category: "Street",
    cover: seriesStreet,
    excerpt: "Silhouetten und Lichtspiele im urbanen Dschungel.",
    description:
      "Fleeting Moments fängt die vergänglichen Augenblicke ein, in denen Licht und menschliche Bewegung für den Bruchteil einer Sekunde ein perfektes Bild formen. Tokyo mit seinem endlosen Strom an Lichtern und Schatten ist der ideale Ort für diese Art der Beobachtung.",
    background:
      "Vier Wochen in Tokyo, täglich 12-14 Stunden auf der Straße. Die besten Bilder entstanden in den Gassen abseits der Hauptstraßen, wo das Licht zwischen den Gebäuden einfällt und dramatische Corridore bildet.",
    technical:
      "Leica M mit 35mm Festbrennweite. Hohe ISO-Werte (1600-6400) für schnelle Verschlusszeiten. Zone Focusing für spontane Aufnahmen. Kontrastreiche Schwarzweiß-Entwicklung.",
    images: [
      { src: seriesStreet, alt: "Silhouette im Lichtschacht", layout: "full" },
      { src: seriesStreet, alt: "Gasse bei Nacht", layout: "half" },
      { src: seriesStreet, alt: "Schatten und Bewegung", layout: "half" },
      { src: seriesStreet, alt: "Lichtstrahlen", layout: "full" },
      { src: seriesStreet, alt: "Urban Corridor", layout: "half" },
      { src: seriesStreet, alt: "Flüchtiger Moment", layout: "half" },
    ],
  },
  {
    id: "industrial-poetry",
    title: "Industrial Poetry",
    year: "2023",
    location: "Ruhrgebiet, DE",
    category: "Editorial",
    cover: seriesIndustrial,
    excerpt: "Vergessene Räume industrieller Vergangenheit.",
    description:
      "Industrial Poetry erkundet verlassene Industriebauten als Kathedralen einer vergangenen Epoche. Das Licht, das durch zerbrochene Fenster fällt, inszeniert den Verfall als Kunstwerk. Die Serie fragt: Was bleibt, wenn die Funktion eines Ortes erlischt?",
    background:
      "Die Bilder entstanden in stillgelegten Zechen, Stahlwerken und Fabrikhallen des Ruhrgebiets. Jeder Ort hat seine eigene Geschichte, seine eigene Atmosphäre.",
    technical:
      "Stativ-basiert mit HDR-Technik für den extremen Dynamikumfang. Nachbearbeitung betont die Lichtstrahlen und reduziert die Schatten gerade so weit, dass Details erkennbar bleiben.",
    images: [
      { src: seriesIndustrial, alt: "Lichtstrahlen in Fabrikhalle", layout: "full" },
      { src: seriesIndustrial, alt: "Verfall und Rost", layout: "half" },
      { src: seriesIndustrial, alt: "Industriekathedrale", layout: "half" },
      { src: seriesIndustrial, alt: "Zerbrochenes Fenster", layout: "full" },
      { src: seriesIndustrial, alt: "Stahlwerk", layout: "half" },
      { src: seriesIndustrial, alt: "Industriepoesie", layout: "half" },
    ],
  },
  {
    id: "northern-light",
    title: "Northern Light",
    year: "2022",
    location: "Lofoten, NO",
    category: "Travel",
    cover: seriesNorthern,
    excerpt: "Arktische Lichtstimmungen zwischen Tag und Nacht.",
    description:
      "Northern Light ist eine Serie über das besondere Licht des hohen Nordens. Hier gibt es keine harte Mittagssonne – stattdessen stundenlange Dämmerungen in unwirklichen Farben. Die Landschaft wird zur Bühne eines Lichtspiels, das seinesgleichen sucht.",
    background:
      "Zwei Winter auf den Lofoten, bei Temperaturen bis -25°C. Die Herausforderung bestand nicht nur im Fotografieren, sondern im Überleben – stundenlange Wartezeiten in der Dunkelheit auf das Erscheinen der Nordlichter.",
    technical:
      "Weitwinkel (14mm) auf Vollformat. ISO 3200-6400 für Nordlichter, lange Belichtungen für Landschaften. Stacking-Technik für maximale Schärfe und minimales Rauschen.",
    images: [
      { src: seriesNorthern, alt: "Nordlicht über Bergen", layout: "full" },
      { src: seriesNorthern, alt: "Arktische Dämmerung", layout: "half" },
      { src: seriesNorthern, alt: "Spiegelung im See", layout: "half" },
      { src: seriesNorthern, alt: "Schneelandschaft", layout: "full" },
      { src: seriesNorthern, alt: "Polarlicht", layout: "half" },
      { src: seriesNorthern, alt: "Stille des Nordens", layout: "half" },
    ],
  },
  {
    id: "human-traces",
    title: "Human Traces",
    year: "2024",
    location: "Verschiedene Orte",
    category: "Street",
    cover: seriesDocumentary,
    excerpt: "Porträts von Handwerkern und ihren verschwindenden Berufen.",
    description:
      "Human Traces porträtiert Menschen, deren Handwerk vom Verschwinden bedroht ist. Schreiner, Schmied, Korbflechter – ihre Hände erzählen Geschichten, die kein Wort braucht. Die Serie ist ein stilles Dokument einer Welt, die langsam verblasst.",
    background:
      "Über zwei Jahre besuchte ich Werkstätten in ganz Europa. Jedes Porträt entstand nach stundenlangen Gesprächen – erst wenn das Vertrauen da war, kam die Kamera zum Einsatz.",
    technical:
      "Natürliches Fensterlicht, keine künstliche Beleuchtung. 85mm Festbrennweite für intime, aber nicht aufdringliche Porträts. Warme Tonwertkurve in der Entwicklung.",
    quote: "Die schönsten Geschichten stehen in den Händen der Menschen.",
    images: [
      { src: seriesDocumentary, alt: "Handwerker bei der Arbeit", layout: "full" },
      { src: seriesDocumentary, alt: "Hände am Werkstück", layout: "half" },
      { src: seriesDocumentary, alt: "Werkstatt-Details", layout: "half" },
      { src: seriesDocumentary, alt: "Portrait", layout: "full" },
      { src: seriesDocumentary, alt: "Werkzeuge", layout: "half" },
      { src: seriesDocumentary, alt: "Altes Handwerk", layout: "half" },
    ],
  },
];
