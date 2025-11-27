const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve(__dirname), // <-- absolute path vers le projet
  },
  output: "export",
  basePath: "/portfolioModou",
  assetPrefix: "/portfolioModou/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
