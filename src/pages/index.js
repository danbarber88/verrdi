import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainBanner from "../components/mainBanner"
import Button from "../components/button"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { device } from "../utils/device"
import MapSection from "../components/mapSection"
import Reviews from "../components/reviews"

const TrainingSection = styled.section`
  max-width: 850px;
  text-align: center;
  margin: 100px auto 0 auto;
  padding: 0 10px;

  p {
    padding: 0 20px;
  }
`

const SubHeader = styled.h2`
  margin: 15px 0 40px 0;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 4px;
  opacity: 0.8;
`

const ButtonContainer = styled.div`
  margin-top: 50px;
`

const StyledButton = styled(Button)`
  margin-right: 30px;
`

const LearnMore = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.headerGray};
  font-weight: 600;

  :hover {
    text-decoration: underline;
  }
`

const FlexibleServerSection = styled.section`
  max-width: 850px;
  margin: 150px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;

  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 60px;
  }
`

const Card = styled.div`
  width: 380px;
  margin: 20px 20px 0 20px;
  text-align: center;
  border-radius: 10px;
  background-color: ${props => props.theme.green};
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.24),
    0px -1px 4px rgba(0, 0, 0, 0.25);

  h2 {
    font-size: 36px;
  }

  @media ${device.tablet} {
    h2 {
      font-size: 32px;
    }
  }
`

const IconContainer = styled.div`
  border-radius: 10px 10px 0 0;
`

const CardIcon = styled(FontAwesomeIcon)`
  font-size: 100px;
  color: #fff;
  margin: 30px;
`

const CardContent = styled.div`
  border-radius: 10px;
  padding: 30px 15px;
  background-color: #fff;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainBanner />
    <TrainingSection>
      <h1>Driver CPC Training</h1>
      <SubHeader>Yorkshire & North Lincolnshire</SubHeader>
      <p>
        Verrdi offers driver cpc training at multiple venues across Yorkshire
        and Lincolnshire. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor.
      </p>
      <ButtonContainer>
        <StyledButton to="/booking">Book now</StyledButton>
        <LearnMore to="/contact">Learn More</LearnMore>
      </ButtonContainer>
    </TrainingSection>
    <FlexibleServerSection>
      <h1>Flexible Service</h1>
      <Card>
        <IconContainer>
          <CardIcon icon={["far", "user"]} />
        </IconContainer>
        <CardContent>
          <h2>Drivers</h2>
          <p>
            Discount for early booking, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.
          </p>
          <Button to="/bd">Remind Me</Button>
        </CardContent>
      </Card>
      <Card>
        <IconContainer>
          <CardIcon icon={["far", "handshake"]} />
        </IconContainer>
        <CardContent>
          <h2>Business</h2>
          <p>
            Discount for volume, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation. eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation.
          </p>
          <Button to="/bd">Learn More</Button>
        </CardContent>
      </Card>
    </FlexibleServerSection>
    <MapSection />
    <Reviews />
  </Layout>
)

export default IndexPage
