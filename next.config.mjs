/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Rewrite all requests to the root page where our client-side router takes over
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },
  // Ensure we don't try to use the Pages Router
  pages: {
    excludeMiddleware: true,
  },
}

export default nextConfig;
