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
    {
      name: "cds.category-experience-api",
      version: "1.8.19",
      swaggerFilePath: '../cds.category-experience-api/src/swagger/swagger.yml',
      paths: [],
    },
  ],
  onReady: (route, interaction) => {
    switch(route) {
      case '/api/v1/categories/{categoryId}':
        if (interaction.request.method === 'GET') {
          interaction.response.body.subcategories[0].subcategories = [];
        }
        break;
      case '/api/v1/categories':
        if (interaction.request.method === 'GET') {
          interaction.response.body.categories[0].subcategories = [];
        }
        break;
    }
  },
  swaggerHub: {
    owner: "CantireCorp",
    API_KEY: "7a8e2166-0b76-4f6a-aff0-76486b1aa3fe",
  }
};
