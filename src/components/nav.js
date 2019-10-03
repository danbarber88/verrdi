import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"
import Button from "./button"

import { device } from "../utils/device"

const Container = styled.nav`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 25px;
  max-width: 1700px;
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
`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;

  ${StyledLink}:hover, .active {
    color: ${props => props.theme.green};
    border-bottom: 3px solid ${props => props.theme.green};
  }
`

const Nav = () => (
  <Container>
    <Wrapper>
      <Logo />

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
        <Button id="nav-book-button" green to="#">
          Book now
        </Button>
      </LinkContainer>
    </Wrapper>
  </Container>
)

export default Nav
