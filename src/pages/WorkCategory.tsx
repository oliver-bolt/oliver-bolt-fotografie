import { useParams, Navigate } from "react-router-dom";
import { useState, useCallback } from "react";
import { seriesData, seriesCategories, categoryHeroes } from "@/data/series";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FullBleedHero from "@/components/FullBleedHero";
import WorkGallery from "@/components/WorkGallery";

const categoryMap: Record<string, string> = {
  action: "Action",
  travel: "Travel",
  projects: "Projects",
};

const WorkCategory = () => {
  const { category } = useParams<{ category: string }>();
  const [pastHero, setPastHero] = useState(false);

  const handlePastHero = useCallback((past: boolean) => {
    setPastHero(past);
  }, []);

  const categoryLabel = category ? categoryMap[category.toLowerCase()] : null;

  if (!categoryLabel || !seriesCategories.includes(categoryLabel as any)) {
    return <Navigate to="/" replace />;
  }

  const matchingProjects = seriesData.filter(
    (s) => s.category === categoryLabel
  );

  if (matchingProjects.length === 0) {
    return <Navigate to="/" replace />;
  }

  const allImages = matchingProjects.flatMap((s) =>
    s.images.map((img) => ({ src: img.src, alt: img.alt }))
  );

  const heroImage =
    categoryHeroes[categoryLabel as keyof typeof categoryHeroes] ||
    matchingProjects[0]?.cover;

  return (
    <div className="min-h-screen">
      <Navbar invertColors={!pastHero} />
      <main>
        <FullBleedHero
          image={heroImage}
          categoryLabel={categoryLabel}
          onPastHero={handlePastHero}
        />
        <WorkGallery images={allImages} />
      </main>
      <Footer />
    </div>
  );
};

export default WorkCategory;
