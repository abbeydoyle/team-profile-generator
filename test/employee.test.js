const Employee = require("../lib/employee")

describe("Create new employee", () => {
      it("should create a new employee", () => {
            const employee = new Employee('Abbey', '3', 'abigaildoyle3@gmail.com');

            expect(typeof employee.name).toBe("string")
            expect(typeof employee.id).toBe("string")
            expect(typeof employee.email).toBe("string")

      })
})

describe("Gets new employee name", () => {
      it("should return the correct name", () => {
            const employee = new Employee('Abbey', '3', 'abigaildoyle3@gmail.com');
            
            expect(employee.getName()).toBe("Abbey");
      })
})

describe("Gets new employee id", () => {
      it("should return the correct id", () => {
            const employee = new Employee('Abbey', '3', 'abigaildoyle3@gmail.com');
            
            expect(employee.getID()).toBe("3");
      })
})

describe("Gets new employee email", () => {
      it("should return the correct email", () => {
            const employee = new Employee('Abbey', '3', 'abigaildoyle3@gmail.com');
            
            expect(employee.getEmail()).toBe("abigaildoyle3@gmail.com");
      })
})

describe("Gets new employee role", () => {
      it("should return the correct role", () => {
            const employee = new Employee('Abbey', '3', 'abigaildoyle3@gmail.com');
            
            expect(employee.getRole()).toBe("Employee");
      })
})