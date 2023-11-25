const indexNodejsClassic = `
    var express = require('express');
    var app = express();

    // add middlewares and others

    app.listen(3000, ()=>{ console.log('Server is listening ...');});
`;


const modelNodejs = (modelName, attributs) => {
    const model = modelName.charAt(0).toUpperCase() + modelName.slice(1);
    return  `const mongoose = require("mongoose");
    const schema = mongoose.Schema;
    
    const ${model + 'Schema'} = new schema(
        ${JSON.stringify(attributs)}
    );
    
    module.exports = mongoose.model(${model}, ${model + 'Schema'});`;
    
};

module.exports = { indexNodejsClassic,  modelNodejs};