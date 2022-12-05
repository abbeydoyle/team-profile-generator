// requirements
const fs = require("fs");
// const dist = require("dist");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager");

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

const teamArray = [];

// inquirer prompts

// FIXME: how to call this 
const intialQuestions = () => {
      inquirer.prompt ([
            {
                  type: 'list',
                  name: 'bgColor',
                  message: "Hi, welcome to the Team Portfolio Generator created by Abigail Doyle. Throughout this, you will add your employees along with their information, which will be used to generate an html export containing your team portfolio. If information should be placed on different lines, separate them using '\n' in place of pressing the 'enter' key. If at any point you would like to discontinue the process, simply press the 'escape' key. What would you like the background color of the page to be?",
                  chocies: ["black", "white"]
      
            },
      
            {
                  type: 'list',
                  name: 'headerColor',
                  message: "What would you like the header color of the page to be?",
                  chocies: ["black", "white"]
      
            },
      
            {
                  type: 'list',
                  name: 'textColor',
                  message: "What would you like the text color of the page to be?",
                  chocies: ["black", "white"]
      
            },
      
      
            {
                  type: 'input',
                  name: 'team',
                  message: "Please enter your team's name.",
                  validate: teamInput => {
                        if (teamInput) {
                              return true;
                        } else {
                              console.log("Please enter your team's name");
                              return false;
                        }
                  }
      
            },
      ])
      .then(addEmployee())
}

const addEmployee = () => {
      inquirer.prompt ([
            {
                  type: 'list',
                  name: 'role',
                  message: "Which type of employee would you like to add?",
                  choices: ['Manager', 'Engineer', 'Intern', 'None at this time']
            }
      ])
      .then(function(userInput) {
            switch(userInput.addMember) {
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
      console.log(teamArray)
}

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
      .then(answers => {
            let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamArray.push(engineer);
            addEmployee();
      })
}

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
      .then(answers => {
            let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamArray.push(intern);
            addEmployee();
      })
}

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
      .then(answers => {
            let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamArray.push(manager);
            addEmployee();
      })
}


function writeHTML() {
      fs.writeFile('index.html', generateHTML,  (err) => {
            err ? console.error(err) : console.log('File successfully written in a file entitled index.html');
            })
}


// FIXME: last hw temporarily
// potential write file function
// const writeToFile = data => {
//       // return new Promise((resolve, reject) => {
//       fs.writeFile('index.html', data, (err) => {
//             err ? console.error(err) : console.log('File successfully written in a file entitled index.html');
//             })
//       // })
// }

addEmployee()
// .then(teamArray => {
//       return generateHTML(teamArray);
//     })
//     .then(pageHTML => {
//       return writeToFile(pageHTML);
//     })
//     .catch(err => {
//    console.log(err);
// })

//   Exit the inquirer prompt
// FIXME: works but gives error
function exit() {
      console.log(teamArray)
      console.log('Thank you for visiting. Please come again!')
      addEmployee.ui.close();
      addEngineer.ui.close();
      addIntern.ui.close();
      addManager.ui.close();
    }
    
    // close inquirer input if user press "escape" key
process.stdin.on('keypress', (_, key) => {
      if (key.name === "escape") {
            exit();
      }
    });