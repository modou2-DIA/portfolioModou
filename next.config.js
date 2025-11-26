/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolioModou",
  assetPrefix: "/portfolioModou/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
