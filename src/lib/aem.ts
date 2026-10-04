const DEFAULT_ORIGIN = 'https://main--toyotafinancial--ynaka-adobe.aem.live';
const DEFAULT_LINK_BASE = 'https://toyotafinancial.ynaka-adobe.com';

export const AEM_ORIGIN = (process.env.NEXT_PUBLIC_AEM_ORIGIN || DEFAULT_ORIGIN).replace(/\/$/, '');
export const AEM_LINK_BASE = (process.env.NEXT_PUBLIC_AEM_LINK_BASE || DEFAULT_LINK_BASE).replace(/\/$/, '');
export const AEM_LOCALE = process.env.NEXT_PUBLIC_AEM_LOCALE || '/us/en';

/**
 * The EDS site only allows CORS from the production DSS origin, so local dev and
 * Vercel preview deployments load AEM through a same-origin rewrite (/aem/*) instead.
 */
export const AEM_USE_PROXY = process.env.AEM_PROXY
  ? process.env.AEM_PROXY === 'true'
  : process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview';

export const AEM_PROXY_PATH = '/aem';
export const AEM_BASE = AEM_USE_PROXY ? AEM_PROXY_PATH : AEM_ORIGIN;
