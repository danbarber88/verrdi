import Typography from "typography"

const typography = new Typography({
  googleFonts: [{ name: "Montserrat", styles: [400, 600] }],
  baseFontSize: "16px",
  scaleRatio: 2.625,
  headerFontFamily: ["Montserrat"],
  bodyFontFamily: ["Montserrat"],
  headerGray: "20",
  headerWeight: "400",
  bodyGray: "20",
  bodyWeight: "400",
})

export const { scale, rhythm, options } = typography
export default typography
