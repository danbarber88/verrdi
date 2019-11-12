import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { device } from "../utils/device"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Container = styled.section`
  margin: 100px 0 80px 0;
`

const Header = styled.h1`
  text-align: center;
`

const TestimonialContainer = styled.div`
  max-width: 1275px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 80px auto 0 auto;
`

const Testimonial = styled.div`
  display: flex;
  width: 550px;
  margin: 20px;

  p {
    margin-top: 15px;
  }

  span {
    font-weight: 600;
  }

  @media ${device.mobileL} {
    flex-direction: column;
  }
`

const QuoteIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.yellow};
  font-size: 36px;
`

const Image = styled(Img)`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-right: 30px;

  @media ${device.mobileL} {
    width: 150px;
    height: 150px;
    margin: 20px auto;
  }
`

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: ${props => props.theme.green};
  color: #fff;
  font-size: 40px;
  font-weight: 500;
  line-height: 32px;
  padding-left: 2px;
  margin-right: 30px;
  text-transform: uppercase;

  @media ${device.mobileL} {
    width: 150px;
    height: 150px;
    margin: 20px auto;
  }
`

const Text = styled.div`
  margin: 20px 0;
`

const Name = styled.div`
  color: ${props => props.theme.green};
  font-size: 28px;
  font-weight: 600;
`

const JobTitle = styled.div`
  font-size: 14px;
  margin: 0;
`

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query TestimonialQuery {
      allContentfulTestimonial(
        sort: { fields: createdAt, order: DESC }
        limit: 2
      ) {
        edges {
          node {
            image {
              fluid(
                resizingBehavior: FILL
                cropFocus: FACES
                maxWidth: 150
                maxHeight: 150
                quality: 100
              ) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            name
            jobTitle
            text {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Header>Testimonials</Header>
      <TestimonialContainer>
        {data.allContentfulTestimonial.edges.map((testimonial, i) => (
          <Testimonial key={i}>
            <div>
              {testimonial.node.image ? (
                <Image fluid={testimonial.node.image.fluid} />
              ) : (
                <Avatar>{testimonial.node.name.charAt(0)}</Avatar>
              )}
            </div>
            <div>
              <QuoteIcon icon={["fa", "quote-left"]} />

              <Text
                dangerouslySetInnerHTML={{
                  __html: testimonial.node.text.childMarkdownRemark.html,
                }}
              />
              <Name>{testimonial.node.name}</Name>
              {testimonial.node.jobTitle && (
                <JobTitle>{testimonial.node.jobTitle}</JobTitle>
              )}
            </div>
          </Testimonial>
        ))}
      </TestimonialContainer>
    </Container>
  )
}

export default Testimonials
