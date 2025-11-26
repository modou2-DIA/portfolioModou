/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolioModou",
  assetPrefix: "/portfolioModou/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
