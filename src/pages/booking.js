import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import SideColumn from "../components/sideColumn"
import { Container, Content } from "../components/containers"
import Events from "../components/events"

const BookingPage = ({ data }) => (
  <Layout>
    <SEO
      title="Book Now"
      description="Don't put the brakes on your periodic Driver CPC training! Browse our upcoming courses."
    />
    <Banner textWidth="510px" img={data.bannerImg.childImageSharp.fluid}>
      <p>
        Don’t put the brakes on your periodic{" "}
        <span className="yellow-text">Driver CPC training</span>!
      </p>
    </Banner>
    <Container>
      <Content>
        <h1>Available Courses</h1>
        <Events />
      </Content>
      <SideColumn links docs cpc />
    </Container>
  </Layout>
)

export const query = graphql`
  query BookingPageQuery {
    bannerImg: file(relativePath: { eq: "booking-banner.png" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 350) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default BookingPage
