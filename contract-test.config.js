const getCategoryResponse = require('./contract-test/get-category');
const categoryHandler = require('./contract-test/handlers/category-handler');
const productHandler = require('./contract-test/handlers/product-handler');

module.exports = {
  consumer: "sample-consumer",
  providers: [
    {
      name: "cds.search-experience-api",
      version: "1.8.25",
      paths: [],
    },
  ],
  onReady: (route, interaction) => {
    // categoryHandler(route, interaction);
    // productHandler(route, interaction);
  }
};