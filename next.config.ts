import type { NextConfig } from "next";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/+$/, "");

const nextConfig: NextConfig = {
  ...(basePath
    ? {
        assetPrefix: basePath,
        basePath,
      }
    : {}),
  images: {
    unoptimized: true,
  },
  output: "export",
  reactCompiler: true,
  trailingSlash: true,
};

export default nextConfig;
