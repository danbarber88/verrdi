import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { device } from "../utils/device"
import Banner from "../components/banner"
import SideColumn from "../components/sideColumn"

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

const StyledImg = styled(Img)`
  width: 100%;
  margin: 40px 0;
`

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <Banner textWidth="505px" img={data.bannerImg.childImageSharp.fluid}>
      <p>
        We are dedicated to offering{" "}
        <span className="yellow-text">the best training experience</span>{" "}
        possible.
      </p>
    </Banner>
    <Container>
      <Content>
        <h1>About Us</h1>
        <StyledImg fluid={data.hqImg.childImageSharp.fluid} />
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
      </Content>
      <SideColumn info faq cpc />
    </Container>
  </Layout>
)

export const query = graphql`
  query AboutPageQuery {
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

export default AboutPage
