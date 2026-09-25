# PetLife websites

Two static pages in the same visual system:

- `marketing/` — Product Hunt and product marketing page.
- `support/` — App Connect technical-support and App Store destination page.

The site chrome/footer wordmark and every detailed app screenshot figure are copied from the PetLife iOS project/output. Those screenshots are presented in decorative frames, but their underlying pixels remain real app captures. The marketing page includes the Today, care, records, Life timeline, Life Book, and vet summary screens so the page explains the product beyond its visual cover.

The marketing cover uses the supplied original tactile poster as an image, with accessible links placed over the poster actions. The detailed sections below the cover remain the source of truth for the real app screens and capabilities; the footer and support page continue to use the real PetLife wordmark asset.

The website is currently a local preview. Its internal links work, but the public HTTPS Marketing URL and Support URL for App Store Connect must be set after hosting. The App Store listing link is intentionally not present until the app is released.

For a local preview, serve this directory with any static file server and open `/marketing/` or `/support/`.
