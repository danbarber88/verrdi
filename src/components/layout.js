import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

const theme = {
  lightGreen: "#006738",
  green: "#014124",
  darkGreen: "002112",
  yellow: "F9AD35",
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
