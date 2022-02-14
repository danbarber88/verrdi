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

const ChallengingDrivingConditionsAndSafeLoading = ({ data }) => (
    <Layout>
        <SEO
            title="Challenging Driving Conditions & HGV Safe Loading"
            description="This course ensures drivers are fully aware of the risks
                    they face at work and how to minimize those risks."
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
                <h2>Challenging Driving Conditions & HGV Safe Loading</h2>
                <h3>Challenging Driving Conditions (3.5 hours)</h3>
                <p>
                    This course ensures drivers are fully aware of the risks
                    they face at work and how to minimize those risks. The
                    course also looks at how vehicle control and driving style
                    can improve vehicle safety, reducing the likelihood of
                    workplace incidents and improve fuel efficiency and reduce
                    emissions.
                </p>
                <h4>COURSE CONTENT</h4>
                <StyledUnorderedList>
                    <StyledListItem>
                        <span>Night driving</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Dangerous weather conditions</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Motorway driving</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Congestion</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Roadworks</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>City driving</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Country driving</span>
                    </StyledListItem>
                </StyledUnorderedList>

                <h3>HGV Safe Loading (3.5 hours)</h3>
                <p>
                    Looks at raising awareness regarding the rules and
                    undertakings that apply in the workplace in respect of HGV
                    Safe Vehicle Loading. This module discusses the laws and
                    principles surrounding safe loading and unloading various
                    types of vehicles. Highlighting the importance of team work,
                    this course is also full of useful pointers and tips to help
                    the professional driver keep safe whilst carrying out their
                    daily duties.
                </p>
                <h4>COURSE CONTENT</h4>
                <StyledUnorderedList>
                    <StyledListItem>
                        <span>Legislation & responsibilities</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Forces acting on the vehicle</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Loading arrangements</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Securing devices</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Methods of securing & load security</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Delivering safely</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Vehicle dimensions/restrictions</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Vehicle overloading</span>
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
    query ChallengingDrivingConditionsAndSafeLoadingPageQuery {
        bannerImg: file(relativePath: { eq: "courses-banner.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxHeight: 350) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default ChallengingDrivingConditionsAndSafeLoading
