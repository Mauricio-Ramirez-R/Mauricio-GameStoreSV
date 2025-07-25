import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ignora errores de ESLint durante el build (útil para Vercel)
  eslint: {
    ignoreDuringBuilds: true,
  },

  /* config options here */
};

export default nextConfig;
