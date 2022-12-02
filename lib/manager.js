// manager extender
// extend employee, add office number, getRole()

const employee = require("./employee.js")

class manager extends employee {
      constructor(name, id, email, officeNumber) {
            super(name, id, email);
            this.officeNumber = officeNumber;
      }

      getRole() {
            return "Manager";
      }
}

module.exports = manager