import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { Container, Content } from "../components/containers"
import { withCookies } from "react-cookie"
import styled from "styled-components"

const Button = styled.button`
  text-align: center;
  padding: 7.5px 10px;
  background-color: ${props => props.theme.green};
  color: #fff;
  border-radius: 2px;
  font-weight: bold;
  text-decoration: none;
  min-width: 124px;
  border: none;
  cursor: pointer;
  margin: 0 0 30px 0;
`

const TrackingMessage = styled.p`
  color: ${props => (props.optedOut ? "red" : "green")};
  font-weight: 500;
`

class CookiePolicyPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      optedOut: this.props.cookies.get("opt-out") === "true" ? true : false,
      trackingMessage:
        this.props.cookies.get("opt-out") === "true"
          ? "Tracking is disabled."
          : "Tracking is enabled, thanks for your support.",
      buttonText:
        this.props.cookies.get("opt-out") === "true"
          ? "Enable Tracking"
          : "Disable Tracking",
    }

    this.toggleTracking = this.toggleTracking.bind(this)
  }

  toggleTracking() {
    this.setState({ optedOut: !this.state.optedOut }, () => {
      this.props.cookies.set("opt-out", this.state.optedOut, {
        path: "/",
      })
      this.props.cookies.set(
        "gatsby-gdpr-google-analytics",
        !this.state.optedOut,
        {
          path: "/",
        }
      )
      this.props.cookies.set(
        "gatsby-gdpr-facebook-pixel",
        !this.state.optedOut,
        {
          path: "/",
        }
      )

      // if the user either disables or enables tracking they wont be needing the banner anymore so can class it as accepted.
      this.props.cookies.set("banner-accepted", true, { path: "/" })

      // reload the window so gatsby executes onClientEntry()
      // which is where gatsby-plugin-gdpr-cookies enables and disables the analytics
      window.location.reload()
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Cookie Policy" />
        <Banner
          textWidth="630px"
          img={this.props.data.bannerImg.childImageSharp.fluid}
        >
          <p>
            Cookie Policy of <span className="yellow-text">verrdi.co.uk</span>
          </p>
        </Banner>
        <Container>
          <Content>
            <h3 id="opt-out-anchor">
              This website, www.verrdi.co.uk (the "Website"), is operated by
              Verrdi TSS.
            </h3>
            <h3>Opt out of tracking</h3>
            <TrackingMessage optedOut={this.state.optedOut}>
              {this.state.trackingMessage}
            </TrackingMessage>
            <Button onClick={this.toggleTracking}>
              {this.state.buttonText}
            </Button>
            <h3>What are cookies?</h3>
            <p>
              Cookies are a small text files that are stored in your web browser
              that allows Verrdi TSS or a third party to recognize you. Cookies
              can be used to collect, store and share bits of information about
              your activities across websites, including on Verrdi TSS website.
            </p>
            <p>Cookies might be used for the following purposes:</p>
            <ul>
              <li>To enable certain functions</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>To enable ad delivery and behavioral advertising</li>
            </ul>
            <p>Verrdi TSS uses both session cookies and persistent cookies.</p>

            <p>
              A session cookie is used to identify a particular visit to our
              Website. These cookies expire after a short time, or when you
              close your web browser after using our Website. We use these
              cookies to identify you during a single browsing session, such as
              when you log into our Website.
            </p>
            <p>
              A persistent cookie will remain on your devices for a set period
              of time specified in the cookie. We use these cookies where we
              need to identify you over a longer period of time. For example, we
              would use a persistent cookie if you asked that we keep you signed
              in.
            </p>
            <h3>How do third parties use cookies on the Verrdi TSS Website?</h3>
            <p>
              Third party companies like analytics companies and ad networks
              generally use cookies to collect user information on an anonymous
              basis. They may use that information to build a profile of your
              activities on the Verrdi TSS Website and other websites that
              you've visited.
            </p>
            <h3>What are your cookies options?</h3>
            <p>
              If you don't like the idea of cookies or certain types of cookies,
              you can change your browser's settings to delete cookies that have
              already been set and to not accept new cookies. To learn more
              about how to do this, visit the help pages of your browser.
            </p>
            <p>
              Please note, however, that if you delete cookies or do not accept
              them, you might not be able to use all of the features we offer,
              you may not be able to store your preferences, and some of our
              pages might not display properly.
            </p>
            <h3>Where can I find more information about cookies?</h3>
            <p>
              You can learn more about cookies by visiting the following third
              party websites:
            </p>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.lifewire.com/how-to-delete-cookies-2617981"
                  rel="noopener noreferrer nofollow"
                >
                  About.com Browser Guide
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.allaboutcookies.org/"
                  rel="noopener noreferrer nofollow"
                >
                  All About Cookies.org
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.networkadvertising.org/"
                  rel="noopener noreferrer nofollow"
                >
                  Network Advertising Initiative
                </a>
              </li>
            </ul>
          </Content>
        </Container>
      </Layout>
    )
  }
}

export const query = graphql`
  query CookiePolicyPageQuery {
    bannerImg: file(relativePath: { eq: "about-banner.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 350) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default withCookies(CookiePolicyPage)
