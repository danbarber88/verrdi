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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Container = styled.div`
  max-width: 1275px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  padding: 40px 15px;

  @media ${device.tablet} {
    flex-wrap: wrap;
    padding: 40px 15px 15px 15px;
  }
`

const Content = styled.section`
  max-width: 830px;
  padding-right: 45px;

  @media ${device.laptop} {
    padding-right: 20px;
  }

  @media ${device.tablet} {
    padding-right: 0;
  }
`

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
`

// const StyledImg = styled(Img)`
//   width: 100%;
//   margin: 40px 0;
// `

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

const ContactPage = ({ data }) => (
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
            <Icon icon={["fa", "building"]} />
            <ContactHeader>Address</ContactHeader>
            <p>
              123 Unknown Street
              <br /> Hull
              <br /> HU1 5TK
            </p>
          </div>
          <div>
            <Icon icon={["fa", "envelope"]} />
            <ContactHeader>Email</ContactHeader>
            <ContactLinks href="mailto:sales@verrdi.co.uk">
              sales@verrdi.co.uk
            </ContactLinks>
          </div>
          <div>
            <Icon icon={["fa", "phone-alt"]} />
            <ContactHeader>Phone</ContactHeader>
            <ContactLinks href="tel:01482298119">01482 298119</ContactLinks>
          </div>
        </ContactDetails>

        <h2>Are you a business looking to book in bulk?</h2>
        <p>
          Bacon ipsum dolor amet spare ribs short ribs picanha short loin.
          Shoulder leberkas beef flank. Chuck bacon pancetta, tenderloin
          hamburger ground round burgdoggen tri-tip jerky kielbasa jowl brisket
          capicola. Corned beef capicola venison, tri-tip tail ribeye cupim
          bacon leberkas swine filet mignon pork belly chicken. Turducken
          shankle kielbasa pancetta. Burgdoggen bacon short loin, fatback swine
          brisket buffalo.
        </p>
        <p>
          Pork shoulder short loin beef short ribs swine andouille. Tail beef
          ribs filet mignon, shankle leberkas pancetta swine shank ball tip pork
          spare ribs rump. Kielbasa leberkas sausage, spare ribs kevin sirloin
          landjaeger swine fatback tri-tip shank tenderloin capicola ham. Short
          loin kevin filet mignon porchetta tail pork doner buffalo. Drumstick
          pork chop alcatra buffalo.
        </p>
        <p>
          Sausage capicola shoulder prosciutto. Swine jowl leberkas, capicola
          cow pork alcatra pig kielbasa brisket strip steak shankle. Pastrami
          pig pork belly filet mignon salami tenderloin, cow cupim. Salami
          capicola fatback pancetta t-bone filet mignon.
        </p>
        <h2>Drivers, book a course by phone or online</h2>
        <p>
          Pork shoulder short loin beef short ribs swine andouille. Tail beef
          ribs filet mignon, shankle leberkas pancetta swine shank ball tip pork
          spare ribs rump. Kielbasa leberkas sausage, spare ribs kevin sirloin
          landjaeger swine fatback tri-tip shank tenderloin capicola ham. Short
          loin kevin filet mignon porchetta tail pork doner buffalo. Drumstick
          pork chop alcatra buffalo.
        </p>
        <p>
          Sausage capicola shoulder prosciutto. Swine jowl leberkas, capicola
          cow pork alcatra pig kielbasa brisket strip steak shankle. Pastrami
          pig pork belly filet mignon salami tenderloin, cow cupim. Salami
          capicola fatback pancetta t-bone filet mignon.
        </p>
      </Content>
      <SideColumn faq cpc>
        <MapContainer>
          <Map />
        </MapContainer>

        <h2>MailChimp email capture form here</h2>
        <form>
          <label>email</label>
          <input style={{ width: "100%" }}></input>
          <button style={{ marginTop: "10px" }}>submit</button>
        </form>
      </SideColumn>
    </Container>
  </Layout>
)

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
