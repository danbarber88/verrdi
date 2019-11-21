import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { device } from "../utils/device"
import Banner from "../components/banner"
import SideColumn from "../components/sideColumn"
import Map from "../components/map"
import { Container, Content } from "../components/containers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MailChimpForm from "../components/mailChimpForm"
import useScript from "../hooks/useScript"

const AllContactContainer = styled.div`
  display: flex;

  @media ${device.laptop} {
    flex-wrap: wrap;
  }

  @media ${device.tablet} {
    justify-content: center;
  }
`

const ContactDetails = styled.div`
  width: 560px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center;

  .address {
    width: 520px;
    margin-top: 40px;
  }

  @media ${device.laptop} {
    flex-wrap: wrap;
    width: 100%;
  }

  @media ${device.tablet} {
    justify-content: space-between;

    .address {
      width: 100%;
      margin-top: 30px;
    }
  }

  @media ${device.mobileL} {
    justify-content: center;

    .address {
      margin-top: 20px;
    }

    div {
      width: 100%;
    }
  }
`

const ContactCard = styled.div`
  background-color: ${props => props.theme.green};
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.24),
    0px -1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 240px;
  margin-right: 40px;

  @media ${device.tablet} {
    width: 47%;
    margin-right: 0;
  }

  @media ${device.mobileL} {
    margin-top: 20px;
  }
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  height: 90px;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  min-height: 150px;
  padding: 15px;

  a,
  p {
    margin: 0;
  }
`

const ContactHeader = styled.h3`
  font-size: 24px;
  color: ${props => props.theme.green};
`

const ContactLinks = styled.a`
  display: block;
  margin-bottom: 1.45rem;
  color: ${props => props.theme.green};
  text-decoration: none;
`

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 30px 0;

  @media ${device.laptop} {
    margin: 15px 0;
    height: 275px;
  }

  @media ${device.tablet} {
    margin: 30px 0;
  }

  @media ${device.mobileL} {
    margin: 15px 0;
    height: 200px;
  }
`

const Icon = styled(FontAwesomeIcon)`
  height: 40px;
  width: 40px;
  font-size: 42px;
  color: #fff;

  @media ${device.mobileL} {
    .social-icon {
      height: 21px;
      width: 21px;
      font-size: 24px;
    }
  }
`

const SocialIcon = styled(FontAwesomeIcon)`
  height: 40px;
  width: 40px;
  font-size: 42px;
  color: #fff;

  @media ${device.mobileL} {
    height: 21px;
    width: 21px;
    font-size: 24px;
  }
`

const SocialSquareContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.laptop} {
    flex-direction: row;
    width: 520px;
    margin-top: 40px;
  }

  @media ${device.tablet} {
    width: 100%;
    margin-top: 30px;
    margin-right: 0;
    flex-wrap: wrap;
  }
`

const SocialSquare = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 110px;
  border-radius: 10px;
  text-decoration: none;
  color: #fff;
  background-color: ${props => props.theme.green};
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.24),
    0px -1px 4px rgba(0, 0, 0, 0.25);

  p {
    margin: 10px 0 0 0;
    font-size: 14px;
    font-weight: 500;
  }

  @media ${device.tablet} {
    width: 20vw;
    height: 20vw;
  }

  @media ${device.mobileL} {
    p {
      margin: 7.5px 0 0 0;
      font-size: 10px;
    }
  }
`

const ContactPage = ({ data }) => {
  useScript("//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js")

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Verrdi Transport Support Services - Compass House, Empringham Street, Hull, HU9 1RP. Phone: 01482 298119. Email: sales@verrdi.co.uk"
      />
      <Banner textWidth="655px" img={data.bannerImg.childImageSharp.fluid}>
        <p>
          Get in touch for any reason. We can answer any and all of your{" "}
          <span className="yellow-text">questions</span>.
        </p>
      </Banner>
      <Container>
        <Content>
          <h1>How to get in touch</h1>
          <AllContactContainer>
            <ContactDetails>
              <ContactCard>
                <IconContainer>
                  <Icon icon={["fa", "phone-alt"]} />
                </IconContainer>

                <CardContent>
                  <ContactHeader>Phone</ContactHeader>
                  <ContactLinks href="tel:01482298119">
                    01482 298119
                  </ContactLinks>
                </CardContent>
              </ContactCard>
              <ContactCard>
                <IconContainer>
                  <Icon icon={["fa", "envelope"]} />
                </IconContainer>
                <CardContent>
                  <ContactHeader>Email</ContactHeader>
                  <ContactLinks href="mailto:sales@verrdi.co.uk">
                    sales@verrdi.co.uk
                  </ContactLinks>
                </CardContent>
              </ContactCard>
              <ContactCard className="address">
                <IconContainer>
                  <Icon icon={["fa", "building"]} />
                </IconContainer>

                <CardContent>
                  <ContactHeader>Address</ContactHeader>
                  <p>
                    Compass House
                    <br /> 17-19 Empringham Street
                    <br /> Hull
                    <br /> HU9 1RP
                  </p>
                </CardContent>
              </ContactCard>
            </ContactDetails>
            <SocialSquareContainer>
              <SocialSquare
                target="_blank"
                href="https://www.instagram.com/verrdi_tss/"
                className="social-link"
                rel="noopener noreferrer nofollow"
              >
                <SocialIcon
                  className="social-icon"
                  icon={["fab", "instagram"]}
                />
                <p>FOLLOW</p>
              </SocialSquare>
              <SocialSquare
                target="_blank"
                href="https://search.google.com/local/reviews?placeid=ChIJuZDzFMW_eEgRVE9CVFgOISw"
                className="social-link"
                rel="noopener noreferrer nofollow"
              >
                <SocialIcon className="social-icon" icon={["fab", "google"]} />
                <p>REVIEWS</p>
              </SocialSquare>
              <SocialSquare
                target="_blank"
                href="https://www.facebook.com/verrditss/"
                className="social-link"
                rel="noopener noreferrer nofollow"
              >
                <SocialIcon
                  className="social-icon"
                  icon={["fab", "facebook-square"]}
                />
                <p>LIKE</p>
              </SocialSquare>
              <SocialSquare
                target="_blank"
                href="https://twitter.com/LtdVerrdi"
                className="social-link"
                rel="noopener noreferrer nofollow"
              >
                <SocialIcon className="social-icon" icon={["fab", "twitter"]} />
                <p>FOLLOW</p>
              </SocialSquare>
            </SocialSquareContainer>
          </AllContactContainer>

          <h2>Payment info</h2>
          <p>
            If you are interested in booking a course we are happy for you to
            contact us direct and we can arrange payment over the telephone,
            good old fashioned cash on the day (small deposit required) or to
            book online head over to our booking page.
          </p>

          <h2>News and Offers</h2>
          <p>
            Not ready to book yet but want to be kept informed of future
            courses? Complete the form below and we'll make sure to send you our
            latest news and offers.
          </p>
          <MailChimpForm />
        </Content>
        <SideColumn links docs cpc>
          <MapContainer>
            <Map />
          </MapContainer>
        </SideColumn>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ContactPageQuery {
    bannerImg: file(relativePath: { eq: "about-banner.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 350) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hqImg: file(relativePath: { eq: "verrdi-hq.png" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 350) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ContactPage
