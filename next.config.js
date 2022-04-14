

module.exports = {
  async redirects() {
    return [
      {
        source: '/projects',
        destination: 'https://shridhar-dev.notion.site/0673abc5fd5a4b759095079e0e7cd289?v=61eeb3fb0a0c4a10ac6a6eceafae6215',
        permanent: true,
      },
      {
        source: '/css',
        destination: 'https://codepen.io/shridhar-dev',
        permanent: true,
      },
    ]
  },

  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}
