import React from "react"

const MailChimpForm = () => (
  <div id="mc_embed_signup">
    <form
      action="https://verrdi.us3.list-manage.com/subscribe/post?u=ea339dabdb1164aa7e80038fd&amp;id=af43038a16"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <div className="indicates-required">
          <span className="asterisk">*</span> indicates required
        </div>
        <div className="mc-field-group">
          <label for="mce-COURSE">
            Course interested in <span className="asterisk">*</span>
          </label>
          <select name="COURSE" className="required" id="mce-COURSE">
            <option value="CPC">CPC</option>
          </select>
        </div>
        <div className="mc-field-group">
          <label for="mce-FNAME">
            Forename <span className="asterisk">*</span>
          </label>
          <input type="text" name="FNAME" className="required" id="mce-FNAME" />
        </div>
        <div className="mc-field-group">
          <label for="mce-LNAME">
            Surname <span className="asterisk">*</span>
          </label>
          <input type="text" name="LNAME" className="required" id="mce-LNAME" />
        </div>
        <div className="mc-field-group size1of2">
          <label for="mce-PHONE">Mobile Number </label>
          <input type="text" name="PHONE" classN id="mce-PHONE" />
        </div>
        <div className="mc-field-group size1of2">
          <label for="mce-PHONE_ALT">Alternate Number </label>
          <input type="text" name="PHONE_ALT" className="" id="mce-PHONE_ALT" />
        </div>
        <div className="mc-field-group">
          <label for="mce-EMAIL">
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
          <label for="mce-CPC_EXPIRY-month">Date CPC Expires </label>
          <div className="datefield">
            <span className="subfield dayfield">
              <input
                className="datepart "
                type="text"
                pattern="[0-9]*"
                placeholder="DD"
                size="2"
                maxlength="2"
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
                maxlength="2"
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
                maxlength="4"
                name="CPC_EXPIRY[year]"
                id="mce-CPC_EXPIRY-year"
              />
            </span>
            <span className="small-meta nowrap">( dd / mm / yyyy )</span>
          </div>
        </div>
        <div className="mc-field-group">
          <label for="mce-STATUS">Status </label>
          <select name="STATUS" className="" id="mce-STATUS">
            <option></option>
            <option value="Employed Driver">Employed Driver</option>
            <option value="Agency Driver">Agency Driver</option>
            <option value="Owner Operator">Owner Operator</option>
            <option value="Self Employed / Ltd Co. Driver">
              Self Employed / Ltd Co. Driver
            </option>
            <option value="Haulier">Haulier</option>
          </select>
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
            tabindex="-1"
          />
        </div>
        <div className="clear">
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
          />
        </div>
      </div>
    </form>
  </div>
)

export default MailChimpForm
