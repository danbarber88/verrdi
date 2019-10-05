import "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = styled(Link)`
  display: inline-block;
  text-align: center;
  padding: 7.5px 10px;
  background-color: ${props =>
    props.green ? props.theme.green : props.theme.yellow};
  color: #fff;
  border-radius: 2px;
  font-weight: bold;
  text-decoration: none;
  min-width: 124px;
`

export default Button
