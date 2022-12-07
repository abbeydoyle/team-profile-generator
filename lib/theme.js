['Earthy green', 'Muted blues', 'Rustic orange', 'Dusty Pink', 'Black and White']
class Theme {
      constructor(colorScheme, teamName) {
            this.colorScheme = colorScheme;
            this.teamName = teamName;
      }

      getBGColor() {
            if (this.colorScheme === 'Earthy green') {
                  return "[#C4CEB4]"  
            } else if (this.colorScheme === 'Muted blues') {
                  return "[#bad0e3]"  
            } else if (this.colorScheme === 'Rustic orange') {
                  return "[#c9af9b]"  
            } else if (this.colorScheme === 'Dusty pink') {
                  return "[#dec5c9]"  
            } else if (this.colorScheme === 'Black and White') {
                  return "white"  
            }
      }

      getBlockColor() {
            if (this.colorScheme === 'Earthy green') {
                  return "[#5e6357]"  
            } else if (this.colorScheme === 'Muted blues') {
                  return "[#3b719f]"  
            } else if (this.colorScheme === 'Rustic orange') {
                  return "[#8f4810]"  
            } else if (this.colorScheme === 'Dusty pink') {
                  return "[#8a696e]"  
            } else if (this.colorScheme === 'Black and White') {
                  return "black"  
            }
      }

      getAccentColor() {
            if (this.colorScheme === 'Earthy green') {
                  return "[#2c2e28]"  
            } else if (this.colorScheme === 'Muted blues') {
                  return "[#1a3347]"  
            } else if (this.colorScheme === 'Rustic orange') {
                  return "[#402007]"  
            } else if (this.colorScheme === 'Dusty pink') {
                  return "[#4f3a3e]"  
            } else if (this.colorScheme === 'Black and White') {
                  return "white"  
            }
      }
      
      getTextColor() {
            if (this.colorScheme === 'Earthy green') {
                  return "[#C4CEB4]"  
            } else if (this.colorScheme === 'Muted blues') {
                  return "[#bad0e3]"  
            } else if (this.colorScheme === 'Rustic orange') {
                  return "[#c9af9b]"  
            } else if (this.colorScheme === 'Dusty pink') {
                  return "[#dec5c9]"  
            } else if (this.colorScheme === 'Black and White') {
                  return "white"  
            }
      }

      getShadowColor() {
            if (this.colorScheme === 'Earthy green') {
                  return "[15px_15px_15px_rgba(44,46,40,0.75)]"  
            } else if (this.colorScheme === 'Muted blues') {
                  return "[15px_15px_15px_rgba(14,27,38,0.75)]"  
            } else if (this.colorScheme === 'Rustic orange') {
                  return "[15px_15px_15px_rgba(28,14,3,0.75)]"  
            } else if (this.colorScheme === 'Dusty pink') {
                  return "[15px_15px_15px_rgba(33,22,34,0.75)]"  
            } else if (this.colorScheme === 'Black and White') {
                  return "[15px_15px_15px_rgba(5,5,5,0.75)]"  
            }
      }

      getTeamName() {
            return this.teamName
      }
}

module.exports = Theme