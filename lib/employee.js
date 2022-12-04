// employee parent class
// name, id, email, getName(), getID(), getEmail(), getRole()

class Employee {
      constructor(name, id, email) {
            this.name = name;
            this.id = id;
            this.email = email;
      }

      // TODO: include other returns
      getName() {
            return this.name;
      }
      
      getID() {
            return this.id;
      }
      
      getEmail() {
            return this.email;
      }
      
      getRole() {
            return "Employee"
      }
}

module.exports = Employee