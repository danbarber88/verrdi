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

const DriverWelfareCustomerCareAndSecurity = ({ data }) => (
    <Layout>
        <SEO
            title="Driver Welfare, Customer Care and Security"
            description="Driver Welfare Customer Care and Security examines how to better improve interactions and relations with colleagues and customers and help improve company image."
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
                <h2>Driver Welfare, Customer Care and Security</h2>
                <p>
                    This informative 7-hour driver CPC presentation Driver
                    Welfare Customer Care and Security examines how to better
                    improve interactions and relations with colleagues and
                    customers and help improve company image. The course also
                    offers a wealth of advice and useful pointers relating to
                    drivers’ welfare, counter-terrorism, and security.
                </p>
                <h4>COURSE CONTENT</h4>
                <StyledUnorderedList>
                    <StyledListItem>
                        <span>Examination of your ability to drive</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Eyesight</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Distractions</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Alcohol awareness</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Drug driving</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Fatigue</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Understanding stress and illness</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Customer care and conflict resolution</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Good communication</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Dealing with complaints</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Safety & Security</span>
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
    query DriverWelfareCustomerCareAndSecurityPageQuery {
        bannerImg: file(relativePath: { eq: "courses-banner.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxHeight: 350) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default DriverWelfareCustomerCareAndSecurity
