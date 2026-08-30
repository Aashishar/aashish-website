import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // This allows images from your Sanity Studio
      },
            {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },


   output: 'export', 
  // Note: Do NOT use basePath or assetPrefix if you are pointing your custom domain 
  // to the root of your site (e.g., ://yourdomain.com).

};

export default nextConfig;