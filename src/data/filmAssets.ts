// Dynamically import all film-* assets from @/assets using Vite's glob import
const filmAssetModules = import.meta.glob<{ default: string }>(
  "/src/assets/film-*.*",
  { eager: true }
);

// Build a map from filename (e.g. "film-tsunami-1.png") to the resolved URL
const filmAssets: Record<string, string> = {};
for (const [path, mod] of Object.entries(filmAssetModules)) {
  const filename = path.split("/").pop();
  if (filename) {
    filmAssets[filename] = mod.default;
  }
}

/**
 * Resolve a film still filename to its Vite-bundled URL.
 * Returns undefined if the file doesn't exist.
 */
export function resolveFilmAsset(filename: string): string | undefined {
  return filmAssets[filename];
}

export default filmAssets;
