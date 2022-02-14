import React from "react"
import styled from "styled-components"
import Map from "../components/map"
import Wave from "../images/vertical-wave.svg"
import { device } from "../utils/device"

const Container = styled.section`
    display: flex;
    width: 100%;
    height: 650px;
    border-top: 15px solid ${props => props.theme.green};
    border-bottom: 15px solid ${props => props.theme.green};
    z-index: -2;
    margin: -1px 0;

    @media ${device.laptop} {
        flex-direction: column;
        height: auto;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    width: 50%;
    background-color: ${props => props.theme.green};
    padding-right: 20px;

    h1 {
        width: 690px;
        font-weight: 600;
        color: #fff;
        margin-bottom: 25px;
        font-size: 30px;
        line-height: 38px;
    }

    p {
        color: #fff;
        width: 690px;
        margin: 0;
    }

    span {
        color: ${props => props.theme.yellow};
    }

    @media ${device.laptopL} {
        padding-right: 0;

        h1,
        p {
            width: 373px;
        }
    }

    @media ${device.laptop} {
        order: 1;
        width: 100%;
        padding: 100px 15px;
        align-items: center;

        h1,
        p {
            width: auto;
            max-width: 640px;
        }
    }
`

const MapContainer = styled.div`
    position: relative;
    height: 100%;
    width: 50%;
    min-width: 600px;

    @media ${device.laptop} {
        width: 100%;
        min-width: unset;
        height: 400px;
    }
`

const StyledWave = styled(Wave)`
    position: absolute;
    z-index: 1;

    @media ${device.laptop} {
        display: none;
    }
`

const StyledMap = styled(Map)`
    width: 100%;
    height: 100%;
`

const MapSection = () => (
    <Container>
        <TextContainer>
            <h1>
                Verrdi offers multiple training locations across{" "}
                <span>Yorkshire</span> and <span>Lincolnshire</span>
            </h1>
            <p>
                Verrdi Transport Support Services offers Driver CPC Training by
                friendly knowledgeable & experienced trainers, primarily across
                Yorkshire & Lincolnshire but we can offer a nationwide service
                if required. All training venues are chosen for ease of access
                and comfortable surroundings, with refreshments and snacks
                provided as a minimum at each training session.
            </p>
        </TextContainer>
        <MapContainer>
            <StyledWave />
            <StyledMap />
        </MapContainer>
    </Container>
)

export default MapSection
