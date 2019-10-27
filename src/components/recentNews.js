import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { device } from "../utils/device"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  h2 {
    font-size: 30px;
    font-weight: 500;
    margin: 0 0 40px 0;
  }

  @media ${device.tablet} {
    h2 {
      margin-top: 75px;
    }
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`

const StyledLink = styled(Link)`
  width: 100%;
  color: #fff;
  font-size: 14px;
  border-bottom: 2px solid ${props => props.theme.yellow};
  padding: 10px 0;
  margin: 0;
  text-decoration: none;
`

const RecentNews = () => {
  const data = useStaticQuery(graphql`
    query RecentNewsQuery {
      allContentfulNewsItem(sort: { fields: date, order: DESC }, limit: 5) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)
  return (
    <Container>
      <h2>Recent News</h2>
      {data.allContentfulNewsItem.edges.map((item, i) => (
        <StyledLink key={i} to={item.node.slug}>
          {item.node.title}
        </StyledLink>
      ))}
    </Container>
  )
}

export default RecentNews
