import "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = styled(Link)`
  padding: 10px 20px;
  background-color: ${props =>
    props.green ? props.theme.green : props.theme.yellow};
  color: #fff;
  border-radius: 2px;
  font-weight: bold;
  margin-left: 80px;
  text-decoration: none;
`

export default Button
