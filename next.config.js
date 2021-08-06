/* eslint-disable no-undef */
module.exports = {
  target: "serverless",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
};
