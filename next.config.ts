import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pmnyoqxkqgsrpzqtvdfi.supabase.co',
        pathname: '/**', // allow all paths
      },
    ],
  },
};

export default nextConfig;
