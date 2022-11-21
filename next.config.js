const withImages = require("next-images");
const serverURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

module.exports = withImages({
  webpack(config, options) {
    return config;
  },
  images: {
    domains: [
      "localhost",
      "penerbitdapurkata.herokuapp.com",
      "lh3.googleusercontent.com",
    ],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
});
