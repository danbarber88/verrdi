import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"
import Img from "gatsby-image"
import Wave from "../images/vertical-wave-small.svg"

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 350px;
  border-bottom: 15px solid ${props => props.theme.green};

  @media ${device.tablet} {
    height: 250px;
  }
`

const TextContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.green};
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  padding: 0 15px;
  z-index: 1;

  .yellow-text {
    color: ${props => props.theme.yellow};
  }

  p {
    max-width: ${props => props.textWidth};
    margin: 15px 0 0 0;
  }

  @media ${device.laptop} {
    font-size: 24px;

    p {
      max-width: 380px;
      margin-right: -100px;
    }
  }

  @media ${device.tablet} {
    position: absolute;
    width: 100%;
    height: 250px;
    top: 0;
    left: 0;
    background-color: rgba(1, 65, 36, 0.75);

    p {
      margin: 0;
    }
  }

  @media ${device.mobileL} {
    p {
      font-size: 24px;
    }
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 40%;
  min-width: 480px;

  @media ${device.tablet} {
    width: 100%;
    max-height: 250px;
    min-width: unset;
  }
`

const StyledImg = styled(Img)`
  position: absolute;
  z-index: -1;
  height: 350px;

  @media ${device.tablet} {
    width: 100%;
    max-height: 250px;
  }
`

const StyledWave = styled(Wave)`
  position: absolute;
  bottom: -1px;
  left: -1px;

  @media ${device.tablet} {
    display: none;
  }
`

const Banner = props => (
  <Container textWidth={props.textWidth}>
    <TextContainer textWidth={props.textWidth}>{props.children}</TextContainer>
    <ImageContainer>
      <StyledImg fluid={props.img} />
      <StyledWave />
    </ImageContainer>
  </Container>
)

export default Banner
