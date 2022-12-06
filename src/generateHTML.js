const generateCards = team => {
      // empty array to pass cards into
      var cardArray = []

      // generate engineer html card using class functions and inquirer prompt
      const generateEngineer = engineer => {
            return `<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4 mx-5 my-5">
            <div class="py-3 px-6 border-b border-gray-300 text-black">
            ${engineer.getRole()}
            </div>
            <div class="p-6">
              <h5 class="text-black text-xl font-medium mb-2">${engineer.getName()}</h5>
              <p class="text-black text-base mb-4">
                ${engineer.getID()}
              </p>
              <p class="text-black text-base mb-4">
                <a href="mailto:${engineer.getEmail()}">
                  ${engineer.getEmail()}
                </a> 
              </p>
              <p class="text-black text-base mb-4">
              <a href="https://github.com/${engineer.getGithub()}">
                  ${engineer.getGithub()}
              </a> 
              </p>
              <!-- <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> -->
            </div>
            <div class="py-3 px-6 border-t border-gray-300 text-black">
                ${engineer.getRole()}
            </div>
            </div>`
      }

      // generate intern html card using class functions and inquirer prompt
      const generateIntern = intern => {
            return `<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4 mx-5 my-5">
            <div class="py-3 px-6 border-b border-gray-300 text-black">
            ${intern.getRole()}
            </div>
            <div class="p-6">
              <h5 class="text-black text-xl font-medium mb-2">${intern.getName()}</h5>
              <p class="text-black text-base mb-4">
                ${intern.getID()}
              </p>
              <p class="text-black text-base mb-4">
                <a href="mailto:${intern.getEmail()}">
                  ${intern.getEmail()}
                </a> 
              </p>
              <p class="text-black text-base mb-4">
                ${intern.getSchool()}
              </p>
              <!-- <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> -->
            </div>
            <div class="py-3 px-6 border-t border-gray-300 text-black">
                ${intern.getRole()}
            </div>
            </div>`
      }

      // generate manager html card using class functions and inquirer prompt
      const generateManager = manager => {
            return `<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4 mx-5 my-5">
            <div class="py-3 px-6 border-b border-gray-300 text-black">
            ${manager.getRole()}
            </div>
            <div class="p-6">
              <h5 class="text-black text-xl font-medium mb-2">${manager.getName()}</h5>
              <p class="text-black text-base mb-4">
                ${manager.getID()}
              </p>
              <p class="text-black text-base mb-4">
                <a href="mailto:${manager.getEmail()}">
                  ${manager.getEmail()}
                </a> 
              </p>
              <p class="text-black text-base mb-4">
                ${manager.getOfficeNumber()}
              </p>
              <!-- <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> -->
            </div>
          <div class="py-3 px-6 border-t border-gray-300 text-black">
              ${manager.getRole()}
          </div>
          </div>`
      }

      // create card string
      // loop through input employees using class role function
      for (var i = 0; i < team.length; i++) {
            const employee = team[i];
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
      return cardArray.join("")

}

// insert cards into html
// export entire string to write file
module.exports = team => {
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
            <title>Team Profile Page</title>
      </head>
      
      <body class="bg-white">
            <header class="text-center text-black bg-grey-300 py-5">
                  <span class="text-5xl font-bold mt-0 mb-6">Team Profile Page</span>
            </header>
      
            <div class="flex flex-wrap justify-center">
            ${generateCards(team)}
            </div>   
            </body>
            </html>`
}