import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { device } from "../utils/device"

const Container = styled.aside`
  width: 400px;
  min-width: 280px;
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

      {props.links && (
        <>
          <h2>Useful Links</h2>
          <a target="_blank" rel="noopener noreferrer nofollow">
            Jaupt Website
          </a>
          <a target="_blank" rel="noopener noreferrer nofollow">
            Gov CPC
          </a>
          <a target="_blank" rel="noopener noreferrer nofollow">
            DVLA
          </a>
          <a target="_blank" rel="noopener noreferrer nofollow">
            Verrdi Facebook Page
          </a>
          <a target="_blank" rel="noopener noreferrer nofollow">
            Leave a Review (Google)
          </a>
          <a target="_blank" rel="noopener noreferrer nofollow">
            Leave a Review (Facebook)
          </a>
        </>
      )}

      {props.docs && (
        <>
          <h2>Useful Documents</h2>
          <a target="_blank" rel="noopener noreferrer nofollow">
            Joining Instructions
          </a>
          <a target="_blank" rel="noopener noreferrer nofollow">
            Terms of Business
          </a>
          <a target="_blank" rel="noopener noreferrer nofollow">
            CPC Course Schedule
          </a>
          <a target="_blank" rel="noopener noreferrer nofollow">
            Refer a friend
          </a>
          <a target="_blank" rel="noopener noreferrer nofollow">
            Tachograph Rules (Site)
          </a>
          <a target="_blank" rel="noopener noreferrer nofollow">
            Tachograph Rules (PDF Document)
          </a>
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
