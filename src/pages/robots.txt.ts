import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL, policiesURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
Policies: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
    const sitemapURL = new URL('sitemap-index.xml', site);
    const policiesURL = new URL('privacy-policy', site);
    return new Response(getRobotsTxt(sitemapURL, policiesURL));
};