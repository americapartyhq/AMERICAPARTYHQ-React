import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './explore-venues-browse-free.css'

const ExploreVenuesBrowseFree = (props) => {
  return (
    <div className="explore-venues-browse-free-container1">
      <Helmet>
        <title>explore-venues-browse-free - AMERICAPARTYHQ</title>
        <meta
          property="og:title"
          content="explore-venues-browse-free - AMERICAPARTYHQ"
        />
        <link rel="canonical" href="https://www.americapartyhq.co/explore" />
      </Helmet>
      <Navigation></Navigation>
      <section className="explore-venues-browse-free-thq-premium-hero-section-elm page7-premium-hero-section premium-hero-section">
        <div className="page7-premium-hero-overlay premium-hero-overlay"></div>
        <div className="premium-hero-content page7-premium-hero-content">
          <h1 className="hero-title">
            Discover America&apos;s Premier Nightlife Venues
          </h1>
          <p className="hero-subtitle">
            Discover the best nightlife destinations. Search by city, category,
            or vibe to find your perfect night out.
          </p>
          <div className="directory-hero-search">
            <div className="directory-search-icon">
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
                  <path d="m21 21l-4.34-4.34"></path>
                  <circle r="8" cx="11" cy="11"></circle>
                </g>
              </svg>
            </div>
            <input
              type="text"
              id="heroSearchInput"
              placeholder="Search venues by name..."
              className="directory-hero-search-input"
            />
          </div>
        </div>
      </section>
      <section className="page7-city-filter-section city-filter-section">
        <div className="page7-container1 container1">
          <h2 className="section-title">Filter Venues</h2>
          <div className="directory-filters-grid">
            <div className="page7-filter-group filter-group">
              <label className="page7-filter-label filter-label">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m21 21l-2-4l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.724 10.313m-1.056 2.925L14.5 21a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1l4.775-1.724"></path>
                  </path>
                </svg>
                <span>
                  {' '}
                  City
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </label>
              <select id="cityFilter" className="directory-filter-select">
                <option>All Cities</option>
                <option value="miami">Miami</option>
                <option value="nyc">New York</option>
                <option value="la">Los Angeles</option>
                <option value="vegas">Las Vegas</option>
                <option value="boston">Boston</option>
              </select>
            </div>
            <div className="page7-filter-group filter-group">
              <label className="page7-filter-label filter-label">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 4h16v2.172a2 2 0 0 1-.586 1.414L15 12v7l-6 2v-8.5L4.52 7.572A2 2 0 0 1 4 6.227z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>
                  {' '}
                  Category
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </label>
              <select id="categoryFilter" className="directory-filter-select">
                <option>All Categories</option>
                <option value="hip-hop">Hip-Hop</option>
                <option value="after-1am">After 1AM</option>
                <option value="girls-night">Girls Night</option>
                <option value="house">House</option>
                <option value="latin">Latin</option>
                <option value="rooftop">Rooftop</option>
              </select>
            </div>
            <div className="page7-filter-group filter-group">
              <label className="page7-filter-label filter-label">
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
                <span>
                  {' '}
                  Rating
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </label>
              <select id="ratingFilter" className="directory-filter-select">
                <option>All Ratings</option>
                <option value="4.5">4.5+ Stars</option>
                <option value="4.0">4.0+ Stars</option>
                <option value="3.5">3.5+ Stars</option>
              </select>
            </div>
            <div className="directory-filter-actions">
              <button id="applyFiltersBtn" className="page7-btn btn-accent btn">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="clubs-showcase-section page7-clubs-showcase-section">
        <div className="page7-container1 container1">
          <div className="page7-section-header section-header">
            <h2 className="section-title">All Venues</h2>
            <p className="section-content">Showing 15 venues</p>
          </div>
          <div className="clubs-grid page7-clubs-grid">
            <article className="gated-club-card page7-gated-club-card">
              <div className="page7-gated-club-image-wrapper gated-club-image-wrapper">
                <img
                  alt="LIV Nightclub"
                  src="https://images.pexels.com/photos/10548499/pexels-photo-10548499.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image page7-gated-club-image"
                />
                <div className="directory-venue-badges">
                  <span className="page7-city-chip city-chip">Miami</span>
                </div>
              </div>
              <div className="gated-club-details page7-gated-club-details">
                <h3 className="gated-club-name page7-gated-club-name">
                  LIV Nightclub
                </h3>
                <div className="top-3-tonight-club-meta page7-top-3-tonight-club-meta">
                  <div className="page7-club-rating club-rating">
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
                    <span className="directory-rating-value">4.8</span>
                  </div>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    Hip-Hop
                  </span>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    House
                  </span>
                </div>
                <p className="page7-gated-club-description gated-club-description">
                  Miami&apos;s most iconic nightclub featuring world-class DJs
                  and VIP experiences.
                </p>
                <div className="page7-club-arrival club-arrival">
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
                  <span>Best arrival: 11:30 PM</span>
                </div>
                <button className="page7-full-width btn-outline page7-btn full-width btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="gated-club-card page7-gated-club-card">
              <div className="page7-gated-club-image-wrapper gated-club-image-wrapper">
                <img
                  alt="Marquee Nightclub"
                  src="https://images.pexels.com/photos/2796105/pexels-photo-2796105.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image page7-gated-club-image"
                />
                <div className="directory-venue-badges">
                  <span className="page7-city-chip city-chip">New York</span>
                </div>
              </div>
              <div className="gated-club-details page7-gated-club-details">
                <h3 className="gated-club-name page7-gated-club-name">
                  Marquee Nightclub
                </h3>
                <div className="top-3-tonight-club-meta page7-top-3-tonight-club-meta">
                  <div className="page7-club-rating club-rating">
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
                    <span className="directory-rating-value">4.7</span>
                  </div>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    House
                  </span>
                </div>
                <p className="page7-gated-club-description gated-club-description">
                  Upscale NYC club with cutting-edge sound system and celebrity
                  sightings.
                </p>
                <div className="page7-club-arrival club-arrival">
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
                  <span>Best arrival: 12:00 AM</span>
                </div>
                <button className="page7-full-width btn-outline page7-btn full-width btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="gated-club-card page7-gated-club-card">
              <div className="page7-gated-club-image-wrapper gated-club-image-wrapper">
                <img
                  alt="The Exchange LA"
                  src="https://images.pexels.com/photos/4577408/pexels-photo-4577408.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image page7-gated-club-image"
                />
                <div className="directory-venue-badges">
                  <span className="page7-city-chip city-chip">Los Angeles</span>
                </div>
              </div>
              <div className="gated-club-details page7-gated-club-details">
                <h3 className="gated-club-name page7-gated-club-name">
                  The Exchange LA
                </h3>
                <div className="top-3-tonight-club-meta page7-top-3-tonight-club-meta">
                  <div className="page7-club-rating club-rating">
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
                    <span className="directory-rating-value">4.9</span>
                  </div>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    House
                  </span>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    After 1AM
                  </span>
                </div>
                <p className="page7-gated-club-description gated-club-description">
                  Historic venue turned massive nightclub with stunning
                  architecture and vibes.
                </p>
                <div className="page7-club-arrival club-arrival">
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
                  <span>Best arrival: 11:00 PM</span>
                </div>
                <button className="page7-full-width btn-outline page7-btn full-width btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="gated-club-card page7-gated-club-card">
              <div className="page7-gated-club-image-wrapper gated-club-image-wrapper">
                <img
                  alt="Omnia Nightclub"
                  src="https://images.pexels.com/photos/7254616/pexels-photo-7254616.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image page7-gated-club-image"
                />
                <div className="directory-venue-badges">
                  <span className="page7-city-chip city-chip">Las Vegas</span>
                </div>
              </div>
              <div className="gated-club-details page7-gated-club-details">
                <h3 className="gated-club-name page7-gated-club-name">
                  Omnia Nightclub
                </h3>
                <div className="top-3-tonight-club-meta page7-top-3-tonight-club-meta">
                  <div className="page7-club-rating club-rating">
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
                    <span className="directory-rating-value">4.6</span>
                  </div>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    House
                  </span>
                </div>
                <p className="page7-gated-club-description gated-club-description">
                  Multi-level Vegas mega club with kinetic chandelier and
                  rooftop terrace.
                </p>
                <div className="page7-club-arrival club-arrival">
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
                  <span>Best arrival: 11:45 PM</span>
                </div>
                <button className="page7-full-width btn-outline page7-btn full-width btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="gated-club-card page7-gated-club-card">
              <div className="page7-gated-club-image-wrapper gated-club-image-wrapper">
                <img
                  alt="E11EVEN Miami"
                  src="https://images.pexels.com/photos/7221580/pexels-photo-7221580.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image page7-gated-club-image"
                />
                <div className="directory-venue-badges">
                  <span className="page7-city-chip city-chip">Miami</span>
                </div>
              </div>
              <div className="gated-club-details page7-gated-club-details">
                <h3 className="gated-club-name page7-gated-club-name">
                  E11EVEN Miami
                </h3>
                <div className="top-3-tonight-club-meta page7-top-3-tonight-club-meta">
                  <div className="page7-club-rating club-rating">
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
                    <span className="directory-rating-value">4.9</span>
                  </div>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    After 1AM
                  </span>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    Hip-Hop
                  </span>
                </div>
                <p className="page7-gated-club-description gated-club-description">
                  24-hour ultra club with non-stop entertainment and theatrical
                  performances.
                </p>
                <div className="page7-club-arrival club-arrival">
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
                  <span>Best arrival: 1:00 AM</span>
                </div>
                <button className="page7-full-width btn-outline page7-btn full-width btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="gated-club-card page7-gated-club-card">
              <div className="page7-gated-club-image-wrapper gated-club-image-wrapper">
                <img
                  alt="Sound Nightclub"
                  src="https://images.pexels.com/photos/7319482/pexels-photo-7319482.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image page7-gated-club-image"
                />
                <div className="directory-venue-badges">
                  <span className="page7-city-chip city-chip">Los Angeles</span>
                </div>
              </div>
              <div className="gated-club-details page7-gated-club-details">
                <h3 className="gated-club-name page7-gated-club-name">
                  Sound Nightclub
                </h3>
                <div className="top-3-tonight-club-meta page7-top-3-tonight-club-meta">
                  <div className="page7-club-rating club-rating">
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
                    <span className="directory-rating-value">4.5</span>
                  </div>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    House
                  </span>
                </div>
                <p className="page7-gated-club-description gated-club-description">
                  Underground vibes with world-renowned DJs and an intimate
                  dance floor.
                </p>
                <div className="page7-club-arrival club-arrival">
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
                  <span>Best arrival: 10:30 PM</span>
                </div>
                <button className="page7-full-width btn-outline page7-btn full-width btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="gated-club-card page7-gated-club-card">
              <div className="page7-gated-club-image-wrapper gated-club-image-wrapper">
                <img
                  alt="Story Miami"
                  src="https://images.pexels.com/photos/16545934/pexels-photo-16545934.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image page7-gated-club-image"
                />
                <div className="directory-venue-badges">
                  <span className="page7-city-chip city-chip">Miami</span>
                </div>
              </div>
              <div className="gated-club-details page7-gated-club-details">
                <h3 className="gated-club-name page7-gated-club-name">
                  Story Miami
                </h3>
                <div className="top-3-tonight-club-meta page7-top-3-tonight-club-meta">
                  <div className="page7-club-rating club-rating">
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
                    <span className="directory-rating-value">4.7</span>
                  </div>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    Hip-Hop
                  </span>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    House
                  </span>
                </div>
                <p className="page7-gated-club-description gated-club-description">
                  Multi-room mega-club with impressive production and top-tier
                  talent.
                </p>
                <div className="page7-club-arrival club-arrival">
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
                  <span>Best arrival: 11:30 PM</span>
                </div>
                <button className="page7-full-width btn-outline page7-btn full-width btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="gated-club-card page7-gated-club-card">
              <div className="page7-gated-club-image-wrapper gated-club-image-wrapper">
                <img
                  alt="Hakkasan"
                  src="https://images.pexels.com/photos/7322116/pexels-photo-7322116.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image page7-gated-club-image"
                />
                <div className="directory-venue-badges">
                  <span className="page7-city-chip city-chip">Las Vegas</span>
                </div>
              </div>
              <div className="gated-club-details page7-gated-club-details">
                <h3 className="gated-club-name page7-gated-club-name">
                  Hakkasan
                </h3>
                <div className="top-3-tonight-club-meta page7-top-3-tonight-club-meta">
                  <div className="page7-club-rating club-rating">
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
                    <span className="directory-rating-value">4.8</span>
                  </div>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    House
                  </span>
                </div>
                <p className="page7-gated-club-description gated-club-description">
                  Five-level nightclub with Asian-inspired design and top
                  electronic artists.
                </p>
                <div className="page7-club-arrival club-arrival">
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
                  <span>Best arrival: 12:15 AM</span>
                </div>
                <button className="page7-full-width btn-outline page7-btn full-width btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="gated-club-card page7-gated-club-card">
              <div className="page7-gated-club-image-wrapper gated-club-image-wrapper">
                <img
                  alt="Tunnel Boston"
                  src="https://images.pexels.com/photos/29015082/pexels-photo-29015082.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image page7-gated-club-image"
                />
                <div className="directory-venue-badges">
                  <span className="page7-city-chip city-chip">Boston</span>
                </div>
              </div>
              <div className="gated-club-details page7-gated-club-details">
                <h3 className="gated-club-name page7-gated-club-name">
                  Tunnel Boston
                </h3>
                <div className="top-3-tonight-club-meta page7-top-3-tonight-club-meta">
                  <div className="page7-club-rating club-rating">
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
                    <span className="directory-rating-value">4.4</span>
                  </div>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    Hip-Hop
                  </span>
                </div>
                <p className="page7-gated-club-description gated-club-description">
                  Boston&apos;s premier hip-hop club with electric atmosphere
                  and urban vibes.
                </p>
                <div className="page7-club-arrival club-arrival">
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
                  <span>Best arrival: 11:00 PM</span>
                </div>
                <button className="page7-full-width btn-outline page7-btn full-width btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="gated-club-card page7-gated-club-card">
              <div className="page7-gated-club-image-wrapper gated-club-image-wrapper">
                <img
                  alt="1 OAK New York"
                  src="https://images.pexels.com/photos/6585625/pexels-photo-6585625.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image page7-gated-club-image"
                />
                <div className="directory-venue-badges">
                  <span className="page7-city-chip city-chip">New York</span>
                </div>
              </div>
              <div className="gated-club-details page7-gated-club-details">
                <h3 className="gated-club-name page7-gated-club-name">
                  1 OAK New York
                </h3>
                <div className="top-3-tonight-club-meta page7-top-3-tonight-club-meta">
                  <div className="page7-club-rating club-rating">
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
                    <span className="directory-rating-value">4.6</span>
                  </div>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    Hip-Hop
                  </span>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    Girls Night
                  </span>
                </div>
                <p className="page7-gated-club-description gated-club-description">
                  Trendy NYC hotspot known for celebrity appearances and
                  exclusive vibes.
                </p>
                <div className="page7-club-arrival club-arrival">
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
                  <span>Best arrival: 11:45 PM</span>
                </div>
                <button className="page7-full-width btn-outline page7-btn full-width btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="gated-club-card page7-gated-club-card">
              <div className="page7-gated-club-image-wrapper gated-club-image-wrapper">
                <img
                  alt="XS Nightclub"
                  src="https://images.pexels.com/photos/6667160/pexels-photo-6667160.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image page7-gated-club-image"
                />
                <div className="directory-venue-badges">
                  <span className="page7-city-chip city-chip">Las Vegas</span>
                </div>
              </div>
              <div className="gated-club-details page7-gated-club-details">
                <h3 className="gated-club-name page7-gated-club-name">
                  XS Nightclub
                </h3>
                <div className="top-3-tonight-club-meta page7-top-3-tonight-club-meta">
                  <div className="page7-club-rating club-rating">
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
                    <span className="directory-rating-value">4.9</span>
                  </div>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    House
                  </span>
                </div>
                <p className="page7-gated-club-description gated-club-description">
                  Award-winning nightclub with golden décor and stunning
                  poolside setting.
                </p>
                <div className="page7-club-arrival club-arrival">
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
                  <span>Best arrival: 11:30 PM</span>
                </div>
                <button className="page7-full-width btn-outline page7-btn full-width btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="gated-club-card page7-gated-club-card">
              <div className="page7-gated-club-image-wrapper gated-club-image-wrapper">
                <img
                  alt="Avalon Hollywood"
                  src="https://images.pexels.com/photos/8142050/pexels-photo-8142050.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image page7-gated-club-image"
                />
                <div className="directory-venue-badges">
                  <span className="page7-city-chip city-chip">Los Angeles</span>
                </div>
              </div>
              <div className="gated-club-details page7-gated-club-details">
                <h3 className="gated-club-name page7-gated-club-name">
                  Avalon Hollywood
                </h3>
                <div className="top-3-tonight-club-meta page7-top-3-tonight-club-meta">
                  <div className="page7-club-rating club-rating">
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
                    <span className="directory-rating-value">4.5</span>
                  </div>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    House
                  </span>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    After 1AM
                  </span>
                </div>
                <p className="page7-gated-club-description gated-club-description">
                  Historic Hollywood venue with state-of-the-art sound and
                  lighting systems.
                </p>
                <div className="page7-club-arrival club-arrival">
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
                  <span>Best arrival: 10:45 PM</span>
                </div>
                <button className="page7-full-width btn-outline page7-btn full-width btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="gated-club-card page7-gated-club-card">
              <div className="page7-gated-club-image-wrapper gated-club-image-wrapper">
                <img
                  alt="Space Miami"
                  src="https://images.pexels.com/photos/7814940/pexels-photo-7814940.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image page7-gated-club-image"
                />
                <div className="directory-venue-badges">
                  <span className="page7-city-chip city-chip">Miami</span>
                </div>
              </div>
              <div className="gated-club-details page7-gated-club-details">
                <h3 className="gated-club-name page7-gated-club-name">
                  Space Miami
                </h3>
                <div className="top-3-tonight-club-meta page7-top-3-tonight-club-meta">
                  <div className="page7-club-rating club-rating">
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
                    <span className="directory-rating-value">4.8</span>
                  </div>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    House
                  </span>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    After 1AM
                  </span>
                </div>
                <p className="page7-gated-club-description gated-club-description">
                  Iconic after-hours club with rooftop terrace and sunrise
                  sessions.
                </p>
                <div className="page7-club-arrival club-arrival">
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
                  <span>Best arrival: 2:00 AM</span>
                </div>
                <button className="page7-full-width btn-outline page7-btn full-width btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="gated-club-card page7-gated-club-card">
              <div className="page7-gated-club-image-wrapper gated-club-image-wrapper">
                <img
                  alt="Tao Nightclub"
                  src="https://images.pexels.com/photos/6032235/pexels-photo-6032235.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image page7-gated-club-image"
                />
                <div className="directory-venue-badges">
                  <span className="page7-city-chip city-chip">New York</span>
                </div>
              </div>
              <div className="gated-club-details page7-gated-club-details">
                <h3 className="gated-club-name page7-gated-club-name">
                  Tao Nightclub
                </h3>
                <div className="top-3-tonight-club-meta page7-top-3-tonight-club-meta">
                  <div className="page7-club-rating club-rating">
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
                    <span className="directory-rating-value">4.7</span>
                  </div>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    Hip-Hop
                  </span>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    Girls Night
                  </span>
                </div>
                <p className="page7-gated-club-description gated-club-description">
                  Asian-inspired venue with dramatic décor and high-energy party
                  atmosphere.
                </p>
                <div className="page7-club-arrival club-arrival">
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
                  <span>Best arrival: 11:15 PM</span>
                </div>
                <button className="page7-full-width btn-outline page7-btn full-width btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="gated-club-card page7-gated-club-card">
              <div className="page7-gated-club-image-wrapper gated-club-image-wrapper">
                <img
                  alt="The Grand Boston"
                  src="https://images.pexels.com/photos/354985/pexels-photo-354985.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gated-club-image page7-gated-club-image"
                />
                <div className="directory-venue-badges">
                  <span className="page7-city-chip city-chip">Boston</span>
                </div>
              </div>
              <div className="gated-club-details page7-gated-club-details">
                <h3 className="gated-club-name page7-gated-club-name">
                  The Grand Boston
                </h3>
                <div className="top-3-tonight-club-meta page7-top-3-tonight-club-meta">
                  <div className="page7-club-rating club-rating">
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
                    <span className="directory-rating-value">4.6</span>
                  </div>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    House
                  </span>
                  <span className="page7-top-3-tonight-club-badge top-3-tonight-club-badge">
                    Girls Night
                  </span>
                </div>
                <p className="page7-gated-club-description gated-club-description">
                  Upscale multi-level venue with diverse music and luxury VIP
                  experiences.
                </p>
                <div className="page7-club-arrival club-arrival">
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
                  <span>Best arrival: 11:00 PM</span>
                </div>
                <button className="page7-full-width btn-outline page7-btn full-width btn">
                  View Details
                </button>
              </div>
            </article>
          </div>
          <div className="directory-pagination">
            <button id="prevBtn" className="btn-outline page7-btn btn">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="m15 18l-6-6l6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>
                {' '}
                Previous
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </button>
            <div className="directory-pagination-numbers">
              <button className="directory-page-number active">1</button>
              <button className="directory-page-number">2</button>
              <button className="directory-page-number">3</button>
              <button className="directory-page-number">4</button>
            </div>
            <button id="nextBtn" className="btn-outline page7-btn btn">
              <span>
                {' '}
                Next
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="m9 18l6-6l-6-6"
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
      </section>
      <Footer></Footer>
      <div className="explore-venues-browse-free-container2">
        <div className="explore-venues-browse-free-container3">
          <Script
            html={`<script defer data-name="venue-directory-interactions">
(function(){
const applyFiltersBtn = document.getElementById('applyFiltersBtn');
const cityFilter = document.getElementById('cityFilter');
const categoryFilter = document.getElementById('categoryFilter');
const ratingFilter = document.getElementById('ratingFilter');
const heroSearchInput = document.getElementById('heroSearchInput');

if (applyFiltersBtn && cityFilter && categoryFilter && ratingFilter) {
  applyFiltersBtn.addEventListener('click', () => {
    const city = cityFilter.value;
    const category = categoryFilter.value;
    const rating = ratingFilter.value;
    
    console.log('Filters Applied:', { city, category, rating });
  });
}

if (heroSearchInput) {
  heroSearchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    console.log('Searching for:', searchTerm);
  });
}

const pageNumbers = document.querySelectorAll('.directory-page-number');
if (pageNumbers.length > 0) {
  pageNumbers.forEach((btn) => {
    btn.addEventListener('click', () => {
      const currentActive = document.querySelector('.directory-page-number.active');
      if (currentActive) {
        currentActive.classList.remove('active');
      }
      btn.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    const currentActive = document.querySelector('.directory-page-number.active');
    if (currentActive) {
      const prevPage = currentActive.previousElementSibling;
      if (prevPage && prevPage.classList.contains('directory-page-number')) {
        currentActive.classList.remove('active');
        prevPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    const currentActive = document.querySelector('.directory-page-number.active');
    if (currentActive) {
      const nextPage = currentActive.nextElementSibling;
      if (nextPage && nextPage.classList.contains('directory-page-number')) {
        currentActive.classList.remove('active');
        nextPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  });
}
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default ExploreVenuesBrowseFree
