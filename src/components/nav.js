import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../images/nav-logo.svg"
import Hamburger from "../images/hamburger.svg"
import Button from "./button"

import { device } from "../utils/device"

const Container = styled.nav`
  position: relative;
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
  margin-right: 15px;
  width: 280px;
  height: auto;

  @media ${device.tablet} {
    width: 220px;
  }

  @media ${device.mobileL} {
    width: 190px;
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

// const StyledButton = styled(Button)`
//   margin-left: 60px;
//
//   @media ${device.laptop} {
//     margin-left: 30px;
//   }
// `

const StyledA = styled.a`
  display: inline-block;
  text-align: center;
  padding: 7.5px 10px;
  background-color: ${props => props.theme.green};
  color: #fff;
  border-radius: 2px;
  font-weight: bold;
  text-decoration: none;
  min-width: 124px;
  margin-right: ${props => (props.marginRight ? "10px" : 0)};
  margin-left: 60px;

  @media ${device.laptop} {
    margin-left: 30px;
  }

  @media ${device.mobileL} {
    margin-top: 10px;
  }
`

const StyledLink = styled(Link)`
  z-index: 100;
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
`

const MobileNavItem = styled.div`
  margin: 20px 0;
  padding: 0px 10px;
  font-weight: 400;

  opacity: ${props => (props.navOpen ? 1 : 0)};
  visibility: ${props => (props.navOpen ? "visible" : "hidden")};

  /* Delay the NavItems from fading in the give the nav a chance to fully open */
  transition: ${props =>
    props.navOpen ? "all 0.15s 0.35s ease-out" : "all 0.15s ease-out"};
  /* Fade in from top to bottom when nav opens */
  transform: ${props =>
    props.navOpen ? "translateY(0px)" : "translateY(-60px)"};

  a {
    text-decoration: none;
    color: ${props => props.theme.headerGray};
  }

  &.book-now a,
  &.book-now {
    padding-top: 30px;
    color: ${props => props.theme.yellow};
  }
`

const MobileLinkContainer = styled.div`
  flex-direction: column;
  align-items: center;
  display: none;
  font-size: 32px;
  background-color: #fff;

  @media ${device.tablet} {
    display: flex;
    width: 100%;

    height: ${props => (props.navOpen ? "460px" : "0")};

    /* Delay the height animation to give the NavItems a chance to fade out on nav close */
    transition: ${props =>
      props.navOpen ? "height 0.15s ease-out" : "height 0.15s 0.35s ease-out"};
  }
`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;

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
          <Link to="/">
            <StyledLogo />
          </Link>
          <StyledHamburger onClick={this.toggleNav} />

          <MobileLinkContainer navOpen={this.state.navOpen}>
            <MobileNavItem className="book-now" navOpen={this.state.navOpen}>
              {/*<Link to="/booking/">Book Now</Link>*/}
              <a href={'https://www.tickettailor.com/events/verrditransportsupportservicesltd'}>Book Now</a>
            </MobileNavItem>

            <MobileNavItem navOpen={this.state.navOpen}>
              <Link to="/">Home</Link>
            </MobileNavItem>

            <MobileNavItem navOpen={this.state.navOpen}>
              <Link to="/about/">About</Link>
            </MobileNavItem>

            <MobileNavItem navOpen={this.state.navOpen}>
              <Link to="/news/">News</Link>
            </MobileNavItem>

            <MobileNavItem navOpen={this.state.navOpen}>
              <Link to="/contact/">Contact</Link>
            </MobileNavItem>
          </MobileLinkContainer>

          <LinkContainer>
            <StyledLink to="/" activeClassName="active">
              Home
            </StyledLink>
            <StyledLink to="/about/" activeClassName="active">
              About
            </StyledLink>
            <StyledLink to="/news/" activeClassName="active">
              News
            </StyledLink>
            <StyledLink to="/contact/" activeClassName="active">
              Contact
            </StyledLink>
            {/*<StyledButton green={true ? 1 : 0} to="/booking">*/}
            {/*  Book now*/}
            {/*</StyledButton>*/}
            <StyledA href={'https://www.tickettailor.com/events/verrditransportsupportservicesltd'}>Book Now</StyledA>
          </LinkContainer>
        </Wrapper>
      </Container>
    )
  }
}

export default Nav
