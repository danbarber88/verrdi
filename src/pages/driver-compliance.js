import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import SideColumn from "../components/sideColumn"
import { Container, Content } from "../components/containers"
import {
    StyledUnorderedList,
    StyledListItem,
    BookCourseButton,
} from "./courses"

const DriverCompliance = ({ data }) => (
    <Layout>
        <SEO
            title="Health & Safety and Challenging Driving Conditions"
            description="This course provides the professional driver with an
                    overall understanding on their roles and responsibilities
                    thus, minimising errors in compliance."
        />
        <Banner
            textWidth="630px"
            alt="Truck driving down UK motorway"
            img={data.bannerImg.childImageSharp.fluid}
        >
            <p>
                We deliver Driver CPC courses to{" "}
                <span className="yellow-text">individuals</span> and{" "}
                <span className="yellow-text">organisations</span>, online or at
                our state of the art offices.
            </p>
        </Banner>
        <Container>
            <Content>
                <h2>Driver Compliance</h2>
                <p>
                    This comprehensive 7 hour Driver CPC presentation Driver
                    Compliance 2020, provides the professional driver with an
                    overall understanding on their roles and responsibilities
                    thus, minimising errors in compliance. The course will
                    ensure drivers acquire a full understanding of EU and
                    domestic drivers’ hours and working time, an overview of
                    digital Tachographs, together with a full rundown of Daily
                    Walk Round Checks and Defect Reporting completes an
                    essential yet informative day of training.
                </p>
                <h4>COURSE CONTENT</h4>
                <StyledUnorderedList>
                    <StyledListItem>
                        <span>Driver roles & the operator licence</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Operator Compliance Risk Score</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Road Transport Working Time</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Drivers Hours</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Drivers Responsibilities</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>EU Drivers Hours</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>GB Rules</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Tachograph laws</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Digital Tachograph overview</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Walk around checks and defect reporting</span>
                    </StyledListItem>
                </StyledUnorderedList>

                <h3>Book This Course</h3>
                <p>
                    If you are looking to book yourself, or your drivers on to
                    this course then please head over to our booking page. We
                    have many dates available, so please choose the time and
                    date that best suits you. If you can't find a suitable date
                    then please don't hesitate to get in touch, we will strive
                    to meet your needs as best we can.
                </p>
                <BookCourseButton to="/booking">Book Now</BookCourseButton>
                <BookCourseButton green={true ? 1 : 0} to="/courses">
                    Back to Courses
                </BookCourseButton>
            </Content>
            <SideColumn social links docs cpc />
        </Container>
    </Layout>
)

export const query = graphql`
    query DriverCompliancePageQuery {
        bannerImg: file(relativePath: { eq: "courses-banner.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxHeight: 350) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default DriverCompliance
