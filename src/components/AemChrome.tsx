import { AEM_BASE, AEM_LINK_BASE, AEM_LOCALE } from '@/lib/aem';

const attrs = { base: AEM_BASE, locale: AEM_LOCALE, 'link-base': AEM_LINK_BASE };

/** Header/footer rendered at runtime from AEM Edge Delivery (scripts/aem-embed.js). */
export function AemHeader() {
  return <aem-header {...attrs} suppressHydrationWarning />;
}

export function AemFooter() {
  return <aem-footer {...attrs} suppressHydrationWarning />;
}
