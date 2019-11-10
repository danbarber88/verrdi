import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"
import dayjs from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat"

dayjs.extend(advancedFormat)

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.24),
    0px -1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`

const Image = styled.div`
  background: ${props => `url(${props.img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 400px;
  margin: 0;
  border-radius: 10px 0 0 10px;

  @media ${device.laptop} {
    display: none;
  }

  @media ${device.mobileL} {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 200px;
    display: block;
  }
`

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  font-size: 14px;
`

const Name = styled.h5`
  font-size: 24px;
  margin-bottom: 10px;
`

const CourseDate = styled.p`
  line-height: 14px;
  margin-bottom: 2.5px;
  font-weight: 500;
`

const CourseTime = styled.p`
  font-weight: 500;
  color: #8f8f8f;
  margin: 0;
`

const Spacer = styled.div`
  width: 100%;
  height: 1px;
  background-color: #8f8f8f;
  margin: 20px 0;
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    margin: 0 0 0 20px;
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

const ButtonAndPrice = styled.div`
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
`

const Price = styled.div`
  color: #006738;
  font-size: 24px;
  text-align: right;
  margin: 15px 0;

  @media ${device.mobileL} {
    text-align: center;
    font-size: 36px;
  }
`

const EventCard = props => {
  return (
    <Container>
      {props.image && <Image img={props.image} />}
      <TextContainer>
        <Name>{props.name}</Name>
        <CourseDate>{dayjs(props.startDate).format("dddd Do MMMM")}</CourseDate>
        <CourseTime>
          {dayjs(props.startDate).format("h:mma") +
            " - " +
            dayjs(props.endDate).format("h:mma")}
        </CourseTime>
        <Spacer />
        <Info>
          <div>
            <ul>
              {props.placesRemaining <= 5 ? (
                props.placesRemaining === 0 ? (
                  <li>
                    <span className="red">SOLD OUT</span>
                  </li>
                ) : (
                  <li>
                    <span className="red">
                      Only {props.placesRemaining} Places remaining
                    </span>
                  </li>
                )
              ) : (
                <li>{props.placesRemaining} Places remaining</li>
              )}
              <li>
                {props.street}, <br />
                {props.city}, {props.postCode}
              </li>
              <li>Free onsite parking</li>
            </ul>
          </div>
          <ButtonAndPrice>
            <Price>£{props.price}</Price>
            {props.placesRemaining === 0 ? (
              <Button href={props.url} target="_blank">
                Details
              </Button>
            ) : (
              <Button href={props.url} target="_blank">
                Book Course
              </Button>
            )}
          </ButtonAndPrice>
        </Info>
      </TextContainer>
    </Container>
  )
}

export default EventCard
