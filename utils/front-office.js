const { exec } = require("child_process");

const classicAngularTemplate = (command) => {
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.log(`error: ${err.message}`); 
            return;
        }

        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }

        
        console.log(stdout);
    });
};


const optimizeAngularTemplate = (command) => {

};

module.exports = { classicAngularTemplate, optimizeAngularTemplate };