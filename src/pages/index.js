import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainBanner from "../components/mainBanner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainBanner />
  </Layout>
)

export default IndexPage
