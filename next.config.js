/* eslint-disable no-undef */
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
      {
        source: "/signup",
        destination: "/login",
        permanent: true
      }
    ];
  },
};
