import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"
import Hamburger from "../images/hamburger.svg"
import Button from "./button"

import { device } from "../utils/device"

const Container = styled.nav`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  z-index: 100;

  @media ${device.tablet} {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 25px;
  max-width: 1700px;

  @media ${device.tablet} {
    flex-wrap: wrap;
    padding: 20px;
  }
`

const StyledLogo = styled(Logo)`
  @media ${device.tablet} {
    width: auto;
    height: 55px;
  }

  @media ${device.mobileL} {
    height: 45px;
  }
`

const StyledHamburger = styled(Hamburger)`
  width: 40px;
  height: auto;
  display: none;
  cursor: pointer;

  @media ${device.tablet} {
    display: block;
  }

  @media ${device.mobileL} {
    width: 30px;
  }
`

const StyledButton = styled(Button)`
  margin-left: 60px;

  @media ${device.laptop} {
    margin-left: 30px;
  }
`

const StyledLink = styled(Link)`
  transition: all 0.1s;
  padding: 44px 10px;
  margin: 0 20px;
  text-decoration: none;
  font-weight: bold;
  color: ${props => props.theme.headerGray};
  border-bottom: 3px solid #fff;
  border-top: 3px solid #fff;

  @media ${device.laptop} {
    margin: 0 10px;
    padding: 44px 5px;
  }

  @media ${device.tablet} {
    margin: 20px 0;
    padding: 0px 10px;
    border: none;
    font-weight: 400;

    opacity: ${props => (props.navOpen ? 1 : 0)};
    visibility: ${props => (props.navOpen ? "visible" : "hidden")};

    /* Delay the NavItems from fading in the give the nav a chance to fully open */
    transition: ${props =>
      props.navOpen ? "all 0.15s 0.35s ease-out" : "all 0.15s ease-out"};
    /* Fade in from top to bottom when nav opens */
    transform: ${props =>
      props.navOpen ? "translateY(0px)" : "translateY(-60px)"};
  }
`

const MobileLinkContainer = styled.div`
  flex-direction: column;
  align-items: center;
  display: none;
  font-size: 32px;

  @media ${device.tablet} {
    display: flex;
    width: 100%;

    ${StyledLink}:first-child {
      padding-top: 30px;
      color: ${props => props.theme.yellow};
    }

    height: ${props => (props.navOpen ? "460px" : "0")};

    /* Delay the height animation to give the NavItems a chance to fade out on nav close */
    transition: ${props =>
      props.navOpen ? "height 0.15s ease-out" : "height 0.15s 0.35s ease-out"};
  }
`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;

  ${StyledLink}:hover, .active {
    color: ${props => props.theme.green};
    border-bottom: 3px solid ${props => props.theme.green};
  }

  @media ${device.tablet} {
    display: none;
  }
`

class Nav extends Component {
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

          <MobileLinkContainer navOpen={this.state.navOpen}>
            <StyledLink to="#" navOpen={this.state.navOpen}>
              Book Now
            </StyledLink>
            <StyledLink
              to="/"
              activeClassName="active"
              navOpen={this.state.navOpen}
            >
              Home
            </StyledLink>
            <StyledLink to="#" navOpen={this.state.navOpen}>
              About
            </StyledLink>
            <StyledLink to="#" navOpen={this.state.navOpen}>
              News
            </StyledLink>
            <StyledLink to="#" navOpen={this.state.navOpen}>
              Contact
            </StyledLink>
          </MobileLinkContainer>

          <LinkContainer>
            <StyledLink to="/" activeClassName="active">
              Home
            </StyledLink>
            <StyledLink to="#" activeClassName="active">
              About
            </StyledLink>
            <StyledLink to="#" activeClassName="active">
              News
            </StyledLink>
            <StyledLink to="#" activeClassName="active">
              Contact
            </StyledLink>
            <StyledButton green to="#">
              Book now
            </StyledButton>
          </LinkContainer>
        </Wrapper>
      </Container>
    )
  }
}

export default Nav
