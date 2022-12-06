class Theme {
      constructor(bgColor, headerColor, textColor, teamName) {
            this.bgColor = bgColor;
            this.headerColor = headerColor;
            this.textColor = textColor;
            this.teamName = teamName;
      }

      getBGColor() {
            return this.bgColor
      }
      
      getHeaderColor() {
            return this.headerColor
      }
      
      getTextColor() {
            return this.textColor
      }
      
      getTeamName() {
            return this.teamName
      }
}

module.exports = Theme