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