/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/computerhulp-denhaag",
      destination: "/computerhulp-den-haag",
      permanent: true,
    },
    {
      source: "/computerhulp-op-afstand",
      destination: "/hulp-op-afstand",
      permanent: true,
    },
  ],
};

export default nextConfig;
