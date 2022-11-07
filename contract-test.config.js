module.exports = {
  consumer: "sample-consumer",
  providers: [
    {
      name: "sample-provider",
      version: "1.0.1",
      // swaggerFilePath: "../provider/oas/products.yml",
      paths: []
      // paths: {
      //   "/products": "./responses/get_responses.json",
      //   // "/{baseSiteId}/products/{productCode}"
      // },
    },
  ],
  swaggerHub: {
    owner: "CantireCorp",
    API_KEY: "7a8e2166-0b76-4f6a-aff0-76486b1aa3fe",
  },
};
