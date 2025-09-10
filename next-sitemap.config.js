/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://shobkastore.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/api/*'],

  // توليد روابط hreflang لكل صفحة
  transform: async (config, path) => {
    const langs = [
      { code: 'en', prefix: '' },
      { code: 'ar', prefix: '/ar' }
    ];

    return langs.map(lang => ({
      loc: `${config.siteUrl}${lang.prefix}${path === '/' ? '' : path}`,
      changefreq: config.changefreq,
      priority: config.priority,
      links: langs.map(l => ({
        lang: l.code,
        url: `${config.siteUrl}${l.prefix}${path === '/' ? '' : path}`,
      })),
    }));
  },

  // إضافي لضمان إضافة الصفحات الرئيسية
  additionalPaths: async (config) => {
    return [
      { loc: '/', priority: 1.0, changefreq: 'daily' },
      { loc: '/ar', priority: 1.0, changefreq: 'daily' },
    ];
  },
};
