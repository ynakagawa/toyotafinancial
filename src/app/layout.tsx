import type { Metadata } from 'next';
import { AemFooter, AemHeader } from '@/components/AemChrome';
import { AEM_BASE } from '@/lib/aem';
import './globals.css';

export const metadata: Metadata = {
  title: 'Toyota Financial Services | My Account',
  description: 'Manage your Toyota Financial Services account (demo).',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script type="module" src={`${AEM_BASE}/scripts/aem-embed.js`} />
      </head>
      <body>
        <AemHeader />
        <main className="dss-main">{children}</main>
        <AemFooter />
      </body>
    </html>
  );
}
