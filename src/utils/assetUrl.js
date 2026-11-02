/**
 * Bulletproof Asset URL Resolver
 * Resolves static asset URLs accurately across:
 * - Localhost dev server (http://localhost:5173/ across all sub-routes /about, /services, etc.)
 * - Live root domains (https://ai-pricing-avy.vercel.app/, https://www.avyukta.in/)
 * - Live subfolders (https://domain.com/subfolder/)
 * - Live subdomains (https://ai.avyukta.in/)
 */
export function getAssetUrl(path) {
  if (!path) return '';
  if (
    path.startsWith('http://') || 
    path.startsWith('https://') || 
    path.startsWith('data:') || 
    path.startsWith('blob:')
  ) {
    return path;
  }

  const clean = path.startsWith('/') ? path.slice(1) : path;

  // 1. In Vite DEV mode (localhost): Public assets are always served directly from root '/'
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
    return `/${clean}`;
  }

  // 2. In Vite Production build: The bundle runs from '.../assets/index-xxx.js'
  try {
    if (typeof import.meta !== 'undefined' && import.meta.url) {
      if (import.meta.url.includes('/assets/')) {
        const appBase = new URL(/* @vite-ignore */ '../', import.meta.url).href;
        return new URL(/* @vite-ignore */ clean, appBase).href;
      }
    }
  } catch {
    // Fallback if import.meta.url fails in non-ESM environments
  }

  // 3. Universal Fallback using BASE_URL
  const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
  if (base.endsWith('/')) {
    return `${base}${clean}`;
  }
  return `${base}/${clean}`;
}

export default getAssetUrl;
