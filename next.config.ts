import type { NextConfig } from "next";
import { networkInterfaces } from "node:os";

function getAllowedDevOrigins() {
  const hosts = new Set(["localhost", "127.0.0.1"]);

  for (const interfaces of Object.values(networkInterfaces())) {
    for (const networkInterface of interfaces ?? []) {
      if (networkInterface.family === "IPv4") {
        hosts.add(networkInterface.address);
      }
    }
  }

  return [...hosts];
}

const nextConfig: NextConfig = {
  allowedDevOrigins: getAllowedDevOrigins(),
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
