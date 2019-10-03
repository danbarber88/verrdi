import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
// import Media from "react-media"
import { createGlobalStyle } from "styled-components"
import { device } from "../utils/device"

import Nav from "./nav"
// import MobileNav from "./mobileNav"

const theme = {
  lightGreen: "#006738",
  green: "#014124",
  darkGreen: "#002112",
  yellow: "#F9AD35",
  headerGray: "#535353",
  textGray: "#767676",
}

const GlobalStyle = createGlobalStyle`
  body {
    @media ${device.tablet} {
      margin-top: 95px;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Media query="(max-width: 768px)">
        {matches => (matches ? <MobileNav /> : <Nav />)}
      </Media> */}
      <Nav />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
