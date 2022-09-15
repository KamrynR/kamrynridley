/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.postimg.cc", "dummyimage.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
