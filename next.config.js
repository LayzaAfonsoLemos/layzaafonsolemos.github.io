/** @type {import('next').NextConfig} */
const repoName = 'Vortex.github.io';

const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
