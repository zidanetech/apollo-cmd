const indexNodejsClassic = `
    var express = require('express');
    var app = express();

    // add middlewares and others

    app.listen(3000, ()=>{ console.log('Server is listening ...');});
`;

module.exports = { indexNodejsClassic };