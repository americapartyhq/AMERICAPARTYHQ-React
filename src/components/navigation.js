import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div
      id={props.navigationId}
      className={`navigation-container1 ${props.rootClassName} `}
    >
      <nav className="navigation-root">
        <div className="navigation-container">
          <Link to="/">
            <div
              aria-label="AmericaPartyHQ Home"
              className="navigation-thq-navigation-brand-elm1 navigation-brand"
            >
              <div className="navigation-logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m12 6l4 6l5-4l-2 10H5L3 8l5 4z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span className="section-subtitle navigation-brand-text">
                AmericaPartyHQ
              </span>
            </div>
          </Link>
          <div className="navigation-links-desktop">
            <a href="/city-guides">
              <div className="navigation-link">
                <span>City Guides</span>
              </div>
            </a>
            <a href="/tonight">
              <div className="navigation-link">
                <span>Tonight</span>
              </div>
            </a>
            <a href="/vip">
              <div className="navigation-link">
                <span>VIP Inquiry</span>
              </div>
            </a>
          </div>
          <div className="navigation-actions">
            <a href="/sign">
              <div className="navigation-signup-btn btn-sm btn btn-primary">
                <span>Sign Up</span>
              </div>
            </a>
            <button
              id="nav-mobile-toggle"
              aria-label="Toggle Menu"
              aria-controls="mobile-menu-overlay"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 8h16M4 16h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div id="mobile-menu-overlay" className="navigation-mobile-overlay">
        <div className="navigation-overlay-header">
          <a href="/">
            <div className="navigation-brand">
              <div className="navigation-logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m12 6l4 6l5-4l-2 10H5L3 8l5 4z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span className="section-subtitle navigation-brand-text">
                AmericaPartyHQ
              </span>
            </div>
          </a>
          <button
            id="nav-mobile-close"
            aria-label="Close Menu"
            className="navigation-mobile-close"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <div className="navigation-overlay-links">
            <a href="/city-guides">
              <div className="navigation-overlay-link">
                <span>City Guides</span>
              </div>
            </a>
            <a href="/tonight">
              <div className="navigation-overlay-link">
                <span>Tonight</span>
              </div>
            </a>
            <a href="/vip-inquiry">
              <div className="navigation-overlay-link">
                <span>VIP Inquiry</span>
              </div>
            </a>
          </div>
          <div className="navigation-overlay-footer">
            <a href="/signup">
              <div className="navigation-full-btn btn btn-primary btn-lg">
                <span>Sign Up</span>
              </div>
            </a>
            <p className="section-content navigation-overlay-tagline">
              The authority on nightlife.
            </p>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const mobileToggle = document.getElementById("nav-mobile-toggle")
  const mobileClose = document.getElementById("nav-mobile-close")
  const mobileOverlay = document.getElementById("mobile-menu-overlay")

  const openMenu = () => {
    mobileOverlay.classList.add("is-active")
    mobileToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    mobileOverlay.classList.remove("is-active")
    mobileToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  mobileToggle.addEventListener("click", openMenu)
  mobileClose.addEventListener("click", closeMenu)

  // Close menu when clicking on a link
  const overlayLinks = mobileOverlay.querySelectorAll(".navigation-overlay-link")
  overlayLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  // Handle ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("is-active")) {
      closeMenu()
    }
  })

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 767 && mobileOverlay.classList.contains("is-active")) {
      closeMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Navigation.defaultProps = {
  navigationId: '',
  rootClassName: '',
}

Navigation.propTypes = {
  navigationId: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navigation
