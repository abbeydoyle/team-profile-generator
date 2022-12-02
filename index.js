// requirements
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateHTML = require("./dist/generateHTML");









// potential write file function
const writeToFile = data => {
      // return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', data, (err) => {
            err ? console.error(err) : console.log('File successfully written in a file entitled index.html');
            })
      // })
}