import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
          },
        ],
      },
    ];
  },
images: {
  remotePatterns: [
    {
      hostname: "images.unsplash.com",
    },
    {
      hostname: "avatar.vercel.sh",
    },
    {
      hostname: "github.com",
    },
    {
      hostname: "raw.githubusercontent.com",
    },
  ],
},
};

export default nextConfig;
