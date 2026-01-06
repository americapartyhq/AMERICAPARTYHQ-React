import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div id={props.footerId} className="footer-container1">
      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-main-grid">
            <div className="footer-brand-column">
              <a href="Homepage">
                <div className="footer-logo">
                  <span className="footer-logo-text">
                    <span>
                      {' '}
                      AmericaParty
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="footer-thq-footer-logo-accent-elm">
                      HQ
                    </span>
                  </span>
                </div>
              </a>
              <p className="footer-description">
                The ultimate authority on high-end nightlife. Discover the right
                party, at the right time, in the right city. Curated for the
                elite club-goer.
              </p>
              <div className="footer-social-wrapper">
                <a
                  href="https://www.instagram.com/americaparty.hq/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    aria-label="Instagram"
                    className="footer-thq-footer-social-link-elm1 footer-social-link"
                  >
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                        width="20"
                        height="20"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.tiktok.com/@americapartyhq"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    aria-label="TikTok"
                    className="footer-thq-footer-social-link-elm2 footer-social-link"
                  >
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 7.917v4.034A9.95 9.95 0 0 1 16 10v4.5a6.5 6.5 0 1 1-8-6.326V12.5a2.5 2.5 0 1 0 4 2V3h4.083A6.005 6.005 0 0 0 21 7.917"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-heading">Platform</h3>
              <nav className="footer-nav">
                <ul className="footer-list">
                  <li className="footer-item">
                    <Link to="/city-guides">
                      <div className="footer-thq-footer-link-elm1 footer-link">
                        <span>City Guides</span>
                      </div>
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link to="/tonight">
                      <div className="footer-thq-footer-link-elm2 footer-link">
                        <span>Tonight&apos;s Picks</span>
                      </div>
                    </Link>
                  </li>
                  <li className="footer-item">
                    <a
                      href="/contact"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="footer-thq-footer-link-elm3 footer-link">
                        <span>Contact us </span>
                      </div>
                    </a>
                  </li>
                  <a href="/vip" target="_blank" rel="noreferrer noopener">
                    <li className="footer-thq-footer-item-elm4 footer-item">
                      <div className="footer-link">
                        <span>VIP Inquiry</span>
                      </div>
                    </li>
                  </a>
                  <li className="footer-item">
                    <a href="/faq" target="_blank" rel="noreferrer noopener">
                      <div className="footer-thq-footer-link-elm5 footer-link">
                        <span>Help &amp; FAQ</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer-cta-column">
              <h3 className="footer-heading">Join the Elite</h3>
              <p className="footer-subtext">
                Get exclusive access to the best events and VIP tables before
                they&apos;re gone.
              </p>
              <form
                action="/subscribe"
                method="POST"
                data-form-id="b3c2efd2-7ae3-4191-a10e-f7d3df258013"
                className="footer-form"
              >
                <div className="footer-input-group">
                  <input
                    type="email"
                    id="tbl5Ll2muk1Jy41Se"
                    name="email"
                    required="true"
                    placeholder="Enter your email"
                    data-form-field-id="tbl5Ll2muk1Jy41Se"
                    className="footer-input"
                  />
                  <button
                    id="thq_button_QVt-"
                    name="button"
                    type="submit"
                    aria-label="Subscribe"
                    data-form-field-id="thq_button_QVt-"
                    className="footer-form-btn"
                  >
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14m-6 6l6-6m-6-6l6 6"></path>
                    </svg>
                  </button>
                </div>
              </form>
              <div className="footer-badge">
                <span className="footer-badge-dot"></span>
                <span className="footer-badge-text">VIP Concierge Online</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-legal">
              <span className="footer-copyright">
                &amp;copy; 2025 AmericaPartyHQ. All rights reserved.
              </span>
              <div className="footer-legal-links">
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-city-tags">
              <span className="footer-city-tag">Miami</span>
              <span className="footer-city-tag">New York</span>
              <span className="footer-city-tag">Las Vegas</span>
              <span className="footer-city-tag">Los Angeles</span>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
        @keyframes pulse-green {0% {transform: scale(0.95);
opacity: 0.7;}
50% {transform: scale(1.1);
opacity: 1;}
100% {transform: scale(0.95);
opacity: 0.7;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<script defer data-name="footer-logic">
(function(){
  const footerForm = document.querySelector(".footer-form")
  const footerInput = document.querySelector(".footer-input")

  if (footerForm) {
    footerForm.addEventListener("submit", (e) => {
      if (footerInput.value && footerInput.checkValidity()) {
        const btn = footerForm.querySelector(".footer-form-btn")
        const originalContent = btn.innerHTML

        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>'
        btn.style.backgroundColor = "#2ecc71"
        footerInput.value = ""
        footerInput.placeholder = "Welcome to the list"

        setTimeout(() => {
          btn.innerHTML = originalContent
          btn.style.backgroundColor = ""
          footerInput.placeholder = "Enter your email"
        }, 3000)
      }
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  footerId: '',
}

Footer.propTypes = {
  footerId: PropTypes.string,
}

export default Footer
