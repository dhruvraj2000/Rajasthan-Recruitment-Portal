import React from 'react'
import Language from "../data/Language";

export default function Footer({ currentLang }){
  return (


  <div>

    <footer className="footer-container">
<div className="footer-blue-wrapper">
  <div className="footer-blue-strip"></div>


    </div>
      <div className="footer-grid">
        <div class="footer1">
          <img alt='State Recruitment Portal logo' src='withouttextlogo.svg' />
          <p className='footer-img-header'>State Recruitment Portal</p>
        </div>
        <div>
          <h4 className="footer-heading">State Recruitment Portal</h4>
          <ul>

            <li><a>{Language[currentLang].homePage}</a></li>
            <li><a>{Language[currentLang].ssoid}</a></li>
            <li><a>{Language[currentLang].admitcard}</a></li>
            <li><a>{Language[currentLang].result}</a></li>
            <li><a>{Language[currentLang].faqs}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Policies</h4>
          <ul>
            <li><a>{Language[currentLang].aadhaarPrivacyPolicy}</a></li>
            <li><a>{Language[currentLang].termsConditions}</a></li>
            <li><a>{Language[currentLang].dataProtectionRules}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Contact Us</h4>
          <ul>
            <li>{Language[currentLang].helpdesk}: 7340557555</li>
            <li>{Language[currentLang].Timing}: 9:30 AM – 6:00 PM</li>
            <li>{Language[currentLang].Email}: <a href="mailto:recruitmenthelpdesk@rajasthan.gov.in" className='footer-email' >recruitmenthelpdesk@rajasthan.gov.in</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-copy">© 2025 RSRP Portal. All Rights Reserved.</div>
    </footer>
    </div>

  )
}
