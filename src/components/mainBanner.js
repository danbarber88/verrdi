import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { withTheme } from "styled-components"
import Img from "gatsby-image"
import Waves from "../images/waves.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { device } from "../utils/device"

const Container = styled.div`
  width: 100%;
  height: auto;
`

const StyledImg = styled(Img)`
  z-index: -1;
`

const StyledWaves = styled(Waves)`
  margin-top: -267px;
  width: 100%;
`

const IconContainer = styled.div`
  position: relative;
  width: 30%;
  display: flex;
  justify-content: space-around;
  margin-bottom: -3.5vw;
  bottom: 7.5vw;
  left: 20%;

  a {
    color: ${props => props.theme.green};
  }

  @media ${device.tablet} {
    width: 40%;
    left: 15%;
  }

  @media ${device.mobileL} {
    margin: 0 auto;
    width: 60%;
    margin-bottom: 40px;
    bottom: 0;
    left: 0;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  height: 60px;
  width: 60px;
  font-size: 3.5vw;
  transition: color 0.1s ease-in;

  :hover {
    color: ${props => props.theme.darkGreen};
  }

  @media ${device.tablet} {
    height: 34px;
    width: 34px;
    font-size: 4.5vw;
  }

  @media ${device.mobileL} {
    height: 30px;
    width: 30px;
    font-size: 8vw;
  }
`

const MainBanner = props => {
  const { mainImg } = useStaticQuery(
    graphql`
      query {
        mainImg: file(relativePath: { eq: "main-banner-image.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxHeight: 600) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <Container>
      <StyledImg
        fluid={mainImg.childImageSharp.fluid}
        backgroundColor={props.theme.darkGreen}
      />
      <StyledWaves />
      <IconContainer>
        <a
          target="_blank"
          href="https://www.instagram.com/verrditss/"
          className="social-link"
          rel="noopener noreferrer nofollow"
        >
          <StyledIcon icon={["fab", "instagram"]} />
        </a>
        {/* <a
          target="_blank"
          href="https://www.linkedin.com/company/verrdi-training-recruitment-ltd/"
          className="social-link"
          rel="noopener noreferrer nofollow"
        >
          <StyledIcon icon={["fab", "linkedin"]} />
        </a> */}
        <a
          target="_blank"
          href="https://www.facebook.com/verrditss/"
          className="social-link"
          rel="noopener noreferrer nofollow"
        >
          <StyledIcon icon={["fab", "facebook-square"]} />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/LtdVerrdi"
          className="social-link"
          rel="noopener noreferrer nofollow"
        >
          <StyledIcon icon={["fab", "twitter"]} />
        </a>
      </IconContainer>
    </Container>
  )
}

export default withTheme(MainBanner)
