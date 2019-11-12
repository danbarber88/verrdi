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

      {props.social && (
        <>
          <h2>Social Links</h2>
          <a href="" target="_blank" rel="noopener noreferrer nofollow">
            Visit us on Facebook{" "}
            <span style={{ color: "red" }}>
              <strong>NEEDS FACEBOOK LINK</strong>
            </span>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer nofollow">
            Follow our Twitter{" "}
            <span style={{ color: "red" }}>
              <strong>NEEDS TWITTER LINK</strong>
            </span>
          </a>
          <a
            href="https://g.page/Verrdi/review "
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Leave a Google review
          </a>
        </>
      )}

      {props.links && (
        <>
          <h2>Useful Links</h2>
          <a
            href="https://www.gov.uk/check-your-driver-cpc-periodic-training-hours"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Check my CPC Hours (GOV UK)
          </a>
          <a
            href="https://www.gov.uk/driver-cpc-training"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            CPC Training (GOV UK)
          </a>
          <a
            href="https://www.gov.uk/view-driving-licence"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Get a Check Code or view your Driving Licence
          </a>
          <a
            href="https://www.gov.uk/replace-driver-cpc-card"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Replace Driver CPC Card
          </a>
          <a
            href="https://www.gov.uk/apply-for-a-digital-tachograph-driver-smart-card"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Replace Digital Tachograph Card
          </a>
          <a
            href="https://www.gov.uk/apply-online-to-replace-a-driving-licence"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Replace Driving Licence
          </a>
        </>
      )}

      {props.docs && (
        <>
          <h2>Useful Documents</h2>
          <a
            href="https://www.gov.uk/government/publications/working-time-regulations-for-mobile-workers/working-time-rules-lorry-bus-and-coach-drivers-and-crew"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Working Time Regs
          </a>
          <a
            href="https://www.gov.uk/drivers-hours/eu-rules"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            EU Drivers Hours
          </a>
          <a
            href="https://www.gov.uk/drivers-hours/gb-domestic-rules"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            UK Domestic Driving Rules
          </a>
          <a
            href="https://www.youtube.com/watch?v=rRdP5F3c_HI"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Vehicle Walkround Video
          </a>
          <a
            href="/simplified-guidance-eu-drivers-hours-working-time-rules.pdf"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Simplified guidance - EU drivers hours
          </a>
          <a
            href="/heavy-goods-vehicle-walkaround-check-diagram.pdf"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            HGV walkaround check diagram
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
