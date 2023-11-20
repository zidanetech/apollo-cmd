var schema = {
    properties: {
      routing: {
        description: "Would you like to add Angular routing? (Y or N)",
        default: "Y"
      },
      style: {
        description: "Which stylesheet format would you like to use? ",
        default: "css"
      }
    }
};

module.exports = schema;