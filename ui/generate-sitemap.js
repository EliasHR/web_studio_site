import fs from 'fs';
import path from 'path';
import routes from './src/router/routes.js'; // Импортируйте маршруты

const baseUrl = 'https://mycodemode.ru'; // Ваш базовый URL

const generateSitemap = async () => {
  const urls = routes.map(route => {
    const loc = `${baseUrl}${route.path}`;
    const lastmod = new Date().toISOString();
    return `
    <url>
        <loc>${loc}</loc>
        <lastmod>${lastmod}</lastmod>
    </url>`;
  }).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${urls}
</urlset>`;

  fs.writeFileSync(path.resolve('public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();