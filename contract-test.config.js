module.exports = {
  consumer: "sample-consumer",
  providers: [
    {
      name: "sample-provider",
      version: "1.0.0",
      swaggerFilePath: "../provider/oas/products.yml",
      paths: {
        "/products": "./responses/get_responses.json",
        // "/{baseSiteId}/products/{productCode}"
      },
    },
  ],
};
