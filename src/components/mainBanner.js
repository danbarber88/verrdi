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
  width: 40%;
  display: flex;
  justify-content: space-around;
  color: ${props => props.theme.green};
  margin-bottom: -3.5vw;
  bottom: 7.5vw;
  left: 13%;

  @media ${device.tablet} {
    width: 50%;
    left: 8%;
  }

  @media ${device.mobileL} {
    margin: 0 auto;
    width: 80%;
    margin-bottom: 40px;
    bottom: 0;
    left: 0;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 3.5vw;

  :hover {
    color: ${props => props.theme.darkGreen};
  }

  @media ${device.tablet} {
    font-size: 4.5vw;
  }

  @media ${device.mobileL} {
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
        <StyledIcon icon={["fab", "instagram"]} />
        <StyledIcon icon={["fab", "linkedin"]} />
        <StyledIcon icon={["fab", "facebook-square"]} />
        <StyledIcon icon={["fab", "twitter"]} />
      </IconContainer>
    </Container>
  )
}

export default withTheme(MainBanner)
