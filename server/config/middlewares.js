module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    settings: {
      cors: {
        enabled: true,
        origin: [
          "http://localhost:5173",
          "https://server-e-commerce-pc5x1q3oa-dawitlior.vercel.app",
        ],
      },
    },
  },
];
