module.exports = (route, interaction) => {
  const { request, response } = interaction;
  if (
    route === "/api/v1/product/productFamilyList" &&
    request.method === "POST" &&
    response.status === 400
  ) {
    interaction.response.body = {
      notFoundIds: ["string"],
    };

    // interaction.skip = true;
  }
};
