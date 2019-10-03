import Typography from "typography"
import grandViewTheme from "typography-theme-grand-view"

grandViewTheme.bodyFontFamily = ["Montserrat", "sans-serif"]
grandViewTheme.googleFonts = [
  {
    name: "Montserrat",
    styles: ["400", "600"],
  },
]

const typography = new Typography(grandViewTheme)

export default typography
