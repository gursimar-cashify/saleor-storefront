module.exports = {
  client: {
    service: {
      name: "saleor",
      url: "http://15.206.47.48:8000/graphql/",
      includes: ["./**/*.js", "./**/*.ts"],
      excludes: ["**/__tests__/**/*"],
    },
  },
};
