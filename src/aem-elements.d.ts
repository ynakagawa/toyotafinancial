import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type AemChromeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  locale?: string;
  base?: string;
  'link-base'?: string;
};

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'aem-header': AemChromeProps;
      'aem-footer': AemChromeProps;
    }
  }
}
