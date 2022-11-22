module.exports = (route, interaction) => {
  if (
    route === "/api/v1/categories/{categoryId}" &&
    interaction.request.method === "GET"
  ) {
    interaction.response.body = getCategoryResponse;
  } else if (
    route === "/api/v1/categories" &&
    interaction.request.method === "GET"
  ) {
    interaction.response.body.categories[0].subcategories = [];
  }
};
