import type { NextConfig } from "next";

// Set NEXT_BASE_PATH in CI to "/<repo-name>" when deploying to a GitHub
// Pages *project* page (username.github.io/repo-name). Leave unset for a
// user/org page repo (username.github.io) or when running locally.
const basePath = process.env.NEXT_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
};

export default nextConfig;
