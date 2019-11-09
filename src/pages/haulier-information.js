import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import SideColumn from "../components/sideColumn"
import { Container, Content } from "../components/containers"
import MailChimpForm from "../components/mailChimpForm"
import useScript from "../hooks/useScript"

const HaulierInformationPage = ({ data }) => {
  useScript("//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js")

  return (
    <Layout>
      <SEO title="Haulier Information" />
      <Banner textWidth="630px" img={data.bannerImg.childImageSharp.fluid}>
        <p>
          We aim to deliver quality training courses in a{" "}
          <span className="yellow-text">professional</span>,{" "}
          <span className="yellow-text">informative</span> and{" "}
          <span className="yellow-text">enjoyable</span> environment.
        </p>
      </Banner>
      <Container>
        <Content>
          <h1>Haulier</h1>
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
          <h3>Keep up to date with what we are doing</h3>
          <MailChimpForm />
        </Content>
        <SideColumn links docs cpc />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query HaulierInformationPageQuery {
    bannerImg: file(relativePath: { eq: "about-banner.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 350) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default HaulierInformationPage
