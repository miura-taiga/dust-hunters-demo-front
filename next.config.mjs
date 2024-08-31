/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/top', // ルート ('/') から '/top' へリダイレクト
        permanent: true, // 永続的なリダイレクト
      },
    ];
  },
  images: {
    domains: ['i.gyazo.com'],
  },
};

export default nextConfig;
