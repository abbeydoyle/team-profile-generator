const generateTeam = team => {


      const generateManager = manager => {
            return `<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4 mx-5 my-5">
            <div class="py-3 px-6 border-b border-gray-300 text-${data.textColor}">
              ${manager.role}
            </div>
            <div class="p-6">
              <h5 class="text-${data.textColor} text-xl font-medium mb-2">${manager.name}</h5>
              <p class="text-${data.textColor} text-base mb-4">
                ${manager.id}
              </p>
              <p class="text-${data.textColor} text-base mb-4">
                ${manager.email}
              </p>
              <p class="text-${data.textColor} text-base mb-4">
                ${manager.officeNumber}
              </p>
              <!-- <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> -->
            </div>
            <div class="py-3 px-6 border-t border-gray-300 text-${data.textColor}">
                ${manager.role}
            </div>
          </div>`
      }

      const generateEngineer = engineer => {
            return `<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4 mx-5 my-5">
            <div class="py-3 px-6 border-b border-gray-300 text-${data.textColor}">
              ${engineer.role}
            </div>
            <div class="p-6">
              <h5 class="text-${data.textColor} text-xl font-medium mb-2">${engineer.name}</h5>
              <p class="text-${data.textColor} text-base mb-4">
                ${engineer.id}
              </p>
              <p class="text-${data.textColor} text-base mb-4">
                ${engineer.email}
              </p>
              <p class="text-${data.textColor} text-base mb-4">
                ${engineer.github}
              </p>
              <!-- <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> -->
            </div>
            <div class="py-3 px-6 border-t border-gray-300 text-${data.textColor}">
                ${engineer.role}
            </div>
          </div>`
      }

      const generateIntern = intern => {
            return `<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4 mx-5 my-5">
            <div class="py-3 px-6 border-b border-gray-300 text-${data.textColor}">
              ${intern.role}
            </div>
            <div class="p-6">
              <h5 class="text-${data.textColor} text-xl font-medium mb-2">${intern.name}</h5>
              <p class="text-${data.textColor} text-base mb-4">
                ${intern.id}
              </p>
              <p class="text-${data.textColor} text-base mb-4">
                ${intern.email}
              </p>
              <p class="text-${data.textColor} text-base mb-4">
                ${intern.school}
              </p>
              <!-- <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> -->
            </div>
            <div class="py-3 px-6 border-t border-gray-300 text-${data.textColor}">
                ${intern.role}
            </div>
          </div>`
      }
}

const generateCards = data => {
      const cardArray = []

      for (let i = 0; i < data.length; i++) {
            const employee = data[i];
            const role = employee.getRole()

            if (role === 'Manager'){
                  var cardTemplate = function(data) {
                        return `<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4 mx-5 my-5">
                        <div class="py-3 px-6 border-b border-gray-300 text-${data.textColor}">
                          ${manager.role}
                        </div>
                        <div class="p-6">
                          <h5 class="text-${data.textColor} text-xl font-medium mb-2">${manager.name}</h5>
                          <p class="text-${data.textColor} text-base mb-4">
                            ${manager.id}
                          </p>
                          <p class="text-${data.textColor} text-base mb-4">
                            ${manager.email}
                          </p>
                          <p class="text-${data.textColor} text-base mb-4">
                            ${manager.officeNumber}
                          </p>
                          <!-- <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> -->
                        </div>
                        <div class="py-3 px-6 border-t border-gray-300 text-${data.textColor}">
                            ${manager.role}
                        </div>
                      </div>`
                  }
                  cardArray.push(cardTemplate)
            }

            else if (role === 'Engineer') {
                  var cardTemplate = function(data) {
                        return `<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4 mx-5 my-5">
                        <div class="py-3 px-6 border-b border-gray-300 text-${data.textColor}">
                          ${engineer.role}
                        </div>
                        <div class="p-6">
                          <h5 class="text-${data.textColor} text-xl font-medium mb-2">${engineer.name}</h5>
                          <p class="text-${data.textColor} text-base mb-4">
                            ${engineer.id}
                          </p>
                          <p class="text-${data.textColor} text-base mb-4">
                            ${engineer.email}
                          </p>
                          <p class="text-${data.textColor} text-base mb-4">
                            ${engineer.github}
                          </p>
                          <!-- <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> -->
                        </div>
                        <div class="py-3 px-6 border-t border-gray-300 text-${data.textColor}">
                            ${engineer.role}
                        </div>
                      </div>`
                  }
                  cardArray.push(cardTemplate)
            }

            else if (role === 'Intern') {
                  var cardTemplate = function(data) {
                        return `<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4 mx-5 my-5">
                        <div class="py-3 px-6 border-b border-gray-300 text-${data.textColor}">
                          ${intern.role}
                        </div>
                        <div class="p-6">
                          <h5 class="text-${data.textColor} text-xl font-medium mb-2">${intern.name}</h5>
                          <p class="text-${data.textColor} text-base mb-4">
                            ${intern.id}
                          </p>
                          <p class="text-${data.textColor} text-base mb-4">
                            ${intern.email}
                          </p>
                          <p class="text-${data.textColor} text-base mb-4">
                            ${intern.school}
                          </p>
                          <!-- <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> -->
                        </div>
                        <div class="py-3 px-6 border-t border-gray-300 text-${data.textColor}">
                            ${intern.role}
                        </div>
                      </div>`
                  }
                  cardArray.push(cardTemplate)
            }
      }
      // const teamCards = cardArray.join('');
      // const generatePage = generateHTML(teamCards);
      // return generatePage;

      return cardArray.join('')
}

function generateHTML() {
      return `<!DOCTYPE html>
      <html lang="en">
      <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <script src="https://cdn.tailwindcss.com"></script>
            <title>${data.team} Profile Page</title>
      </head>
      ${generateCards(data)}
      <body class="bg-${data.bgColor}">
            <header class="text-center text-${data.textColor} bg-${data.headerColor} py-5">
                  <span class="text-5xl font-bold mt-0 mb-6">${data.team} Profile Page</span>
            </header>
      
            <div class="flex flex-wrap justify-center">
            </div>
      
      </body>
      </html>`
}

module.exports = generateHTML; 



///////////////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');

// FIXME: initial question answers
// generate engineer html card using class functions and inquirer prompt
const generateEngineer = function(engineer) {
      return `<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4 mx-5 my-5">
      <div class="py-3 px-6 border-b border-gray-300 text-${data.textColor}">
      ${enginer.getRole()}
      </div>
      <div class="p-6">
        <h5 class="text-${data.textColor} text-xl font-medium mb-2">${engineer.getName()}</h5>
        <p class="text-${data.textColor} text-base mb-4">
          ${engineer.getID()}
        </p>
        <p class="text-${data.textColor} text-base mb-4">
          ${engineer.getEmail()}
        </p>
        <p class="text-${data.textColor} text-base mb-4">
          ${engineer.getGithub()}
        </p>
        <!-- <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> -->
      </div>
      <div class="py-3 px-6 border-t border-gray-300 text-${data.textColor}">
          ${engineer.getRole()}
      </div>
      </div>`
}

// generate intern html card using class functions and inquirer prompt
const generateIntern = function(intern) {
      return `<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4 mx-5 my-5">
      <div class="py-3 px-6 border-b border-gray-300 text-${data.textColor}">
      ${intern.getRole()}
      </div>
      <div class="p-6">
        <h5 class="text-${data.textColor} text-xl font-medium mb-2">${engineer.getName()}</h5>
        <p class="text-${data.textColor} text-base mb-4">
          ${intern.getID()}
        </p>
        <p class="text-${data.textColor} text-base mb-4">
          ${intern.getEmail()}
        </p>
        <p class="text-${data.textColor} text-base mb-4">
          ${intern.getSchool()}
        </p>
        <!-- <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> -->
      </div>
      <div class="py-3 px-6 border-t border-gray-300 text-${data.textColor}">
          ${intern.getRole()}
      </div>
      </div>
      `
}

// generate manager html card using class functions and inquirer prompt
const generateManager = function(manager) {
      return `<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4 mx-5 my-5">
      <div class="py-3 px-6 border-b border-gray-300 text-${data.textColor}">
      ${manager.getRole()}
      </div>
      <div class="p-6">
        <h5 class="text-${data.textColor} text-xl font-medium mb-2">${manager.getName()}</h5>
        <p class="text-${data.textColor} text-base mb-4">
          ${manager.getID()}
        </p>
        <p class="text-${data.textColor} text-base mb-4">
          ${manager.getEmail()}
        </p>
        <p class="text-${data.textColor} text-base mb-4">
          ${manager.getOfficeNumber()}
        </p>
        <!-- <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> -->
      </div>
      <div class="py-3 px-6 border-t border-gray-300 text-${data.textColor}">
          ${manager.getRole()}
      </div>
      </div>
      `
}

// create card string
function generateHTML(data) {
      // empty array to pass cards into
      var cardArray = []

      // loop through input employees using class role function
      for (var i = 0; i < data.length; i++) {
            const employee = data[i];
            const role = employee.getRole()

            if (role === 'Engineer'){
                  var engineerCard = generateEngineer(employee);
                  cardArray.push(engineerCard)
            } else if (role === 'Intern'){
                  var internCard = generateIntern(employee);
                  cardArray.push(internCard)
            } else if (role === 'Manager') {
                  var managerCard = generateManager(employee);
                  cardArray.push(managerCard)
            }
      }

      // join cards array into one string
      const cardString = cardArray.join('');
      // create string with entire html
      const completeHTML = generatePortfolio(cardString);
      return completeHTML;
}

// FIXME: initial questions
// add card string to rest of html
const generatePortfolio = function(cardString) {
      return `<!DOCTYPE html>
      <html lang="en">
      <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <script src="https://cdn.tailwindcss.com"></script>
            <title>${data.team} Profile Page</title>
      </head>
      
      <body class="bg-${data.bgColor}">
            <header class="text-center text-${data.textColor} bg-${data.headerColor} py-5">
                  <span class="text-5xl font-bold mt-0 mb-6">${data.team} Profile Page</span>
            </header>
      
            <div class="flex flex-wrap justify-center">
            ${cardString}
            </div>   
            </body>
            </html>
      `
}



// const stringHTML = JSON.stringify(generatePortfolio);

module.exports = generateHTML
module.exports = generatePortfolio
module.exports = stringHTML;

//exports.generatePortfolio = generatePortfolio;
//exports.generateHTML = generateHTML;