const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/Components"),
      "@pages": path.resolve(__dirname, "src/Pages"),
    },
  },
};