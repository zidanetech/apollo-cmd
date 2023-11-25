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


var schemaMicroserviceNodeJS = {
  properties: {
    Model: {
      description: "Name of your data's model (Ex: User)"      
    },
    Nb: {
      description: "Enter number of attributs",
      default: 2
    }
  }
};

var schemaAttributMicroserviceNodeJS = {
  properties: {
    name: {
      description: "Enter name of attribut"
    },
    type: {
      description: "Enter type of attribut (Number | String | Date | ..)"
    }
  }
};




module.exports = {schema, schemaMicroserviceNodeJS, schemaAttributMicroserviceNodeJS};