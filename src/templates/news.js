import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { Container, Content } from "../components/containers"
import SideColumn from "../components/sideColumn"
import NewsItemLink from "../components/newsItemLink"
import { Link } from "gatsby"
import { device } from "../utils/device"

const PageControls = styled.div`
  width: 100%;
  font-size: 18px;

  a {
    margin: 15px 0;
    color: ${props => props.theme.green};
    font-weight: 500;
  }

  .prev {
    float: left;
  }

  .next {
    float: right;
  }

  @media ${device.mobileL} {
    a {
      margin: 30px 0 60px 0;
    }
  }
`

const NewsPage = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/news" : `news/page-${currentPage - 1}/`
  const nextPage = `news/page-${currentPage + 1}/`

  return (
    <Layout>
      <SEO
        title="News"
        description="The latest industry relevant news form Verrdi Transport Support Services"
      />
      <Banner
        textWidth="553px"
        alt="Trucks parked at a service station"
        img={data.bannerImg.childImageSharp.fluid}
      >
        <p>
          The latest industry news from{" "}
          <span className="yellow-text">Verrdi Transport Support Services</span>
          .
        </p>
      </Banner>
      <Container>
        <Content>
          <h1>News</h1>
          {data.newsItems.edges.map((newsItem, i) => (
            <NewsItemLink
              key={i}
              slug={newsItem.node.slug}
              img={
                newsItem.node.mainImage
                  ? newsItem.node.mainImage.fluid
                  : data.defaultThumb.childImageSharp.fluid
              }
              title={newsItem.node.title}
              date={newsItem.node.date}
              excerpt={newsItem.node.mainText.childMarkdownRemark.excerpt}
            />
          ))}

          <PageControls>
            {!isFirst && (
              <Link className="prev" to={prevPage} rel="prev">
                {"<"} Previous Page
              </Link>
            )}
            {!isLast && (
              <Link className="next" to={nextPage} rel="next">
                Next Page >
              </Link>
            )}
          </PageControls>
        </Content>
        <SideColumn links docs cpc></SideColumn>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query NewsPageQuery($skip: Int!, $limit: Int!) {
    bannerImg: file(relativePath: { eq: "news-banner.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 350) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    newsItems: allContentfulNewsItem(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          date(formatString: "Do MMMM YYYY")
          title
          slug
          mainImage {
            fluid(
              resizingBehavior: FILL
              cropFocus: FACES
              maxWidth: 400
              maxHeight: 400
              quality: 100
            ) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          mainText {
            childMarkdownRemark {
              excerpt(pruneLength: 125, format: HTML)
            }
          }
        }
      }
    }
    defaultThumb: file(relativePath: { eq: "default-thumbnail.png" }) {
      childImageSharp {
        fluid(maxHeight: 400, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default NewsPage
