import React from 'react'
export default function Footer(){
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div class="footer1">
          <img src='withouttextlogo.svg' />
          <p className='footer-img-header'>State Recruitment Portal</p>
          {/* <h4 className="footer-heading">State Recruitment Portal</h4>
          <ul>
            <li>Home Page</li>
            <li>SSO ID</li>
            <li>Admit Card</li>
            <li>Result</li>
            <li>FAQ</li>
          </ul> */}


        </div>
        <div>
          <h4 className="footer-heading">State Recruitment Portal</h4>
          <ul>

            <li><a>Home Page</a></li>
            <li><a>SSO ID</a></li>
            <li><a>Admit Card</a></li>
            <li><a>Result</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Policies</h4>
          <ul>
            <li><a>Aadhaar Privacy Policy</a></li>
            <li><a>Terms & Conditions</a></li>
            <li><a>Data Protection Rules</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Contact Us</h4>
          <ul>
            <li>Helpdesk: 7340557555</li>
            <li>Timing: 9:30 AM – 6:00 PM</li>
            <li>Email: <a href="mailto:recruitmenthelpdesk@rajasthan.gov.in" className='footer-email' >recruitmenthelpdesk@rajasthan.gov.in</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-copy">© 2025 RSRP Portal. All Rights Reserved.</div>
    </footer>
  )
}
