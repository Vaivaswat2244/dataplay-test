/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["api.dataplay.co.in", "dataplay.co.in", "github.com","api.dataplay.co.inundefined"],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

module.exports = nextConfig;
