// next.config.js
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // optional: disable PWA in dev
});

module.exports = withPWA({
  // Your normal Next.js config here
  reactStrictMode: true,
});
