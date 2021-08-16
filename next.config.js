/* eslint-disable no-undef */
module.exports = {
  images: {
    domains: ['firebasestorage.googleapis.com']
  },
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
