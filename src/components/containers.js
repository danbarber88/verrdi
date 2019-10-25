import styled from "styled-components"
import { device } from "../utils/device"

// Containers shared on most pages except the home page.

export const Container = styled.div`
  max-width: 1275px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px 15px;

  @media ${device.tablet} {
    flex-wrap: wrap;
    padding: 40px 15px 15px 15px;
  }
`

export const Content = styled.section`
  max-width: 830px;
  padding-right: 45px;

  @media ${device.laptop} {
    padding-right: 20px;
  }

  @media ${device.tablet} {
    padding-right: 0;
  }
`
