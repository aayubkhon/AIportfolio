import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root — otherwise a stray lockfile elsewhere on the machine
  // can make Turbopack guess the wrong directory.
  turbopack: {
    root: path.join(__dirname, "..", ".."),
  },
  // Workspace packages ship raw TS/TSX, so Next has to compile them itself.
  transpilePackages: ["@repo/ui", "@repo/types", "@repo/rag-core"],
  images: {
    // Placeholder art ships as SVG. Sandbox it so an optimised SVG can't run
    // scripts — real raster photos will just drop in alongside.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
