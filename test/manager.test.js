const Manager = require("../lib/manager")

describe("Create new manager", () => {
      it("should create a new manager", () => {
            const manager = new Manager('Abbey', '3', 'abigaildoyle3@gmail.com', '33');

            expect(typeof manager.name).toBe("string")
            expect(typeof manager.id).toBe("string")
            expect(typeof manager.email).toBe("string")
            expect(typeof manager.officeNumber).toBe("string")

      })
})

describe("Gets new manager name", () => {
      it("should return the correct name", () => {
            const manager = new Manager('Abbey', '3', 'abigaildoyle3@gmail.com', '33');
            
            expect(manager.getName()).toBe("Abbey");
      })
})

describe("Gets new manager id", () => {
      it("should return the correct id", () => {
            const manager = new Manager('Abbey', '3', 'abigaildoyle3@gmail.com', '33');
            
            expect(manager.getID()).toBe("3");
      })
})

describe("Gets new manager email", () => {
      it("should return the correct email", () => {
            const manager = new Manager('Abbey', '3', 'abigaildoyle3@gmail.com', '33');
            
            expect(manager.getEmail()).toBe("abigaildoyle3@gmail.com");
      })
})

describe("Gets new intern role", () => {
      it("should return the correct role", () => {
            const manager = new Manager('Abbey', '3', 'abigaildoyle3@gmail.com', '33');
            
            expect(manager.getRole()).toBe("Manager");
      })
})

describe("Gets new manager school", () => {
      it("should return the correct school", () => {
            const manager = new Manager('Abbey', '3', 'abigaildoyle3@gmail.com', '33');
            
            expect(manager.getOfficeNumber()).toBe("33");
      })
})