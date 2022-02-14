import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import SideColumn from "../components/sideColumn"
import { Container, Content } from "../components/containers"

const PeriodicDriverCPCTrainingPage = ({ data }) => (
    <Layout>
        <SEO
            title="What is Driver CPC?"
            description="The main aim of Driver CPC is to ensure better trained drivers, who are up to date with current legislation."
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
                <h1>What is Driver CPC?</h1>
                <p>
                    The most important thing to know is that professional bus,
                    coach and lorry drivers (vehicles over 3.5t) are now
                    required to hold a Driver CPC (Certificate of Professional
                    Competence) licence in addition to a vocational driving
                    licence. So whether you’re coming into the industry new, are
                    an existing driver or are responsible for a fleet of
                    drivers, it is imperative that you are aware of how to
                    comply with Driver CPC legislation and the correct licensing
                    of drivers.
                </p>
                <h3>The aims of Driver CPC</h3>
                <p>
                    The main aim of Driver CPC is to ensure better trained
                    drivers, who are up to date with current legislation, and to
                    help reduce road casualties – ultimately resulting in
                    improved road safety.
                </p>
                <h3>The main benefits of CPC</h3>
                <ul>
                    <li>Lower insurance premiums due to fewer accidents</li>
                    <li>Less business interruption due to fewer accidents</li>
                    <li>
                        Less wear and tear on vehicles due to better driving
                        behaviour
                    </li>
                    <li>Increased fuel economy</li>
                    <li>Improved staff retention</li>
                </ul>
                <h2>How to comply with Driver CPC regulations</h2>
                <p>
                    The Driver CPC Initial Qualification route is for any new
                    drivers hoping to enter the road haulage or passenger
                    carrying industries.
                </p>
                <p>
                    Initial qualification consists of 4 parts, all of which
                    drivers must pass to qualify.
                </p>
                <ul>
                    <li>
                        Part 1 – theory test (this includes a multiple-choice
                        and hazard perception test)
                    </li>
                    <li>Part 2 – Driver CPC case studies test</li>
                    <li>Part 3 – driving ability test</li>
                    <li>Part 4 – Driver CPC practical demonstration test</li>
                </ul>
                <p>
                    If successful, drivers will be issued with a driver
                    qualification card which must be kept with them at all times
                    when driving professionally, and which will be valid for
                    five years.
                </p>
                <h2>Periodic Driver CPC Training</h2>
                <p>
                    Following initial qualification drivers must then complete
                    35 hours of periodic training every five years, if they want
                    to keep their Driver CPC status. Drivers can check online
                    for the number of hours of CPC training that they have
                    completed.
                </p>
                <p>
                    Only training that has been approved and delivered by a
                    JAUPT registered provider will count towards certification.
                    Driver CPC Courses will qualify drivers for a minimum of
                    seven hours for a one day course up to the full 35 hours for
                    a 5 day course. Courses can be selected to not only fulfil
                    driver CPC, but also to enhance drivers’ skills and deliver
                    essential driver training.
                </p>
                <h2>Driver CPC exemptions</h2>
                <p>
                    Whilst Driver CPC regulations will apply to the vast
                    majority of cases there are certain instances where
                    exemptions apply. Drivers do not need a Driver CPC licence
                    if the vehicle they drive:
                </p>
                <ul>
                    <li>Has a maximum authorised speed not exceeding 28mph.</li>
                    <li>
                        Is used by, or under the control of, the armed forces,
                        civil defence, the fire service and forces responsible
                        for maintaining public order.
                    </li>
                    <li>
                        Is undergoing road tests for technical development,
                        repair or maintenance purposes.
                    </li>
                    <li>
                        Is a new or rebuilt vehicle which has not yet been put
                        into service.
                    </li>
                    <li>
                        Is used in states of emergency or assigned to rescue
                        missions.
                    </li>
                    <li>
                        Is used for driving lessons for those wanting to obtain
                        a driving licence or a Driver CPC.
                    </li>
                    <li>
                        Is used for non-commercial carriage of passengers or
                        goods, for personal use.
                    </li>
                    <li>
                        Is carrying material or equipment to be used by the
                        driver in the course of his or her work, provided that
                        driving the vehicle is not the driver’s principal
                        activity.
                    </li>
                </ul>
            </Content>
            <SideColumn links docs cpc />
        </Container>
    </Layout>
)

export const query = graphql`
    query PeriodicDriverCPCTrainingPageQuery {
        bannerImg: file(relativePath: { eq: "about-banner.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxHeight: 350) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default PeriodicDriverCPCTrainingPage
