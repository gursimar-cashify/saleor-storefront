module.exports = {
  client: {
    includes: ["./queries/*.ts", "./mutations/*.ts", "./fragments/*.ts"],
    service: {
      name: "saleor",
      url: "http://0.0.0.0:8000/graphql/"
    }
  }
};
