import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { device } from "../utils/device"

const Container = styled.aside`
  width: 400px;
  min-width: 280px;
  margin: 0 auto;
  padding: 0 30px;
  background-color: #f1f1f1;

  h2 {
    font-size: 24px;
    margin: 40px 0 30px 0;
  }

  a {
    display: block;
    text-decoration: underline;
    color: ${props => props.theme.green};
    font-size: 14px;
    font-weight: 500;
    margin: 20px 0;
  }

  @media ${device.laptop} {
    padding: 0 15px;
  }

  @media ${device.tablet} {
    width: 100%;
    padding: 0 30px;
  }

  @media ${device.mobileL} {
    padding: 0 15px;
  }
`

const StyledImg = styled(Img)`
  width: 200px;
  margin-bottom: 40px;
`

const SideColumn = props => {
  const { cpcLogo } = useStaticQuery(
    graphql`
      query {
        cpcLogo: file(relativePath: { eq: "cpc-logo.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <Container>
      {props.children}

      {props.info && (
        <>
          <h2>Useful Information</h2>
          <a>Joining Instructions</a>
          <a>Training Terms & Conditions</a>
          <a>Example CPC Course Schedule</a>
          <a>Driver CPC Information Guide</a>
          <a>Digital Tachograph Information Form</a>
        </>
      )}

      {props.faq && (
        <>
          <h2>F.A.Q</h2>
          <a>Joining Instructions</a>
          <a>Training Terms & Conditions</a>
          <a>Example CPC Course Schedule</a>
          <a>Driver CPC Information Guide</a>
          <a>Digital Tachograph Information Form</a>
        </>
      )}

      {props.cpc && (
        <>
          <h2>We work with</h2>
          <StyledImg fluid={cpcLogo.childImageSharp.fluid} />
        </>
      )}
    </Container>
  )
}

export default SideColumn
