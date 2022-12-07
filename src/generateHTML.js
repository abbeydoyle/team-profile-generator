
const generateCards = (team, theme) => {
      // empty array to pass cards into
      var cardArray = []
      // generate engineer html card using class functions and inquirer prompt
      const generateEngineer = (engineer, theme) => {
            return `<div class="block rounded-lg shadow-lg bg-${theme.getBlockColor()} max-w-sm text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4 mx-5 my-5 drop-shadow-${theme.getShadowColor()}">
            <div class="py-3 px-6 border-b border-${theme.getAccentColor()} text-${theme.getTextColor()}">
            ${engineer.getRole()}
            </div>
            <div class="p-6">
              <h5 class="text-${theme.getTextColor()} text-xl font-medium mb-2">${engineer.getName()}</h5>
              <p class="text-${theme.getTextColor()} text-base mb-4">
                ${engineer.getID()}
              </p>
              <p class="text-${theme.getTextColor()} text-base mb-4">
                <a href="mailto:${engineer.getEmail()}">
                  ${engineer.getEmail()}
                </a> 
              </p>
              <p class="text-${theme.getTextColor()} text-base mb-4">
              <a href="https://github.com/${engineer.getGithub()}" target="_blank">
                  ${engineer.getGithub()}
              </a> 
              </p>
            </div>
            <div class="py-3 px-6 border-t border-${theme.getAccentColor()} text-${theme.getTextColor()}">
                ${engineer.getRole()}
            </div>
            </div>`
      }

      // generate intern html card using class functions and inquirer prompt
      const generateIntern = (intern, theme) => {
            return `<div class="block rounded-lg shadow-lg bg-${theme.getBlockColor()} max-w-sm text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4 mx-5 my-5 drop-shadow-${theme.getShadowColor()}">
            <div class="py-3 px-6 border-b border-${theme.getAccentColor()} text-${theme.getTextColor()}">
            ${intern.getRole()}
            </div>
            <div class="p-6">
              <h5 class="text-${theme.getTextColor()} text-xl font-medium mb-2">${intern.getName()}</h5>
              <p class="text-${theme.getTextColor()} text-base mb-4">
                ${intern.getID()}
              </p>
              <p class="text-${theme.getTextColor()} text-base mb-4">
                <a href="mailto:${intern.getEmail()}">
                  ${intern.getEmail()}
                </a> 
              </p>
              <p class="text-${theme.getTextColor()} text-base mb-4">
                ${intern.getSchool()}
              </p>
            </div>
            <div class="py-3 px-6 border-t border-${theme.getAccentColor()} text-${theme.getTextColor()}">
                ${intern.getRole()}
            </div>
            </div>`
      }

      // generate manager html card using class functions and inquirer prompt
      const generateManager = (manager, theme) => {
            return `<div class="block rounded-lg shadow-lg bg-${theme.getBlockColor()} max-w-sm text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4 mx-5 my-5 drop-shadow-${theme.getShadowColor()}">
            <div class="py-3 px-6 border-b border-${theme.getAccentColor()} text-${theme.getTextColor()}">
            ${manager.getRole()}
            </div>
            <div class="p-6">
              <h5 class="text-${theme.getTextColor()} text-xl font-medium mb-2">${manager.getName()}</h5>
              <p class="text-${theme.getTextColor()} text-base mb-4">
                ${manager.getID()}
              </p>
              <p class="text-${theme.getTextColor()} text-base mb-4">
                <a href="mailto:${manager.getEmail()}">
                  ${manager.getEmail()}
                </a> 
              </p>
              <p class= "text-${theme.getTextColor()} text-base mb-4">
                ${manager.getOfficeNumber()}
              </p>
            </div>
          <div class="py-3 px-6 border-t border-${theme.getAccentColor()} text-${theme.getTextColor()}">
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
                  var engineerCard = generateEngineer(employee, theme);
                  cardArray.push(engineerCard)
            } else if (role === 'Intern'){
                  var internCard = generateIntern(employee, theme);
                  cardArray.push(internCard)
            } else if (role === 'Manager') {
                  var managerCard = generateManager(employee, theme);
                  cardArray.push(managerCard)
            }
      }

      // join cards array into one string
      return cardArray.join("")


}

// insert cards into html
// export entire string to write file
module.exports = (team, theme) => {
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
            <title>${theme.getTeamName()} Portfolio</title>
      </head>
      
      <body class="bg-${theme.getBGColor()}">
            <header class="m-10 rounded-lg text-center text-${theme.getAccentColor()} bg-${theme.getBlockColor()} py-5 drop-shadow-${theme.getShadowColor()}">
                  <span class="text-5xl font-bold mt-0 mb-6">${theme.getTeamName()} Portfolio</span>
            </header>
      
            <div class="flex flex-wrap justify-center">
            ${generateCards(team, theme)}
            </div>   
            </body>
            </html>`
}