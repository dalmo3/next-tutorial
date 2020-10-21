const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = (phase, { defaultConfig }) => {
  return withBundleAnalyzer({
    reactStrictMode: true,
    experimental: {
      optimizeFonts: true,
      optimizeImages: true,
      granularChunks: true
    }
  });
};
