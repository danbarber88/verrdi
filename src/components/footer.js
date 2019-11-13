import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"
import Logo from "../images/footer-logo.svg"
import BottomLogo from "../images/footer-bottom-logo.svg"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import RecentNews from "./recentNews"

const Wrapper = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.green};
  border-top: 15px solid ${props => props.theme.lightGreen};
  padding: 100px 0 15px 0;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1275px;
  margin: 0 auto;
  color: #fff;
  line-height: 32px;
  padding: 0 15px;
  p {
    margin: 0;
  }

  @media ${device.tablet} {
    width: 425px;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`

const StyledLogo = styled(Logo)`
  margin-bottom: 30px;
`

const Email = styled.a`
  display: block;
  color: ${props => props.theme.yellow};
  margin-top: 30px;
  text-decoration: none;
`

const Phone = styled.a`
  display: block;
  margin-bottom: 30px;
  text-decoration: none;
  color: #fff;
`

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 75px;
  font-size: 14px;
  line-height: 14px;

  br {
    display: none;
  }

  span {
    padding: 0 5px;
  }

  .policy-link {
    color: #fff;
  }

  .social-link {
    color: ${props => props.theme.yellow};
  }

  @media ${device.laptop} {
    justify-content: center;
  }

  @media ${device.tablet} {
    br {
      display: block;
    }

    span {
      text-align: center;
      line-height: 24px;

      span:first-child {
        display: none;
      }
    }
  }
`

const Copyright = styled.div`
  display: flex;
  align-items: flex-end;

  @media ${device.laptop} {
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    order: 1;
  }

  @media ${device.tablet} {
    .tablet-hide {
      display: none;
    }
  }
`

const StyledBottomLogo = styled(BottomLogo)`
  margin-bottom: -7.5px;

  @media ${device.tablet} {
    display: block;
    margin: 0 auto;
    height: 50px;
    width: 50px;
    margin-bottom: 20px;
  }
`

const IconContainer = styled.div`
  width: 175px;
  display: flex;
  justify-content: space-between;
  font-size: 40px;
  color: ${props => props.theme.yellow};
`

const Icon = styled(FontAwesomeIcon)`
  height: 40px;
  width: 40px;
`

const Footer = () => (
  <Wrapper>
    <Container>
      <div>
        <StyledLogo />
        <p>
          Compass House Business Centre
          <br /> Empringham Street
          <br /> Hull
          <br /> HU9 1RP
        </p>
        <Email href="mailto:sales@verrdi.co.uk">sales@verrdi.co.uk</Email>
        <Phone href="tel:01482298119">01482 298119</Phone>
        <p>Company Number: 12041302</p>
        <p>Consortium Member: AC01885</p>
      </div>

      <RecentNews />

      <Bottom>
        <Copyright>
          <span>
            <StyledBottomLogo /> © {new Date().getFullYear()} Verrdi Transport
            Support Services Ltd
            <span className="tablet-hide"> | </span>
            <br />
            <Link to="/cookie-policy" className="policy-link">
              Cookie Policy
            </Link>
            <span> | </span>
            <a
              target="_blank"
              href="/verrdi-privacy-policy.pdf"
              className="policy-link"
            >
              Privacy Policy
            </a>
          </span>
        </Copyright>
        <IconContainer>
          <a
            target="_blank"
            href="https://www.instagram.com/verrditss/"
            className="social-link"
            rel="noopener noreferrer nofollow"
          >
            <Icon icon={["fab", "instagram"]} />
          </a>
          {/* <a
            target="_blank"
            href="https://www.linkedin.com/company/verrdi-training-recruitment-ltd/"
            className="social-link"
            rel="noopener noreferrer nofollow"
          >
            <Icon icon={["fab", "linkedin"]} />
          </a> */}
          <a
            target="_blank"
            href="https://www.facebook.com/verrditss/"
            className="social-link"
            rel="noopener noreferrer nofollow"
          >
            <Icon icon={["fab", "facebook-square"]} />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/LtdVerrdi"
            className="social-link"
            rel="noopener noreferrer nofollow"
          >
            <Icon icon={["fab", "twitter"]} />
          </a>
        </IconContainer>
      </Bottom>
    </Container>
  </Wrapper>
)

export default Footer
