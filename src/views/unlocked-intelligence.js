import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './unlocked-intelligence.css'

const UnlockedIntelligence = (props) => {
  return (
    <div className="unlocked-intelligence-container1">
      <Helmet>
        <title>unlocked-intelligence - AMERICAPARTYHQ</title>
        <meta
          property="og:title"
          content="unlocked-intelligence - AMERICAPARTYHQ"
        />
        <link
          rel="canonical"
          href="https://www.americapartyhq.co/unlocked-intelligence"
        />
      </Helmet>
      <div className="venues-intelligence-page">
        <section className="intelligence-hero-section">
          <div className="intelligence-hero-background"></div>
          <div className="intelligence-hero-particles"></div>
          <div className="intelligence-hero-content">
            <h1 className="intelligence-hero-title hero-title">
              Unlocked: Venue Intelligence
            </h1>
            <p className="intelligence-hero-subtitle hero-subtitle">
              All cities. All venues. Tonight&apos;s details in one place.
            </p>
          </div>
        </section>
        <div id="filterBar" className="intelligence-sticky-filter-bar">
          <div className="intelligence-filter-container">
            <div className="intelligence-filter-group">
              <label className="intelligence-filter-label">City</label>
              <div className="intelligence-select-wrapper">
                <select id="citySelect" className="intelligence-filter-select">
                  <option value="true">Select City</option>
                  <option value="miami">Miami</option>
                  <option value="new-york">New York</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="las-vegas">Las Vegas</option>
                  <option value="boston">Boston</option>
                </select>
              </div>
            </div>
            <div className="intelligence-filter-group">
              <label className="intelligence-filter-label">Category</label>
              <div className="intelligence-select-wrapper">
                <select
                  id="categorySelect"
                  className="intelligence-filter-select"
                >
                  <option value="true">Select Category</option>
                  <option value="hip-hop">Hip-Hop</option>
                  <option value="house">House</option>
                  <option value="latin">Latin</option>
                  <option value="after-1am">After 1AM</option>
                  <option value="girls-night">Girls Night</option>
                  <option value="techno">Techno</option>
                  <option value="edm">EDM</option>
                </select>
              </div>
            </div>
            <div className="intelligence-filter-group intelligence-search-group">
              <label className="intelligence-filter-label">Search</label>
              <div className="intelligence-search-wrapper">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  className="intelligence-search-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m21 21l-4.34-4.34"></path>
                    <circle r="8" cx="11" cy="11"></circle>
                  </g>
                </svg>
                <input
                  type="text"
                  id="venueSearch"
                  placeholder="Search venues..."
                  className="intelligence-search-input"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="intelligence-venues-section">
          <div className="intelligence-section-container">
            <h2 className="section-title intelligence-city-heading">Miami</h2>
            <div className="intelligence-venues-grid">
              <article className="intelligence-venue-card">
                <div className="intelligence-card-unlock-badge">
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
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </g>
                  </svg>
                </div>
                <div className="intelligence-card-header">
                  <h3 className="intelligence-venue-name">LIV Miami</h3>
                  <div className="intelligence-header-tags">
                    <span className="intelligence-city-tag">Miami</span>
                    <span className="intelligence-category-tag">Hip-Hop</span>
                    <span className="intelligence-member-badge">
                      Member Intel
                    </span>
                  </div>
                </div>
                <div className="intelligence-quick-snapshot">
                  <span className="intelligence-snapshot-item">
                    Vibe: Energy
                  </span>
                  <span className="intelligence-snapshot-divider">|</span>
                  <span className="intelligence-snapshot-item">
                    Music: Hip-Hop/Trap
                  </span>
                  <span className="intelligence-snapshot-divider">|</span>
                  <span className="intelligence-snapshot-item">
                    Dress Code: Smart Casual
                  </span>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">Best Plan</h4>
                  <div className="intelligence-info-content">
                    <p className="intelligence-info-item">
                      <span className="unlocked-intelligence-text100">
                        Best Arrival Time:
                      </span>
                      <span>
                        {' '}
                        11:30 PM – 12:30 AM
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                    <p className="intelligence-info-item">
                      <span className="unlocked-intelligence-text102">
                        Best Day(s):
                      </span>
                      <span>
                        {' '}
                        Fri–Sat
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                    <p className="intelligence-info-item">
                      <span className="unlocked-intelligence-text104">
                        Ideal Party Size:
                      </span>
                      <span>
                        {' '}
                        6–10
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">Parking Intel</h4>
                  <div className="intelligence-info-content">
                    <p className="intelligence-parking-label">
                      Best Parking Spots:
                    </p>
                    <ul className="intelligence-parking-list">
                      <li>
                        <span>
                          Nearest paid garage: Fontainebleau Parking – Collins
                          Ave (3–5 min walk)
                        </span>
                      </li>
                      <li>
                        <span>
                          Street parking zone: 44th Street side streets (after
                          11 PM easier)
                        </span>
                      </li>
                      <li>
                        <span>
                          Rideshare drop-off: Main entrance on Collins Ave
                        </span>
                      </li>
                    </ul>
                    <p className="intelligence-safety-note">
                      <span className="unlocked-intelligence-text109">
                        Avoid:
                      </span>
                      <span>
                        {' '}
                        Mid-Beach parking lots late-night (crowded, slow exit)
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">
                    Address &amp; Access
                  </h4>
                  <div className="intelligence-info-content">
                    <p className="intelligence-address">
                      4441 Collins Avenue, Miami Beach, FL 33140
                    </p>
                    <button className="intelligence-map-btn">
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
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                      <span>View on Map</span>
                    </button>
                    <p className="intelligence-entry-tip">
                      <span className="unlocked-intelligence-text112">
                        Entry Tip:
                      </span>
                      <span>
                        {' '}
                        Use side entrance on 44th Street when main line is long
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">Cost Estimate</h4>
                  <div className="intelligence-cost-grid">
                    <div className="intelligence-cost-item">
                      <span className="intelligence-cost-label">
                        Cover Range
                      </span>
                      <span className="intelligence-cost-value">$20–$40</span>
                    </div>
                    <div className="intelligence-cost-item">
                      <span className="intelligence-cost-label">
                        Drinks Range
                      </span>
                      <span className="intelligence-cost-value">$15–$22</span>
                    </div>
                    <div className="intelligence-cost-item">
                      <span className="intelligence-cost-label">
                        VIP Table Range
                      </span>
                      <span className="intelligence-cost-value">
                        $1000–$3000
                      </span>
                    </div>
                    <div className="intelligence-cost-item intelligence-cost-highlight">
                      <span className="intelligence-cost-label">
                        Total Night Estimate
                      </span>
                      <span className="intelligence-cost-value">$120–$180</span>
                    </div>
                  </div>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">
                    Tonight&apos;s Rating &amp; Crowd
                  </h4>
                  <div className="intelligence-rating-content">
                    <div className="intelligence-rating-display">
                      <div className="intelligence-stars">
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                      </div>
                      <span className="intelligence-rating-number">4.8</span>
                    </div>
                    <div className="intelligence-crowd-info">
                      <div className="intelligence-crowd-label-row">
                        <span className="intelligence-crowd-label">
                          Crowd Level
                        </span>
                        <span className="intelligence-crowd-high intelligence-crowd-status">
                          HIGH
                        </span>
                      </div>
                      <div className="intelligence-crowd-meter">
                        <div className="intelligence-crowd-fill intelligence-crowd-fill-high"></div>
                      </div>
                    </div>
                    <p className="intelligence-best-time">
                      <span className="unlocked-intelligence-text114">
                        Best Time Inside:
                      </span>
                      <span>
                        {' '}
                        12:30–2:00 AM
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="intelligence-card-actions">
                  <a href="/vip">
                    <div className="intelligence-vip-btn btn-accent btn">
                      <span>Request VIP</span>
                    </div>
                  </a>
                  <button className="btn-outline intelligence-save-btn btn">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Save Venue</span>
                  </button>
                </div>
              </article>
              <article className="intelligence-venue-card">
                <div className="intelligence-card-unlock-badge">
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
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </g>
                  </svg>
                </div>
                <div className="intelligence-card-header">
                  <h3 className="intelligence-venue-name">E11even Miami</h3>
                  <div className="intelligence-header-tags">
                    <span className="intelligence-city-tag">Miami</span>
                    <span className="intelligence-category-tag">House</span>
                    <span className="intelligence-member-badge">
                      Member Intel
                    </span>
                  </div>
                </div>
                <div className="intelligence-quick-snapshot">
                  <span className="intelligence-snapshot-item">
                    Vibe: Immersive
                  </span>
                  <span className="intelligence-snapshot-divider">|</span>
                  <span className="intelligence-snapshot-item">
                    Music: House/Techno
                  </span>
                  <span className="intelligence-snapshot-divider">|</span>
                  <span className="intelligence-snapshot-item">
                    Dress Code: Dress Code
                  </span>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">Best Plan</h4>
                  <div className="intelligence-info-content">
                    <p className="intelligence-info-item">
                      <span className="unlocked-intelligence-text118">
                        Best Arrival Time:
                      </span>
                      <span>
                        {' '}
                        12:00 AM – 1:30 AM
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                    <p className="intelligence-info-item">
                      <span className="unlocked-intelligence-text120">
                        Best Day(s):
                      </span>
                      <span>
                        {' '}
                        Thu–Sun
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                    <p className="intelligence-info-item">
                      <span className="unlocked-intelligence-text122">
                        Ideal Party Size:
                      </span>
                      <span>
                        {' '}
                        4–8
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">Parking Intel</h4>
                  <div className="intelligence-info-content">
                    <p className="intelligence-parking-label">
                      Best Parking Spots:
                    </p>
                    <ul className="intelligence-parking-list">
                      <li>
                        <span>
                          Nearest paid garage: 29 NE 11th Street Parking (1 min
                          walk)
                        </span>
                      </li>
                      <li>
                        <span>
                          Street parking zone: NE 2nd Avenue (limited, arrive
                          early)
                        </span>
                      </li>
                      <li>
                        <span>
                          Rideshare drop-off: Main entrance on NE 11th Street
                        </span>
                      </li>
                    </ul>
                    <p className="intelligence-safety-note">
                      <span className="unlocked-intelligence-text127">
                        Avoid:
                      </span>
                      <span>
                        {' '}
                        Biscayne Blvd street parking (high traffic area)
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">
                    Address &amp; Access
                  </h4>
                  <div className="intelligence-info-content">
                    <p className="intelligence-address">
                      29 NE 11th Street, Miami, FL 33132
                    </p>
                    <button className="intelligence-map-btn">
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
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                      <span>View on Map</span>
                    </button>
                    <p className="intelligence-entry-tip">
                      <span className="unlocked-intelligence-text130">
                        Entry Tip:
                      </span>
                      <span>
                        {' '}
                        24/7 operation – quieter entry before midnight or after
                        3 AM
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">Cost Estimate</h4>
                  <div className="intelligence-cost-grid">
                    <div className="intelligence-cost-item">
                      <span className="intelligence-cost-label">
                        Cover Range
                      </span>
                      <span className="intelligence-cost-value">$30–$60</span>
                    </div>
                    <div className="intelligence-cost-item">
                      <span className="intelligence-cost-label">
                        Drinks Range
                      </span>
                      <span className="intelligence-cost-value">$18–$28</span>
                    </div>
                    <div className="intelligence-cost-item">
                      <span className="intelligence-cost-label">
                        VIP Table Range
                      </span>
                      <span className="intelligence-cost-value">
                        $1500–$5000
                      </span>
                    </div>
                    <div className="intelligence-cost-item intelligence-cost-highlight">
                      <span className="intelligence-cost-label">
                        Total Night Estimate
                      </span>
                      <span className="intelligence-cost-value">$150–$250</span>
                    </div>
                  </div>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">
                    Tonight&apos;s Rating &amp; Crowd
                  </h4>
                  <div className="intelligence-rating-content">
                    <div className="intelligence-rating-display">
                      <div className="intelligence-stars">
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-half"
                        >
                          <path
                            d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <span className="intelligence-rating-number">4.7</span>
                    </div>
                    <div className="intelligence-crowd-info">
                      <div className="intelligence-crowd-label-row">
                        <span className="intelligence-crowd-label">
                          Crowd Level
                        </span>
                        <span className="intelligence-crowd-high intelligence-crowd-status">
                          HIGH
                        </span>
                      </div>
                      <div className="intelligence-crowd-meter">
                        <div className="intelligence-crowd-fill intelligence-crowd-fill-high"></div>
                      </div>
                    </div>
                    <p className="intelligence-best-time">
                      <span className="unlocked-intelligence-text132">
                        Best Time Inside:
                      </span>
                      <span>
                        {' '}
                        1:00–3:30 AM
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="intelligence-card-actions">
                  <a href="/vip">
                    <div className="intelligence-vip-btn btn-accent btn">
                      <span>Request VIP</span>
                    </div>
                  </a>
                  <button className="btn-outline intelligence-save-btn btn">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Save Venue</span>
                  </button>
                </div>
              </article>
              <article className="intelligence-venue-card">
                <div className="intelligence-card-unlock-badge">
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
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </g>
                  </svg>
                </div>
                <div className="intelligence-card-header">
                  <h3 className="intelligence-venue-name">Mist Nightclub</h3>
                  <div className="intelligence-header-tags">
                    <span className="intelligence-city-tag">Miami</span>
                    <span className="intelligence-category-tag">Latin</span>
                    <span className="intelligence-member-badge">
                      Member Intel
                    </span>
                  </div>
                </div>
                <div className="intelligence-quick-snapshot">
                  <span className="intelligence-snapshot-item">
                    Vibe: Vibrant
                  </span>
                  <span className="intelligence-snapshot-divider">|</span>
                  <span className="intelligence-snapshot-item">
                    Music: Latin/Reggaeton
                  </span>
                  <span className="intelligence-snapshot-divider">|</span>
                  <span className="intelligence-snapshot-item">
                    Dress Code: Club Wear
                  </span>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">Best Plan</h4>
                  <div className="intelligence-info-content">
                    <p className="intelligence-info-item">
                      <span className="unlocked-intelligence-text136">
                        Best Arrival Time:
                      </span>
                      <span>
                        {' '}
                        11:00 PM – 12:00 AM
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                    <p className="intelligence-info-item">
                      <span className="unlocked-intelligence-text138">
                        Best Day(s):
                      </span>
                      <span>
                        {' '}
                        Fri–Sat
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                    <p className="intelligence-info-item">
                      <span className="unlocked-intelligence-text140">
                        Ideal Party Size:
                      </span>
                      <span>
                        {' '}
                        4–12
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">Parking Intel</h4>
                  <div className="intelligence-info-content">
                    <p className="intelligence-parking-label">
                      Best Parking Spots:
                    </p>
                    <ul className="intelligence-parking-list">
                      <li>
                        <span>
                          Nearest paid garage: Downtown Dadeland Garage (2–4 min
                          walk)
                        </span>
                      </li>
                      <li>
                        <span>
                          Street parking zone: Kendall Drive side streets (free
                          after 8 PM)
                        </span>
                      </li>
                      <li>
                        <span>
                          Rideshare drop-off: Main entrance on Kendall Drive
                        </span>
                      </li>
                    </ul>
                    <p className="intelligence-safety-note">
                      <span className="unlocked-intelligence-text145">
                        Avoid:
                      </span>
                      <span>
                        {' '}
                        Mall parking lots (closes at midnight)
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">
                    Address &amp; Access
                  </h4>
                  <div className="intelligence-info-content">
                    <p className="intelligence-address">
                      9370 SW 72nd Street, Miami, FL 33173
                    </p>
                    <button className="intelligence-map-btn">
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
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                      <span>View on Map</span>
                    </button>
                    <p className="intelligence-entry-tip">
                      <span className="unlocked-intelligence-text148">
                        Entry Tip:
                      </span>
                      <span>
                        {' '}
                        VIP entrance on east side – skip general line with
                        reservation
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">Cost Estimate</h4>
                  <div className="intelligence-cost-grid">
                    <div className="intelligence-cost-item">
                      <span className="intelligence-cost-label">
                        Cover Range
                      </span>
                      <span className="intelligence-cost-value">$15–$25</span>
                    </div>
                    <div className="intelligence-cost-item">
                      <span className="intelligence-cost-label">
                        Drinks Range
                      </span>
                      <span className="intelligence-cost-value">$10–$16</span>
                    </div>
                    <div className="intelligence-cost-item">
                      <span className="intelligence-cost-label">
                        VIP Table Range
                      </span>
                      <span className="intelligence-cost-value">
                        $500–$1200
                      </span>
                    </div>
                    <div className="intelligence-cost-item intelligence-cost-highlight">
                      <span className="intelligence-cost-label">
                        Total Night Estimate
                      </span>
                      <span className="intelligence-cost-value">$80–$120</span>
                    </div>
                  </div>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">
                    Tonight&apos;s Rating &amp; Crowd
                  </h4>
                  <div className="intelligence-rating-content">
                    <div className="intelligence-rating-display">
                      <div className="intelligence-stars">
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-half"
                        >
                          <path
                            d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <span className="intelligence-rating-number">4.6</span>
                    </div>
                    <div className="intelligence-crowd-info">
                      <div className="intelligence-crowd-label-row">
                        <span className="intelligence-crowd-label">
                          Crowd Level
                        </span>
                        <span className="intelligence-crowd-medium intelligence-crowd-status">
                          MEDIUM
                        </span>
                      </div>
                      <div className="intelligence-crowd-meter">
                        <div className="intelligence-crowd-fill intelligence-crowd-fill-medium"></div>
                      </div>
                    </div>
                    <p className="intelligence-best-time">
                      <span className="unlocked-intelligence-text150">
                        Best Time Inside:
                      </span>
                      <span>
                        {' '}
                        11:30 PM–1:30 AM
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="intelligence-card-actions">
                  <a href="/vip">
                    <div className="intelligence-vip-btn btn-accent btn">
                      <span>Request VIP</span>
                    </div>
                  </a>
                  <button className="btn-outline intelligence-save-btn btn">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Save Venue</span>
                  </button>
                </div>
              </article>
              <article className="intelligence-venue-card">
                <div className="intelligence-card-unlock-badge">
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
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </g>
                  </svg>
                </div>
                <div className="intelligence-card-header">
                  <h3 className="intelligence-venue-name">Story Nightclub</h3>
                  <div className="intelligence-header-tags">
                    <span className="intelligence-city-tag">Miami</span>
                    <span className="intelligence-category-tag">House</span>
                    <span className="intelligence-member-badge">
                      Member Intel
                    </span>
                  </div>
                </div>
                <div className="intelligence-quick-snapshot">
                  <span className="intelligence-snapshot-item">
                    Vibe: Cinematic
                  </span>
                  <span className="intelligence-snapshot-divider">|</span>
                  <span className="intelligence-snapshot-item">
                    Music: House/Techno
                  </span>
                  <span className="intelligence-snapshot-divider">|</span>
                  <span className="intelligence-snapshot-item">
                    Dress Code: Smart Casual
                  </span>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">Best Plan</h4>
                  <div className="intelligence-info-content">
                    <p className="intelligence-info-item">
                      <span className="unlocked-intelligence-text154">
                        Best Arrival Time:
                      </span>
                      <span>
                        {' '}
                        11:00 PM – 12:00 AM
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                    <p className="intelligence-info-item">
                      <span className="unlocked-intelligence-text156">
                        Best Day(s):
                      </span>
                      <span>
                        {' '}
                        Fri–Sat
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                    <p className="intelligence-info-item">
                      <span className="unlocked-intelligence-text158">
                        Ideal Party Size:
                      </span>
                      <span>
                        {' '}
                        6–10
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">Parking Intel</h4>
                  <div className="intelligence-info-content">
                    <p className="intelligence-parking-label">
                      Best Parking Spots:
                    </p>
                    <ul className="intelligence-parking-list">
                      <li>
                        <span>
                          Nearest paid garage: Collins Park Garage – 21st Street
                          (4–6 min walk)
                        </span>
                      </li>
                      <li>
                        <span>
                          Street parking zone: Collins Avenue side streets
                          (metered until 3 AM)
                        </span>
                      </li>
                      <li>
                        <span>
                          Rideshare drop-off: Main entrance on Collins Avenue
                        </span>
                      </li>
                    </ul>
                    <p className="intelligence-safety-note">
                      <span className="unlocked-intelligence-text163">
                        Avoid:
                      </span>
                      <span>
                        {' '}
                        Washington Avenue lots (farther walk, less secure)
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">
                    Address &amp; Access
                  </h4>
                  <div className="intelligence-info-content">
                    <p className="intelligence-address">
                      136 Collins Avenue, Miami Beach, FL 33139
                    </p>
                    <button className="intelligence-map-btn">
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
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                      <span>View on Map</span>
                    </button>
                    <p className="intelligence-entry-tip">
                      <span className="unlocked-intelligence-text166">
                        Entry Tip:
                      </span>
                      <span>
                        {' '}
                        Side entrance on 1st Street often faster – check with
                        door staff
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">Cost Estimate</h4>
                  <div className="intelligence-cost-grid">
                    <div className="intelligence-cost-item">
                      <span className="intelligence-cost-label">
                        Cover Range
                      </span>
                      <span className="intelligence-cost-value">$20–$40</span>
                    </div>
                    <div className="intelligence-cost-item">
                      <span className="intelligence-cost-label">
                        Drinks Range
                      </span>
                      <span className="intelligence-cost-value">$14–$20</span>
                    </div>
                    <div className="intelligence-cost-item">
                      <span className="intelligence-cost-label">
                        VIP Table Range
                      </span>
                      <span className="intelligence-cost-value">
                        $800–$2000
                      </span>
                    </div>
                    <div className="intelligence-cost-item intelligence-cost-highlight">
                      <span className="intelligence-cost-label">
                        Total Night Estimate
                      </span>
                      <span className="intelligence-cost-value">$100–$150</span>
                    </div>
                  </div>
                </div>
                <div className="intelligence-info-section">
                  <h4 className="intelligence-section-label">
                    Tonight&apos;s Rating &amp; Crowd
                  </h4>
                  <div className="intelligence-rating-content">
                    <div className="intelligence-rating-display">
                      <div className="intelligence-stars">
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="intelligence-star-filled"
                        >
                          <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                            fill="currentColor"
                            stroke="none"
                          ></path>
                        </svg>
                      </div>
                      <span className="intelligence-rating-number">4.9</span>
                    </div>
                    <div className="intelligence-crowd-info">
                      <div className="intelligence-crowd-label-row">
                        <span className="intelligence-crowd-label">
                          Crowd Level
                        </span>
                        <span className="intelligence-crowd-high intelligence-crowd-status">
                          HIGH
                        </span>
                      </div>
                      <div className="intelligence-crowd-meter">
                        <div className="intelligence-crowd-fill intelligence-crowd-fill-high"></div>
                      </div>
                    </div>
                    <p className="intelligence-best-time">
                      <span className="unlocked-intelligence-text168">
                        Best Time Inside:
                      </span>
                      <span>
                        {' '}
                        12:00–2:00 AM
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="intelligence-card-actions">
                  <a href="/vip">
                    <div className="intelligence-vip-btn btn-accent btn">
                      <span>Request VIP</span>
                    </div>
                  </a>
                  <button className="btn-outline intelligence-save-btn btn">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Save Venue</span>
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="new-york-venues-section">
          <div className="new-york-venues-container">
            <h2 className="section-title new-york-venues-header">New York</h2>
            <div className="new-york-venues-grid">
              <article className="new-york-venue-card">
                <div className="new-york-venue-card-inner">
                  <div className="new-york-venue-header">
                    <div className="new-york-venue-title-row">
                      <h3 className="new-york-venue-name">Marquee NYC</h3>
                      <div className="new-york-venue-tags">
                        <span className="new-york-venue-city-tag">
                          New York
                        </span>
                        <span className="new-york-venue-category-tag">
                          Hip-Hop/House
                        </span>
                      </div>
                    </div>
                    <div className="new-york-venue-member-badge">
                      <div className="new-york-lock-icon">
                        <svg
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                          height="14"
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
                      <span>Member Intel</span>
                    </div>
                  </div>
                  <div className="new-york-venue-image-wrapper">
                    <img
                      alt="Marquee NYC interior"
                      src="https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="new-york-venue-image"
                    />
                  </div>
                  <div className="new-york-venue-snapshot">
                    <span className="new-york-snapshot-label">
                      Quick Snapshot:
                    </span>
                    <span className="new-york-snapshot-value">
                      Iconic | Hip-Hop/House | Smart Casual
                    </span>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">Best Plan</h4>
                    <div className="new-york-plan-grid">
                      <div className="new-york-plan-item">
                        <div className="new-york-plan-icon">
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
                        </div>
                        <div className="new-york-plan-content">
                          <span className="new-york-plan-label">
                            Best Arrival Time
                          </span>
                          <span className="new-york-plan-value">
                            12:00 AM – 1:00 AM
                          </span>
                        </div>
                      </div>
                      <div className="new-york-plan-item">
                        <div className="new-york-plan-icon">
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
                              <path d="M8 2v4m8-4v4"></path>
                              <rect
                                x="3"
                                y="4"
                                rx="2"
                                width="18"
                                height="18"
                              ></rect>
                              <path d="M3 10h18"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="new-york-plan-content">
                          <span className="new-york-plan-label">
                            Best Day(s)
                          </span>
                          <span className="new-york-plan-value">Thu–Sat</span>
                        </div>
                      </div>
                      <div className="new-york-plan-item">
                        <div className="new-york-plan-icon">
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
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                              <circle r="4" cx="12" cy="7"></circle>
                            </g>
                          </svg>
                        </div>
                        <div className="new-york-plan-content">
                          <span className="new-york-plan-label">
                            Ideal Party Size
                          </span>
                          <span className="new-york-plan-value">4–8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">Parking Intel</h4>
                    <div className="new-york-parking-list">
                      <div className="new-york-parking-item">
                        <span className="new-york-parking-label">
                          Best Parking Spots:
                        </span>
                      </div>
                      <div className="new-york-parking-item">
                        <div className="new-york-parking-icon">
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
                              <circle r="10" cx="12" cy="12"></circle>
                              <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                            </g>
                          </svg>
                        </div>
                        <span className="new-york-parking-text">
                          Nearest paid garage: Manhattan West Parking – 10th Ave
                          &amp; 33rd St (5–7 min walk)
                        </span>
                      </div>
                      <div className="new-york-parking-item">
                        <div className="new-york-parking-icon">
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
                              <circle r="10" cx="12" cy="12"></circle>
                              <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                            </g>
                          </svg>
                        </div>
                        <span className="new-york-parking-text">
                          Street parking zone: West 26th St (after midnight
                          easier)
                        </span>
                      </div>
                      <div className="new-york-parking-item">
                        <div className="new-york-parking-icon">
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
                              <circle r="10" cx="12" cy="12"></circle>
                              <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                            </g>
                          </svg>
                        </div>
                        <span className="new-york-parking-text">
                          Rideshare drop-off: Main entrance on 10th Avenue
                        </span>
                      </div>
                      <div className="new-york-parking-safety">
                        <span className="new-york-safety-label">
                          Safety note:
                        </span>
                        <span className="new-york-safety-text">
                          Avoid: West 23rd St near 11th Ave late-night
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">
                      Address &amp; Access
                    </h4>
                    <div className="new-york-address-content">
                      <p className="new-york-address-text">
                        289 10th Avenue, New York, NY 10001
                      </p>
                      <button className="btn-outline new-york-map-btn btn-sm btn">
                        <svg
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
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
                        <span>View on Map</span>
                      </button>
                      <div className="new-york-entry-tip">
                        <span className="new-york-tip-label">Entry Tip:</span>
                        <span className="new-york-tip-text">
                          Use side entrance on 27th St when main line is long
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">Cost Estimate</h4>
                    <div className="new-york-cost-grid">
                      <div className="new-york-cost-item">
                        <span className="new-york-cost-label">Cover Range</span>
                        <span className="new-york-cost-value">$20–$30</span>
                      </div>
                      <div className="new-york-cost-item">
                        <span className="new-york-cost-label">
                          Drinks Range
                        </span>
                        <span className="new-york-cost-value">$15–$20</span>
                      </div>
                      <div className="new-york-cost-item">
                        <span className="new-york-cost-label">
                          VIP Table Range
                        </span>
                        <span className="new-york-cost-value">$800–$2000</span>
                      </div>
                      <div className="new-york-cost-total">
                        <span className="new-york-cost-total-label">
                          Total Night Estimate (per person)
                        </span>
                        <span className="new-york-cost-total-value">
                          $110–$160
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">
                      Rating &amp; Crowd
                    </h4>
                    <div className="new-york-rating-content">
                      <div className="new-york-rating-row">
                        <div className="new-york-rating-stars">
                          <svg
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span className="new-york-rating-value">4.8</span>
                        </div>
                        <div className="new-york-crowd-level">
                          <span className="new-york-crowd-label">
                            Crowd Level:
                          </span>
                          <span className="new-york-crowd-badge new-york-crowd-very-high">
                            VERY HIGH
                          </span>
                        </div>
                      </div>
                      <div className="new-york-crowd-meter">
                        <div className="unlocked-intelligence-thq-new-york-crowd-bar-elm1 new-york-crowd-bar"></div>
                      </div>
                      <div className="new-york-best-time">
                        <span className="new-york-best-time-label">
                          Best Time Inside:
                        </span>
                        <span className="new-york-best-time-value">
                          1:00–3:00 AM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-actions">
                    <button className="btn-accent btn new-york-action-btn-primary btn-lg">
                      Request VIP
                    </button>
                    <button className="btn-outline new-york-action-btn-secondary btn btn-lg">
                      <svg
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Save Venue</span>
                    </button>
                  </div>
                </div>
              </article>
              <article className="new-york-venue-card">
                <div className="new-york-venue-card-inner">
                  <div className="new-york-venue-header">
                    <div className="new-york-venue-title-row">
                      <h3 className="new-york-venue-name">Hakkasan NYC</h3>
                      <div className="new-york-venue-tags">
                        <span className="new-york-venue-city-tag">
                          New York
                        </span>
                        <span className="new-york-venue-category-tag">
                          House/EDM
                        </span>
                      </div>
                    </div>
                    <div className="new-york-venue-member-badge">
                      <div className="new-york-lock-icon">
                        <svg
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                          height="14"
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
                      <span>Member Intel</span>
                    </div>
                  </div>
                  <div className="new-york-venue-image-wrapper">
                    <img
                      alt="Hakkasan NYC interior"
                      src="https://images.pexels.com/photos/6969863/pexels-photo-6969863.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="new-york-venue-image"
                    />
                  </div>
                  <div className="new-york-venue-snapshot">
                    <span className="new-york-snapshot-label">
                      Quick Snapshot:
                    </span>
                    <span className="new-york-snapshot-value">
                      Luxe | House/EDM | Dress Code
                    </span>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">Best Plan</h4>
                    <div className="new-york-plan-grid">
                      <div className="new-york-plan-item">
                        <div className="new-york-plan-icon">
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
                        </div>
                        <div className="new-york-plan-content">
                          <span className="new-york-plan-label">
                            Best Arrival Time
                          </span>
                          <span className="new-york-plan-value">
                            11:30 PM – 12:30 AM
                          </span>
                        </div>
                      </div>
                      <div className="new-york-plan-item">
                        <div className="new-york-plan-icon">
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
                              <path d="M8 2v4m8-4v4"></path>
                              <rect
                                x="3"
                                y="4"
                                rx="2"
                                width="18"
                                height="18"
                              ></rect>
                              <path d="M3 10h18"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="new-york-plan-content">
                          <span className="new-york-plan-label">
                            Best Day(s)
                          </span>
                          <span className="new-york-plan-value">Fri–Sat</span>
                        </div>
                      </div>
                      <div className="new-york-plan-item">
                        <div className="new-york-plan-icon">
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
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                              <circle r="4" cx="12" cy="7"></circle>
                            </g>
                          </svg>
                        </div>
                        <div className="new-york-plan-content">
                          <span className="new-york-plan-label">
                            Ideal Party Size
                          </span>
                          <span className="new-york-plan-value">4–10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">Parking Intel</h4>
                    <div className="new-york-parking-list">
                      <div className="new-york-parking-item">
                        <span className="new-york-parking-label">
                          Best Parking Spots:
                        </span>
                      </div>
                      <div className="new-york-parking-item">
                        <div className="new-york-parking-icon">
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
                              <circle r="10" cx="12" cy="12"></circle>
                              <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                            </g>
                          </svg>
                        </div>
                        <span className="new-york-parking-text">
                          Nearest paid garage: West 43rd St Parking – 9th Ave
                          (3–5 min walk)
                        </span>
                      </div>
                      <div className="new-york-parking-item">
                        <div className="new-york-parking-icon">
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
                              <circle r="10" cx="12" cy="12"></circle>
                              <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                            </g>
                          </svg>
                        </div>
                        <span className="new-york-parking-text">
                          Street parking zone: West 44th St (limited
                          availability)
                        </span>
                      </div>
                      <div className="new-york-parking-item">
                        <div className="new-york-parking-icon">
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
                              <circle r="10" cx="12" cy="12"></circle>
                              <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                            </g>
                          </svg>
                        </div>
                        <span className="new-york-parking-text">
                          Rideshare drop-off: Main entrance on West 43rd Street
                        </span>
                      </div>
                      <div className="new-york-parking-safety">
                        <span className="new-york-safety-label">
                          Safety note:
                        </span>
                        <span className="new-york-safety-text">
                          Avoid: Port Authority area late-night
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">
                      Address &amp; Access
                    </h4>
                    <div className="new-york-address-content">
                      <p className="new-york-address-text">
                        311 West 43rd Street, New York, NY 10036
                      </p>
                      <button className="btn-outline new-york-map-btn btn-sm btn">
                        <svg
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
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
                        <span>View on Map</span>
                      </button>
                      <div className="new-york-entry-tip">
                        <span className="new-york-tip-label">Entry Tip:</span>
                        <span className="new-york-tip-text">
                          Dress code strictly enforced – upscale attire required
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">Cost Estimate</h4>
                    <div className="new-york-cost-grid">
                      <div className="new-york-cost-item">
                        <span className="new-york-cost-label">Cover Range</span>
                        <span className="new-york-cost-value">$30–$50</span>
                      </div>
                      <div className="new-york-cost-item">
                        <span className="new-york-cost-label">
                          Drinks Range
                        </span>
                        <span className="new-york-cost-value">$18–$25</span>
                      </div>
                      <div className="new-york-cost-item">
                        <span className="new-york-cost-label">
                          VIP Table Range
                        </span>
                        <span className="new-york-cost-value">$1500–$3000</span>
                      </div>
                      <div className="new-york-cost-total">
                        <span className="new-york-cost-total-label">
                          Total Night Estimate (per person)
                        </span>
                        <span className="new-york-cost-total-value">
                          $150–$200
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">
                      Rating &amp; Crowd
                    </h4>
                    <div className="new-york-rating-content">
                      <div className="new-york-rating-row">
                        <div className="new-york-rating-stars">
                          <svg
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span className="new-york-rating-value">4.9</span>
                        </div>
                        <div className="new-york-crowd-level">
                          <span className="new-york-crowd-label">
                            Crowd Level:
                          </span>
                          <span className="new-york-crowd-badge new-york-crowd-very-high">
                            VERY HIGH
                          </span>
                        </div>
                      </div>
                      <div className="new-york-crowd-meter">
                        <div className="unlocked-intelligence-thq-new-york-crowd-bar-elm2 new-york-crowd-bar"></div>
                      </div>
                      <div className="new-york-best-time">
                        <span className="new-york-best-time-label">
                          Best Time Inside:
                        </span>
                        <span className="new-york-best-time-value">
                          12:30–2:30 AM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-actions">
                    <button className="btn-accent btn new-york-action-btn-primary btn-lg">
                      Request VIP
                    </button>
                    <button className="btn-outline new-york-action-btn-secondary btn btn-lg">
                      <svg
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Save Venue</span>
                    </button>
                  </div>
                </div>
              </article>
              <article className="new-york-venue-card">
                <div className="new-york-venue-card-inner">
                  <div className="new-york-venue-header">
                    <div className="new-york-venue-title-row">
                      <h3 className="new-york-venue-name">Afar NYC</h3>
                      <div className="new-york-venue-tags">
                        <span className="new-york-venue-city-tag">
                          New York
                        </span>
                        <span className="new-york-venue-category-tag">
                          Latin/Reggaeton
                        </span>
                      </div>
                    </div>
                    <div className="new-york-venue-member-badge">
                      <div className="new-york-lock-icon">
                        <svg
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                          height="14"
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
                      <span>Member Intel</span>
                    </div>
                  </div>
                  <div className="new-york-venue-image-wrapper">
                    <img
                      alt="Afar NYC interior"
                      src="https://images.pexels.com/photos/6969866/pexels-photo-6969866.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="new-york-venue-image"
                    />
                  </div>
                  <div className="new-york-venue-snapshot">
                    <span className="new-york-snapshot-label">
                      Quick Snapshot:
                    </span>
                    <span className="new-york-snapshot-value">
                      Energetic | Latin/Reggaeton | Club Wear
                    </span>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">Best Plan</h4>
                    <div className="new-york-plan-grid">
                      <div className="new-york-plan-item">
                        <div className="new-york-plan-icon">
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
                        </div>
                        <div className="new-york-plan-content">
                          <span className="new-york-plan-label">
                            Best Arrival Time
                          </span>
                          <span className="new-york-plan-value">
                            11:00 PM – 12:00 AM
                          </span>
                        </div>
                      </div>
                      <div className="new-york-plan-item">
                        <div className="new-york-plan-icon">
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
                              <path d="M8 2v4m8-4v4"></path>
                              <rect
                                x="3"
                                y="4"
                                rx="2"
                                width="18"
                                height="18"
                              ></rect>
                              <path d="M3 10h18"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="new-york-plan-content">
                          <span className="new-york-plan-label">
                            Best Day(s)
                          </span>
                          <span className="new-york-plan-value">Thu–Sun</span>
                        </div>
                      </div>
                      <div className="new-york-plan-item">
                        <div className="new-york-plan-icon">
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
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                              <circle r="4" cx="12" cy="7"></circle>
                            </g>
                          </svg>
                        </div>
                        <div className="new-york-plan-content">
                          <span className="new-york-plan-label">
                            Ideal Party Size
                          </span>
                          <span className="new-york-plan-value">3–6</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">Parking Intel</h4>
                    <div className="new-york-parking-list">
                      <div className="new-york-parking-item">
                        <span className="new-york-parking-label">
                          Best Parking Spots:
                        </span>
                      </div>
                      <div className="new-york-parking-item">
                        <div className="new-york-parking-icon">
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
                              <circle r="10" cx="12" cy="12"></circle>
                              <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                            </g>
                          </svg>
                        </div>
                        <span className="new-york-parking-text">
                          Nearest paid garage: East 14th St Parking – 3rd Ave
                          (4–6 min walk)
                        </span>
                      </div>
                      <div className="new-york-parking-item">
                        <div className="new-york-parking-icon">
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
                              <circle r="10" cx="12" cy="12"></circle>
                              <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                            </g>
                          </svg>
                        </div>
                        <span className="new-york-parking-text">
                          Street parking zone: Avenue C (weekends difficult)
                        </span>
                      </div>
                      <div className="new-york-parking-item">
                        <div className="new-york-parking-icon">
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
                              <circle r="10" cx="12" cy="12"></circle>
                              <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                            </g>
                          </svg>
                        </div>
                        <span className="new-york-parking-text">
                          Rideshare drop-off: Main entrance on Avenue C
                        </span>
                      </div>
                      <div className="new-york-parking-safety">
                        <span className="new-york-safety-label">
                          Safety note:
                        </span>
                        <span className="new-york-safety-text">
                          Avoid: Tompkins Square Park late-night
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">
                      Address &amp; Access
                    </h4>
                    <div className="new-york-address-content">
                      <p className="new-york-address-text">
                        150 Avenue C, New York, NY 10009
                      </p>
                      <button className="btn-outline new-york-map-btn btn-sm btn">
                        <svg
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
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
                        <span>View on Map</span>
                      </button>
                      <div className="new-york-entry-tip">
                        <span className="new-york-tip-label">Entry Tip:</span>
                        <span className="new-york-tip-text">
                          Arrive before 11:30 PM for easier entry
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">Cost Estimate</h4>
                    <div className="new-york-cost-grid">
                      <div className="new-york-cost-item">
                        <span className="new-york-cost-label">Cover Range</span>
                        <span className="new-york-cost-value">$15–$25</span>
                      </div>
                      <div className="new-york-cost-item">
                        <span className="new-york-cost-label">
                          Drinks Range
                        </span>
                        <span className="new-york-cost-value">$12–$18</span>
                      </div>
                      <div className="new-york-cost-item">
                        <span className="new-york-cost-label">
                          VIP Table Range
                        </span>
                        <span className="new-york-cost-value">$600–$1500</span>
                      </div>
                      <div className="new-york-cost-total">
                        <span className="new-york-cost-total-label">
                          Total Night Estimate (per person)
                        </span>
                        <span className="new-york-cost-total-value">
                          $90–$130
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">
                      Rating &amp; Crowd
                    </h4>
                    <div className="new-york-rating-content">
                      <div className="new-york-rating-row">
                        <div className="new-york-rating-stars">
                          <svg
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span className="new-york-rating-value">4.7</span>
                        </div>
                        <div className="new-york-crowd-level">
                          <span className="new-york-crowd-label">
                            Crowd Level:
                          </span>
                          <span className="new-york-crowd-high new-york-crowd-badge">
                            HIGH
                          </span>
                        </div>
                      </div>
                      <div className="new-york-crowd-meter">
                        <div className="unlocked-intelligence-thq-new-york-crowd-bar-elm3 new-york-crowd-bar"></div>
                      </div>
                      <div className="new-york-best-time">
                        <span className="new-york-best-time-label">
                          Best Time Inside:
                        </span>
                        <span className="new-york-best-time-value">
                          12:00–2:30 AM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-actions">
                    <button className="btn-accent btn new-york-action-btn-primary btn-lg">
                      Request VIP
                    </button>
                    <button className="btn-outline new-york-action-btn-secondary btn btn-lg">
                      <svg
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Save Venue</span>
                    </button>
                  </div>
                </div>
              </article>
              <article className="new-york-venue-card">
                <div className="new-york-venue-card-inner">
                  <div className="new-york-venue-header">
                    <div className="new-york-venue-title-row">
                      <h3 className="new-york-venue-name">The Box NYC</h3>
                      <div className="new-york-venue-tags">
                        <span className="new-york-venue-city-tag">
                          New York
                        </span>
                        <span className="new-york-venue-category-tag">
                          House/Techno
                        </span>
                      </div>
                    </div>
                    <div className="new-york-venue-member-badge">
                      <div className="new-york-lock-icon">
                        <svg
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                          height="14"
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
                      <span>Member Intel</span>
                    </div>
                  </div>
                  <div className="new-york-venue-image-wrapper">
                    <img
                      alt="The Box NYC interior"
                      src="https://images.pexels.com/photos/6908367/pexels-photo-6908367.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="new-york-venue-image"
                    />
                  </div>
                  <div className="new-york-venue-snapshot">
                    <span className="new-york-snapshot-label">
                      Quick Snapshot:
                    </span>
                    <span className="new-york-snapshot-value">
                      Theatrical | House/Techno | Dress Code
                    </span>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">Best Plan</h4>
                    <div className="new-york-plan-grid">
                      <div className="new-york-plan-item">
                        <div className="new-york-plan-icon">
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
                        </div>
                        <div className="new-york-plan-content">
                          <span className="new-york-plan-label">
                            Best Arrival Time
                          </span>
                          <span className="new-york-plan-value">
                            12:30 AM – 1:30 AM
                          </span>
                        </div>
                      </div>
                      <div className="new-york-plan-item">
                        <div className="new-york-plan-icon">
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
                              <path d="M8 2v4m8-4v4"></path>
                              <rect
                                x="3"
                                y="4"
                                rx="2"
                                width="18"
                                height="18"
                              ></rect>
                              <path d="M3 10h18"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="new-york-plan-content">
                          <span className="new-york-plan-label">
                            Best Day(s)
                          </span>
                          <span className="new-york-plan-value">Fri–Sat</span>
                        </div>
                      </div>
                      <div className="new-york-plan-item">
                        <div className="new-york-plan-icon">
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
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                              <circle r="4" cx="12" cy="7"></circle>
                            </g>
                          </svg>
                        </div>
                        <div className="new-york-plan-content">
                          <span className="new-york-plan-label">
                            Ideal Party Size
                          </span>
                          <span className="new-york-plan-value">2–6</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">Parking Intel</h4>
                    <div className="new-york-parking-list">
                      <div className="new-york-parking-item">
                        <span className="new-york-parking-label">
                          Best Parking Spots:
                        </span>
                      </div>
                      <div className="new-york-parking-item">
                        <div className="new-york-parking-icon">
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
                              <circle r="10" cx="12" cy="12"></circle>
                              <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                            </g>
                          </svg>
                        </div>
                        <span className="new-york-parking-text">
                          Nearest paid garage: Chrystie St Parking – Grand St
                          (3–5 min walk)
                        </span>
                      </div>
                      <div className="new-york-parking-item">
                        <div className="new-york-parking-icon">
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
                              <circle r="10" cx="12" cy="12"></circle>
                              <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                            </g>
                          </svg>
                        </div>
                        <span className="new-york-parking-text">
                          Street parking zone: Chrystie Street (after 1 AM
                          easier)
                        </span>
                      </div>
                      <div className="new-york-parking-item">
                        <div className="new-york-parking-icon">
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
                              <circle r="10" cx="12" cy="12"></circle>
                              <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                            </g>
                          </svg>
                        </div>
                        <span className="new-york-parking-text">
                          Rideshare drop-off: Bowery at Chrystie Street
                        </span>
                      </div>
                      <div className="new-york-parking-safety">
                        <span className="new-york-safety-label">
                          Safety note:
                        </span>
                        <span className="new-york-safety-text">
                          Avoid: Sara D. Roosevelt Park late-night
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">
                      Address &amp; Access
                    </h4>
                    <div className="new-york-address-content">
                      <p className="new-york-address-text">
                        189 Chrystie Street, New York, NY 10002
                      </p>
                      <button className="btn-outline new-york-map-btn btn-sm btn">
                        <svg
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
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
                        <span>View on Map</span>
                      </button>
                      <div className="new-york-entry-tip">
                        <span className="new-york-tip-label">Entry Tip:</span>
                        <span className="new-york-tip-text">
                          Members-only policy – reservations required
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">Cost Estimate</h4>
                    <div className="new-york-cost-grid">
                      <div className="new-york-cost-item">
                        <span className="new-york-cost-label">Cover Range</span>
                        <span className="new-york-cost-value">$40–$60</span>
                      </div>
                      <div className="new-york-cost-item">
                        <span className="new-york-cost-label">
                          Drinks Range
                        </span>
                        <span className="new-york-cost-value">$20–$30</span>
                      </div>
                      <div className="new-york-cost-item">
                        <span className="new-york-cost-label">
                          VIP Table Range
                        </span>
                        <span className="new-york-cost-value">$2000–$4000</span>
                      </div>
                      <div className="new-york-cost-total">
                        <span className="new-york-cost-total-label">
                          Total Night Estimate (per person)
                        </span>
                        <span className="new-york-cost-total-value">
                          $180–$250
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-section">
                    <h4 className="new-york-section-title">
                      Rating &amp; Crowd
                    </h4>
                    <div className="new-york-rating-content">
                      <div className="new-york-rating-row">
                        <div className="new-york-rating-stars">
                          <svg
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span className="new-york-rating-value">4.9</span>
                        </div>
                        <div className="new-york-crowd-level">
                          <span className="new-york-crowd-label">
                            Crowd Level:
                          </span>
                          <span className="new-york-crowd-badge new-york-crowd-very-high">
                            VERY HIGH
                          </span>
                        </div>
                      </div>
                      <div className="new-york-crowd-meter">
                        <div className="unlocked-intelligence-thq-new-york-crowd-bar-elm4 new-york-crowd-bar"></div>
                      </div>
                      <div className="new-york-best-time">
                        <span className="new-york-best-time-label">
                          Best Time Inside:
                        </span>
                        <span className="new-york-best-time-value">
                          1:00–4:00 AM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-york-venue-actions">
                    <button className="btn-accent btn new-york-action-btn-primary btn-lg">
                      Request VIP
                    </button>
                    <button className="btn-outline new-york-action-btn-secondary btn btn-lg">
                      <svg
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Save Venue</span>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <section className="unlocked-intelligence-la-venues-section">
            <div className="la-venues-container">
              <div className="la-section-header">
                <h2 className="section-title la-city-title">Los Angeles</h2>
              </div>
              <div className="unlocked-intelligence-la-venues-grid">
                <article className="unlocked-intelligence-la-venue-card">
                  <div className="unlocked-intelligence-la-venue-image-wrapper">
                    <img
                      alt="Catch LA nightclub interior"
                      src="https://images.pexels.com/photos/1398266/pexels-photo-1398266.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="la-venue-image"
                    />
                    <div className="la-venue-image-overlay"></div>
                  </div>
                  <div className="unlocked-intelligence-la-venue-content">
                    <div className="la-venue-header">
                      <div className="la-venue-title-row">
                        <h3 className="unlocked-intelligence-la-venue-name">
                          Catch LA
                        </h3>
                        <div className="la-venue-badges">
                          <span className="la-city-badge">Los Angeles</span>
                          <span className="la-category-badge">House</span>
                        </div>
                      </div>
                      <div className="la-member-badge">
                        <svg
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span>Member Intel</span>
                      </div>
                    </div>
                    <div className="la-venue-snapshot">
                      <div className="la-snapshot-item">
                        <span className="la-snapshot-label">Vibe</span>
                        <span className="la-snapshot-value">Glamorous</span>
                      </div>
                      <div className="la-snapshot-divider"></div>
                      <div className="la-snapshot-item">
                        <span className="la-snapshot-label">Music</span>
                        <span className="la-snapshot-value">House/Techno</span>
                      </div>
                      <div className="la-snapshot-divider"></div>
                      <div className="la-snapshot-item">
                        <span className="la-snapshot-label">Dress Code</span>
                        <span className="la-snapshot-value">Smart Casual</span>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">Best Plan</h4>
                      <div className="la-best-plan-grid">
                        <div className="la-plan-item">
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
                          <div className="la-plan-content">
                            <span className="la-plan-label">
                              Best Arrival Time
                            </span>
                            <span className="la-plan-value">
                              11:00 PM – 12:00 AM
                            </span>
                          </div>
                        </div>
                        <div className="la-plan-item">
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
                          <div className="la-plan-content">
                            <span className="la-plan-label">Best Day(s)</span>
                            <span className="la-plan-value">Fri–Sat</span>
                          </div>
                        </div>
                        <div className="la-plan-item">
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
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle r="4" cx="9" cy="7"></circle>
                            </g>
                          </svg>
                          <div className="la-plan-content">
                            <span className="la-plan-label">
                              Ideal Party Size
                            </span>
                            <span className="la-plan-value">6–10</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">Parking Intel</h4>
                      <div className="la-parking-intel">
                        <div className="la-parking-options">
                          <p className="la-parking-label">
                            Best Parking Spots:
                          </p>
                          <ul className="la-parking-list">
                            <li className="la-parking-option">
                              <span className="la-option-label">Option A:</span>
                              <span>
                                Valet parking: Catch LA valet (recommended,
                                $15–$25)
                              </span>
                            </li>
                            <li className="la-parking-option">
                              <span className="la-option-label">Option B:</span>
                              <span>
                                Paid garage: 8420 Melrose Parking – Melrose Ave
                                (5 min walk)
                              </span>
                            </li>
                            <li className="la-parking-option">
                              <span className="la-option-label">Option C:</span>
                              <span>
                                Rideshare drop-off: Main entrance on Melrose Ave
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="la-parking-safety">
                          <svg
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8-5v4m0 4h.01"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>Avoid: Side streets after 1 AM</span>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">
                        Address &amp; Access
                      </h4>
                      <div className="la-address-block">
                        <p className="la-address">
                          8428 Melrose Ave, West Hollywood, CA 90069
                        </p>
                        <button className="la-map-btn">
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
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle r="3" cx="12" cy="10"></circle>
                            </g>
                          </svg>
                          <span>View on Map</span>
                        </button>
                        <div className="la-entry-tip">
                          <span className="la-tip-label">Entry Tip:</span>
                          <span>
                            Valet recommended on weekends; line moves quickly
                            with pre-arrival text
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">Cost Estimate</h4>
                      <div className="la-cost-grid">
                        <div className="la-cost-item">
                          <span className="la-cost-label">Cover Range</span>
                          <span className="la-cost-value">$20–$35</span>
                        </div>
                        <div className="la-cost-item">
                          <span className="la-cost-label">Drinks Range</span>
                          <span className="la-cost-value">$14–$18</span>
                        </div>
                        <div className="la-cost-item">
                          <span className="la-cost-label">VIP Table Range</span>
                          <span className="la-cost-value">$600–$1800</span>
                        </div>
                        <div className="la-cost-item la-cost-total">
                          <span className="la-cost-label">
                            Total Night Estimate
                          </span>
                          <span className="la-cost-value">
                            $100–$140 per person
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">Rating &amp; Crowd</h4>
                      <div className="la-rating-crowd-grid">
                        <div className="la-rating-block">
                          <div className="la-rating-stars">
                            <svg
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              height="20"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <span className="la-rating-value">4.7</span>
                          </div>
                        </div>
                        <div className="la-crowd-block">
                          <span className="la-crowd-label">Crowd Level</span>
                          <span className="la-crowd-badge la-crowd-very-high">
                            VERY HIGH
                          </span>
                        </div>
                        <div className="la-best-time-block">
                          <span className="la-best-time-label">
                            Best Time Inside
                          </span>
                          <span className="la-best-time-value">
                            12:00–2:00 AM
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-actions">
                      <button className="btn-accent btn la-vip-btn">
                        Request VIP
                      </button>
                      <button className="la-save-btn btn-outline btn">
                        <svg
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span>Save Venue</span>
                      </button>
                    </div>
                  </div>
                </article>
                <article className="unlocked-intelligence-la-venue-card">
                  <div className="unlocked-intelligence-la-venue-image-wrapper">
                    <img
                      alt="Shrine Nightclub interior"
                      src="https://images.pexels.com/photos/8942209/pexels-photo-8942209.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="la-venue-image"
                    />
                    <div className="la-venue-image-overlay"></div>
                  </div>
                  <div className="unlocked-intelligence-la-venue-content">
                    <div className="la-venue-header">
                      <div className="la-venue-title-row">
                        <h3 className="unlocked-intelligence-la-venue-name">
                          Shrine Nightclub
                        </h3>
                        <div className="la-venue-badges">
                          <span className="la-city-badge">Los Angeles</span>
                          <span className="la-category-badge">Hip-Hop</span>
                        </div>
                      </div>
                      <div className="la-member-badge">
                        <svg
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span>Member Intel</span>
                      </div>
                    </div>
                    <div className="la-venue-snapshot">
                      <div className="la-snapshot-item">
                        <span className="la-snapshot-label">Vibe</span>
                        <span className="la-snapshot-value">Energetic</span>
                      </div>
                      <div className="la-snapshot-divider"></div>
                      <div className="la-snapshot-item">
                        <span className="la-snapshot-label">Music</span>
                        <span className="la-snapshot-value">Hip-Hop/Trap</span>
                      </div>
                      <div className="la-snapshot-divider"></div>
                      <div className="la-snapshot-item">
                        <span className="la-snapshot-label">Dress Code</span>
                        <span className="la-snapshot-value">Club Wear</span>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">Best Plan</h4>
                      <div className="la-best-plan-grid">
                        <div className="la-plan-item">
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
                          <div className="la-plan-content">
                            <span className="la-plan-label">
                              Best Arrival Time
                            </span>
                            <span className="la-plan-value">
                              10:30 PM – 11:30 PM
                            </span>
                          </div>
                        </div>
                        <div className="la-plan-item">
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
                          <div className="la-plan-content">
                            <span className="la-plan-label">Best Day(s)</span>
                            <span className="la-plan-value">Fri–Sat</span>
                          </div>
                        </div>
                        <div className="la-plan-item">
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
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle r="4" cx="9" cy="7"></circle>
                            </g>
                          </svg>
                          <div className="la-plan-content">
                            <span className="la-plan-label">
                              Ideal Party Size
                            </span>
                            <span className="la-plan-value">8–12</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">Parking Intel</h4>
                      <div className="la-parking-intel">
                        <div className="la-parking-options">
                          <p className="la-parking-label">
                            Best Parking Spots:
                          </p>
                          <ul className="la-parking-list">
                            <li className="la-parking-option">
                              <span className="la-option-label">Option A:</span>
                              <span>
                                Valet parking: Shrine valet (recommended,
                                $20–$30)
                              </span>
                            </li>
                            <li className="la-parking-option">
                              <span className="la-option-label">Option B:</span>
                              <span>
                                Paid garage: Santa Monica Blvd Lot – 2 blocks
                                south (8 min walk)
                              </span>
                            </li>
                            <li className="la-parking-option">
                              <span className="la-option-label">Option C:</span>
                              <span>
                                Rideshare drop-off: Front entrance on Cahuenga
                                Blvd
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="la-parking-safety">
                          <svg
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8-5v4m0 4h.01"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>
                            Avoid: Alley parking near Hollywood Blvd late-night
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">
                        Address &amp; Access
                      </h4>
                      <div className="la-address-block">
                        <p className="la-address">
                          1735 N Cahuenga Blvd, Hollywood, CA 90028
                        </p>
                        <button className="la-map-btn">
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
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle r="3" cx="12" cy="10"></circle>
                            </g>
                          </svg>
                          <span>View on Map</span>
                        </button>
                        <div className="la-entry-tip">
                          <span className="la-tip-label">Entry Tip:</span>
                          <span>
                            Guest list closes at 11 PM; arrive early to avoid
                            long lines
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">Cost Estimate</h4>
                      <div className="la-cost-grid">
                        <div className="la-cost-item">
                          <span className="la-cost-label">Cover Range</span>
                          <span className="la-cost-value">$25–$40</span>
                        </div>
                        <div className="la-cost-item">
                          <span className="la-cost-label">Drinks Range</span>
                          <span className="la-cost-value">$15–$20</span>
                        </div>
                        <div className="la-cost-item">
                          <span className="la-cost-label">VIP Table Range</span>
                          <span className="la-cost-value">$800–$2000</span>
                        </div>
                        <div className="la-cost-item la-cost-total">
                          <span className="la-cost-label">
                            Total Night Estimate
                          </span>
                          <span className="la-cost-value">
                            $120–$160 per person
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">Rating &amp; Crowd</h4>
                      <div className="la-rating-crowd-grid">
                        <div className="la-rating-block">
                          <div className="la-rating-stars">
                            <svg
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              height="20"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <span className="la-rating-value">4.6</span>
                          </div>
                        </div>
                        <div className="la-crowd-block">
                          <span className="la-crowd-label">Crowd Level</span>
                          <span className="la-crowd-badge la-crowd-very-high">
                            VERY HIGH
                          </span>
                        </div>
                        <div className="la-best-time-block">
                          <span className="la-best-time-label">
                            Best Time Inside
                          </span>
                          <span className="la-best-time-value">
                            11:30 PM–1:30 AM
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-actions">
                      <button className="btn-accent btn la-vip-btn">
                        Request VIP
                      </button>
                      <button className="la-save-btn btn-outline btn">
                        <svg
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span>Save Venue</span>
                      </button>
                    </div>
                  </div>
                </article>
                <article className="unlocked-intelligence-la-venue-card">
                  <div className="unlocked-intelligence-la-venue-image-wrapper">
                    <img
                      alt="Academy LA nightclub interior"
                      src="https://images.pexels.com/photos/14663635/pexels-photo-14663635.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="la-venue-image"
                    />
                    <div className="la-venue-image-overlay"></div>
                  </div>
                  <div className="unlocked-intelligence-la-venue-content">
                    <div className="la-venue-header">
                      <div className="la-venue-title-row">
                        <h3 className="unlocked-intelligence-la-venue-name">
                          Academy LA
                        </h3>
                        <div className="la-venue-badges">
                          <span className="la-city-badge">Los Angeles</span>
                          <span className="la-category-badge">Latin</span>
                        </div>
                      </div>
                      <div className="la-member-badge">
                        <svg
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span>Member Intel</span>
                      </div>
                    </div>
                    <div className="la-venue-snapshot">
                      <div className="la-snapshot-item">
                        <span className="la-snapshot-label">Vibe</span>
                        <span className="la-snapshot-value">Vibrant</span>
                      </div>
                      <div className="la-snapshot-divider"></div>
                      <div className="la-snapshot-item">
                        <span className="la-snapshot-label">Music</span>
                        <span className="la-snapshot-value">
                          Latin/Reggaeton
                        </span>
                      </div>
                      <div className="la-snapshot-divider"></div>
                      <div className="la-snapshot-item">
                        <span className="la-snapshot-label">Dress Code</span>
                        <span className="la-snapshot-value">Club Wear</span>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">Best Plan</h4>
                      <div className="la-best-plan-grid">
                        <div className="la-plan-item">
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
                          <div className="la-plan-content">
                            <span className="la-plan-label">
                              Best Arrival Time
                            </span>
                            <span className="la-plan-value">
                              11:00 PM – 12:00 AM
                            </span>
                          </div>
                        </div>
                        <div className="la-plan-item">
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
                          <div className="la-plan-content">
                            <span className="la-plan-label">Best Day(s)</span>
                            <span className="la-plan-value">Thu–Sat</span>
                          </div>
                        </div>
                        <div className="la-plan-item">
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
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle r="4" cx="9" cy="7"></circle>
                            </g>
                          </svg>
                          <div className="la-plan-content">
                            <span className="la-plan-label">
                              Ideal Party Size
                            </span>
                            <span className="la-plan-value">6–10</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">Parking Intel</h4>
                      <div className="la-parking-intel">
                        <div className="la-parking-options">
                          <p className="la-parking-label">
                            Best Parking Spots:
                          </p>
                          <ul className="la-parking-list">
                            <li className="la-parking-option">
                              <span className="la-option-label">Option A:</span>
                              <span>
                                Valet parking: Academy LA valet (recommended,
                                $20–$30)
                              </span>
                            </li>
                            <li className="la-parking-option">
                              <span className="la-option-label">Option B:</span>
                              <span>
                                Paid garage: Hollywood &amp; Highland – Highland
                                Ave (10 min walk)
                              </span>
                            </li>
                            <li className="la-parking-option">
                              <span className="la-option-label">Option C:</span>
                              <span>
                                Rideshare drop-off: Main entrance on Hollywood
                                Blvd
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="la-parking-safety">
                          <svg
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8-5v4m0 4h.01"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>
                            Avoid: Street parking on Vine after midnight
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">
                        Address &amp; Access
                      </h4>
                      <div className="la-address-block">
                        <p className="la-address">
                          6021 Hollywood Blvd, Hollywood, CA 90028
                        </p>
                        <button className="la-map-btn">
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
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle r="3" cx="12" cy="10"></circle>
                            </g>
                          </svg>
                          <span>View on Map</span>
                        </button>
                        <div className="la-entry-tip">
                          <span className="la-tip-label">Entry Tip:</span>
                          <span>
                            Latin nights get packed; VIP reservations skip all
                            lines
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">Cost Estimate</h4>
                      <div className="la-cost-grid">
                        <div className="la-cost-item">
                          <span className="la-cost-label">Cover Range</span>
                          <span className="la-cost-value">$20–$35</span>
                        </div>
                        <div className="la-cost-item">
                          <span className="la-cost-label">Drinks Range</span>
                          <span className="la-cost-value">$12–$16</span>
                        </div>
                        <div className="la-cost-item">
                          <span className="la-cost-label">VIP Table Range</span>
                          <span className="la-cost-value">$700–$1600</span>
                        </div>
                        <div className="la-cost-item la-cost-total">
                          <span className="la-cost-label">
                            Total Night Estimate
                          </span>
                          <span className="la-cost-value">
                            $90–$130 per person
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">Rating &amp; Crowd</h4>
                      <div className="la-rating-crowd-grid">
                        <div className="la-rating-block">
                          <div className="la-rating-stars">
                            <svg
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              height="20"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <span className="la-rating-value">4.8</span>
                          </div>
                        </div>
                        <div className="la-crowd-block">
                          <span className="la-crowd-label">Crowd Level</span>
                          <span className="la-crowd-badge la-crowd-high">
                            HIGH
                          </span>
                        </div>
                        <div className="la-best-time-block">
                          <span className="la-best-time-label">
                            Best Time Inside
                          </span>
                          <span className="la-best-time-value">
                            12:00–2:00 AM
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-actions">
                      <button className="btn-accent btn la-vip-btn">
                        Request VIP
                      </button>
                      <button className="la-save-btn btn-outline btn">
                        <svg
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span>Save Venue</span>
                      </button>
                    </div>
                  </div>
                </article>
                <article className="unlocked-intelligence-la-venue-card">
                  <div className="unlocked-intelligence-la-venue-image-wrapper">
                    <img
                      alt="Skybar at Mondrian rooftop"
                      src="https://images.pexels.com/photos/2105327/pexels-photo-2105327.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="la-venue-image"
                    />
                    <div className="la-venue-image-overlay"></div>
                  </div>
                  <div className="unlocked-intelligence-la-venue-content">
                    <div className="la-venue-header">
                      <div className="la-venue-title-row">
                        <h3 className="unlocked-intelligence-la-venue-name">
                          Skybar at Mondrian
                        </h3>
                        <div className="la-venue-badges">
                          <span className="la-city-badge">Los Angeles</span>
                          <span className="la-category-badge">House</span>
                        </div>
                      </div>
                      <div className="la-member-badge">
                        <svg
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span>Member Intel</span>
                      </div>
                    </div>
                    <div className="la-venue-snapshot">
                      <div className="la-snapshot-item">
                        <span className="la-snapshot-label">Vibe</span>
                        <span className="la-snapshot-value">Rooftop Vibes</span>
                      </div>
                      <div className="la-snapshot-divider"></div>
                      <div className="la-snapshot-item">
                        <span className="la-snapshot-label">Music</span>
                        <span className="la-snapshot-value">
                          House/Deep House
                        </span>
                      </div>
                      <div className="la-snapshot-divider"></div>
                      <div className="la-snapshot-item">
                        <span className="la-snapshot-label">Dress Code</span>
                        <span className="la-snapshot-value">Smart Casual</span>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">Best Plan</h4>
                      <div className="la-best-plan-grid">
                        <div className="la-plan-item">
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
                          <div className="la-plan-content">
                            <span className="la-plan-label">
                              Best Arrival Time
                            </span>
                            <span className="la-plan-value">
                              9:00 PM – 10:30 PM
                            </span>
                          </div>
                        </div>
                        <div className="la-plan-item">
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
                          <div className="la-plan-content">
                            <span className="la-plan-label">Best Day(s)</span>
                            <span className="la-plan-value">Thu–Sat</span>
                          </div>
                        </div>
                        <div className="la-plan-item">
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
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle r="4" cx="9" cy="7"></circle>
                            </g>
                          </svg>
                          <div className="la-plan-content">
                            <span className="la-plan-label">
                              Ideal Party Size
                            </span>
                            <span className="la-plan-value">4–8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">Parking Intel</h4>
                      <div className="la-parking-intel">
                        <div className="la-parking-options">
                          <p className="la-parking-label">
                            Best Parking Spots:
                          </p>
                          <ul className="la-parking-list">
                            <li className="la-parking-option">
                              <span className="la-option-label">Option A:</span>
                              <span>
                                Valet parking: Mondrian Hotel valet
                                (recommended, $25–$35)
                              </span>
                            </li>
                            <li className="la-parking-option">
                              <span className="la-option-label">Option B:</span>
                              <span>
                                Paid garage: Sunset Tower Parking – Sunset Blvd
                                (6 min walk)
                              </span>
                            </li>
                            <li className="la-parking-option">
                              <span className="la-option-label">Option C:</span>
                              <span>
                                Rideshare drop-off: Mondrian Hotel main entrance
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="la-parking-safety">
                          <svg
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8-5v4m0 4h.01"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>Avoid: Side street parking on steep hills</span>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">
                        Address &amp; Access
                      </h4>
                      <div className="la-address-block">
                        <p className="la-address">
                          8440 Sunset Blvd, West Hollywood, CA 90069
                        </p>
                        <button className="la-map-btn">
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
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle r="3" cx="12" cy="10"></circle>
                            </g>
                          </svg>
                          <span>View on Map</span>
                        </button>
                        <div className="la-entry-tip">
                          <span className="la-tip-label">Entry Tip:</span>
                          <span>
                            Reservations highly recommended; check in at hotel
                            lobby first
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">Cost Estimate</h4>
                      <div className="la-cost-grid">
                        <div className="la-cost-item">
                          <span className="la-cost-label">Cover Range</span>
                          <span className="la-cost-value">$30–$50</span>
                        </div>
                        <div className="la-cost-item">
                          <span className="la-cost-label">Drinks Range</span>
                          <span className="la-cost-value">$18–$25</span>
                        </div>
                        <div className="la-cost-item">
                          <span className="la-cost-label">VIP Table Range</span>
                          <span className="la-cost-value">$1000–$2500</span>
                        </div>
                        <div className="la-cost-item la-cost-total">
                          <span className="la-cost-label">
                            Total Night Estimate
                          </span>
                          <span className="la-cost-value">
                            $150–$200 per person
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-section">
                      <h4 className="la-section-heading">Rating &amp; Crowd</h4>
                      <div className="la-rating-crowd-grid">
                        <div className="la-rating-block">
                          <div className="la-rating-stars">
                            <svg
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              height="20"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <span className="la-rating-value">4.7</span>
                          </div>
                        </div>
                        <div className="la-crowd-block">
                          <span className="la-crowd-label">Crowd Level</span>
                          <span className="la-crowd-badge la-crowd-high">
                            HIGH
                          </span>
                        </div>
                        <div className="la-best-time-block">
                          <span className="la-best-time-label">
                            Best Time Inside
                          </span>
                          <span className="la-best-time-value">
                            10:00 PM–12:30 AM
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="la-venue-actions">
                      <button className="btn-accent btn la-vip-btn">
                        Request VIP
                      </button>
                      <button className="la-save-btn btn-outline btn">
                        <svg
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span>Save Venue</span>
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <section className="unlocked-intelligence-vegas-venues-section">
              <div className="vegas-section-container">
                <div className="vegas-section-header">
                  <h2 className="vegas-city-title section-title">Las Vegas</h2>
                </div>
                <div className="unlocked-intelligence-vegas-venues-grid">
                  <article className="unlocked-intelligence-vegas-venue-card">
                    <div className="unlocked-intelligence-vegas-venue-image-wrapper">
                      <img
                        alt="Omnia Nightclub interior"
                        src="https://images.pexels.com/photos/1398266/pexels-photo-1398266.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        className="unlocked-intelligence-vegas-venue-image"
                      />
                      <div className="vegas-venue-category-tag">
                        <span>House</span>
                      </div>
                    </div>
                    <div className="unlocked-intelligence-vegas-venue-content">
                      <div className="vegas-venue-header">
                        <div className="vegas-venue-name-row">
                          <h3 className="unlocked-intelligence-vegas-venue-name">
                            Omnia Nightclub
                          </h3>
                          <div className="vegas-venue-badges">
                            <span className="vegas-city-badge">Las Vegas</span>
                            <span className="vegas-category-badge">
                              Premium
                            </span>
                          </div>
                        </div>
                        <div className="vegas-member-intel-badge">
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
                          <span>Member Intel</span>
                        </div>
                      </div>
                      <div className="vegas-quick-snapshot">
                        <span className="vegas-snapshot-title">
                          Quick Snapshot:
                        </span>
                        <span className="vegas-snapshot-item">
                          House/Techno
                        </span>
                        <span className="vegas-snapshot-divider">|</span>
                        <span className="vegas-snapshot-item">
                          Upscale Dress Code
                        </span>
                        <span className="vegas-snapshot-divider">|</span>
                        <span className="vegas-snapshot-item">21+</span>
                      </div>
                      <div className="vegas-intel-section">
                        <h4 className="vegas-intel-title">Best Plan</h4>
                        <div className="vegas-intel-grid">
                          <div className="vegas-intel-item">
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
                            <div className="vegas-intel-content">
                              <span className="vegas-intel-label">
                                Best Arrival Time:
                              </span>
                              <span className="vegas-intel-value">
                                10:30 PM – 11:30 PM
                              </span>
                            </div>
                          </div>
                          <div className="vegas-intel-item">
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
                            <div className="vegas-intel-content">
                              <span className="vegas-intel-label">
                                Best Day(s):
                              </span>
                              <span className="vegas-intel-value">Thu–Sat</span>
                            </div>
                          </div>
                          <div className="vegas-intel-item">
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
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle r="4" cx="9" cy="7"></circle>
                              </g>
                            </svg>
                            <div className="vegas-intel-content">
                              <span className="vegas-intel-label">
                                Ideal Party Size:
                              </span>
                              <span className="vegas-intel-value">4–8</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vegas-intel-section">
                        <h4 className="vegas-intel-title">Parking Intel</h4>
                        <div className="vegas-parking-list">
                          <div className="vegas-parking-item">
                            <span className="vegas-parking-bullet">•</span>
                            <span className="vegas-parking-text">
                              <span className="unlocked-intelligence-text218">
                                Valet parking:
                              </span>
                              <span>
                                {' '}
                                Caesars Palace valet (complimentary with club
                                entry or $15, fastest option)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="vegas-parking-item">
                            <span className="vegas-parking-bullet">•</span>
                            <span className="vegas-parking-text">
                              <span className="unlocked-intelligence-text220">
                                Self-parking:
                              </span>
                              <span>
                                {' '}
                                Caesars Palace garage – Level 4 (easiest access
                                to club entrance)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="vegas-parking-item">
                            <span className="vegas-parking-bullet">•</span>
                            <span className="vegas-parking-text">
                              <span className="unlocked-intelligence-text222">
                                Rideshare drop-off:
                              </span>
                              <span>
                                {' '}
                                Las Vegas Blvd main entrance near Forum Shops
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="vegas-parking-safety">
                            <strong>Avoid:</strong>
                            <span>
                              {' '}
                              Side street parking late-night; stick to resort
                              valet/parking for safety
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="vegas-intel-section">
                        <h4 className="vegas-intel-title">
                          Address &amp; Access
                        </h4>
                        <div className="vegas-address-content">
                          <p className="vegas-address-text">
                            3570 Las Vegas Blvd S, Las Vegas, NV 89109 (Caesars
                            Palace)
                          </p>
                          <button className="unlocked-intelligence-vegas-map-btn">
                            <svg
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
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
                            <span>View on Map</span>
                          </button>
                          <p className="vegas-entry-tip">
                            <span className="unlocked-intelligence-text227">
                              Entry Tip:
                            </span>
                            <span>
                              {' '}
                              Arrive early or use host reservation to skip cover
                              charge
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="vegas-intel-section">
                        <h4 className="vegas-intel-title">Cost Estimate</h4>
                        <div className="vegas-cost-grid">
                          <div className="vegas-cost-item">
                            <span className="vegas-cost-label">
                              Cover Range:
                            </span>
                            <span className="vegas-cost-value">$30–$50</span>
                          </div>
                          <div className="vegas-cost-item">
                            <span className="vegas-cost-label">
                              Drinks Range:
                            </span>
                            <span className="vegas-cost-value">$18–$25</span>
                          </div>
                          <div className="vegas-cost-item">
                            <span className="vegas-cost-label">
                              VIP Table Range:
                            </span>
                            <span className="vegas-cost-value">
                              $2000–$5000
                            </span>
                          </div>
                          <div className="vegas-cost-total vegas-cost-item">
                            <span className="vegas-cost-label">
                              Total Night (per person):
                            </span>
                            <span className="vegas-cost-value">$200–$300</span>
                          </div>
                        </div>
                      </div>
                      <div className="vegas-intel-section">
                        <div className="vegas-rating-crowd">
                          <div className="vegas-rating-item">
                            <svg
                              width="18"
                              xmlns="http://www.w3.org/2000/svg"
                              height="18"
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
                            <span className="vegas-rating-value">4.8</span>
                          </div>
                          <div className="vegas-crowd-item">
                            <span className="vegas-crowd-label">
                              Crowd Level:
                            </span>
                            <span className="vegas-crowd-value vegas-crowd-high">
                              VERY HIGH
                            </span>
                          </div>
                          <div className="vegas-best-time-item">
                            <span className="vegas-best-time-label">
                              Best Time Inside:
                            </span>
                            <span className="vegas-best-time-value">
                              11:00 PM–2:00 AM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="vegas-venue-actions">
                        <button className="vegas-vip-btn btn-accent btn">
                          Request VIP
                        </button>
                        <button className="btn-outline vegas-save-btn btn">
                          <svg
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>Save Venue</span>
                        </button>
                      </div>
                    </div>
                  </article>
                  <article className="unlocked-intelligence-vegas-venue-card">
                    <div className="unlocked-intelligence-vegas-venue-image-wrapper">
                      <img
                        alt="Encore Beach Club"
                        src="https://images.pexels.com/photos/14663635/pexels-photo-14663635.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        className="unlocked-intelligence-vegas-venue-image"
                      />
                      <div className="vegas-venue-category-tag">
                        <span>Hip-Hop</span>
                      </div>
                    </div>
                    <div className="unlocked-intelligence-vegas-venue-content">
                      <div className="vegas-venue-header">
                        <div className="vegas-venue-name-row">
                          <h3 className="unlocked-intelligence-vegas-venue-name">
                            Encore Beach Club
                          </h3>
                          <div className="vegas-venue-badges">
                            <span className="vegas-city-badge">Las Vegas</span>
                            <span className="vegas-category-badge">
                              Exclusive
                            </span>
                          </div>
                        </div>
                        <div className="vegas-member-intel-badge">
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
                          <span>Member Intel</span>
                        </div>
                      </div>
                      <div className="vegas-quick-snapshot">
                        <span className="vegas-snapshot-title">
                          Quick Snapshot:
                        </span>
                        <span className="vegas-snapshot-item">
                          Hip-Hop/R&amp;B
                        </span>
                        <span className="vegas-snapshot-divider">|</span>
                        <span className="vegas-snapshot-item">
                          Smart Casual
                        </span>
                        <span className="vegas-snapshot-divider">|</span>
                        <span className="vegas-snapshot-item">21+</span>
                      </div>
                      <div className="vegas-intel-section">
                        <h4 className="vegas-intel-title">Best Plan</h4>
                        <div className="vegas-intel-grid">
                          <div className="vegas-intel-item">
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
                            <div className="vegas-intel-content">
                              <span className="vegas-intel-label">
                                Best Arrival Time:
                              </span>
                              <span className="vegas-intel-value">
                                12:00 PM – 1:00 PM
                              </span>
                            </div>
                          </div>
                          <div className="vegas-intel-item">
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
                            <div className="vegas-intel-content">
                              <span className="vegas-intel-label">
                                Best Day(s):
                              </span>
                              <span className="vegas-intel-value">Fri–Sun</span>
                            </div>
                          </div>
                          <div className="vegas-intel-item">
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
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle r="4" cx="9" cy="7"></circle>
                              </g>
                            </svg>
                            <div className="vegas-intel-content">
                              <span className="vegas-intel-label">
                                Ideal Party Size:
                              </span>
                              <span className="vegas-intel-value">6–12</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vegas-intel-section">
                        <h4 className="vegas-intel-title">Parking Intel</h4>
                        <div className="vegas-parking-list">
                          <div className="vegas-parking-item">
                            <span className="vegas-parking-bullet">•</span>
                            <span className="vegas-parking-text">
                              <span className="unlocked-intelligence-text232">
                                Valet parking:
                              </span>
                              <span>
                                {' '}
                                Encore hotel valet (complimentary for guests or
                                $20, fastest option)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="vegas-parking-item">
                            <span className="vegas-parking-bullet">•</span>
                            <span className="vegas-parking-text">
                              <span className="unlocked-intelligence-text234">
                                Self-parking:
                              </span>
                              <span>
                                {' '}
                                Wynn/Encore garage – Level 5 (direct elevator to
                                pool club)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="vegas-parking-item">
                            <span className="vegas-parking-bullet">•</span>
                            <span className="vegas-parking-text">
                              <span className="unlocked-intelligence-text236">
                                Rideshare drop-off:
                              </span>
                              <span>
                                {' '}
                                Encore main entrance on Las Vegas Blvd
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="vegas-parking-safety">
                            <strong>Avoid:</strong>
                            <span>
                              {' '}
                              Late afternoon arrivals (peak pool party hours);
                              arrive early for best access
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="vegas-intel-section">
                        <h4 className="vegas-intel-title">
                          Address &amp; Access
                        </h4>
                        <div className="vegas-address-content">
                          <p className="vegas-address-text">
                            3131 Las Vegas Blvd S, Las Vegas, NV 89109 (Encore
                            at Wynn)
                          </p>
                          <button className="unlocked-intelligence-vegas-map-btn">
                            <svg
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
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
                            <span>View on Map</span>
                          </button>
                          <p className="vegas-entry-tip">
                            <span className="unlocked-intelligence-text241">
                              Entry Tip:
                            </span>
                            <span>
                              {' '}
                              Dayclub access best with cabana reservation;
                              general admission limited
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="vegas-intel-section">
                        <h4 className="vegas-intel-title">Cost Estimate</h4>
                        <div className="vegas-cost-grid">
                          <div className="vegas-cost-item">
                            <span className="vegas-cost-label">
                              Cover Range:
                            </span>
                            <span className="vegas-cost-value">$40–$80</span>
                          </div>
                          <div className="vegas-cost-item">
                            <span className="vegas-cost-label">
                              Drinks Range:
                            </span>
                            <span className="vegas-cost-value">$20–$30</span>
                          </div>
                          <div className="vegas-cost-item">
                            <span className="vegas-cost-label">
                              VIP Cabana Range:
                            </span>
                            <span className="vegas-cost-value">
                              $3000–$8000
                            </span>
                          </div>
                          <div className="vegas-cost-total vegas-cost-item">
                            <span className="vegas-cost-label">
                              Total Day (per person):
                            </span>
                            <span className="vegas-cost-value">$250–$400</span>
                          </div>
                        </div>
                      </div>
                      <div className="vegas-intel-section">
                        <div className="vegas-rating-crowd">
                          <div className="vegas-rating-item">
                            <svg
                              width="18"
                              xmlns="http://www.w3.org/2000/svg"
                              height="18"
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
                            <span className="vegas-rating-value">4.9</span>
                          </div>
                          <div className="vegas-crowd-item">
                            <span className="vegas-crowd-label">
                              Crowd Level:
                            </span>
                            <span className="vegas-crowd-value vegas-crowd-high">
                              VERY HIGH
                            </span>
                          </div>
                          <div className="vegas-best-time-item">
                            <span className="vegas-best-time-label">
                              Best Time Inside:
                            </span>
                            <span className="vegas-best-time-value">
                              1:00 PM–4:00 PM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="vegas-venue-actions">
                        <button className="vegas-vip-btn btn-accent btn">
                          Request VIP
                        </button>
                        <button className="btn-outline vegas-save-btn btn">
                          <svg
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>Save Venue</span>
                        </button>
                      </div>
                    </div>
                  </article>
                  <article className="unlocked-intelligence-vegas-venue-card">
                    <div className="unlocked-intelligence-vegas-venue-image-wrapper">
                      <img
                        alt="Marquee Las Vegas interior"
                        src="https://images.pexels.com/photos/10548499/pexels-photo-10548499.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        className="unlocked-intelligence-vegas-venue-image"
                      />
                      <div className="vegas-venue-category-tag">
                        <span>House</span>
                      </div>
                    </div>
                    <div className="unlocked-intelligence-vegas-venue-content">
                      <div className="vegas-venue-header">
                        <div className="vegas-venue-name-row">
                          <h3 className="unlocked-intelligence-vegas-venue-name">
                            Marquee Las Vegas
                          </h3>
                          <div className="vegas-venue-badges">
                            <span className="vegas-city-badge">Las Vegas</span>
                            <span className="vegas-category-badge">Iconic</span>
                          </div>
                        </div>
                        <div className="vegas-member-intel-badge">
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
                          <span>Member Intel</span>
                        </div>
                      </div>
                      <div className="vegas-quick-snapshot">
                        <span className="vegas-snapshot-title">
                          Quick Snapshot:
                        </span>
                        <span className="vegas-snapshot-item">House/EDM</span>
                        <span className="vegas-snapshot-divider">|</span>
                        <span className="vegas-snapshot-item">
                          Upscale Dress Code
                        </span>
                        <span className="vegas-snapshot-divider">|</span>
                        <span className="vegas-snapshot-item">21+</span>
                      </div>
                      <div className="vegas-intel-section">
                        <h4 className="vegas-intel-title">Best Plan</h4>
                        <div className="vegas-intel-grid">
                          <div className="vegas-intel-item">
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
                            <div className="vegas-intel-content">
                              <span className="vegas-intel-label">
                                Best Arrival Time:
                              </span>
                              <span className="vegas-intel-value">
                                10:00 PM – 11:00 PM
                              </span>
                            </div>
                          </div>
                          <div className="vegas-intel-item">
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
                            <div className="vegas-intel-content">
                              <span className="vegas-intel-label">
                                Best Day(s):
                              </span>
                              <span className="vegas-intel-value">Fri–Sat</span>
                            </div>
                          </div>
                          <div className="vegas-intel-item">
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
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle r="4" cx="9" cy="7"></circle>
                              </g>
                            </svg>
                            <div className="vegas-intel-content">
                              <span className="vegas-intel-label">
                                Ideal Party Size:
                              </span>
                              <span className="vegas-intel-value">4–10</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vegas-intel-section">
                        <h4 className="vegas-intel-title">Parking Intel</h4>
                        <div className="vegas-parking-list">
                          <div className="vegas-parking-item">
                            <span className="vegas-parking-bullet">•</span>
                            <span className="vegas-parking-text">
                              <span className="unlocked-intelligence-text246">
                                Valet parking:
                              </span>
                              <span>
                                {' '}
                                Cosmopolitan valet (complimentary for guests or
                                $18, fastest option)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="vegas-parking-item">
                            <span className="vegas-parking-bullet">•</span>
                            <span className="vegas-parking-text">
                              <span className="unlocked-intelligence-text248">
                                Self-parking:
                              </span>
                              <span>
                                {' '}
                                Cosmopolitan garage – Level 3 (direct casino
                                access)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="vegas-parking-item">
                            <span className="vegas-parking-bullet">•</span>
                            <span className="vegas-parking-text">
                              <span className="unlocked-intelligence-text250">
                                Rideshare drop-off:
                              </span>
                              <span>
                                {' '}
                                Cosmopolitan main entrance on Las Vegas Blvd
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="vegas-parking-safety">
                            <strong>Avoid:</strong>
                            <span>
                              {' '}
                              Street parking on side roads; use resort parking
                              for secure access
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="vegas-intel-section">
                        <h4 className="vegas-intel-title">
                          Address &amp; Access
                        </h4>
                        <div className="vegas-address-content">
                          <p className="vegas-address-text">
                            3708 Las Vegas Blvd S, Las Vegas, NV 89109 (The
                            Cosmopolitan)
                          </p>
                          <button className="unlocked-intelligence-vegas-map-btn">
                            <svg
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
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
                            <span>View on Map</span>
                          </button>
                          <p className="vegas-entry-tip">
                            <span className="unlocked-intelligence-text255">
                              Entry Tip:
                            </span>
                            <span>
                              {' '}
                              Guest list closes early on weekends; arrive before
                              11 PM or book table
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="vegas-intel-section">
                        <h4 className="vegas-intel-title">Cost Estimate</h4>
                        <div className="vegas-cost-grid">
                          <div className="vegas-cost-item">
                            <span className="vegas-cost-label">
                              Cover Range:
                            </span>
                            <span className="vegas-cost-value">$30–$60</span>
                          </div>
                          <div className="vegas-cost-item">
                            <span className="vegas-cost-label">
                              Drinks Range:
                            </span>
                            <span className="vegas-cost-value">$18–$28</span>
                          </div>
                          <div className="vegas-cost-item">
                            <span className="vegas-cost-label">
                              VIP Table Range:
                            </span>
                            <span className="vegas-cost-value">
                              $1500–$4000
                            </span>
                          </div>
                          <div className="vegas-cost-total vegas-cost-item">
                            <span className="vegas-cost-label">
                              Total Night (per person):
                            </span>
                            <span className="vegas-cost-value">$180–$250</span>
                          </div>
                        </div>
                      </div>
                      <div className="vegas-intel-section">
                        <div className="vegas-rating-crowd">
                          <div className="vegas-rating-item">
                            <svg
                              width="18"
                              xmlns="http://www.w3.org/2000/svg"
                              height="18"
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
                            <span className="vegas-rating-value">4.7</span>
                          </div>
                          <div className="vegas-crowd-item">
                            <span className="vegas-crowd-label">
                              Crowd Level:
                            </span>
                            <span className="vegas-crowd-value vegas-crowd-high">
                              VERY HIGH
                            </span>
                          </div>
                          <div className="vegas-best-time-item">
                            <span className="vegas-best-time-label">
                              Best Time Inside:
                            </span>
                            <span className="vegas-best-time-value">
                              11:30 PM–2:30 AM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="vegas-venue-actions">
                        <button className="vegas-vip-btn btn-accent btn">
                          Request VIP
                        </button>
                        <button className="btn-outline vegas-save-btn btn">
                          <svg
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>Save Venue</span>
                        </button>
                      </div>
                    </div>
                  </article>
                  <article className="unlocked-intelligence-vegas-venue-card">
                    <div className="unlocked-intelligence-vegas-venue-image-wrapper">
                      <img
                        alt="XS Nightclub interior"
                        src="https://images.pexels.com/photos/33141322/pexels-photo-33141322.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        className="unlocked-intelligence-vegas-venue-image"
                      />
                      <div className="vegas-venue-category-tag">
                        <span>After Hours</span>
                      </div>
                    </div>
                    <div className="unlocked-intelligence-vegas-venue-content">
                      <div className="vegas-venue-header">
                        <div className="vegas-venue-name-row">
                          <h3 className="unlocked-intelligence-vegas-venue-name">
                            XS Nightclub
                          </h3>
                          <div className="vegas-venue-badges">
                            <span className="vegas-city-badge">Las Vegas</span>
                            <span className="vegas-category-badge">Luxe</span>
                          </div>
                        </div>
                        <div className="vegas-member-intel-badge">
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
                          <span>Member Intel</span>
                        </div>
                      </div>
                      <div className="vegas-quick-snapshot">
                        <span className="vegas-snapshot-title">
                          Quick Snapshot:
                        </span>
                        <span className="vegas-snapshot-item">
                          House/Techno
                        </span>
                        <span className="vegas-snapshot-divider">|</span>
                        <span className="vegas-snapshot-item">
                          Strict Dress Code
                        </span>
                        <span className="vegas-snapshot-divider">|</span>
                        <span className="vegas-snapshot-item">21+</span>
                      </div>
                      <div className="vegas-intel-section">
                        <h4 className="vegas-intel-title">Best Plan</h4>
                        <div className="vegas-intel-grid">
                          <div className="vegas-intel-item">
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
                            <div className="vegas-intel-content">
                              <span className="vegas-intel-label">
                                Best Arrival Time:
                              </span>
                              <span className="vegas-intel-value">
                                10:30 PM – 12:00 AM
                              </span>
                            </div>
                          </div>
                          <div className="vegas-intel-item">
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
                            <div className="vegas-intel-content">
                              <span className="vegas-intel-label">
                                Best Day(s):
                              </span>
                              <span className="vegas-intel-value">Fri–Sun</span>
                            </div>
                          </div>
                          <div className="vegas-intel-item">
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
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle r="4" cx="9" cy="7"></circle>
                              </g>
                            </svg>
                            <div className="vegas-intel-content">
                              <span className="vegas-intel-label">
                                Ideal Party Size:
                              </span>
                              <span className="vegas-intel-value">4–8</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vegas-intel-section">
                        <h4 className="vegas-intel-title">Parking Intel</h4>
                        <div className="vegas-parking-list">
                          <div className="vegas-parking-item">
                            <span className="vegas-parking-bullet">•</span>
                            <span className="vegas-parking-text">
                              <span className="unlocked-intelligence-text260">
                                Valet parking:
                              </span>
                              <span>
                                {' '}
                                Encore hotel valet (complimentary for guests or
                                $20, fastest option)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="vegas-parking-item">
                            <span className="vegas-parking-bullet">•</span>
                            <span className="vegas-parking-text">
                              <span className="unlocked-intelligence-text262">
                                Self-parking:
                              </span>
                              <span>
                                {' '}
                                Wynn/Encore garage – Level 3 (short walk to club
                                entrance)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="vegas-parking-item">
                            <span className="vegas-parking-bullet">•</span>
                            <span className="vegas-parking-text">
                              <span className="unlocked-intelligence-text264">
                                Rideshare drop-off:
                              </span>
                              <span>
                                {' '}
                                Encore main entrance facing Las Vegas Blvd
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="vegas-parking-safety">
                            <strong>Avoid:</strong>
                            <span>
                              {' '}
                              Public lots late-night; use resort parking for
                              safest option
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="vegas-intel-section">
                        <h4 className="vegas-intel-title">
                          Address &amp; Access
                        </h4>
                        <div className="vegas-address-content">
                          <p className="vegas-address-text">
                            3131 Las Vegas Blvd S, Las Vegas, NV 89109 (Encore
                            at Wynn)
                          </p>
                          <button className="unlocked-intelligence-vegas-map-btn">
                            <svg
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
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
                            <span>View on Map</span>
                          </button>
                          <p className="vegas-entry-tip">
                            <span className="unlocked-intelligence-text269">
                              Entry Tip:
                            </span>
                            <span>
                              {' '}
                              Strict dress code enforced; dress sharp and arrive
                              with equal male-to-female ratio
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="vegas-intel-section">
                        <h4 className="vegas-intel-title">Cost Estimate</h4>
                        <div className="vegas-cost-grid">
                          <div className="vegas-cost-item">
                            <span className="vegas-cost-label">
                              Cover Range:
                            </span>
                            <span className="vegas-cost-value">$30–$50</span>
                          </div>
                          <div className="vegas-cost-item">
                            <span className="vegas-cost-label">
                              Drinks Range:
                            </span>
                            <span className="vegas-cost-value">$18–$30</span>
                          </div>
                          <div className="vegas-cost-item">
                            <span className="vegas-cost-label">
                              VIP Table Range:
                            </span>
                            <span className="vegas-cost-value">
                              $2000–$6000
                            </span>
                          </div>
                          <div className="vegas-cost-total vegas-cost-item">
                            <span className="vegas-cost-label">
                              Total Night (per person):
                            </span>
                            <span className="vegas-cost-value">$200–$350</span>
                          </div>
                        </div>
                      </div>
                      <div className="vegas-intel-section">
                        <div className="vegas-rating-crowd">
                          <div className="vegas-rating-item">
                            <svg
                              width="18"
                              xmlns="http://www.w3.org/2000/svg"
                              height="18"
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
                            <span className="vegas-rating-value">4.8</span>
                          </div>
                          <div className="vegas-crowd-item">
                            <span className="vegas-crowd-label">
                              Crowd Level:
                            </span>
                            <span className="vegas-crowd-value vegas-crowd-high">
                              VERY HIGH
                            </span>
                          </div>
                          <div className="vegas-best-time-item">
                            <span className="vegas-best-time-label">
                              Best Time Inside:
                            </span>
                            <span className="vegas-best-time-value">
                              12:00 AM–3:00 AM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="vegas-venue-actions">
                        <button className="vegas-vip-btn btn-accent btn">
                          Request VIP
                        </button>
                        <button className="btn-outline vegas-save-btn btn">
                          <svg
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>Save Venue</span>
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <section className="boston-section-container unlocked-intelligence-boston-section-container">
                <div className="unlocked-intelligence-boston-section-header boston-section-header">
                  <h2 className="section-title">Boston</h2>
                </div>
                <div className="unlocked-intelligence-boston-venues-grid boston-venues-grid">
                  <article className="boston-venue-card unlocked-intelligence-boston-venue-card">
                    <div className="boston-venue-image-wrapper unlocked-intelligence-boston-venue-image-wrapper">
                      <img
                        alt="Royale nightclub interior"
                        src="https://images.pexels.com/photos/10548499/pexels-photo-10548499.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        className="unlocked-intelligence-boston-venue-image boston-venue-image"
                      />
                      <div className="boston-venue-overlay"></div>
                    </div>
                    <div className="boston-venue-content unlocked-intelligence-boston-venue-content">
                      <div className="unlocked-intelligence-boston-venue-header boston-venue-header">
                        <h3 className="boston-venue-name unlocked-intelligence-boston-venue-name">
                          Royale
                        </h3>
                        <div className="boston-venue-badges">
                          <span className="boston-venue-city-badge">
                            Boston
                          </span>
                          <span className="boston-venue-category-badge">
                            Hip-Hop
                          </span>
                          <span className="boston-venue-member-badge">
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
                            <span>
                              {' '}
                              Member Intel
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="boston-venue-snapshot">
                        <span className="boston-venue-snapshot-item">
                          <span className="unlocked-intelligence-text273">
                            Vibe:
                          </span>
                          <span>
                            {' '}
                            Energetic
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="boston-venue-divider">|</span>
                        <span className="boston-venue-snapshot-item">
                          <span className="unlocked-intelligence-text275">
                            Music:
                          </span>
                          <span>
                            {' '}
                            Hip-Hop/Trap
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="boston-venue-divider">|</span>
                        <span className="boston-venue-snapshot-item">
                          <span className="unlocked-intelligence-text277">
                            Dress:
                          </span>
                          <span>
                            {' '}
                            Club Wear
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="boston-venue-section">
                        <h4 className="boston-venue-section-title">
                          Best Plan
                        </h4>
                        <div className="boston-venue-info-grid">
                          <div className="boston-venue-info-item">
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
                            <div className="boston-venue-info-text">
                              <span className="boston-venue-info-label">
                                Best Arrival Time
                              </span>
                              <span className="boston-venue-info-value">
                                11:00 PM – 12:00 AM
                              </span>
                            </div>
                          </div>
                          <div className="boston-venue-info-item">
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
                                <path d="M8 2v4m8-4v4"></path>
                                <rect
                                  x="3"
                                  y="4"
                                  rx="2"
                                  width="18"
                                  height="18"
                                ></rect>
                                <path d="M3 10h18"></path>
                              </g>
                            </svg>
                            <div className="boston-venue-info-text">
                              <span className="boston-venue-info-label">
                                Best Day(s)
                              </span>
                              <span className="boston-venue-info-value">
                                Fri–Sat
                              </span>
                            </div>
                          </div>
                          <div className="boston-venue-info-item">
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
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle r="4" cx="9" cy="7"></circle>
                              </g>
                            </svg>
                            <div className="boston-venue-info-text">
                              <span className="boston-venue-info-label">
                                Ideal Party Size
                              </span>
                              <span className="boston-venue-info-value">
                                4–8
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="boston-venue-section">
                        <h4 className="boston-venue-section-title">
                          Parking Intel
                        </h4>
                        <div className="boston-venue-parking-list">
                          <div className="boston-venue-parking-item">
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
                                <circle r="10" cx="12" cy="12"></circle>
                                <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                              </g>
                            </svg>
                            <span>
                              <span className="unlocked-intelligence-text280">
                                Option A:
                              </span>
                              <span>
                                {' '}
                                Nearest paid garage: Stuart Street Garage –
                                Stuart St (4–6 min walk)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="boston-venue-parking-item">
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
                                <circle r="10" cx="12" cy="12"></circle>
                                <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                              </g>
                            </svg>
                            <span>
                              <span className="unlocked-intelligence-text283">
                                Option B:
                              </span>
                              <span>
                                {' '}
                                Street parking zone: Theater District (after 11
                                PM easier)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="boston-venue-parking-item">
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
                                <circle r="10" cx="12" cy="12"></circle>
                                <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                              </g>
                            </svg>
                            <span>
                              <span className="unlocked-intelligence-text286">
                                Option C:
                              </span>
                              <span>
                                {' '}
                                Rideshare drop-off: Main entrance on Tremont St
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="boston-venue-parking-warning">
                            <span>
                              <span className="unlocked-intelligence-text289">
                                Safety note:
                              </span>
                              <span>
                                {' '}
                                Avoid: Washington St corridor late-night
                                (crowded)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="boston-venue-section">
                        <h4 className="boston-venue-section-title">
                          Address &amp; Access
                        </h4>
                        <div className="boston-venue-address-block">
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
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle r="3" cx="12" cy="10"></circle>
                            </g>
                          </svg>
                          <p className="boston-venue-address">
                            279 Tremont St, Boston, MA 02116
                          </p>
                        </div>
                        <button className="btn-outline btn boston-venue-map-btn">
                          <svg
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
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
                          <span>
                            {' '}
                            View on Map
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </button>
                        <div className="boston-venue-entry-tip">
                          <span>
                            <span className="unlocked-intelligence-text293">
                              Entry Tip:
                            </span>
                            <span>
                              {' '}
                              Text ahead to get on guest list; avoids cover
                              charge
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="boston-venue-section">
                        <h4 className="boston-venue-section-title">
                          Cost Estimate
                        </h4>
                        <div className="boston-venue-costs-grid">
                          <div className="boston-venue-cost-item">
                            <span className="boston-venue-cost-label">
                              Cover Range
                            </span>
                            <span className="boston-venue-cost-value">
                              $15–$25
                            </span>
                          </div>
                          <div className="boston-venue-cost-item">
                            <span className="boston-venue-cost-label">
                              Drinks Range
                            </span>
                            <span className="boston-venue-cost-value">
                              $12–$17
                            </span>
                          </div>
                          <div className="boston-venue-cost-item">
                            <span className="boston-venue-cost-label">
                              VIP Table Range
                            </span>
                            <span className="boston-venue-cost-value">
                              $400–$1200
                            </span>
                          </div>
                          <div className="boston-venue-cost-item boston-venue-cost-total">
                            <span className="boston-venue-cost-label">
                              Total Night Estimate
                            </span>
                            <span className="boston-venue-cost-value">
                              $80–$130
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="boston-venue-section">
                        <div className="boston-venue-rating-row">
                          <div className="boston-venue-rating-block">
                            <div className="boston-venue-stars">
                              <svg
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <span className="boston-venue-rating-value">
                                4.6
                              </span>
                            </div>
                          </div>
                          <div className="boston-venue-crowd-block">
                            <span className="boston-venue-crowd-label">
                              Crowd Level:
                            </span>
                            <span className="boston-venue-crowd-badge boston-venue-crowd-high">
                              HIGH
                            </span>
                          </div>
                          <div className="boston-venue-peak-block">
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
                            <span className="boston-venue-peak-time">
                              Best Time Inside: 12:00–2:00 AM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="boston-venue-actions">
                        <button className="btn-accent btn boston-venue-cta-primary">
                          Request VIP
                        </button>
                        <button className="btn-outline boston-venue-cta-secondary btn">
                          <svg
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>
                            {' '}
                            Save Venue
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </article>
                  <article className="boston-venue-card unlocked-intelligence-boston-venue-card">
                    <div className="boston-venue-image-wrapper unlocked-intelligence-boston-venue-image-wrapper">
                      <img
                        alt="Foundation nightclub interior"
                        src="https://images.pexels.com/photos/3745525/pexels-photo-3745525.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        className="unlocked-intelligence-boston-venue-image boston-venue-image"
                      />
                      <div className="boston-venue-overlay"></div>
                    </div>
                    <div className="boston-venue-content unlocked-intelligence-boston-venue-content">
                      <div className="unlocked-intelligence-boston-venue-header boston-venue-header">
                        <h3 className="boston-venue-name unlocked-intelligence-boston-venue-name">
                          Foundation
                        </h3>
                        <div className="boston-venue-badges">
                          <span className="boston-venue-city-badge">
                            Boston
                          </span>
                          <span className="boston-venue-category-badge">
                            House
                          </span>
                          <span className="boston-venue-member-badge">
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
                            <span>
                              {' '}
                              Member Intel
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="boston-venue-snapshot">
                        <span className="boston-venue-snapshot-item">
                          <span className="unlocked-intelligence-text297">
                            Vibe:
                          </span>
                          <span>
                            {' '}
                            Immersive
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="boston-venue-divider">|</span>
                        <span className="boston-venue-snapshot-item">
                          <span className="unlocked-intelligence-text299">
                            Music:
                          </span>
                          <span>
                            {' '}
                            House/Techno
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="boston-venue-divider">|</span>
                        <span className="boston-venue-snapshot-item">
                          <span className="unlocked-intelligence-text301">
                            Dress:
                          </span>
                          <span>
                            {' '}
                            Smart Casual
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="boston-venue-section">
                        <h4 className="boston-venue-section-title">
                          Best Plan
                        </h4>
                        <div className="boston-venue-info-grid">
                          <div className="boston-venue-info-item">
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
                            <div className="boston-venue-info-text">
                              <span className="boston-venue-info-label">
                                Best Arrival Time
                              </span>
                              <span className="boston-venue-info-value">
                                11:30 PM – 12:30 AM
                              </span>
                            </div>
                          </div>
                          <div className="boston-venue-info-item">
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
                                <path d="M8 2v4m8-4v4"></path>
                                <rect
                                  x="3"
                                  y="4"
                                  rx="2"
                                  width="18"
                                  height="18"
                                ></rect>
                                <path d="M3 10h18"></path>
                              </g>
                            </svg>
                            <div className="boston-venue-info-text">
                              <span className="boston-venue-info-label">
                                Best Day(s)
                              </span>
                              <span className="boston-venue-info-value">
                                Fri–Sat
                              </span>
                            </div>
                          </div>
                          <div className="boston-venue-info-item">
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
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle r="4" cx="9" cy="7"></circle>
                              </g>
                            </svg>
                            <div className="boston-venue-info-text">
                              <span className="boston-venue-info-label">
                                Ideal Party Size
                              </span>
                              <span className="boston-venue-info-value">
                                2–6
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="boston-venue-section">
                        <h4 className="boston-venue-section-title">
                          Parking Intel
                        </h4>
                        <div className="boston-venue-parking-list">
                          <div className="boston-venue-parking-item">
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
                                <circle r="10" cx="12" cy="12"></circle>
                                <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                              </g>
                            </svg>
                            <span>
                              <span className="unlocked-intelligence-text304">
                                Option A:
                              </span>
                              <span>
                                {' '}
                                Nearest paid garage: Lansdowne Garage –
                                Lansdowne St (2–4 min walk)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="boston-venue-parking-item">
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
                                <circle r="10" cx="12" cy="12"></circle>
                                <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                              </g>
                            </svg>
                            <span>
                              <span className="unlocked-intelligence-text307">
                                Option B:
                              </span>
                              <span>
                                {' '}
                                Street parking zone: Fenway Area (limited after
                                10 PM)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="boston-venue-parking-item">
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
                                <circle r="10" cx="12" cy="12"></circle>
                                <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                              </g>
                            </svg>
                            <span>
                              <span className="unlocked-intelligence-text310">
                                Option C:
                              </span>
                              <span>
                                {' '}
                                Rideshare drop-off: Side entrance on Lansdowne
                                St
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="boston-venue-parking-warning">
                            <span>
                              <span className="unlocked-intelligence-text313">
                                Safety note:
                              </span>
                              <span>
                                {' '}
                                Avoid: Brookline Ave late-night (heavy traffic)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="boston-venue-section">
                        <h4 className="boston-venue-section-title">
                          Address &amp; Access
                        </h4>
                        <div className="boston-venue-address-block">
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
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle r="3" cx="12" cy="10"></circle>
                            </g>
                          </svg>
                          <p className="boston-venue-address">
                            500 Commonwealth Ave, Boston, MA 02215
                          </p>
                        </div>
                        <button className="btn-outline btn boston-venue-map-btn">
                          <svg
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
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
                          <span>
                            {' '}
                            View on Map
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </button>
                        <div className="boston-venue-entry-tip">
                          <span>
                            <span className="unlocked-intelligence-text317">
                              Entry Tip:
                            </span>
                            <span>
                              {' '}
                              Early entry before 11:30 PM reduces wait time
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="boston-venue-section">
                        <h4 className="boston-venue-section-title">
                          Cost Estimate
                        </h4>
                        <div className="boston-venue-costs-grid">
                          <div className="boston-venue-cost-item">
                            <span className="boston-venue-cost-label">
                              Cover Range
                            </span>
                            <span className="boston-venue-cost-value">
                              $20–$30
                            </span>
                          </div>
                          <div className="boston-venue-cost-item">
                            <span className="boston-venue-cost-label">
                              Drinks Range
                            </span>
                            <span className="boston-venue-cost-value">
                              $14–$19
                            </span>
                          </div>
                          <div className="boston-venue-cost-item">
                            <span className="boston-venue-cost-label">
                              VIP Table Range
                            </span>
                            <span className="boston-venue-cost-value">
                              $500–$1500
                            </span>
                          </div>
                          <div className="boston-venue-cost-item boston-venue-cost-total">
                            <span className="boston-venue-cost-label">
                              Total Night Estimate
                            </span>
                            <span className="boston-venue-cost-value">
                              $90–$150
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="boston-venue-section">
                        <div className="boston-venue-rating-row">
                          <div className="boston-venue-rating-block">
                            <div className="boston-venue-stars">
                              <svg
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <span className="boston-venue-rating-value">
                                4.7
                              </span>
                            </div>
                          </div>
                          <div className="boston-venue-crowd-block">
                            <span className="boston-venue-crowd-label">
                              Crowd Level:
                            </span>
                            <span className="boston-venue-crowd-badge boston-venue-crowd-high">
                              HIGH
                            </span>
                          </div>
                          <div className="boston-venue-peak-block">
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
                            <span className="boston-venue-peak-time">
                              Best Time Inside: 12:30–2:30 AM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="boston-venue-actions">
                        <button className="btn-accent btn boston-venue-cta-primary">
                          Request VIP
                        </button>
                        <button className="btn-outline boston-venue-cta-secondary btn">
                          <svg
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>
                            {' '}
                            Save Venue
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </article>
                  <article className="boston-venue-card unlocked-intelligence-boston-venue-card">
                    <div className="boston-venue-image-wrapper unlocked-intelligence-boston-venue-image-wrapper">
                      <img
                        alt="Shrine Boston nightclub interior"
                        src="https://images.pexels.com/photos/2796105/pexels-photo-2796105.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        className="unlocked-intelligence-boston-venue-image boston-venue-image"
                      />
                      <div className="boston-venue-overlay"></div>
                    </div>
                    <div className="boston-venue-content unlocked-intelligence-boston-venue-content">
                      <div className="unlocked-intelligence-boston-venue-header boston-venue-header">
                        <h3 className="boston-venue-name unlocked-intelligence-boston-venue-name">
                          Shrine Boston
                        </h3>
                        <div className="boston-venue-badges">
                          <span className="boston-venue-city-badge">
                            Boston
                          </span>
                          <span className="boston-venue-category-badge">
                            Latin
                          </span>
                          <span className="boston-venue-member-badge">
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
                            <span>
                              {' '}
                              Member Intel
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="boston-venue-snapshot">
                        <span className="boston-venue-snapshot-item">
                          <span className="unlocked-intelligence-text321">
                            Vibe:
                          </span>
                          <span>
                            {' '}
                            Vibrant
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="boston-venue-divider">|</span>
                        <span className="boston-venue-snapshot-item">
                          <span className="unlocked-intelligence-text323">
                            Music:
                          </span>
                          <span>
                            {' '}
                            Latin/Reggaeton
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="boston-venue-divider">|</span>
                        <span className="boston-venue-snapshot-item">
                          <span className="unlocked-intelligence-text325">
                            Dress:
                          </span>
                          <span>
                            {' '}
                            Club Wear
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="boston-venue-section">
                        <h4 className="boston-venue-section-title">
                          Best Plan
                        </h4>
                        <div className="boston-venue-info-grid">
                          <div className="boston-venue-info-item">
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
                            <div className="boston-venue-info-text">
                              <span className="boston-venue-info-label">
                                Best Arrival Time
                              </span>
                              <span className="boston-venue-info-value">
                                10:30 PM – 11:30 PM
                              </span>
                            </div>
                          </div>
                          <div className="boston-venue-info-item">
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
                                <path d="M8 2v4m8-4v4"></path>
                                <rect
                                  x="3"
                                  y="4"
                                  rx="2"
                                  width="18"
                                  height="18"
                                ></rect>
                                <path d="M3 10h18"></path>
                              </g>
                            </svg>
                            <div className="boston-venue-info-text">
                              <span className="boston-venue-info-label">
                                Best Day(s)
                              </span>
                              <span className="boston-venue-info-value">
                                Thu–Sat
                              </span>
                            </div>
                          </div>
                          <div className="boston-venue-info-item">
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
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle r="4" cx="9" cy="7"></circle>
                              </g>
                            </svg>
                            <div className="boston-venue-info-text">
                              <span className="boston-venue-info-label">
                                Ideal Party Size
                              </span>
                              <span className="boston-venue-info-value">
                                6–10
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="boston-venue-section">
                        <h4 className="boston-venue-section-title">
                          Parking Intel
                        </h4>
                        <div className="boston-venue-parking-list">
                          <div className="boston-venue-parking-item">
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
                                <circle r="10" cx="12" cy="12"></circle>
                                <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                              </g>
                            </svg>
                            <span>
                              <span className="unlocked-intelligence-text328">
                                Option A:
                              </span>
                              <span>
                                {' '}
                                Nearest paid garage: One Canal Garage – Canal St
                                (3–5 min walk)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="boston-venue-parking-item">
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
                                <circle r="10" cx="12" cy="12"></circle>
                                <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                              </g>
                            </svg>
                            <span>
                              <span className="unlocked-intelligence-text331">
                                Option B:
                              </span>
                              <span>
                                {' '}
                                Street parking zone: North End (validate meter
                                before 8 PM)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="boston-venue-parking-item">
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
                                <circle r="10" cx="12" cy="12"></circle>
                                <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                              </g>
                            </svg>
                            <span>
                              <span className="unlocked-intelligence-text334">
                                Option C:
                              </span>
                              <span>
                                {' '}
                                Rideshare drop-off: Front entrance on Canal St
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="boston-venue-parking-warning">
                            <span>
                              <span className="unlocked-intelligence-text337">
                                Safety note:
                              </span>
                              <span>
                                {' '}
                                Avoid: Cross St late-night (construction)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="boston-venue-section">
                        <h4 className="boston-venue-section-title">
                          Address &amp; Access
                        </h4>
                        <div className="boston-venue-address-block">
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
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle r="3" cx="12" cy="10"></circle>
                            </g>
                          </svg>
                          <p className="boston-venue-address">
                            1 Canal St, Boston, MA 02114
                          </p>
                        </div>
                        <button className="btn-outline btn boston-venue-map-btn">
                          <svg
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
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
                          <span>
                            {' '}
                            View on Map
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </button>
                        <div className="boston-venue-entry-tip">
                          <span>
                            <span className="unlocked-intelligence-text341">
                              Entry Tip:
                            </span>
                            <span>
                              {' '}
                              Latin Night Thursdays offer reduced cover
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="boston-venue-section">
                        <h4 className="boston-venue-section-title">
                          Cost Estimate
                        </h4>
                        <div className="boston-venue-costs-grid">
                          <div className="boston-venue-cost-item">
                            <span className="boston-venue-cost-label">
                              Cover Range
                            </span>
                            <span className="boston-venue-cost-value">
                              $20–$30
                            </span>
                          </div>
                          <div className="boston-venue-cost-item">
                            <span className="boston-venue-cost-label">
                              Drinks Range
                            </span>
                            <span className="boston-venue-cost-value">
                              $13–$18
                            </span>
                          </div>
                          <div className="boston-venue-cost-item">
                            <span className="boston-venue-cost-label">
                              VIP Table Range
                            </span>
                            <span className="boston-venue-cost-value">
                              $600–$1800
                            </span>
                          </div>
                          <div className="boston-venue-cost-item boston-venue-cost-total">
                            <span className="boston-venue-cost-label">
                              Total Night Estimate
                            </span>
                            <span className="boston-venue-cost-value">
                              $95–$160
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="boston-venue-section">
                        <div className="boston-venue-rating-row">
                          <div className="boston-venue-rating-block">
                            <div className="boston-venue-stars">
                              <svg
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <span className="boston-venue-rating-value">
                                4.5
                              </span>
                            </div>
                          </div>
                          <div className="boston-venue-crowd-block">
                            <span className="boston-venue-crowd-label">
                              Crowd Level:
                            </span>
                            <span className="boston-venue-crowd-badge boston-venue-crowd-high">
                              HIGH
                            </span>
                          </div>
                          <div className="boston-venue-peak-block">
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
                            <span className="boston-venue-peak-time">
                              Best Time Inside: 11:30–1:30 AM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="boston-venue-actions">
                        <button className="btn-accent btn boston-venue-cta-primary">
                          Request VIP
                        </button>
                        <button className="btn-outline boston-venue-cta-secondary btn">
                          <svg
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>
                            {' '}
                            Save Venue
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </article>
                  <article className="boston-venue-card unlocked-intelligence-boston-venue-card">
                    <div className="boston-venue-image-wrapper unlocked-intelligence-boston-venue-image-wrapper">
                      <img
                        alt="Dbar nightclub interior"
                        src="https://images.pexels.com/photos/3745523/pexels-photo-3745523.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        className="unlocked-intelligence-boston-venue-image boston-venue-image"
                      />
                      <div className="boston-venue-overlay"></div>
                    </div>
                    <div className="boston-venue-content unlocked-intelligence-boston-venue-content">
                      <div className="unlocked-intelligence-boston-venue-header boston-venue-header">
                        <h3 className="boston-venue-name unlocked-intelligence-boston-venue-name">
                          Dbar
                        </h3>
                        <div className="boston-venue-badges">
                          <span className="boston-venue-city-badge">
                            Boston
                          </span>
                          <span className="boston-venue-category-badge">
                            After Hours
                          </span>
                          <span className="boston-venue-member-badge">
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
                            <span>
                              {' '}
                              Member Intel
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="boston-venue-snapshot">
                        <span className="boston-venue-snapshot-item">
                          <span className="unlocked-intelligence-text345">
                            Vibe:
                          </span>
                          <span>
                            {' '}
                            Intimate
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="boston-venue-divider">|</span>
                        <span className="boston-venue-snapshot-item">
                          <span className="unlocked-intelligence-text347">
                            Music:
                          </span>
                          <span>
                            {' '}
                            House/Techno
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="boston-venue-divider">|</span>
                        <span className="boston-venue-snapshot-item">
                          <span className="unlocked-intelligence-text349">
                            Dress:
                          </span>
                          <span>
                            {' '}
                            Smart Casual
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="boston-venue-section">
                        <h4 className="boston-venue-section-title">
                          Best Plan
                        </h4>
                        <div className="boston-venue-info-grid">
                          <div className="boston-venue-info-item">
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
                            <div className="boston-venue-info-text">
                              <span className="boston-venue-info-label">
                                Best Arrival Time
                              </span>
                              <span className="boston-venue-info-value">
                                1:00 AM – 2:00 AM
                              </span>
                            </div>
                          </div>
                          <div className="boston-venue-info-item">
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
                                <path d="M8 2v4m8-4v4"></path>
                                <rect
                                  x="3"
                                  y="4"
                                  rx="2"
                                  width="18"
                                  height="18"
                                ></rect>
                                <path d="M3 10h18"></path>
                              </g>
                            </svg>
                            <div className="boston-venue-info-text">
                              <span className="boston-venue-info-label">
                                Best Day(s)
                              </span>
                              <span className="boston-venue-info-value">
                                Fri–Sat
                              </span>
                            </div>
                          </div>
                          <div className="boston-venue-info-item">
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
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle r="4" cx="9" cy="7"></circle>
                              </g>
                            </svg>
                            <div className="boston-venue-info-text">
                              <span className="boston-venue-info-label">
                                Ideal Party Size
                              </span>
                              <span className="boston-venue-info-value">
                                2–4
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="boston-venue-section">
                        <h4 className="boston-venue-section-title">
                          Parking Intel
                        </h4>
                        <div className="boston-venue-parking-list">
                          <div className="boston-venue-parking-item">
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
                                <circle r="10" cx="12" cy="12"></circle>
                                <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                              </g>
                            </svg>
                            <span>
                              <span className="unlocked-intelligence-text352">
                                Option A:
                              </span>
                              <span>
                                {' '}
                                Nearest paid garage: Dorchester Parking –
                                Dorchester Ave (3–5 min walk)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="boston-venue-parking-item">
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
                                <circle r="10" cx="12" cy="12"></circle>
                                <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                              </g>
                            </svg>
                            <span>
                              <span className="unlocked-intelligence-text355">
                                Option B:
                              </span>
                              <span>
                                {' '}
                                Street parking zone: South End (free after
                                midnight)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="boston-venue-parking-item">
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
                                <circle r="10" cx="12" cy="12"></circle>
                                <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                              </g>
                            </svg>
                            <span>
                              <span className="unlocked-intelligence-text358">
                                Option C:
                              </span>
                              <span>
                                {' '}
                                Rideshare drop-off: Main entrance on Dorchester
                                Ave
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                          <div className="boston-venue-parking-warning">
                            <span>
                              <span className="unlocked-intelligence-text361">
                                Safety note:
                              </span>
                              <span>
                                {' '}
                                Avoid: Side streets late-night (limited
                                lighting)
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="boston-venue-section">
                        <h4 className="boston-venue-section-title">
                          Address &amp; Access
                        </h4>
                        <div className="boston-venue-address-block">
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
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle r="3" cx="12" cy="10"></circle>
                            </g>
                          </svg>
                          <p className="boston-venue-address">
                            1236 Dorchester Ave, Boston, MA 02125
                          </p>
                        </div>
                        <button className="btn-outline btn boston-venue-map-btn">
                          <svg
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
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
                          <span>
                            {' '}
                            View on Map
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </button>
                        <div className="boston-venue-entry-tip">
                          <span>
                            <span className="unlocked-intelligence-text365">
                              Entry Tip:
                            </span>
                            <span>
                              {' '}
                              Best for late-night crowd; opens after 1 AM
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="boston-venue-section">
                        <h4 className="boston-venue-section-title">
                          Cost Estimate
                        </h4>
                        <div className="boston-venue-costs-grid">
                          <div className="boston-venue-cost-item">
                            <span className="boston-venue-cost-label">
                              Cover Range
                            </span>
                            <span className="boston-venue-cost-value">
                              $10–$20
                            </span>
                          </div>
                          <div className="boston-venue-cost-item">
                            <span className="boston-venue-cost-label">
                              Drinks Range
                            </span>
                            <span className="boston-venue-cost-value">
                              $10–$15
                            </span>
                          </div>
                          <div className="boston-venue-cost-item">
                            <span className="boston-venue-cost-label">
                              VIP Table Range
                            </span>
                            <span className="boston-venue-cost-value">
                              $300–$800
                            </span>
                          </div>
                          <div className="boston-venue-cost-item boston-venue-cost-total">
                            <span className="boston-venue-cost-label">
                              Total Night Estimate
                            </span>
                            <span className="boston-venue-cost-value">
                              $60–$100
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="boston-venue-section">
                        <div className="boston-venue-rating-row">
                          <div className="boston-venue-rating-block">
                            <div className="boston-venue-stars">
                              <svg
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <span className="boston-venue-rating-value">
                                4.5
                              </span>
                            </div>
                          </div>
                          <div className="boston-venue-crowd-block">
                            <span className="boston-venue-crowd-label">
                              Crowd Level:
                            </span>
                            <span className="boston-venue-crowd-medium boston-venue-crowd-badge">
                              MEDIUM
                            </span>
                          </div>
                          <div className="boston-venue-peak-block">
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
                            <span className="boston-venue-peak-time">
                              Best Time Inside: 2:00–4:00 AM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="boston-venue-actions">
                        <button className="btn-accent btn boston-venue-cta-primary">
                          Request VIP
                        </button>
                        <button className="btn-outline boston-venue-cta-secondary btn">
                          <svg
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>
                            {' '}
                            Save Venue
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
                <section className="unlocked-intelligence-thq-intelligence-footer-section-elm intelligence-footer-section">
                  <div className="intelligence-footer-container">
                    <div className="intelligence-footer-bulk-cta">
                      <h2 className="section-title intelligence-footer-heading">
                        Ready to explore tonight?
                      </h2>
                      <p className="intelligence-footer-subheading">
                        Filter by city, category, or search — find your perfect
                        venue in seconds.
                      </p>
                      <div className="intelligence-footer-cta-actions">
                        <a href="/cities">
                          <div className="btn-accent btn btn-lg">
                            <span>Browse Cities</span>
                          </div>
                        </a>
                        <a href="/categories">
                          <div className="btn-outline btn btn-lg">
                            <span>Browse Categories</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="intelligence-footer-member-box">
                      <div className="intelligence-footer-member-content">
                        <p className="intelligence-footer-member-text">
                          Members get: Real arrival times | Parking intel | VIP
                          tips | Live crowd updates
                        </p>
                        <div className="intelligence-footer-member-icons">
                          <div className="intelligence-footer-icon-item">
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
                          <div className="intelligence-footer-icon-item">
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
                                <circle r="10" cx="12" cy="12"></circle>
                                <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                              </g>
                            </svg>
                          </div>
                          <div className="intelligence-footer-icon-item">
                            <svg
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
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
                          <div className="intelligence-footer-icon-item">
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
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle r="4" cx="9" cy="7"></circle>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="intelligence-footer-vip-cta">
                      <h2 className="section-title intelligence-footer-vip-heading">
                        Want bottle service or table access?
                      </h2>
                      <p className="intelligence-footer-vip-subheading">
                        Submit a VIP request and our concierge will handle it.
                      </p>
                      <a href="/vip">
                        <div className="btn-xl intelligence-footer-vip-button btn-accent btn">
                          <span>Request VIP Now</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </section>
              </section>
            </section>
            <div className="unlocked-intelligence-container2">
              <div className="unlocked-intelligence-container3">
                <Script
                  html={`<script defer data-name="vegas-venues-interaction">
(function(){
  const vegasVipButtons = document.querySelectorAll(".vegas-vip-btn")
  const vegasSaveButtons = document.querySelectorAll(".vegas-save-btn")

  vegasVipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("VIP request initiated for Las Vegas venue")
    })
  })

  vegasSaveButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isSaved = button.classList.contains("saved")
      const buttonText = button.querySelector("span")

      if (buttonText) {
        if (isSaved) {
          button.classList.remove("saved")
          buttonText.textContent = "Save Venue"
        } else {
          button.classList.add("saved")
          buttonText.textContent = "Saved"
        }
      }
    })
  })
})()
</script>`}
                ></Script>
              </div>
            </div>
          </section>
        </section>
      </div>
      <div className="unlocked-intelligence-container4">
        <div className="unlocked-intelligence-container5">
          <Script
            html={`<style>
        @keyframes particleFloat {0%,100% {opacity: 0.6;
transform: translateY(0) scale(1);}
50% {opacity: 1;
transform: translateY(-20px) scale(1.05);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="unlocked-intelligence-container6">
        <div className="unlocked-intelligence-container7">
          <Script
            html={`<script defer data-name="sticky-filter">
(function(){
  const filterBar = document.getElementById("filterBar")

  if (filterBar) {
    let lastScrollTop = 0

    window.addEventListener("scroll", function () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (scrollTop > 100) {
        filterBar.style.boxShadow = "0 4px 20px rgba(212, 175, 55, 0.15)"
      } else {
        filterBar.style.boxShadow = "0 4px 20px rgba(212, 175, 55, 0.1)"
      }

      lastScrollTop = scrollTop
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

export default UnlockedIntelligence
