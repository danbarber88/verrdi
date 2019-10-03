import "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "../utils/device"

const Button = styled(Link)`
  text-align: center;
  padding: 7.5px 10px;
  background-color: ${props =>
    props.green ? props.theme.green : props.theme.yellow};
  color: #fff;
  border-radius: 2px;
  font-weight: bold;
  margin-left: 60px;
  text-decoration: none;
  min-width: 124px;

  @media ${device.laptop} {
    margin-left: 30px;
  }
`

export default Button
