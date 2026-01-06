import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './new-york-browse-free.css'

const NewYorkBrowseFree = (props) => {
  return (
    <div className="new-york-browse-free-container1">
      <Helmet>
        <title>new-york-browse-free - AMERICAPARTYHQ</title>
        <meta
          property="og:title"
          content="new-york-browse-free - AMERICAPARTYHQ"
        />
        <link rel="canonical" href="https://www.americapartyhq.co/newyork" />
      </Helmet>
      <div className="nyc-nightlife-page">
        <Navigation></Navigation>
        <section className="nyc-hero-section">
          <div className="nyc-hero-background">
            <img
              alt="NYC nightlife rooftop view"
              src="https://images.pexels.com/photos/297476/pexels-photo-297476.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="nyc-hero-image"
            />
            <div className="nyc-hero-overlay"></div>
          </div>
          <div className="nyc-hero-content">
            <div className="nyc-hero-text-wrapper">
              <h1 className="hero-title">Nightlife Intelligence - New York</h1>
              <p className="hero-subtitle">Rooftops, clubs, and prime timing</p>
            </div>
          </div>
        </section>
        <section className="nyc-filter-section">
          <div className="nyc-filter-container">
            <div className="nyc-filter-buttons">
              <button id="tonightPeakBtn" className="nyc-filter-btn active">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 6v6l4 2"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
                <span>Tonight&apos;s Peak</span>
              </button>
              <button id="after1amBtn" className="nyc-filter-btn">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 6v10"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
                <span>After 1AM</span>
              </button>
              <button id="musicGenreBtn" className="nyc-filter-btn">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2 5h20M6 12h12m-9 7h6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>By Music Genre</span>
              </button>
            </div>
            <div className="nyc-city-selector">
              <span className="nyc-city-label">City:</span>
              <div className="nyc-city-dropdown">
                <span className="nyc-city-selected">New York City</span>
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m6 9l6 6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="nyc-venues-section">
          <div className="nyc-venues-container">
            <div className="nyc-venue-card">
              <div className="nyc-venue-image-wrapper">
                <img
                  alt="The Heights Rooftop"
                  src="https://images.pexels.com/photos/6154067/pexels-photo-6154067.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="nyc-venue-image"
                />
              </div>
              <div className="nyc-venue-content">
                <h3 className="nyc-venue-name">The Heights Rooftop</h3>
                <div className="nyc-venue-meta">
                  <div className="nyc-venue-timing">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>11:30 PM</span>
                  </div>
                  <div className="nyc-venue-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>4.8</span>
                  </div>
                </div>
                <button className="nyc-venue-btn btn-accent btn">
                  View Guide
                </button>
              </div>
            </div>
            <div className="nyc-venue-card">
              <div className="nyc-venue-image-wrapper">
                <img
                  alt="Lavo NYC"
                  src="https://images.pexels.com/photos/3001170/pexels-photo-3001170.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="nyc-venue-image"
                />
              </div>
              <div className="nyc-venue-content">
                <h3 className="nyc-venue-name">Lavo NYC</h3>
                <div className="nyc-venue-meta">
                  <div className="nyc-venue-timing">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>12:00 AM</span>
                  </div>
                  <div className="nyc-venue-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>4.9</span>
                  </div>
                </div>
                <button className="nyc-venue-btn btn-accent btn">
                  View Guide
                </button>
              </div>
            </div>
            <div className="nyc-venue-card">
              <div className="nyc-venue-image-wrapper">
                <img
                  alt="PHD Rooftop"
                  src="https://images.pexels.com/photos/10475440/pexels-photo-10475440.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="nyc-venue-image"
                />
              </div>
              <div className="nyc-venue-content">
                <h3 className="nyc-venue-name">PHD Rooftop</h3>
                <div className="nyc-venue-meta">
                  <div className="nyc-venue-timing">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>10:45 PM</span>
                  </div>
                  <div className="nyc-venue-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>4.7</span>
                  </div>
                </div>
                <button className="nyc-venue-btn btn-accent btn">
                  View Guide
                </button>
              </div>
            </div>
            <div className="nyc-gated-card nyc-venue-card">
              <div className="nyc-venue-image-wrapper">
                <img
                  alt="Marquee New York"
                  src="https://images.pexels.com/photos/8887197/pexels-photo-8887197.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="nyc-venue-image nyc-blurred"
                />
              </div>
              <div className="nyc-venue-content">
                <h3 className="nyc-venue-name">Marquee New York</h3>
                <div className="nyc-venue-meta nyc-blurred">
                  <div className="nyc-venue-timing">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>--:-- --</span>
                  </div>
                  <div className="nyc-venue-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>-.-</span>
                  </div>
                </div>
                <div className="nyc-gated-overlay">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="nyc-lock-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                        width="18"
                        height="11"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                  </svg>
                  <p className="nyc-gated-text">
                    Premium Intelligence Required
                  </p>
                </div>
              </div>
            </div>
            <div className="nyc-gated-card nyc-venue-card">
              <div className="nyc-venue-image-wrapper">
                <img
                  alt="1 OAK"
                  src="https://images.pexels.com/photos/10420427/pexels-photo-10420427.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="nyc-venue-image nyc-blurred"
                />
              </div>
              <div className="nyc-venue-content">
                <h3 className="nyc-venue-name">1 OAK</h3>
                <div className="nyc-venue-meta nyc-blurred">
                  <div className="nyc-venue-timing">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>--:-- --</span>
                  </div>
                  <div className="nyc-venue-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>-.-</span>
                  </div>
                </div>
                <div className="nyc-gated-overlay">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="nyc-lock-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                        width="18"
                        height="11"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                  </svg>
                  <p className="nyc-gated-text">
                    Premium Intelligence Required
                  </p>
                </div>
              </div>
            </div>
            <div className="nyc-gated-card nyc-venue-card">
              <div className="nyc-venue-image-wrapper">
                <img
                  alt="Avenue"
                  src="https://images.pexels.com/photos/15038085/pexels-photo-15038085.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="nyc-venue-image nyc-blurred"
                />
              </div>
              <div className="nyc-venue-content">
                <h3 className="nyc-venue-name">Avenue</h3>
                <div className="nyc-venue-meta nyc-blurred">
                  <div className="nyc-venue-timing">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>--:-- --</span>
                  </div>
                  <div className="nyc-venue-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>-.-</span>
                  </div>
                </div>
                <div className="nyc-gated-overlay">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="nyc-lock-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                        width="18"
                        height="11"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                  </svg>
                  <p className="nyc-gated-text">
                    Premium Intelligence Required
                  </p>
                </div>
              </div>
            </div>
            <div className="nyc-gated-card nyc-venue-card">
              <div className="nyc-venue-image-wrapper">
                <img
                  alt="Cielo Club"
                  src="https://images.pexels.com/photos/30715673/pexels-photo-30715673.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="nyc-venue-image nyc-blurred"
                />
              </div>
              <div className="nyc-venue-content">
                <h3 className="nyc-venue-name">Cielo Club</h3>
                <div className="nyc-venue-meta nyc-blurred">
                  <div className="nyc-venue-timing">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>--:-- --</span>
                  </div>
                  <div className="nyc-venue-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>-.-</span>
                  </div>
                </div>
                <div className="nyc-gated-overlay">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="nyc-lock-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                        width="18"
                        height="11"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                  </svg>
                  <p className="nyc-gated-text">
                    Premium Intelligence Required
                  </p>
                </div>
              </div>
            </div>
            <div className="nyc-gated-card nyc-venue-card">
              <div className="nyc-venue-image-wrapper">
                <img
                  alt="Tao Downtown"
                  src="https://images.pexels.com/photos/33992822/pexels-photo-33992822.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="nyc-venue-image nyc-blurred"
                />
              </div>
              <div className="nyc-venue-content">
                <h3 className="nyc-venue-name">Tao Downtown</h3>
                <div className="nyc-venue-meta nyc-blurred">
                  <div className="nyc-venue-timing">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>--:-- --</span>
                  </div>
                  <div className="nyc-venue-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>-.-</span>
                  </div>
                </div>
                <div className="nyc-gated-overlay">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="nyc-lock-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                        width="18"
                        height="11"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                  </svg>
                  <p className="nyc-gated-text">
                    Premium Intelligence Required
                  </p>
                </div>
              </div>
            </div>
            <div className="nyc-gated-card nyc-venue-card">
              <div className="nyc-venue-image-wrapper">
                <img
                  alt="Output"
                  src="https://images.pexels.com/photos/15926320/pexels-photo-15926320.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="nyc-venue-image nyc-blurred"
                />
              </div>
              <div className="nyc-venue-content">
                <h3 className="nyc-venue-name">Output</h3>
                <div className="nyc-venue-meta nyc-blurred">
                  <div className="nyc-venue-timing">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>--:-- --</span>
                  </div>
                  <div className="nyc-venue-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>-.-</span>
                  </div>
                </div>
                <div className="nyc-gated-overlay">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="nyc-lock-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                        width="18"
                        height="11"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                  </svg>
                  <p className="nyc-gated-text">
                    Premium Intelligence Required
                  </p>
                </div>
              </div>
            </div>
            <div className="nyc-gated-card nyc-venue-card">
              <div className="nyc-venue-image-wrapper">
                <img
                  alt="Le Bain"
                  src="https://images.pexels.com/photos/2077/sculpture-gold-golden-angel.jpg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="nyc-venue-image nyc-blurred"
                />
              </div>
              <div className="nyc-venue-content">
                <h3 className="nyc-venue-name">Le Bain</h3>
                <div className="nyc-venue-meta nyc-blurred">
                  <div className="nyc-venue-timing">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>--:-- --</span>
                  </div>
                  <div className="nyc-venue-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>-.-</span>
                  </div>
                </div>
                <div className="nyc-gated-overlay">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="nyc-lock-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                        width="18"
                        height="11"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                  </svg>
                  <p className="nyc-gated-text">
                    Premium Intelligence Required
                  </p>
                </div>
              </div>
            </div>
            <div className="nyc-gated-card nyc-venue-card">
              <div className="nyc-venue-image-wrapper">
                <img
                  alt="Dream Downtown"
                  src="https://images.pexels.com/photos/15876095/pexels-photo-15876095.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="nyc-venue-image nyc-blurred"
                />
              </div>
              <div className="nyc-venue-content">
                <h3 className="nyc-venue-name">Dream Downtown</h3>
                <div className="nyc-venue-meta nyc-blurred">
                  <div className="nyc-venue-timing">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>--:-- --</span>
                  </div>
                  <div className="nyc-venue-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>-.-</span>
                  </div>
                </div>
                <div className="nyc-gated-overlay">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="nyc-lock-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                        width="18"
                        height="11"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                  </svg>
                  <p className="nyc-gated-text">
                    Premium Intelligence Required
                  </p>
                </div>
              </div>
            </div>
            <div className="nyc-gated-card nyc-venue-card">
              <div className="nyc-venue-image-wrapper">
                <img
                  alt="The Box"
                  src="https://images.pexels.com/photos/16030440/pexels-photo-16030440.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="nyc-venue-image nyc-blurred"
                />
              </div>
              <div className="nyc-venue-content">
                <h3 className="nyc-venue-name">The Box</h3>
                <div className="nyc-venue-meta nyc-blurred">
                  <div className="nyc-venue-timing">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>--:-- --</span>
                  </div>
                  <div className="nyc-venue-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>-.-</span>
                  </div>
                </div>
                <div className="nyc-gated-overlay">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="nyc-lock-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                        width="18"
                        height="11"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                  </svg>
                  <p className="nyc-gated-text">
                    Premium Intelligence Required
                  </p>
                </div>
              </div>
            </div>
            <div className="nyc-gated-card nyc-venue-card">
              <div className="nyc-venue-image-wrapper">
                <img
                  alt="Up&amp;Down"
                  src="https://images.pexels.com/photos/10317164/pexels-photo-10317164.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="nyc-venue-image nyc-blurred"
                />
              </div>
              <div className="nyc-venue-content">
                <h3 className="nyc-venue-name">Up&amp;Down</h3>
                <div className="nyc-venue-meta nyc-blurred">
                  <div className="nyc-venue-timing">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>--:-- --</span>
                  </div>
                  <div className="nyc-venue-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>-.-</span>
                  </div>
                </div>
                <div className="nyc-gated-overlay">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="nyc-lock-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                        width="18"
                        height="11"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                  </svg>
                  <p className="nyc-gated-text">
                    Premium Intelligence Required
                  </p>
                </div>
              </div>
            </div>
            <div className="nyc-gated-card nyc-venue-card">
              <div className="nyc-venue-image-wrapper">
                <img
                  alt="Paul's Casablanca"
                  src="https://images.pexels.com/photos/15632706/pexels-photo-15632706.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="nyc-venue-image nyc-blurred"
                />
              </div>
              <div className="nyc-venue-content">
                <h3 className="nyc-venue-name">Paul&apos;s Casablanca</h3>
                <div className="nyc-venue-meta nyc-blurred">
                  <div className="nyc-venue-timing">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>--:-- --</span>
                  </div>
                  <div className="nyc-venue-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>-.-</span>
                  </div>
                </div>
                <div className="nyc-gated-overlay">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="nyc-lock-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                        width="18"
                        height="11"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                  </svg>
                  <p className="nyc-gated-text">
                    Premium Intelligence Required
                  </p>
                </div>
              </div>
            </div>
            <div className="nyc-gated-card nyc-venue-card">
              <div className="nyc-venue-image-wrapper">
                <img
                  alt="Schimanski"
                  src="https://images.pexels.com/photos/15757537/pexels-photo-15757537.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="nyc-venue-image nyc-blurred"
                />
              </div>
              <div className="nyc-venue-content">
                <h3 className="nyc-venue-name">Schimanski</h3>
                <div className="nyc-venue-meta nyc-blurred">
                  <div className="nyc-venue-timing">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>--:-- --</span>
                  </div>
                  <div className="nyc-venue-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>-.-</span>
                  </div>
                </div>
                <div className="nyc-gated-overlay">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="nyc-lock-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                        width="18"
                        height="11"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                  </svg>
                  <p className="nyc-gated-text">
                    Premium Intelligence Required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="nyc-premium-section">
          <div className="nyc-premium-container">
            <div className="nyc-premium-icon">
              <svg
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294zM5 21h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h2 className="section-title nyc-premium-title">
              Unlock Premium Intelligence
            </h2>
            <p className="nyc-premium-description section-content">
              Get full access to detailed arrival times, insider ratings, and
              venue intelligence for all 500+ NYC nightlife spots.
            </p>
            <div className="nyc-premium-features">
              <div className="nyc-premium-feature">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 6v6l4 2"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
                <span>Precise arrival timing</span>
              </div>
              <div className="nyc-premium-feature">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Verified venue ratings</span>
              </div>
              <div className="nyc-premium-feature">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Interactive venue map</span>
              </div>
            </div>
            <Link
              to="/sub"
              className="new-york-browse-free-thq-btn-elm4 nyc-premium-btn btn-accent btn btn-lg"
            >
              Upgrade to Premium
            </Link>
          </div>
        </section>
        <section className="nyc-map-section">
          <div className="nyc-map-container">
            <div className="nyc-map-header">
              <h2 className="section-title">NYC Venue Map</h2>
              <p className="section-content">
                Explore all nightlife venues across Manhattan, Brooklyn, and
                Queens
              </p>
            </div>
            <div className="nyc-map-placeholder">
              <div className="nyc-map-overlay">
                <svg
                  width="64"
                  xmlns="http://www.w3.org/2000/svg"
                  height="64"
                  viewBox="0 0 24 24"
                  className="nyc-map-icon"
                >
                  <path
                    d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="nyc-map-text">Interactive map coming soon</p>
                <button className="nyc-map-btn btn-outline btn">
                  Get Early Access
                </button>
              </div>
              <img
                alt="NYC skyline map"
                src="https://images.pexels.com/photos/771881/pexels-photo-771881.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="nyc-map-background"
              />
            </div>
          </div>
        </section>
        <section className="nyc-cta-section">
          <div className="nyc-cta-container">
            <h2 className="hero-title nyc-cta-title">
              Ready to own NYC nightlife?
            </h2>
            <p className="nyc-cta-subtitle hero-subtitle">
              Browse all venues, filter by vibe, and never miss peak hours again
            </p>
            <Link
              to="/newyork"
              className="new-york-browse-free-thq-btn-elm6 btn-xl nyc-cta-btn btn-accent btn"
            >
              Browse All NYC Venues
            </Link>
          </div>
        </section>
      </div>
      <div className="new-york-browse-free-container2">
        <div className="new-york-browse-free-container3">
          <Script
            html={`<script defer data-name="nyc-filter-interaction">
(function(){
  const tonightPeakBtn = document.getElementById("tonightPeakBtn")
  const after1amBtn = document.getElementById("after1amBtn")
  const musicGenreBtn = document.getElementById("musicGenreBtn")

  function setActiveFilter(activeBtn) {
    const allBtns = [tonightPeakBtn, after1amBtn, musicGenreBtn]
    allBtns.forEach((btn) => btn.classList.remove("active"))
    activeBtn.classList.add("active")
  }

  tonightPeakBtn.addEventListener("click", () => {
    setActiveFilter(tonightPeakBtn)
  })

  after1amBtn.addEventListener("click", () => {
    setActiveFilter(after1amBtn)
  })

  musicGenreBtn.addEventListener("click", () => {
    setActiveFilter(musicGenreBtn)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default NewYorkBrowseFree
