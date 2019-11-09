import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
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

const ContactDetails = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;

  div {
    margin: 0 40px 0 0;
  }

  @media ${device.laptop} {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  @media ${device.tablet} {
    justify-content: center;
  }

  @media ${device.mobileL} {
    justify-content: center;

    div {
      width: 100%;
      margin: 0;
    }
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
  font-size: 32px;
  color: ${props => props.theme.green};
  margin: 20px;
`

const ContactPage = ({ data }) => {
  useScript("//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js")

  return (
    <Layout>
      <SEO title="Contact Us" />
      <Banner textWidth="655px" img={data.bannerImg.childImageSharp.fluid}>
        <p>
          Get in touch for any reason. We can answer any and all of your{" "}
          <span className="yellow-text">questions</span>.
        </p>
      </Banner>
      <Container>
        <Content>
          <h1>How to get in touch</h1>
          <ContactDetails>
            <div>
              <Icon icon={["fa", "phone-alt"]} />
              <ContactHeader>Phone</ContactHeader>
              <ContactLinks href="tel:01482298119">01482 298119</ContactLinks>
            </div>
            <div>
              <Icon icon={["fa", "envelope"]} />
              <ContactHeader>Email</ContactHeader>
              <ContactLinks href="mailto:sales@verrdi.co.uk">
                sales@verrdi.co.uk
              </ContactLinks>
            </div>
            <div>
              <Icon icon={["fa", "building"]} />
              <ContactHeader>Address</ContactHeader>
              <p>
                123 Unknown Street
                <br /> Hull
                <br /> HU1 5TK
              </p>
            </div>
          </ContactDetails>

          <h2>Payment info</h2>
          <p>
            Sausage capicola shoulder prosciutto. Swine jowl leberkas, capicola
            cow pork alcatra pig kielbasa brisket strip steak shankle. Pastrami
            pig pork belly filet mignon salami tenderloin, cow cupim. Salami
            capicola fatback pancetta t-bone filet mignon.
          </p>

          <h2>
            Not ready to book yet but want to be kept informed of future
            courses?
          </h2>
          <MailChimpForm />
        </Content>
        <SideColumn links docs cpc>
          <MapContainer>
            <Map />
          </MapContainer>

          {/* <h2>MailChimp email capture form here</h2>
        <form>
          <label>email</label>
          <input style={{ width: "100%" }}></input>
          <button style={{ marginTop: "10px" }}>submit</button>
        </form> */}
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
