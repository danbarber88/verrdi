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

const TrafficLawIncidentsAndVulnerableRoadUsers = ({ data }) => (
    <Layout>
        <SEO
            title="Traffic Law Incidents and Vulnerable Road Users"
            description="This course is packed full of
                    vital yet interesting content, providing both PCV and or HGV
                    drivers with useful facts and figures."
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
                <h2>Traffic Law Incidents and Vulnerable Road Users</h2>
                <p>
                    This informative 7 hour Driver CPC presentation Traffic Law
                    Incidents and Vulnerable Road Users is packed full of vital
                    yet interesting content, providing both PCV and or HGV
                    drivers with useful facts and figures. The course will
                    better arm the professional driver with insightful hints and
                    tips to feel more confident while staying safer on the
                    roads.
                </p>
                <h4>COURSE CONTENT</h4>
                <StyledUnorderedList>
                    <StyledListItem>
                        <span>Road traffic enforcement organisations</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Penalties and endorsements</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>The Highway Code</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Driving Licences</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>The Operator Licence</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Vehicle Safety</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>
                            What you should do in the event of an incident
                        </span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Constructions and use regulations</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Vulnerable Road Users</span>
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
    query TrafficLawIncidentsAndVulnerableRoadUsersPageQuery {
        bannerImg: file(relativePath: { eq: "courses-banner.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxHeight: 350) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default TrafficLawIncidentsAndVulnerableRoadUsers
