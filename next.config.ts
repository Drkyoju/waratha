import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Use standalone only for Docker self-hosting (not Netlify/Vercel)
  ...(process.env.DOCKER_BUILD === "true" ? { output: "standalone" as const } : {}),
}

export default nextConfig
