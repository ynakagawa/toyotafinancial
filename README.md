# Toyota Financial Services: DSS demo app

A mock Next.js "My Account" (DSS) app for the Toyota Financial demo. It includes login, account overview and payments with mocked data. The **header and footer come from AEM Edge Delivery Services** at runtime, so content authors manage them in DA and both sites stay in sync.

| | |
|---|---|
| This app | https://dss.toyotafinancial.ynaka-adobe.com (Vercel) |
| AEM site | https://toyotafinancial.ynaka-adobe.com ([ynaka-adobe/toyotafinancial](https://github.com/ynaka-adobe/toyotafinancial)) |
| Authoring | https://da.live/#/ynaka-adobe/toyotafinancial |

## How the AEM header/footer works

`src/app/layout.tsx` loads `scripts/aem-embed.js` from the EDS site and renders:

```html
<aem-header locale="/us/en" link-base="https://toyotafinancial.ynaka-adobe.com"></aem-header>
...
<aem-footer locale="/us/en" link-base="https://toyotafinancial.ynaka-adobe.com"></aem-footer>
```

The custom elements fetch `nav.plain.html` / `footer.plain.html` and the header/footer block code and CSS from EDS, then render them in Shadow DOM. Styles don't leak in either direction. Because they live in the root layout, they persist across client-side navigation.

**CORS:** the EDS site config allows `https://dss.toyotafinancial.ynaka-adobe.com` only. Local dev and Vercel preview deployments use a same-origin rewrite instead (`/aem/*` → EDS origin, see `next.config.ts` and `src/lib/aem.ts`).

## Develop

```bash
npm install
npm run dev   # http://localhost:3000. Any username/password logs in.
```

Configuration is in `.env.example`. To test unmerged AEM changes, point `NEXT_PUBLIC_AEM_ORIGIN` at a branch, e.g. `https://my-branch--toyotafinancial--ynaka-adobe.aem.page`.

## Deploy (Vercel)

1. Import this repo in Vercel (framework: Next.js, no env vars required).
2. Add the domain `dss.toyotafinancial.ynaka-adobe.com`, then create a DNS `CNAME dss.toyotafinancial` → `cname.vercel-dns.com` in Google Cloud DNS for `ynaka-adobe.com`.
