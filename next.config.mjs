/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  //output: "export", // Ensure this is compatible with your setup
  basePath: "/genarchitec", // Ensure all paths in your app are updated accordingly
  env: {
    NEXT_PUBLIC_BASE_PATH: "/genarchitec",
  },
  experimental: {
    serverComponentsExternalPackages: ["mongoose"], // Ensure mongoose supports static export if used in server components
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
      },
    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;