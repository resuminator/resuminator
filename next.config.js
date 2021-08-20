/* eslint-disable no-undef */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {};

module.exports = withBundleAnalyzer(nextConfig);
