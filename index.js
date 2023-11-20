const figlet = require("figlet");
const { Command } = require("commander");
const prompt = require("prompt");
const schema = require("./utils/schema-prompt");
const { classicAngularTemplate } = require("./utils/front-office");
const { emptyNodeJSProject } = require("./utils/back-office");


// function to create angular project
function setAngularProject(name) {
    try {
        prompt.start();
        prompt.get(schema, (err, res) => {
            // routing parameter
            const routingArgs = (res.routing == "Y") ? "--routing " : "";
            // style parameter
            const styleArgs = (res.style !== "") ? "--style=" + res.style : "";
            // final cmd
            const myAngularCmd = `ng new ${name} ` + routingArgs + styleArgs;
            // print of cmd
            console.log("command: " + myAngularCmd);
            // loading
            console.log("Creating your Angular project ....");

            // lunch cmd
            classicAngularTemplate(myAngularCmd);
        });
    } catch (error) {
        console.log("Error occurred while making action !");
    }
}

// function to create nodejs project
function setNodeJSProject(name) {
    try {
        console.log(name);
        // loading
        console.log("Creating your NodeJS project ....");
        // lunch cmd
        emptyNodeJSProject(name);
    } catch (error) {
        console.log("Error occurred while making action !");
    }
}



// Extract Command
const program = new Command();

// Big Title !!
console.log(figlet.textSync("APOLLO CMD"));


// Menu of CLI
program
    .name("Zidane CLI")
    .description('CLI to create some file')
    .version('0.1.0')

    .option("-a, --create-angular <name>", "Create an Angular project by specifying the folder name")
    .option("-n, --create-nodejs <name>", "Create a Node JS project by specifying the project namet")
    .parse(process.argv)

// Get options
const options = program.opts();

if (options.createAngular) setAngularProject(options.createAngular);
if (options.createNodejs) setNodeJSProject(options.createNodejs);



