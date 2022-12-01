const getCategoryResponse = require('./contract-test/get-category');
const categoryHandler = require('./contract-test/handlers/category-handler');
const productHandler = require('./contract-test/handlers/product-handler');

module.exports = {
  consumer: "sample-consumer",
  providers: [
    // {
    //   name: "sample-provider",
    //   version: "1.0.0",
    //   swaggerFilePath: './oas/swagger.yml',
    //   paths: []
    // },
    // {
    //   name: 'commerce-webservices',
    //   version: "1.0.1",
    //   swaggerFilePath: '../provider/oas/hybris-commerce-webservices.yml',
    //   paths:[
    //     '/{baseSiteId}/catalogs',
    //     '/{baseSiteId}/products/{productCode}'
    //   ]
    // }
    // {
    //   name: "cds.category-experience-api",
    //   version: "1.8.19",
    //   swaggerFilePath: '../cds.category-experience-api/src/swagger/swagger.yml',
    //   paths: [],
    // },
    {
      name: "cds.product-experience-api",
      version: "2.0.41",
      // swaggerFilePath: '../cds.product-experience-api/src/swagger/swagger.yml',
      paths: [
        '/api/v1/product/productFamilyList'
      ],
    },
    // {
    //   name: "cds-search-experience-api",
    //   version: "1.8.22",
    //   swaggerFilePath: '../cds.search-experience-api/src/swagger/swagger_edited.yaml',
    //   paths: [],
    // },
  ],
  onReady: (route, interaction) => {
    categoryHandler(route, interaction);
    productHandler(route, interaction);
  }
};