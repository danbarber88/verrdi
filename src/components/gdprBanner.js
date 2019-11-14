import React, { Component } from "react"
import styled from "styled-components"
import { device } from "../utils/device"
import { withCookies } from "react-cookie"
import { Link } from "gatsby"

const Banner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.darkGreen};
  z-index: 2000;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  max-width: 1275px;
  padding: 0 15px;
  margin: 30px auto;

  @media ${device.tablet} {
    text-align: center;
    flex-direction: column;
  }
`

const Text = styled.p`
  margin: 0;
  font-size: 12px;
`

const Button = styled.button`
  text-align: center;
  padding: 7.5px 10px;
  background-color: ${props => props.theme.yellow};
  color: #fff;
  border-radius: 2px;
  font-weight: bold;
  text-decoration: none;
  min-width: 124px;
  border: none;
  cursor: pointer;
  margin: 0 0 0 100px;

  @media ${device.tablet} {
    margin: 20px 0 0 0;
  }
`
const StyledLink = styled(Link)`
  color: #fff;
  font-size: 14px;
  text-decoration: underline;
  white-space: nowrap;
`

class GDPRBanner extends Component {
  constructor(props) {
    super(props)

    this.state = {
      accepted: this.props.cookies.get("banner-accepted"),
    }
  }

  acceptCookies = () => {
    this.setState(
      {
        accepted: true,
      },
      () => {
        this.props.cookies.set("banner-accepted", true, { path: "/" })
      }
    )
  }

  componentDidMount() {
    // set cookies on page load if the opt out cookie is not present.
    if (!this.props.cookies.get("opt-out")) {
      this.props.cookies.set("gatsby-gdpr-google-analytics", true, {
        path: "/",
      })
      this.props.cookies.set("gatsby-gdpr-facebook-pixel", true, { path: "/" })
    }
  }

  render() {
    return (
      !this.state.accepted && (
        <Banner>
          <Container>
            <Text>
              We use cookies to provide social media features and to analyse our
              traffic. We also share information about your use of our site with
              our social media, advertising and analytics partners who may
              combine it with other information that you’ve provided to them or
              that they’ve collected from your use of their services. If you
              would prefer we did not collect this information you can{" "}
              <StyledLink to="/cookie-policy/#opt-out-anchor">
                opt out
              </StyledLink>
              .{" "}
            </Text>

            <Button onClick={this.acceptCookies}>Accept</Button>
          </Container>
        </Banner>
      )
    )
  }
}

export default withCookies(GDPRBanner)
