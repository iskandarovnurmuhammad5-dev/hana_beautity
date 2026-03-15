export function getImageUrl(path: string | undefined): string {
  if (!path) return '';
  const base = import.meta.env.VITE_API_URL ?? '';
  if (path.startsWith('http')) return path;
  return `${base}${path}`;
}
