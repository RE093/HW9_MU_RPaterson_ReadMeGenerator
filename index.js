const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "Enter the name of your project"
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project"
  },
  {
    type: "input",
    message: "Enter your installation Instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter your usage information",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter the Contribution Guidelines",
    name: "contributing",
  },
  {
    type: "input",
    message: "Enter Test Instructions",
    name: "tests",
  },
  {
      type: "list",
      name: "license",
      choices: [
          "MIT License",
          "ISC License",
          "GNU General Public License v3.0",
          "Apache License v2.0",
          "None"
      ]
  },
  {
      type: "input",
      message: "Enter your GitHub Username",
      name: "github"
  },
  {
      type: "input",
      message: "Enter your Email Address",
      name: "email"
  }

]).then(function(data) {

    let licenseUsed = "";
    let licenseButton = "";

    if (data.license === "MIT License") {
        console.log("MIT License used!");
        licenseUsed = "This application is license using the MIT License [Link Here](MIT-license.txt)";
        licenseButton = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)";
    };

    if (data.license === "ISC License") {
        console.log("ISC License used!");
        licenseUsed = "This application is license using the ISC License [Link Here](ISC-license.txt)";
        licenseButton = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://choosealicense.com/licenses/isc/)";
    };

    if (data.license === "GNU General Public License v3.0") {
        console.log("GNU Public License used!");
        licenseUsed = "This application is license using the GNU General Public License [Link Here](GNU-license.txt)";
        licenseButton = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-red.svg)](https://choosealicense.com/licenses/gpl-3.0/)";
    };

    if (data.license === "Apache License v2.0") {
        console.log("Apache Licence used!");
        licenseUsed = "This application is license using the Apache License v2.0 [Link Here](Apache-license.txt)";
        licenseButton = "[![License](https://img.shields.io/badge/License-Apache%202.0-purple.svg)](https://choosealicense.com/licenses/apache-2.0/)";
    }
    if (data.license === "None") {
        console.log("You have selected no license!");
        licenseUsed = "This application is not using a license"
        licenseButton = "[![License](https://img.shields.io/badge/License-None%20-lightgrey.svg)]()";
    }

let writeThis = 
`# ${data.title}
${licenseButton}
## Description
${data.description}
## Table of Contents
- [Description](#Description)
- [Installation Instructions](#Installation-Instructions)
- [Usage Information](#Usage-Information)
- [Contribution Guidelines](#Contribution-Guidelines)
- [Test Instructions](#Test-Instructions)
- [Licence](#Licence)
- [Questions](#Questions)
## Installation Instructions
${data.installation}
## Usage Information
${data.usage}
## Contribution Guidelines
${data.contributing}
## Test Instructions
${data.tests}
## License
${licenseUsed}
## Questions
For further information, please feel free to contact me on either of these links:
GitHub: https://github.com/${data.github}
Email: ${data.email}`;

    fs.writeFile(
    "COPYME.md", writeThis, function(){
        console.log("Success! COPYME.md Generated!") 
    });
});

// Badges sourced from shields.io/category/license