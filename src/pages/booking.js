import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { device } from "../utils/device"
import Banner from "../components/banner"
import SideColumn from "../components/sideColumn"
import { Container, Content } from "../components/containers"
import Events from "../components/events"

const BookingPage = ({ data }) => (
  <Layout>
    <SEO title="Book Now" />
    <Banner textWidth="630px" img={data.bannerImg.childImageSharp.fluid}>
      <p>
        We aim to deliver quality training courses in a{" "}
        <span className="yellow-text">professional</span>,{" "}
        <span className="yellow-text">informative</span> and{" "}
        <span className="yellow-text">enjoyable</span> environment.
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
    bannerImg: file(relativePath: { eq: "about-banner.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 350) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default BookingPage
