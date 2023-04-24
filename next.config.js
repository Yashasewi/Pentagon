/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode : true,
  images : {
    remotePatterns : [
      {
        protocol : "https",
        hostname : "tailwindui.com",
        port : "",
        pathname : "/img/ecommerce-images/**",
      },
    ],
  },
};

module.exports = nextConfig;
