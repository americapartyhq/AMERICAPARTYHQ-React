import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home-browse-free.css'

const HomeBrowseFree = (props) => {
  return (
    <div className="home-browse-free-container">
      <Helmet>
        <title>AMERICAPARTYHQ</title>
        <meta property="og:title" content="AMERICAPARTYHQ" />
        <link rel="canonical" href="https://www.americapartyhq.co/" />
      </Helmet>
      <Navigation></Navigation>
      <section className="premium-hero-section">
        <div className="premium-hero-background">
          <img
            alt="Premium nightclub experience"
            src="https://images.pexels.com/photos/5191134/pexels-photo-5191134.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="premium-hero-image"
          />
          <div className="premium-hero-overlay"></div>
        </div>
        <div className="premium-hero-content">
          <h1 className="hero-title">
            Preview Nightlife. Unlock Intelligence.
          </h1>
          <p className="hero-subtitle">
            Browse premium venues for free. Unlock insider timing intelligence
            and ratings with membership.
          </p>
          <div className="premium-hero-actions">
            <button className="btn-accent btn btn-lg">
              Browse Free Preview
            </button>
            <button className="btn-outline btn btn-lg">
              Unlock Intelligence — $9.99/month
            </button>
          </div>
        </div>
      </section>
      <section className="membership-value-section">
        <div className="membership-value-container">
          <div className="membership-value-header">
            <h2 className="section-title">Unlock Nightlife Intelligence</h2>
            <div className="membership-pricing">
              <span className="membership-price">$9.99</span>
              <span className="membership-period">/month</span>
            </div>
          </div>
          <div className="membership-benefits">
            <div className="membership-benefit">
              <div className="benefit-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Best Arrival Times</h3>
                <p className="section-content">
                  Know exactly when to arrive at every venue for peak energy
                </p>
              </div>
            </div>
            <div className="membership-benefit">
              <div className="benefit-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Tonight&apos;s Peak Venues</h3>
                <p className="section-content">
                  See which venues are hitting tonight before you decide
                </p>
              </div>
            </div>
            <div className="membership-benefit">
              <div className="benefit-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18V5l12-2v13"></path>
                    <circle r="3" cx="6" cy="18"></circle>
                    <circle r="3" cx="18" cy="16"></circle>
                  </g>
                </svg>
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Category Rankings</h3>
                <p className="section-content">
                  Discover top venues by genre: Hip-Hop, House, Latin, and more
                </p>
              </div>
            </div>
            <div className="membership-benefit">
              <div className="benefit-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </g>
                </svg>
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">VIP Decision Guidance</h3>
                <p className="section-content">
                  Insider knowledge on bottle service, tables, and promoter
                  contacts
                </p>
              </div>
            </div>
          </div>
          <div className="membership-cta">
            <button className="btn-accent btn membership-join-btn btn-lg">
              Join for $9.99/month
            </button>
            <span className="membership-guarantee">
              Cancel anytime. No hidden fees.
            </span>
          </div>
        </div>
      </section>
      <section className="gated-clubs-section">
        <div className="gated-clubs-container">
          <div className="gated-clubs-header">
            <h2 className="section-title">Tonight&apos;s Elite Picks</h2>
            <p className="section-content">
              Unlock timing intelligence and insider ratings for premium venues
            </p>
          </div>
          <div className="gated-clubs-grid">
            <div className="gated-club-card">
              <div className="gated-club-image-wrapper">
                <img
                  alt="Premium nightclub"
                  src="https://images.pexels.com/photos/2078071/pexels-photo-2078071.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image"
                />
                <div className="gated-overlay"></div>
                <div className="gated-lock-badge">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
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
                </div>
              </div>
              <div className="gated-club-details">
                <div className="gated-club-header">
                  <h3 className="gated-club-name">LIV Miami</h3>
                  <div className="gated-lock-icon">
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
                  </div>
                </div>
                <div className="gated-timing-blur">
                  <div className="gated-blur-content">
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
                    <span>Best Arrival: 11:45 PM</span>
                  </div>
                  <span className="members-only-label">Members Only</span>
                </div>
                <div className="gated-rating-blur">
                  <div className="gated-blur-content">
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
                    <span>4.9 / 5.0</span>
                  </div>
                  <span className="members-only-label">Members Only</span>
                </div>
                <p className="section-content gated-club-description">
                  Ultra-premium experience with A-list DJs and world-class
                  production.
                </p>
                <button className="btn-secondary btn-sm btn">
                  Unlock for $9.99/month
                </button>
              </div>
            </div>
            <div className="gated-club-card">
              <div className="gated-club-image-wrapper">
                <img
                  alt="Premium nightclub"
                  src="https://images.pexels.com/photos/1154189/pexels-photo-1154189.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image"
                />
                <div className="gated-overlay"></div>
                <div className="gated-lock-badge">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
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
                </div>
              </div>
              <div className="gated-club-details">
                <div className="gated-club-header">
                  <h3 className="gated-club-name">Marquee NYC</h3>
                  <div className="gated-lock-icon">
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
                  </div>
                </div>
                <div className="gated-timing-blur">
                  <div className="gated-blur-content">
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
                    <span>Best Arrival: 12:30 AM</span>
                  </div>
                  <span className="members-only-label">Members Only</span>
                </div>
                <div className="gated-rating-blur">
                  <div className="gated-blur-content">
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
                    <span>4.8 / 5.0</span>
                  </div>
                  <span className="members-only-label">Members Only</span>
                </div>
                <p className="section-content gated-club-description">
                  Manhattan&apos;s premier destination for real crowds and
                  authentic nightlife energy.
                </p>
                <button className="btn-secondary btn-sm btn">
                  Unlock for $9.99/month
                </button>
              </div>
            </div>
            <div className="gated-club-card">
              <div className="gated-club-image-wrapper">
                <img
                  alt="Premium nightclub"
                  src="https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image"
                />
                <div className="gated-overlay"></div>
                <div className="gated-lock-badge">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
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
                </div>
              </div>
              <div className="gated-club-details">
                <div className="gated-club-header">
                  <h3 className="gated-club-name">Omnia Vegas</h3>
                  <div className="gated-lock-icon">
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
                  </div>
                </div>
                <div className="gated-timing-blur">
                  <div className="gated-blur-content">
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
                    <span>Best Arrival: 11:00 PM</span>
                  </div>
                  <span className="members-only-label">Members Only</span>
                </div>
                <div className="gated-rating-blur">
                  <div className="gated-blur-content">
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
                    <span>5.0 / 5.0</span>
                  </div>
                  <span className="members-only-label">Members Only</span>
                </div>
                <p className="section-content gated-club-description">
                  Vegas crown jewel delivering legendary opulence and top-tier
                  talent nightly.
                </p>
                <button className="btn-secondary btn-sm btn">
                  Unlock for $9.99/month
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gated-categories-section">
        <div className="gated-categories-container">
          <div className="gated-categories-header">
            <h2 className="section-title">Premium Intelligence by Category</h2>
            <p className="section-content">
              Unlock full rankings and timing intelligence for every genre
            </p>
          </div>
          <div className="gated-categories-grid">
            <div className="gated-category-card">
              <div className="gated-category-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle r="2" cx="4" cy="20"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="gated-category-title">Top 3 Tonight</h3>
              <div className="gated-category-preview">
                <div className="gated-preview-blur">
                  <p className="gated-preview-text section-content">
                    <span>
                      {' '}
                      1. LIV Miami
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      2. Marquee NYC
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      3. Omnia Vegas
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                  <div className="gated-preview-overlay">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
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
                  </div>
                </div>
              </div>
              <button className="btn-outline btn-sm btn">
                Unlock Full Rankings
              </button>
            </div>
            <div className="gated-category-card">
              <div className="gated-category-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
              </div>
              <h3 className="gated-category-title">Best After 1AM</h3>
              <div className="gated-category-preview">
                <div className="gated-preview-blur">
                  <p className="gated-preview-text section-content">
                    <span>
                      {' '}
                      E11EVEN Miami
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      The Mirage NYC
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      Academy LA
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                  <div className="gated-preview-overlay">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
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
                  </div>
                </div>
              </div>
              <button className="btn-outline btn-sm btn">
                Unlock Full Rankings
              </button>
            </div>
            <div className="gated-category-card">
              <div className="gated-category-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18V5l12-2v13"></path>
                    <circle r="3" cx="6" cy="18"></circle>
                    <circle r="3" cx="18" cy="16"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="gated-category-title">Best for Hip-Hop</h3>
              <div className="gated-category-preview">
                <div className="gated-preview-blur">
                  <p className="gated-preview-text section-content">
                    <span>
                      {' '}
                      LIV Miami
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      Story Miami
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      Marquee NYC
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                  <div className="gated-preview-overlay">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
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
                  </div>
                </div>
              </div>
              <button className="btn-outline btn-sm btn">
                Unlock Full Rankings
              </button>
            </div>
            <div className="gated-category-card">
              <div className="gated-category-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18V5l12-2v13M9 9l12-2"></path>
                    <circle r="3" cx="6" cy="18"></circle>
                    <circle r="3" cx="18" cy="16"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="gated-category-title">Best for House</h3>
              <div className="gated-category-preview">
                <div className="gated-preview-blur">
                  <p className="gated-preview-text section-content">
                    <span>
                      {' '}
                      The Mirage NYC
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      Factory 93 LA
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      Space Miami
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                  <div className="gated-preview-overlay">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
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
                  </div>
                </div>
              </div>
              <button className="btn-outline btn-sm btn">
                Unlock Full Rankings
              </button>
            </div>
            <div className="gated-category-card">
              <div className="gated-category-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="4" cx="8" cy="18"></circle>
                    <path d="M12 18V2l7 4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="gated-category-title">Best for Latin</h3>
              <div className="gated-category-preview">
                <div className="gated-preview-blur">
                  <p className="gated-preview-text section-content">
                    <span>
                      {' '}
                      Story Miami
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      Bottled Blonde LA
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      Joya Vegas
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                  <div className="gated-preview-overlay">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
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
                  </div>
                </div>
              </div>
              <button className="btn-outline btn-sm btn">
                Unlock Full Rankings
              </button>
            </div>
            <div className="gated-category-card">
              <div className="gated-category-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="gated-category-title">Best for Girls Night</h3>
              <div className="gated-category-preview">
                <div className="gated-preview-blur">
                  <p className="gated-preview-text section-content">
                    <span>
                      {' '}
                      Marquee NYC
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      1 OAK LA
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      LIV Miami
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                  <div className="gated-preview-overlay">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
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
                  </div>
                </div>
              </div>
              <button className="btn-outline btn-sm btn">
                Unlock Full Rankings
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="premium-how-works-section">
        <div className="premium-how-works-container">
          <h2 className="section-title">How Premium Intelligence Works</h2>
          <div className="premium-steps-wrapper">
            <div className="premium-step-item">
              <div className="premium-step-number">
                <span>01</span>
              </div>
              <div className="premium-step-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </g>
                </svg>
              </div>
              <div className="premium-step-content">
                <h3 className="section-subtitle">Pick Your City</h3>
                <p className="section-content">
                  Find your nightlife scene across Miami, NYC, LA, Vegas, and
                  Boston
                </p>
              </div>
            </div>
            <div className="premium-step-divider"></div>
            <div className="premium-step-item">
              <div className="premium-step-number">
                <span>02</span>
              </div>
              <div className="premium-step-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
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
              </div>
              <div className="premium-step-content">
                <h3 className="section-subtitle">
                  Explore Timing Intelligence
                </h3>
                <p className="section-content">
                  See best arrival windows, peak times, and energy forecasts for
                  every venue
                </p>
              </div>
            </div>
            <div className="premium-step-divider"></div>
            <div className="premium-step-item">
              <div className="premium-step-number">
                <span>03</span>
              </div>
              <div className="premium-step-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
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
              </div>
              <div className="premium-step-content">
                <h3 className="section-subtitle">Arrive at Peak Time</h3>
                <p className="section-content">
                  Know exactly when to go. Skip the lines. Hit maximum energy
                  every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="premium-final-cta-section">
        <div className="premium-final-cta-container">
          <div className="premium-final-cta-content">
            <h2 className="section-title">Ready for Nightlife Intelligence?</h2>
            <p className="section-content">
              Join thousands discovering the right party, at the right time.
              Cancel anytime.
            </p>
            <div className="premium-final-cta-actions">
              <button className="btn-xl btn-accent btn">
                Join for $9.99/month
              </button>
              <button className="btn-outline btn btn-lg">
                Browse Free Preview
              </button>
            </div>
            <div className="premium-final-cta-features">
              <div className="premium-cta-feature">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Best arrival times</span>
              </div>
              <div className="premium-cta-feature">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Category rankings</span>
              </div>
              <div className="premium-cta-feature">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>VIP insights</span>
              </div>
              <div className="premium-cta-feature">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default HomeBrowseFree
