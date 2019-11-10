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

const StyledImg = styled(Img)`
  width: 100%;
  margin: 40px 0;
`

const Garry = styled.p`
  font-weight: 500;
  color: ${props => props.theme.green};
`

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
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
        <h1>About Verrdi</h1>
        <p>
          I believe EVERYONE who works with us wants to be treated in the same
          professional manner regardless if you are a customer or supplier and
          treated with the same respect & integrity that allows the company to
          deliver a reliable, informative, professional service in such a way
          you will want to become a loyal customer adding value to the business
          and receive the best of attention at all times, making us the provider
          of choice for all services offered by Verrdi now and in the future.
        </p>
        <h2>A Bit About Me</h2>
        <p>
          I have been involved in the transport industry since 1993, passing my
          LGV Cat C licence courtesy of the Humberside Army Cadet Force. Soon
          after I was lucky enough to be given opportunities to prove myself
          with a number of hauliers around Hull resulting in been offered a Full
          Time Position in 1995 where I also upskilled to my Cat CE Licence and
          drove Wagon & Drag vehicles until 2000.
        </p>
        <p>
          At that point I decided to go back to agencies and also pursue a
          number of qualifications including my National CPC Certificate which
          cumulated in starting a new career joining a national employment
          agency as a "Trainee" Driving Consultant in 2003. During this time I
          have enjoyed a great career within both the recruitment and the
          haulage industries which has brought me to where I am today.
        </p>
        <p>
          I look forward to working with drivers, discussing our joint knowledge
          whilst delivering Driver CPC Courses.
        </p>
        <p>
          New training courses will become available relevant to the Driving &
          Warehousing Industries throughout 2020.
        </p>
        <p>
          Please do not hesitate to contact me if you have any questions or just
          need a bit of advice.
        </p>
        <Garry>- Garry Barber</Garry>
      </Content>
      <SideColumn social links docs cpc />
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
  }
`

export default AboutPage
