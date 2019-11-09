import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"

const FormContainer = styled.div`
  border-left: 15px solid ${props => props.theme.green};
  background-color: #f1f1f1;

  @media ${device.mobileL} {
    border: none;
  }

  @media ${device.tablet} {
    margin-bottom: 50px;
  }
`

const Button = styled.input`
  text-align: center;
  padding: 7.5px 10px;
  background-color: ${props => props.theme.green};
  color: #fff;
  border-radius: 2px;
  font-weight: bold;
  text-decoration: none;
  min-width: 124px;

  @media ${device.mobileL} {
    width: 96%;
  }
`

const MailChimpForm = () => (
  <FormContainer id="mc_embed_signup">
    <form
      action="https://verrdi.us3.list-manage.com/subscribe/post?u=ea339dabdb1164aa7e80038fd&amp;id=af43038a16"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll">
        <div className="indicates-required">
          <span className="asterisk">*</span> indicates required
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-COURSE">
            Course interested in <span className="asterisk">*</span>
          </label>
          <select name="COURSE" className="required" id="mce-COURSE">
            <option value="CPC">CPC</option>
          </select>
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL">
            Email Address <span className="asterisk">*</span>
          </label>
          <input
            type="email"
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
          />
        </div>
        <div className="mc-field-group size1of2">
          <label htmlFor="mce-FNAME">
            Forename <span className="asterisk">*</span>
          </label>
          <input type="text" name="FNAME" className="required" id="mce-FNAME" />
        </div>
        <div className="mc-field-group size1of2">
          <label htmlFor="mce-LNAME">
            Surname <span className="asterisk">*</span>
          </label>
          <input type="text" name="LNAME" className="required" id="mce-LNAME" />
        </div>
        <div className="mc-field-group size1of2">
          <label htmlFor="mce-PHONE">Mobile Number </label>
          <input type="text" name="PHONE" id="mce-PHONE" />
        </div>
        <div className="mc-field-group size1of2">
          <label htmlFor="mce-PHONE_ALT">Alternate Number </label>
          <input type="text" name="PHONE_ALT" id="mce-PHONE_ALT" />
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-group[26921]">
            Status <span className="asterisk">*</span>
          </label>
          <select
            name="group[26921]"
            className="required REQ_CSS"
            id="mce-group[26921]"
          >
            <option></option>
            <option value="1">Employed Driver</option>
            <option value="2">Agency Driver</option>
            <option value="4">Owner Operator</option>
            <option value="8">Self Employed / Ltd Co. Driver</option>
            <option value="16">Haulier</option>
          </select>
        </div>
        <div className="mc-field-group size1of2">
          <label htmlFor="mce-CPC_EXPIRY-month">Date CPC Expires </label>
          <div className="datefield">
            <span className="subfield dayfield">
              <input
                className="datepart "
                type="text"
                pattern="[0-9]*"
                placeholder="DD"
                size="2"
                maxLength="2"
                name="CPC_EXPIRY[day]"
                id="mce-CPC_EXPIRY-day"
              />
            </span>{" "}
            /
            <span className="subfield monthfield">
              <input
                className="datepart "
                type="text"
                pattern="[0-9]*"
                placeholder="MM"
                size="2"
                maxLength="2"
                name="CPC_EXPIRY[month]"
                id="mce-CPC_EXPIRY-month"
              />
            </span>{" "}
            /
            <span className="subfield yearfield">
              <input
                className="datepart "
                type="text"
                pattern="[0-9]*"
                placeholder="YYYY"
                size="4"
                maxLength="4"
                name="CPC_EXPIRY[year]"
                id="mce-CPC_EXPIRY-year"
              />
            </span>
            <span className="small-meta nowrap">( dd / mm / yyyy )</span>
          </div>
        </div>
        <div id="mce-responses" className="clear">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          ></div>
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          ></div>
        </div>{" "}
        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_ea339dabdb1164aa7e80038fd_af43038a16"
            tabIndex="-1"
          />
        </div>
        <div className="clear">
          <Button type="submit" value="Subscribe" name="subscribe" />
        </div>
      </div>
    </form>
  </FormContainer>
)

export default MailChimpForm
