import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import SideColumn from "../components/sideColumn"
import { Container, Content } from "../components/containers"
import Button from "../components/button"
import styled from "styled-components"
import MailChimpForm from "../components/mailChimpForm"
import useScript from "../hooks/useScript"

const StyledButton = styled(Button)`
  display: block;
  width: 250px;
  font-size: 28px;
  margin: 60px auto;
`

const DriverInformationPage = ({ data }) => {
  useScript("//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js")

  return (
    <Layout>
      <SEO
        title="Driver Information"
        description="If you are a driver responsible for organising your CPC Training we have a number of courses planned throughout the year."
      />
      <Banner
        textWidth="630px"
        alt="Truck driving down UK motorway"
        img={data.bannerImg.childImageSharp.fluid}
      >
        <p>
          We aim to deliver quality training courses in a{" "}
          <span className="yellow-text">professional</span>,{" "}
          <span className="yellow-text">informative</span> and{" "}
          <span className="yellow-text">enjoyable</span> environment.
        </p>
      </Banner>
      <Container>
        <Content>
          <h1>Driver</h1>
          <p>
            If you are an Agency, Ltd Co. Driver, or an owner operator
            responsible for organising your CPC Training we have a number of
            courses planned throughout {new Date().getFullYear()} -{" "}
            {new Date().getFullYear() + 1} to offer you flexible, convenient &
            comfortable locations. Whether you plan to do one session at a time
            or an intensive course we offer various discounts for loyal
            customers.
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
          <h3>
            List of Driver CPC Courses Available (all Courses are 7 Hours){" "}
          </h3>
          <ul>
            <li>Driver Essentials</li>
            <li>Driver Compliance</li>
            <li>Driver Welfare, Customer Care & Security</li>
            <li>Health & Safety, HGV Safe Loading & PCV Toolbox</li>
            <li>Traffic Law, Incidents & Vulnerable Road Users</li>
            <li>Emergency First Aid</li>
            <li>Conflict Management</li>
            <li>Safeguarding & Customer Care</li>
          </ul>
          <p>
            Remember you can sit the same course as many times as you wish but
            why would you? The courses will be rotated through and all dates
            posted for each one. So if you are in no rush to complete your CPC
            and are undertaking periodic training at least one course per year
            then book a different course each time.
          </p>
          <p>
            If you take one course a year then the cost is less than a pound a
            week (not even half a pint)
          </p>
          <StyledButton to="/booking/">Book Now</StyledButton>
          <h3>News and Offers</h3>
          <p>
            Not ready to book yet but want to be kept informed of future
            courses? Complete the form below and we'll make sure to send you our
            latest news and offers.
          </p>
          <MailChimpForm />
        </Content>
        <SideColumn links docs cpc />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query DriverInformationPageQuery {
    bannerImg: file(relativePath: { eq: "about-banner.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 350) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default DriverInformationPage
