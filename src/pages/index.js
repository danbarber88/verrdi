import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainBanner from "../components/mainBanner"
import Button from "../components/button"
import { Link } from "gatsby"

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
        <StyledButton to="#">Book now</StyledButton>
        <LearnMore to="#">Learn More</LearnMore>
      </ButtonContainer>
    </TrainingSection>
  </Layout>
)

export default IndexPage
