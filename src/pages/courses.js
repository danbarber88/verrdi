import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import SideColumn from "../components/sideColumn"
import { Container, Content } from "../components/containers"
import { device } from "../utils/device"
import Button from "../components/button"

export const StyledUnorderedList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const StyledListItem = styled.li`
    padding: 5px;
    margin-bottom: 0;
    width: ${props => (props.fullWidth ? `100%` : `30%`)};
    color: ${props => props.theme.yellow};

    span {
        color: ${props => props.theme.textGray};
    }

    @media ${device.laptop} {
        width: ${props => (props.fullWidth ? `100%` : `50%`)};
    }

    @media ${device.mobileL} {
        width: 100%;
    }
`

export const BookCourseButton = styled(Button)`
    margin-right: 10px;

    @media ${device.tablet} {
        margin-bottom: 10px;
    }

    @media ${device.mobileM} {
        margin-right: 5px;
    }
`

const CoursesPage = ({ data }) => (
    <Layout>
        <SEO
            title="Courses"
            description="We deliver Driver CPC courses to individuals and organisations, online or at our state of the art offices."
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
                <h1>Courses</h1>
                <p>
                    Verrdi Transport Support Services Ltd. delivers Driver CPC
                    courses for individual drivers either online or in our brand
                    new state of the art training room at our offices in Hull.
                </p>
                <p>
                    We are also happy to chat to those organisations that employ
                    drivers and you would like us to deliver their CPC training
                    either at your premises or in our offices.
                </p>

                <h3>Driver CPC</h3>
                <p>
                    In order to complete your Driver CPC certification you need
                    to complete the following seven courses within one month of
                    the time you finish the first course.
                </p>
                <p>
                    Visit each individual course page for details about what the
                    course is about and its contents.
                </p>
                <ul>
                    <StyledListItem fullWidth>
                        <span>
                            <Link to="/health-and-safety-and-challenging-driving-conditions/">
                                Health & Safety and Challenging Driving
                                Conditions
                            </Link>
                        </span>
                    </StyledListItem>
                    <StyledListItem fullWidth>
                        <span>
                            <Link to="/driver-compliance/">
                                Driver Compliance
                            </Link>
                        </span>
                    </StyledListItem>
                    <StyledListItem fullWidth>
                        <span>
                            <Link to="/driver-welfare-customer-care-and-security/">
                                Driver Welfare, Customer Care and Security
                            </Link>
                        </span>
                    </StyledListItem>
                    <StyledListItem fullWidth>
                        <span>
                            <Link to="/challenging-driving-conditions-and-hgv-safe-loading/">
                                Challenging Driving Conditions & HGV Safe
                                Loading
                            </Link>
                        </span>
                    </StyledListItem>
                    <StyledListItem fullWidth>
                        <span>
                            <Link to="/health-and-safety-and-lgv-safe-loading/">
                                Health & Safety and LGV Safe Loading
                            </Link>
                        </span>
                    </StyledListItem>
                    <StyledListItem fullWidth>
                        <span>
                            <Link to="/driver-essentials/">
                                Driver Essentials
                            </Link>
                        </span>
                    </StyledListItem>
                    <StyledListItem fullWidth>
                        <span>
                            <Link to="/traffic-law-incidents-and-vulnerable-road-users/">
                                Traffic Law Incidents and Vulnerable Road Users
                            </Link>
                        </span>
                    </StyledListItem>
                </ul>

                <h3>Multi-booking discount</h3>
                <p>
                    We offer a discount if you choose to book all of these
                    courses at once, email us or give us a call if you would
                    prefer to pre-book all of your courses at once.
                </p>
            </Content>
            <SideColumn social links docs cpc />
        </Container>
    </Layout>
)

export const query = graphql`
    query CoursesPageQuery {
        bannerImg: file(relativePath: { eq: "courses-banner.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxHeight: 350) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default CoursesPage
