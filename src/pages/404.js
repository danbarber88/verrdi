import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "../utils/device"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

const Container = styled.div`
    margin: 150px 20px;
    color: ${props => props.theme.green};
    text-align: center;
`

const Header = styled.h1`
    font-size: 4rem;
    @media ${device.tablet} {
        font-size: 2rem;
    }
`

const Text = styled.p`
    font-size: 2rem;
    @media ${device.tablet} {
        font-size: 1rem;
    }
`

const NotFoundPage = props => (
    <Layout>
        <SEO title="404: Not found" />
        <Container>
            <Header>NOT FOUND</Header>
            <Text>You just hit a page that doesn't exist.</Text>
            <Link to="/">
                <Button>Go Home</Button>
            </Link>
        </Container>
    </Layout>
)
export default NotFoundPage
