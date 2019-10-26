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

const FlexibleServiceSection = styled.section`
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
      <SubHeader>Yorkshire & Lincolnshire</SubHeader>
      <p>
        Here at Verrdi we want to make your Driver CPC course to be as a
        pleasurable experience as we possibly can. Whilst we understand these
        courses may be met with some frustration it is as we know a necessity to
        continue your periodic vocational training to allow you to drive
        commercially.
      </p>
      <p>
        As ex-drivers ourselves we know that, you as an experienced driver will
        know the subjects we are required to cover, but there may well be things
        you have forgotten over time and all we want to do is refresh
        information you already know, in a light hearted, respectful and
        conversational style. Whereby everyone gets an opportunity to add
        valuable input into the sessions.
      </p>
      <p>
        Driver CPC training courses will be offered in a variety of comfortable
        locations across Yorkshire & Lincolnshire, offering you the convenience
        to train with us at a place and time to suite you.
      </p>
      <p>
        Periodic CPC Training is usually delivered in 7 hour blocks to offer
        flexibility around your already busy work schedule, which then has to be
        balanced with your precious family time.
      </p>
      <ButtonContainer>
        <StyledButton to="/periodic-driver-cpc-training/">
          Learn More
        </StyledButton>
        <LearnMore to="/contact/">Contact Us</LearnMore>
      </ButtonContainer>
    </TrainingSection>
    <FlexibleServiceSection>
      <h1>Flexible Service</h1>
      <Card>
        <IconContainer>
          <CardIcon icon={["far", "user"]} />
        </IconContainer>
        <CardContent>
          <h2>Drivers</h2>
          <p>
            If you are an Agency, Ltd Co. Driver, or an owner operator
            responsible for organising your CPC Training we have a number of
            courses planned throughout {new Date().getFullYear()} -{" "}
            {new Date().getFullYear() + 1} to offer you flexible, convenient &
            comfortable locations.
          </p>
          <p>
            Whether you plan to do one session at a time or an intensive course
            we offer various discounts for loyal customers.{" "}
          </p>
          <p>
            If you are new to the industry and needing your first CPC Modules do
            not hesitate to enquire about our taster CPC sessions.
          </p>
          <p>
            The more experienced colleagues who may be thinking staying in the
            industry is no longer worth it to them we need you to stay and pass
            on all that knowledge & know how. Please talk to us to discuss how
            we at Verrdi would like to thank you and show our appreciation for
            your time spent in serving the Haulage Industry.
          </p>
          <Button margin="0 10px 0 0" to="/booking/">
            Book Now
          </Button>
          <Button to="/bd">Call me back</Button>
        </CardContent>
      </Card>
      <Card>
        <IconContainer>
          <CardIcon icon={["far", "handshake"]} />
        </IconContainer>
        <CardContent>
          <h2>Hauliers</h2>
          <p>
            If you are a Haulier running a busy fleet of vehicles and value your
            drivers development and want to organise their vocational training
            for them we can offer cost effective courses around your operational
            needs.
          </p>
          <p>
            We can offer bespoke training either at your premises, a comfortable
            location off site specifically for your team or drivers can be
            included onto one of our courses pre booked throughout{" "}
            {new Date().getFullYear()} - {new Date().getFullYear() + 1}
          </p>
          <p>
            Please feel free to call us so we can discuss your requirements face
            to face and arrange a cost effective solution.
          </p>
          <Button margin="0 10px 0 0" to="/contact/">
            Talk to us
          </Button>
          <Button to="/bd">Call me back</Button>
        </CardContent>
      </Card>
    </FlexibleServiceSection>
    <MapSection />
    <Reviews />
  </Layout>
)

export default IndexPage
