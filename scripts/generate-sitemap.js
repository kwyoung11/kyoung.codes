const fs = require('fs');
const path = require('path');

const exportPathMap = async () => {
  const routes = {
    '/': { page: '/' },
  };

  const dir = path.join(process.cwd(), 'content/blog');
  const dirEntries = fs.readdirSync(dir);
  dirEntries.forEach((filename) => {
    const filenameWithoutExt = filename.slice(0, filename.length - 3);
    routes[`/blog/${filenameWithoutExt}`] = { page: '/blog/[slug]', query: { slug: filenameWithoutExt } };
  });

  return routes;
};

const createSitemap = (routes) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
        ${Object.entries(routes)
          .map(([path, data]) => {
            if (data.page === 'blog/[slug]') {
              return `<url>
                <loc>${`https://kyoung.codes${path}`}</loc>
            </url>\n`;
            }
            return `<url>
                <loc>${`https://kyoung.codes${path}`}</loc>
            </url>\n`;
          })
          .join('')}
    </urlset>
`;

// const run = async () => {
//     const slugRoutes = await slugPaths();
//     const langRoutes = await langPaths();
//     const aboutRoutes = await aboutPaths();
//     [...slugRoutes.paths, ...langRoutes.paths, ...aboutRoutes.paths]
// };

exportPathMap().then((routes) => {
  fs.writeFileSync('public/sitemap.xml', createSitemap(routes));
});
