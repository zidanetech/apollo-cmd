const { exec } = require("child_process");
const fs = require('fs');
const { indexNodejsClassic, modelNodejs } = require("../models/nodejs-classic");


const emptyNodeJSProject = (folderName) => {
    const createFolder = `mkdir ${folderName}`;
    const moveToFolder = `cd ${folderName}`;
    const cloning = `git clone https://github.com/zidanetech/nodejs-simple.git`;
    const createArchitectureFolder = `cd nodejs-simple && mkdir controllers && mkdir models && mkdir public && mkdir routes && mkdir views`;
    
    const fullCommand = `${createFolder} && ${moveToFolder} && ${cloning} && npm install && ${createArchitectureFolder}`;


    exec(fullCommand, (err, stdout, stderr) => {
        if (err) {
            console.log(`error: ${err.message}`); 
            return;
        }

        if (stderr) {
            console.log("Finished !");
            // console.log(`stderr: ${stderr}`);
            return;
        }

        if (stdout) {
            console.log("Finished !");
            return;
        }

                   
    });


};


const classifyAttributsModel = (attributs) => {
    const attr = {};
    for (let i = 0; i < attributs.length; i++) {
        attr[attributs[i].name] = { type: attributs[i].type.charAt(0).toUpperCase() + attributs[i].type.slice(1) };        
    }

    return attr;
};

const microServiceNodeJSProject = (foldername, modelName, attributs) => {
    // initialize microservice
    const createFolder = `mkdir ${foldername}`;
    const moveToFolder = `cd ${foldername}`;    
    const cloning = `git clone https://github.com/zidanetech/nodejs-simple.git`;
    const fullCommand = `${createFolder} && ${moveToFolder} && ${cloning} && npm install`;

    // rest to test and implement git
    exec(fullCommand, (err, stdout, stderr) => {
        if (err) {
            console.log(`error: ${err.message}`); 
            return;
        }

        if (stderr) {
            console.log("Finished !");
            // console.log(`stderr: ${stderr}`);
            return;
        }

        if (stdout) {
            const newAttr = classifyAttributsModel(attributs);
            const content = modelNodejs(modelName, newAttr);
            var writeStream = fs.createWriteStream(modelName.charAt(0).toUpperCase() + modelName.slice(1) + ".js");
            writeStream.write(`
                ${content}
            `);
            writeStream.end();
            console.log("Model Created !");
            console.log("Finished !");
            return;
        }
    });
    
    // console.log(content);

    
    

};



module.exports = { emptyNodeJSProject, microServiceNodeJSProject };