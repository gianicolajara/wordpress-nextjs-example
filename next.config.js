/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    domains: ["localhost"],
    path: "",
  },
  env: {
    NEXT_PUBLIC_URL_API: process.env.NEXT_PUBLIC_URL_API,
    NEXT_PUBLIC_PATH_URL: process.env.NEXT_PUBLIC_PATH_URL,
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
