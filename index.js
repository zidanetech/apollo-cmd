const figlet = require("figlet");
const { Command } = require("commander");
const prompt = require("prompt");
const {schema, schemaMicroserviceNodeJS, schemaAttributMicroserviceNodeJS} = require("./utils/schema-prompt");
const { classicAngularTemplate } = require("./utils/front-office");
const { emptyNodeJSProject, microServiceNodeJSProject } = require("./utils/back-office");

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


// function to create microservice nodejs personnalized
function setMicroserviceNodeJS(name) {
    console.log("Microservice NodeJS creation ....");
    prompt.start();
    prompt.get(schemaMicroserviceNodeJS, async (err,res) => {
        // console.log("Model : " + res.Model);
        // console.log("Nb of attributes : " + res.Nb);
        attributsTab = []; // its clear hhha

        // Set Model's Attributs
        for (let j = 0; j < res.Nb; j++) {
            const a = await prompt.get(schemaAttributMicroserviceNodeJS);
            attributsTab.push(a);
        }
        
        // console.log(attributsTab);

        microServiceNodeJSProject(name, res.Model, attributsTab);
        
        
    });
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
    .option("-m, --nodejs-microservice <name>", "Create personnal microservice with Node JS")
    .parse(process.argv)

// Get options
const options = program.opts();

if (options.createAngular) setAngularProject(options.createAngular);
if (options.createNodejs) setNodeJSProject(options.createNodejs);
if (options.nodejsMicroservice) setMicroserviceNodeJS(options.nodejsMicroservice);



