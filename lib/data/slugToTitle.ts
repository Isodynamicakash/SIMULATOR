/**
 * Convert a URL slug to a display title (e.g. "sodium-benzoate" -> "Sodium benzoate").
 */
export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
