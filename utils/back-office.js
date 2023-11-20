const { exec } = require("child_process");
const fs = require('fs');
const { indexNodejsClassic } = require("../models/nodejs-classic");


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


}



module.exports = { emptyNodeJSProject };