const questions = [

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


      {
            type: 'list',
            name: 'role',
            message: "Please list the role of this employee",
            choices: ["Manager", "Engineer", "Intern"],
            validate: roleInput => {
                  if (roleInput) {
                        return true;
                  } else {
                        console.log("Please select your employee's role");
                        return false;
                  }
            }

      },

      {
            type: 'input',
            name: 'name',
            message: "Please enter the name of your employee.",
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
            message: "Please enter this employee's email address.",
            validate: email => {
                  emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)
                  if (valid) {
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
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                  if (githubInput) {
                        return true;
                  } else {
                        console.log("Please enter their github username");
                        return false;
                  }
            }

      },

      {
            type: 'input',
            name: 'school',
            message: "Please enter the name of this employee's school.",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                  if (schoolInput) {
                        return true;
                  } else {
                        console.log("Please enter the school name");
                        return false;
                  }
            }

      },

      {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter this manager's office number.",
            when: (input) => input.role === "Manager",
            validate: officeNumberInput => {
                  if (officeNumberInput) {
                        return true;
                  } else {
                        console.log("Please enter the office number");
                        return false;
                  }
            }

      },

]