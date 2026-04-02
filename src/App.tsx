import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { lazy, Suspense } from "react";

// Eager: Landing page
import Index from "./pages/Index";

// Lazy: all other pages
const Work = lazy(() => import("./pages/Work"));
const SeriesDetail = lazy(() => import("./pages/SeriesDetail"));
const Film = lazy(() => import("./pages/Film"));
const FilmDetail = lazy(() => import("./pages/FilmDetail"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

/** Redirect /work/:id → /photography/:id preserving the param */
const WorkIdRedirect = () => {
  const { id } = useParams<{ id: string }>();
  return <Navigate to={`/photography/${id ?? ""}`} replace />;
};

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-6 h-6 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
  </div>
);


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Photography (formerly "Work") */}
            <Route path="/photography" element={<Work />} />
            <Route path="/photography/:id" element={<SeriesDetail />} />
            {/* Redirect old /work paths to /photography */}
            <Route path="/work" element={<Navigate to="/photography" replace />} />
            <Route path="/work/:id" element={<WorkIdRedirect />} />
            {/* Film */}
            <Route path="/film" element={<Film />} />
            <Route path="/film/:id" element={<FilmDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
