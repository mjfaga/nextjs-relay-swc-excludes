/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    relay: {
      src: './',
      language: 'typescript',
      artifactDirectory: './__generated__',
      // This should be supported but is not
      exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
    },
  },
};

export default nextConfig;
