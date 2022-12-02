// requirements
const fs = require("fs");
const dist = require("dist");
const inquirer = require("inquirer");
const generateHTML = require("./dist/generateHTML");
const employee = require("./lib/employee")
const engineer = require("./lib/engineer")
const intern = require("./lib/intern")
const manager = require("./lib/manager");

/*
TODO: inquirer cats
team name - team
employee role - role
employee name - name
employee id - id
employee email - email
manager office - officeNumber
engineer github - github
intern school - school
header background color - headerColor
text color - textColor
page background color - bgColor






*/






// potential write file function
const writeToFile = data => {
      // return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', data, (err) => {
            err ? console.error(err) : console.log('File successfully written in a file entitled index.html');
            })
      // })
}