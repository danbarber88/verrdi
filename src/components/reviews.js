import React, { Component } from "react"
import styled from "styled-components"
import FiveStars from "../images/five-stars.svg"
import FourStars from "../images/four-stars.svg"

const Container = styled.section`
  text-align: center;
  margin: 100px 0 80px 0;
`

const ReviewContainer = styled.div`
  max-width: 1275px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 80px auto 0 auto;
`

const Review = styled.div`
  width: 300px;
  margin: 20px;

  p {
    margin-top: 15px;
  }

  span {
    font-weight: 600;
  }
`

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.theme.green};
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  line-height: 32px;
  padding-left: 2px;
  margin: 0 auto;
`

const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 15px 0;
`

class Reviews extends Component {
  render() {
    return (
      <Container>
        <h1>Customer Reviews</h1>
        <ReviewContainer>
          <Review>
            <Avatar>D</Avatar>
            <Name>Dan Barber</Name>
            <FiveStars />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Review>
          <Review>
            <Avatar>J</Avatar>
            <Name>Jim Smith</Name>
            <FourStars />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim... <span>Read More</span>
            </p>
          </Review>
          <Review>
            <Avatar>R</Avatar>
            <Name>Richard Head</Name>
            <FiveStars />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </Review>
        </ReviewContainer>
      </Container>
    )
  }
}

export default Reviews
