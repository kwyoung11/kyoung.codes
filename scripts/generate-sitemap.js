const jdown = require('jdown');
const fs = require('fs');

const formatDate = (date) => {
  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() + offset * 60 * 1000);
  return date.toISOString().split('T')[0];
};

const exportPathMap = async () => {
  const routes = {
    '/': { page: '/' },
  };

  // get all .md files in the content/blog dir
  const blogPosts = await jdown('./content/blog');

  // add each blog to the routes
  Object.entries(blogPosts).forEach(([filename, fileContent]) => {
    const filen = filename.replace(/([a-z][A-Z])/g, function (g) {
      return g[0] + '-' + g[1].toLowerCase();
    });
    routes[`/blog/${filen}`] = { page: '/blog/[slug]', query: { slug: filen, ...fileContent } };
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
                <image:image>
                  <image:loc>https://kyoung.codes${data.query.thumbnail}</image:loc>
                </image:image>
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
