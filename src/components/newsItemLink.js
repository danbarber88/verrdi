import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { device } from "../utils/device"

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 40px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);

    @media ${device.mobileL} {
        flex-direction: column;
        justify-content: center;
    }
`

const ImageLink = styled.div`
    width: 17em;
    height: 150px;

    @media ${device.mobileL} {
        width: 100%;
        height: 80vw;
        margin: 0 auto;
    }
`

const StyledImg = styled(Img)`
    width: 150px;
    height: 150px;

    @media ${device.mobileL} {
        width: 100%;
        height: 100%;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;

    @media ${device.mobileL} {
        margin: 20px 0 0 0;
    }
`

const Title = styled(Link)`
    font-size: 22px;
    font-weight: 600;
    line-height: 24px;
    margin: 0;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
`

const PostedDate = styled.p`
    font-size: 12px;
    margin: 0 0 15px 0;
`

const ReadMore = styled(Link)`
    color: ${props => props.theme.green};
    font-weight: 600;
    text-decoration: none;
`

const NewsItemLink = ({ slug, img, title, date, excerpt }) => (
    <Container>
        <ImageLink>
            <Link to={`/${slug}/`}>
                <StyledImg fluid={img} />
            </Link>
        </ImageLink>

        <TextContainer>
            <div>
                <Title to={`/${slug}/`}>{title}</Title>
                <PostedDate>{date}</PostedDate>
            </div>
            <div
                dangerouslySetInnerHTML={{
                    __html: excerpt,
                }}
            />
            <ReadMore to={`/${slug}/`}>Read more</ReadMore>
        </TextContainer>
    </Container>
)

export default NewsItemLink
