import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
// import Media from "react-media"
import { createGlobalStyle } from "styled-components"
import { device } from "../utils/device"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  fab,
  faInstagram,
  faLinkedin,
  faFacebookSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faHandshake, faUser } from "@fortawesome/free-regular-svg-icons"

import Nav from "./nav"

library.add(
  fab,
  faInstagram,
  faLinkedin,
  faFacebookSquare,
  faTwitter,
  faHandshake,
  faUser
)

const theme = {
  lightGreen: "#006738",
  green: "#014124",
  darkGreen: "#002112",
  yellow: "#F9AD35",
  headerGray: "#535353",
  textGray: "#767676",
  contentWidth: "60%",
}

const GlobalStyle = createGlobalStyle`
  * {
    letter-spacing: 1px;
  }

  body {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    

    @media ${device.tablet} {
      margin-top: 95px;
    }

    @media ${device.mobileL} {
      margin-top: 85px;
    }
  }

  h1 {
    margin: 0;
    letter-spacing: 2px;

    @media ${device.tablet} {
      font-size: 32px;
    }
  }

  p {
    @media ${device.mobileL} {
      font-size: 14px;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
