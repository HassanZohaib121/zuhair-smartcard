import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/zuhair-smartcard", // for github-pages
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
