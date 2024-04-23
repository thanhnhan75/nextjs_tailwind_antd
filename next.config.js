/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    minimumCacheTTL: 60,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: [],
  },
  output: "standalone",
};

module.exports = nextConfig;
