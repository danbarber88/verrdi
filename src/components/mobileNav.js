import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"
import Hamburger from "../images/hamburger.svg"

import { device } from "../utils/device"

const Container = styled.nav`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  background-color: #fff;
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

const StyledLogo = styled(Logo)`
  width: auto;
  height: 55px;

  @media ${device.mobileL} {
    height: 45px;
  }
`

const StyledHamburger = styled(Hamburger)`
  width: 40px;
  height: auto;

  @media ${device.mobileL} {
    width: 30px;
  }
`

const StyledLink = styled(Link)`
  font-size: 32px;
  font-weight: 400;
  margin: 20px 0;
  text-decoration: none;
  color: ${props => props.theme.headerGray};

  opacity: ${props => (props.navOpen ? 1 : 0)};
  visibility: ${props => (props.navOpen ? "visible" : "hidden")};

  /* Delay the NavItems from fading in the give the nav a chance to fully open */
  transition: ${props =>
    props.navOpen ? "all 0.15s 0.35s ease-out" : "all 0.15s ease-out"};
  /* Fade in from top to bottom when nav opens */
  transform: ${props =>
    props.navOpen ? "translateY(0px)" : "translateY(-60px)"};
`

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${props => (props.navOpen ? "460px" : "0")};

  /* Delay the height animation to give the NavItems a chance to fade out on nav close */
  transition: ${props =>
    props.navOpen ? "height 0.15s ease-out" : "height 0.15s 0.35s ease-out"};

  ${StyledLink}:first-child {
    padding-top: 30px;
    color: ${props => props.theme.yellow};
  }
`

class MobileNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navOpen: false,
    }
  }

  toggleNav = () => {
    // toggle nav open/closed
    this.setState(prevState => ({
      navOpen: !prevState.navOpen,
    }))
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <StyledLogo />
          <StyledHamburger onClick={this.toggleNav} />

          <LinkContainer navOpen={this.state.navOpen}>
            <StyledLink
              to="#"
              activeClassName="active"
              navOpen={this.state.navOpen}
            >
              Book Now
            </StyledLink>
            <StyledLink
              to="/"
              activeClassName="active"
              navOpen={this.state.navOpen}
            >
              Home
            </StyledLink>
            <StyledLink
              to="#"
              activeClassName="active"
              navOpen={this.state.navOpen}
            >
              About
            </StyledLink>
            <StyledLink
              to="#"
              activeClassName="active"
              navOpen={this.state.navOpen}
            >
              News
            </StyledLink>
            <StyledLink
              to="#"
              activeClassName="active"
              navOpen={this.state.navOpen}
            >
              Contact
            </StyledLink>
          </LinkContainer>
        </Wrapper>
      </Container>
    )
  }
}

export default MobileNav
