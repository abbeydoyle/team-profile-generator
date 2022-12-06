const Theme = require("../lib/theme")

describe("Create new Theme", () => {
      it("should create a new theme", () => {
            const theme = new Theme('black', 'white', 'red', 'coders');

            expect(typeof theme.bgColor).toBe("string")
            expect(typeof theme.headerColor).toBe("string")
            expect(typeof theme.textColor).toBe("string")
            expect(typeof theme.teamName).toBe("string")

      })
})

describe("Gets background color", () => {
      it("should return the correct background color", () => {
            const theme = new Theme('black', 'white', 'red', 'coders');
            
            expect(theme.getBGColor()).toBe("black");
      })
})

describe("Gets header color", () => {
      it("should return the correct header color", () => {
            const theme = new Theme('black', 'white', 'red', 'coders');
            
            expect(theme.getHeaderColor()).toBe("white");
      })
})

describe("Gets text color", () => {
      it("should return the correct text color", () => {
            const theme = new Theme('black', 'white', 'red', 'coders');
            
            expect(theme.getTextColor()).toBe("red");
      })
})

describe("Gets team name", () => {
      it("should return the correct team name", () => {
            const theme = new Theme('black', 'white', 'red', 'coders');
            
            expect(theme.getTeamName()).toBe("coders");
      })
})