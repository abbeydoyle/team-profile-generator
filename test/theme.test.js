const Theme = require("../lib/theme")

describe("Create new Theme", () => {
      it("should create a new theme", () => {
            const theme = new Theme('black', 'coders');

            expect(typeof theme.colorScheme).toBe("string")
            expect(typeof theme.teamName).toBe("string")

      })
})

describe("Gets team name", () => {
      it("should return the correct team name", () => {
            const theme = new Theme('black', 'coders');
            
            expect(theme.getTeamName()).toBe("coders");
      })
})