import type { NextConfig } from 'next';

const aemOrigin = (process.env.NEXT_PUBLIC_AEM_ORIGIN || 'https://main--toyotafinancial--ynaka-adobe.aem.live').replace(/\/$/, '');

const nextConfig: NextConfig = {
  // Same-origin path to AEM for local dev / preview deployments (see src/lib/aem.ts).
  async rewrites() {
    return [{ source: '/aem/:path*', destination: `${aemOrigin}/:path*` }];
  },
  async redirects() {
    return [{ source: '/', destination: '/login', permanent: false }];
  },
};

export default nextConfig;
