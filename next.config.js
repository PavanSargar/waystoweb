/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "waystoweb.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
  compress: true,
  swcMinify: true,
};

module.exports = nextConfig;
