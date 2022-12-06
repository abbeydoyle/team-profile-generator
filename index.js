// npm requirements
const fs = require("fs");
const inquirer = require("inquirer");
// repo requirements
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager");
const generateCards = require("./src/generateHTML")


// inquirer prompt answers for each employee into an array
const teamArray = [];

// opening prompt to add an employee based on type or to end process with html build
const addEmployee = () => {
      inquirer.prompt ([
            {
                  type: 'list',
                  name: 'role',
                  message: "Hi, welcome to the Team Portfolio Generator created by Abigail Doyle. Throughout this, you will add your employees along with their information, which will be used to generate an html export containing your team portfolio. If information should be placed on different lines, separate them using fwdslash+n. If at any point you would like to discontinue the process, simply press the 'escape' key. Which type of employee would you like to add?",
                  choices: ['Manager', 'Engineer', 'Intern', 'None at this time']
            }
      ])
      .then(function(userInput) {
            switch(userInput.role) {
                  case "Manager": addManager();
                  break;
                  case "Engineer": addEngineer();
                  break;
                  case "Intern": addIntern();
                  break;
                  default: writeHTML();
                  break;
            }
      })
}

// add engineer case
const addEngineer = () => {
      inquirer.prompt ([
            {
                  type: 'input',
                  name: 'name',
                  message: "Please enter the name of your engineer.",
                  validate: nameInput => {
                        if (nameInput) {
                              return true;
                        } else {
                              console.log("Please enter your employee's name");
                              return false;
                        }
                  }
      
            },
      
            {
                  type: 'input',
                  name: 'id',
                  message: "Please enter their employee ID",
                  validate: idInput => {
                        if (idInput) {
                              return true;
                        } else {
                              console.log("Please enter their employee ID");
                              return false;
                        }
                  }
      
            },
      
            {
                  type: 'input',
                  name: 'email',
                  message: "Please enter this engineer's email address.",
                  validate: email => {
                        // regular expression used to validate email addresses
                        emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)
                        if (emailRegex) {
                              return true;
                        } else {
                              console.log("Please enter a valid email address");
                              return false;
                        }
                  }
      
            },

            {
                  type: 'input',
                  name: 'github',
                  message: "Please enter their github username. Ensure correct spacing, spelling, and capitalization.",
                  validate: githubInput => {
                        if (githubInput) {
                              return true;
                        } else {
                              console.log("Please enter their github username");
                              return false;
                        }
                  }
      
            },
      ])
      // create new engineer based on answers and push to team array
      // return to add employee prompt
      .then(answers => {
            let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamArray.push(engineer);
            addEmployee();
      })
}

// add engineer case
const addIntern = () => {
      inquirer.prompt ([
            {
                  type: 'input',
                  name: 'name',
                  message: "Please enter the name of your intern.",
                  validate: nameInput => {
                        if (nameInput) {
                              return true;
                        } else {
                              console.log("Please enter your employee's name");
                              return false;
                        }
                  }
      
            },
      
            {
                  type: 'input',
                  name: 'id',
                  message: "Please enter their employee ID",
                  validate: idInput => {
                        if (idInput) {
                              return true;
                        } else {
                              console.log("Please enter their employee ID");
                              return false;
                        }
                  }
      
            },
      
            {
                  type: 'input',
                  name: 'email',
                  message: "Please enter this intern's email address.",
                  validate: email => {
                        // regular expression used to validate email addresses
                        emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)
                        if (emailRegex) {
                              return true;
                        } else {
                              console.log("Please enter a valid email address");
                              return false;
                        }
                  }
      
            },   
            
            {
                  type: 'input',
                  name: 'school',
                  message: "Please enter the name of this employee's school.",
                  validate: schoolInput => {
                        if (schoolInput) {
                              return true;
                        } else {
                              console.log("Please enter the school name");
                              return false;
                        }
                  }
      
            },
      ])
      // create new engineer based on answers and push to team array
      // return to add employee prompt
      .then(answers => {
            let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamArray.push(intern);
            addEmployee();
      })
}

// add manager case
const addManager = () => {
      inquirer.prompt ([
            {
                  type: 'input',
                  name: 'name',
                  message: "Please enter the name of this manager.",
                  validate: nameInput => {
                        if (nameInput) {
                              return true;
                        } else {
                              console.log("Please enter your employee's name");
                              return false;
                        }
                  }
      
            },
        
            {
                  type: 'input',
                  name: 'id',
                  message: "Please enter their employee ID",
                  validate: idInput => {
                        if (idInput) {
                              return true;
                        } else {
                              console.log("Please enter their employee ID");
                              return false;
                        }
                  }
      
            },
           
            {
                  type: 'input',
                  name: 'email',
                  message: "Please enter the manager's email address.",
                  validate: email => {
                        // regular expression used to validate email addresses
                        emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)
                        if (emailRegex) {
                              return true;
                        } else {
                              console.log("Please enter a valid email address");
                              return false;
                        }
                  }
      
            },

            {
                  type: 'input',
                  name: 'officeNumber',
                  message: "Please enter this manager's office number.",
                  validate: officeNumberInput => {
                        if (officeNumberInput) {
                              return true;
                        } else {
                              console.log("Please enter the office number");
                              return false;
                        }
                  }
      
            },  
      ])
      // create new engineer based on answers and push to team array
      // return to add employee prompt
      .then(answers => {
            let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamArray.push(manager);
            addEmployee();
      })
}


function writeHTML() {
      console.log(generateCards(teamArray));
      console.log(teamArray);
      fs.writeFile('./dist/index.html', generateCards(teamArray), (err) => {
            err ? console.log(err) : console.log('index.html file written successfuly in dist/ folder')
       })
}

addEmployee()

//   Exit the inquirer prompt
function exit() {
      console.log('Thank you for visiting. Please come again!');
      process.exit();
    }
    
// close inquirer input if user press "escape" key
process.stdin.on('keypress', (_, key) => {
      if (key.name === "escape") {
            exit();
      }
    });