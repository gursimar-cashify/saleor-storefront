module.exports = {
  client: {
    service: {
      name: "saleor",
      url: "http://0.0.0.0:8000/graphql/",
      includes: ["./**/*.js", "./**/*.ts"],
      excludes: ["**/__tests__/**/*"],
    },
  },
};
