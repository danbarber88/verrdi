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

const DriverEssentials = ({ data }) => (
    <Layout>
        <SEO
            title="Driver Essentials"
            description="This course  will ensure drivers acquire a full
                    understanding of EU and domestic drivers’ hours, working
                    time, competent Tachograph record-keeping covering both
                    analogue and digital use."
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
                <h2>Driver Essentials</h2>
                <p>
                    This comprehensive 7 hour Driver CPC Presentation Driver
                    Essentials, will ensure drivers acquire a full understanding
                    of EU and domestic drivers’ hours, working time, competent
                    Tachograph record-keeping covering both analogue and digital
                    use.
                </p>
                <h4>COURSE CONTENT</h4>
                <StyledUnorderedList>
                    <StyledListItem>
                        <span>EU Drivers Hours</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>GB Domestic Rules</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Tachograph laws</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Analogue tachographs</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>
                            Digital Tachographs visual step by step guide
                        </span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>RTD/WTD</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Penalties</span>
                    </StyledListItem>
                    <StyledListItem>
                        <span>Tiredness and fatigue</span>
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
    query DriverEssentialsPageQuery {
        bannerImg: file(relativePath: { eq: "courses-banner.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxHeight: 350) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default DriverEssentials
