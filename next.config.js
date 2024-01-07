/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/commons/7/70/**",
      },
      {
        protocol: "http",
        hostname: "uhdtv.io",
        port: "",
        pathname: "/wp-content/uploads/2020/10/**",
      },
      {
        protocol: "https",
        hostname: "mango.blender.org",
        port: "",
        pathname: "/wp-content/uploads/2013/05/**",
      },
      {
        protocol: "https",
        hostname: "download.blender.org",
        port: "",
        pathname: "/ED/*",
      },
    ],
  },
};

module.exports = nextConfig;
