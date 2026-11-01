/**
 * Bulletproof Asset URL Resolver
 * Resolves static asset URLs accurately across:
 * - Root domains (https://www.avyukta.in/)
 * - Subfolders (https://domain.com/pricing/ or https://domain.com/subfolder/)
 * - Subdomains (https://ai.avyukta.in/)
 * - Sub-routes (/services, /pricing, /cloud-dialer, etc.)
 * 
 * Uses import.meta.url to dynamically detect the true deployment directory
 * from where the compiled JS bundle was loaded.
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

  try {
    // import.meta.url is e.g. "https://domain.com/subfolder/assets/index-xxx.js"
    // Resolving "../" gives "https://domain.com/subfolder/"
    if (typeof import.meta !== 'undefined' && import.meta.url) {
      const appBase = new URL(/* @vite-ignore */ '../', import.meta.url).href;
      return new URL(/* @vite-ignore */ clean, appBase).href;
    }
  } catch {
    // Fallback if import.meta.url fails in non-ESM environments
  }

  // Fallback using import.meta.env.BASE_URL
  const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || './';
  if (base.endsWith('/')) {
    return `${base}${clean}`;
  }
  return `${base}/${clean}`;
}

export default getAssetUrl;
