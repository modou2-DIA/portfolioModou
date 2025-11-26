/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // IMPORTANT pour GitHub Pages
  basePath: "/portfolioModou",
  assetPrefix: "/portfolioModou",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
