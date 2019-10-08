import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"
import Logo from "../images/logo.svg"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Wrapper = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.green};
  border-top: 15px solid ${props => props.theme.lightGreen};
  padding: 100px 15px 15px 15px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1275px;
  margin: 0 auto;
  color: #fff;
  line-height: 32px;

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

const RecentNews = styled.div`
  width: 400px;

  h2 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  ul {
    list-style: none;
    margin: 0;
    width: 100%;
    font-size: 14px;
  }

  li {
    border-bottom: 2px solid ${props => props.theme.yellow};
    padding: 10px 0;
    margin: 0;
  }

  @media ${device.tablet} {
    h2 {
      margin-top: 75px;
    }
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`

const StyledLogo = styled(Logo)`
  margin-bottom: 30px;

  .verrdi-logo-text {
    fill: #fff;
  }
`

const Email = styled.a`
  display: block;
  color: ${props => props.theme.yellow};
  margin-top: 30px;
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
`

const IconContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  font-size: 40px;
  color: ${props => props.theme.yellow};
`

const Footer = () => (
  <Wrapper>
    <Container>
      <div>
        <StyledLogo />
        <p>
          123 Unknown Street
          <br /> Hull
          <br /> HU1 5TK
        </p>
        <Email mailto="sales@verrdi.co.uk">sales@verrdi.co.uk</Email>
        <Phone href="tel:01482298119">01482 298119</Phone>
        <p>Company Number: 12041302</p>
        <p>Consortium Member: AC01885</p>
      </div>
      <RecentNews>
        <h2>Recent News</h2>
        <ul>
          <li>Transport Management Training Courses</li>
          <li>Transport Management Training In Hull</li>
          <li>CPC Training Courses Near Me</li>
          <li>Affordable CPC Training Courses In Hull</li>
          <li>International Haulage Training Courses</li>
        </ul>
      </RecentNews>
      <Bottom>
        <Copyright>
          <span>
            © {new Date().getFullYear()} Verrdi Training & Recruitment Ltd
            <span> | </span>
            <br />
            <Link to="/cookie-policy" className="policy-link">
              Cookie Policy
            </Link>
            <span> | </span>
            <Link to="/privacy-policy" className="policy-link">
              Privacy Policy
            </Link>
          </span>
        </Copyright>
        <IconContainer>
          <a
            target="_blank"
            href="https://www.instagram.com/verrditrainingandrecruitment/"
            className="social-link"
            rel="noopener noreferrer nofollow"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/verrdi-training-recruitment-ltd/"
            className="social-link"
            rel="noopener noreferrer nofollow"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/verrditrainingandrecruitmentltd/"
            className="social-link"
            rel="noopener noreferrer nofollow"
          >
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/LtdVerrdi"
            className="social-link"
            rel="noopener noreferrer nofollow"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
        </IconContainer>
      </Bottom>
    </Container>
  </Wrapper>
)

export default Footer
