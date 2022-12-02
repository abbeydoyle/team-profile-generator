// engineer extender
// extend employee, github, getGithub(), getRole()

const employee = require("./employee.js")

class engineer extends employee {
      constructor(name, id, email, github) {
            super(name, id, email);
            this.github = github;
      }

      getGithub() {
            return this.github;
      }

      getRole() {
            return "Engineer";
      }
}

module.exports = engineer