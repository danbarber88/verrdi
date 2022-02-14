import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"
import dayjs from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

dayjs.extend(advancedFormat)

const Container = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.24),
        0px -1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    @media ${device.mobileL} {
        flex-direction: column;
    }
`

const Image = styled.div`
    background: ${props => `no-repeat url(${props.img})`};
    width: 132px;
    height: 108px;
    margin: 15px 0 15px 15px;

    @media ${device.laptop} {
        display: none;
    }
`

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px;
    font-size: 14px;
`

const Name = styled.h5`
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;

    ul {
        margin: 0;
        list-style: none;

        li {
            font-size: 12px;
            margin-bottom: 2.5px;
        }
    }

    li:last-child {
        margin: 0;
    }

    .red {
        color: #ae0707;
        font-weight: 500;
    }

    @media ${device.mobileL} {
        flex-direction: column;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const Button = styled.a`
    text-align: center;
    padding: 7.5px 10px;
    background-color: ${props => props.theme.yellow};
    color: #fff;
    border-radius: 2px;
    font-weight: bold;
    text-decoration: none;
    min-width: 124px;
    margin-top: 10px;
`

const StyledListItem = styled.li`
    display: flex;
    align-items: center;
`

const Icon = styled(FontAwesomeIcon)`
    margin-right: 10px;
    color: darkgray;
`

const EventCard = props => {
    return (
        <Container>
            {props.image && <Image img={props.image} />}
            <TextContainer>
                <Name>{props.name}</Name>
                <Info>
                    <div>
                        <ul>
                            <StyledListItem>
                                <Icon icon={["far", "calendar-alt"]} />
                                {`${props.startDate} - ${props.endDate}`}
                            </StyledListItem>
                            {props.placesRemaining <= 5 ? (
                                props.placesRemaining === 0 ? (
                                    <StyledListItem>
                                        <Icon icon={["far", "user"]} />
                                        <span className="red">SOLD OUT</span>
                                    </StyledListItem>
                                ) : (
                                    <StyledListItem>
                                        <Icon icon={["far", "user"]} />
                                        <span className="red">
                                            Only {props.placesRemaining} Places
                                            remaining
                                        </span>
                                    </StyledListItem>
                                )
                            ) : (
                                <StyledListItem>
                                    <Icon icon={["far", "user"]} />
                                    {props.placesRemaining} Places remaining
                                </StyledListItem>
                            )}
                            <StyledListItem>
                                <Icon icon={["fa", "map-marker-alt"]} />
                                {props.online
                                    ? `Online, ${props.onlineVenue}`
                                    : "Classroom"}
                            </StyledListItem>
                        </ul>
                    </div>
                    <ButtonContainer>
                        {props.placesRemaining === 0 ? (
                            <Button href={props.url} target="_blank">
                                Details
                            </Button>
                        ) : (
                            <Button href={props.url} target="_blank">
                                Book Course
                            </Button>
                        )}
                    </ButtonContainer>
                </Info>
            </TextContainer>
        </Container>
    )
}

export default EventCard
