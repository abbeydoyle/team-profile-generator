const Intern = require("../lib/intern")

describe("Create new intern", () => {
      it("should create a new intern", () => {
            const intern = new Intern('Abbey', '3', 'abigaildoyle3@gmail.com', 'University of Washington');

            expect(typeof intern.name).toBe("string")
            expect(typeof intern.id).toBe("string")
            expect(typeof intern.email).toBe("string")
            expect(typeof intern.school).toBe("string")

      })
})

describe("Gets new intern name", () => {
      it("should return the correct name", () => {
            const intern = new Intern('Abbey', '3', 'abigaildoyle3@gmail.com', 'University of Washington');
            
            expect(intern.getName()).toBe("Abbey");
      })
})

describe("Gets new intern id", () => {
      it("should return the correct id", () => {
            const intern = new Intern('Abbey', '3', 'abigaildoyle3@gmail.com', 'University of Washington');
            
            expect(intern.getID()).toBe("3");
      })
})

describe("Gets new intern email", () => {
      it("should return the correct email", () => {
            const intern = new Intern('Abbey', '3', 'abigaildoyle3@gmail.com', 'University of Washington');
            
            expect(intern.getEmail()).toBe("abigaildoyle3@gmail.com");
      })
})

describe("Gets new intern role", () => {
      it("should return the correct role", () => {
            const intern = new Intern('Abbey', '3', 'abigaildoyle3@gmail.com', 'University of Washington');
            
            expect(intern.getRole()).toBe("Intern");
      })
})

describe("Gets new intern school", () => {
      it("should return the correct school", () => {
            const intern = new Intern('Abbey', '3', 'abigaildoyle3@gmail.com', 'University of Washington');
            
            expect(intern.getSchool()).toBe("University of Washington");
      })
})