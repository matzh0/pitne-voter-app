module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000'], // your frontend dev URL
      credentials: true,
    },
  },
  'strapi::logger',
  // 'strapi::errors',
  'strapi::security',
  // 'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
