/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/beatnikfront",
  assetPrefix: "/beatnikfront",
  env: {
    BACKEND_URL: "http://127.0.0.1:8000"
  }
  
};

module.exports = nextConfig
