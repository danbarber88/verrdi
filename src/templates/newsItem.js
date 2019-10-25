import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { Container, Content } from "../components/containers"
import SideColumn from "../components/sideColumn"

const StyledImg = styled(Img)`
  width: 100%;
  margin: 40px 0;
`

const NewsPage = ({ data }) => (
  <Layout>
    <SEO title="News" />
    <Banner textWidth="553px" img={data.bannerImg.childImageSharp.fluid}>
      <p>
        The latest industry news from{" "}
        <span className="yellow-text">Verrdi Transport Support Services</span>.
      </p>
    </Banner>
    <Container>
      <Content>
        <h1>{data.newsItem.title}</h1>
        {data.newsItem.mainImage && (
          <StyledImg fluid={data.newsItem.mainImage.fluid} />
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: data.newsItem.mainText.childMarkdownRemark.html,
          }}
        />
      </Content>
      <SideColumn info faq cpc></SideColumn>
    </Container>
  </Layout>
)

export const query = graphql`
  query NewsItemPageQuery($slug: String!) {
    bannerImg: file(relativePath: { eq: "news-banner.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 350) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    newsItem: contentfulNewsItem(slug: { eq: $slug }) {
      title
      slug
      mainImage {
        fluid(
          resizingBehavior: FILL
          cropFocus: FACES
          maxWidth: 800
          maxHeight: 400
          quality: 100
        ) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      mainText {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default NewsPage
