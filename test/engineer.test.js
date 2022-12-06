const Engineer = require("../lib/engineer")

describe("Create new engineer", () => {
      it("should create a new engineer", () => {
            const engineer = new Engineer('Abbey', '3', 'abigaildoyle3@gmail.com', 'abbeydoyle');

            expect(typeof engineer.name).toBe("string")
            expect(typeof engineer.id).toBe("string")
            expect(typeof engineer.email).toBe("string")
            expect(typeof engineer.github).toBe("string")

      })
})

describe("Gets new engineer name", () => {
      it("should return the correct name", () => {
            const engineer = new Engineer('Abbey', '3', 'abigaildoyle3@gmail.com', 'abbeydoyle');
            
            expect(engineer.getName()).toBe("Abbey");
      })
})

describe("Gets new engineer id", () => {
      it("should return the correct id", () => {
            const engineer = new Engineer('Abbey', '3', 'abigaildoyle3@gmail.com', 'abbeydoyle');
            
            expect(engineer.getID()).toBe("3");
      })
})

describe("Gets new engineer email", () => {
      it("should return the correct email", () => {
            const engineer = new Engineer('Abbey', '3', 'abigaildoyle3@gmail.com', 'abbeydoyle');
            
            expect(engineer.getEmail()).toBe("abigaildoyle3@gmail.com");
      })
})

describe("Gets new engineer role", () => {
      it("should return the correct role", () => {
            const engineer = new Engineer('Abbey', '3', 'abigaildoyle3@gmail.com', 'abbeydoyle');
            
            expect(engineer.getRole()).toBe("Engineer");
      })
})

describe("Gets new engineer github", () => {
      it("should return the correct github profile", () => {
            const engineer = new Engineer('Abbey', '3', 'abigaildoyle3@gmail.com', 'abbeydoyle');
            
            expect(engineer.getGithub()).toBe("abbeydoyle");
      })
})