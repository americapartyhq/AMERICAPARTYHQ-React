import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './city-guides.css'

const CityGuides = (props) => {
  return (
    <div className="city-guides-container1">
      <Helmet>
        <title>City-Guides - AMERICAPARTYHQ</title>
        <meta property="og:title" content="City-Guides - AMERICAPARTYHQ" />
        <link
          rel="canonical"
          href="https://www.americapartyhq.co/city-guides"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="city-guides-hero-section">
        <div className="hero-media-wrapper">
          <img
            alt="Luxury Nightclub Atmosphere"
            src="https://images.pexels.com/photos/13872120/pexels-photo-13872120.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="hero-bg-image"
          />
          <div className="hero-scrim-overlay"></div>
        </div>
        <div className="hero-content-container">
          <div className="hero-text-block">
            <h1 className="hero-title">
              Premium Nightlife Intelligence — Unlock the Inside Edge
            </h1>
            <p className="hero-subtitle">
              Browse exclusive club intel for free. Unlock premium insights,
              timing strategies, and insider access for $9.99/month.
            </p>
            <div className="hero-cta-group">
              <a href="/explore" target="_blank" rel="noreferrer noopener">
                <div className="city-guides-thq-btn-elm10 btn btn-primary btn-lg">
                  <span>Browse Free</span>
                </div>
              </a>
              <a href="/sub" target="_blank" rel="noreferrer noopener">
                <div className="city-guides-thq-btn-elm11 btn-outline btn btn-lg">
                  <span>Unlock Intelligence — $9.99/month</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="city-selector" className="city-selector-section">
        <div className="city-guides-city-rail-wrapper">
          <div className="city-card-rail">
            <div className="city-guides-city-card">
              <div className="city-card-image-slot">
                <img
                  alt="Miami Nightlife"
                  src="https://images.pexels.com/photos/25190387/pexels-photo-25190387.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="city-card-content">
                <h3 className="city-guides-city-name">Miami</h3>
                <div className="city-stats">
                  <span className="stat-item">
                    <svg
                      fill="none"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.87L12 17.77l-6.18 3.24L7 14.14l-5-4.87 6.91-1.01L12 2z"></path>
                    </svg>
                    <span>
                      {' '}
                      12 Hot Tonight
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="stat-item">Top: E11EVEN</span>
                </div>
                <a
                  href="/miami"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="city-guides-thq-btn-elm12 btn-secondary btn-sm city-filter-btn btn"
                >
                  Explore Miami
                </a>
              </div>
            </div>
            <div className="city-guides-city-card">
              <div className="city-card-image-slot">
                <img
                  alt="New York Nightlife"
                  src="https://images.pexels.com/photos/1058275/pexels-photo-1058275.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="city-card-content">
                <h3 className="city-guides-city-name">New York</h3>
                <div className="city-stats">
                  <span className="stat-item">
                    <svg
                      fill="none"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.87L12 17.77l-6.18 3.24L7 14.14l-5-4.87 6.91-1.01L12 2z"></path>
                    </svg>
                    <span>
                      {' '}
                      24 Hot Tonight
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="stat-item">Top: Marquee</span>
                </div>
                <a
                  href="/newyork"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="city-guides-thq-btn-elm13 btn-secondary btn-sm city-filter-btn btn"
                >
                  Explore NYC
                </a>
              </div>
            </div>
            <div className="city-guides-city-card">
              <div className="city-card-image-slot">
                <img
                  alt="Las Vegas Nightlife"
                  src="https://images.pexels.com/photos/18527629/pexels-photo-18527629.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="city-card-content">
                <h3 className="city-guides-city-name">Las Vegas</h3>
                <div className="city-stats">
                  <span className="stat-item">
                    <svg
                      fill="none"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.87L12 17.77l-6.18 3.24L7 14.14l-5-4.87 6.91-1.01L12 2z"></path>
                    </svg>
                    <span>
                      {' '}
                      40+ Hot Tonight
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="stat-item">Top: Omnia</span>
                </div>
                <a
                  href="/lasvegas"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="city-guides-thq-btn-elm14 btn-secondary btn-sm city-filter-btn btn"
                >
                  Explore Vegas
                </a>
              </div>
            </div>
            <div className="city-guides-city-card">
              <div className="city-card-image-slot">
                <img
                  alt="Los Angeles Nightlife"
                  src="https://images.pexels.com/photos/1692695/pexels-photo-1692695.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="city-card-content">
                <h3 className="city-guides-city-name">Los Angeles</h3>
                <div className="city-stats">
                  <span className="stat-item">
                    <svg
                      fill="none"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.87L12 17.77l-6.18 3.24L7 14.14l-5-4.87 6.91-1.01L12 2z"></path>
                    </svg>
                    <span>
                      {' '}
                      18 Hot Tonight
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="stat-item">Top: Academy</span>
                </div>
                <a
                  href="/losangeles"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="city-guides-thq-btn-elm15 btn-secondary btn-sm city-filter-btn btn"
                >
                  Explore LA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tonight-picks" className="venue-gallery-section">
        <div className="gallery-header-container">
          <h2 className="section-title">Premium Intelligence Preview</h2>
          <p className="section-subtitle">
            Get a taste of the intelligence that drives elite nightlife
            decisions.
          </p>
        </div>
        <div className="venue-grid">
          <div className="venue-card">
            <div className="venue-image-container">
              <img
                alt="Venue One"
                src="https://images.pexels.com/photos/3073896/pexels-photo-3073896.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="venue-badge">
                <span>Trending</span>
              </div>
            </div>
            <div className="venue-info">
              <div className="venue-meta">
                <h3 className="venue-title">The Vault</h3>
                <span className="venue-rating">4.9/5.0</span>
              </div>
              <div className="venue-timing">
                <svg
                  fill="none"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Best Arrival: 11:30 PM</span>
              </div>
              <p className="section-content">
                High-energy house music in a multi-level industrial space.
              </p>
              <a
                href="/sub"
                target="_blank"
                rel="noreferrer noopener"
                className="city-guides-thq-btn-elm16 btn-sm btn-accent btn"
              >
                Unlock Intelligence
              </a>
            </div>
          </div>
          <div className="venue-card">
            <div className="venue-image-container">
              <img
                alt="Venue Two"
                src="https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="venue-badge">
                <span>VIP Only</span>
              </div>
            </div>
            <div className="venue-info">
              <div className="venue-meta">
                <h3 className="venue-title">L&apos;Amour Rooftop</h3>
                <span className="venue-rating">4.8/5.0</span>
              </div>
              <div className="venue-timing">
                <svg
                  fill="none"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Best Arrival: 10:45 PM</span>
              </div>
              <p className="section-content">
                Sophisticated cocktails with panoramic city views and deep tech.
              </p>
              <a
                href="/sub"
                target="_blank"
                rel="noreferrer noopener"
                className="city-guides-thq-btn-elm17 btn-sm btn-accent btn"
              >
                Unlock Intelligence
              </a>
            </div>
          </div>
          <div className="venue-card">
            <div className="venue-image-container">
              <img
                alt="Venue Three"
                src="https://images.pexels.com/photos/7270006/pexels-photo-7270006.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="venue-badge">
                <span>Late Night</span>
              </div>
            </div>
            <div className="venue-info">
              <div className="venue-meta">
                <h3 className="venue-title">Neon Jungle</h3>
                <span className="venue-rating">4.7/5.0</span>
              </div>
              <div className="venue-timing">
                <svg
                  fill="none"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Best Arrival: 1:00 AM</span>
              </div>
              <p className="section-content">
                Immersive jungle-themed decor with curated hip-hop sets.
              </p>
              <a
                href="/sub"
                target="_blank"
                rel="noreferrer noopener"
                className="city-guides-thq-btn-elm18 btn-sm btn-accent btn"
              >
                Unlock Intelligence
              </a>
            </div>
          </div>
          <div className="venue-card">
            <div className="venue-image-container">
              <img
                alt="Venue Four"
                src="https://images.pexels.com/photos/18464242/pexels-photo-18464242.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="venue-badge">
                <span>Exclusive</span>
              </div>
            </div>
            <div className="venue-info">
              <div className="venue-meta">
                <h3 className="venue-title">The Gilded Room</h3>
                <span className="venue-rating">5.0/5.0</span>
              </div>
              <div className="venue-timing">
                <svg
                  fill="none"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Best Arrival: 11:15 PM</span>
              </div>
              <p className="section-content">
                Ultra-premium lounge experience with world-class mixology.
              </p>
              <a
                href="/sub"
                target="_blank"
                rel="noreferrer noopener"
                className="city-guides-thq-btn-elm19 btn-sm btn-accent btn"
              >
                Unlock Intelligence
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="city-guides-category-grid-section">
        <div className="category-container">
          <div className="category-header">
            <h2 className="section-title">Explore Intelligence by Category</h2>
            <p className="section-subtitle">
              Premium intelligence curated for every nightlife preference.
            </p>
          </div>
          <div className="city-guides-category-grid">
            <div className="category-item">
              <div className="city-guides-category-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                  <path d="M5 3v4"></path>
                  <path d="M19 17v4"></path>
                  <path d="M3 5h4"></path>
                  <path d="M17 19h4"></path>
                </svg>
              </div>
              <h3 className="category-label">Top 3 Tonight</h3>
            </div>
            <div className="category-item">
              <div className="city-guides-category-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20"></path>
                  <path d="M2 12h20"></path>
                  <path d="m16 16 4 4"></path>
                  <path d="m4 4 4 4"></path>
                  <path d="m16 8 4-4"></path>
                  <path d="m4 20 4-4"></path>
                </svg>
              </div>
              <h3 className="category-label">After 1AM</h3>
            </div>
            <div className="category-item">
              <div className="city-guides-category-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="category-label">Hip-Hop</h3>
            </div>
            <div className="category-item">
              <div className="city-guides-category-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 12h12"></path>
                  <path d="M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3"></path>
                  <path d="M6 15v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"></path>
                </svg>
              </div>
              <h3 className="category-label">Girls Night</h3>
            </div>
            <div className="category-item">
              <div className="city-guides-category-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v10"></path>
                  <path d="m16 8-4 4-4-4"></path>
                  <path d="M4 22h16"></path>
                </svg>
              </div>
              <h3 className="category-label">House</h3>
            </div>
            <div className="category-item">
              <div className="city-guides-category-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path>
                  <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                </svg>
              </div>
              <h3 className="category-label">Latin</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works-section">
        <div className="steps-container">
          <div className="steps-header">
            <h2 className="section-title">How Intelligence Works</h2>
            <p className="section-subtitle">
              Three steps to accessing premium nightlife intelligence.
            </p>
          </div>
          <div className="steps-horizontal">
            <div className="step-card">
              <div className="city-guides-step-number">
                <span>01</span>
              </div>
              <div className="step-icon">
                <svg
                  fill="none"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle r="3" cx="12" cy="10"></circle>
                </svg>
              </div>
              <h3 className="step-title">Preview Intelligence Free</h3>
              <p className="section-content">
                Browse premium club intelligence across America&apos;s top
                nightlife cities.
              </p>
            </div>
            <div className="step-card">
              <div className="city-guides-step-number">
                <span>02</span>
              </div>
              <div className="step-icon">
                <svg
                  fill="none"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="8" cx="11" cy="11"></circle>
                  <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                </svg>
              </div>
              <h3 className="step-title">Unlock Full Intelligence</h3>
              <p className="section-content">
                Access detailed timing intel, insider tips, and VIP strategies
                for $9.99/month.
              </p>
            </div>
            <div className="step-card">
              <div className="city-guides-step-number">
                <span>03</span>
              </div>
              <div className="step-icon">
                <svg
                  fill="none"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="step-title">Execute with Precision</h3>
              <p className="section-content">
                Apply premium intelligence to dominate every night with perfect
                timing and access.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="vip-cta-section">
        <div className="vip-card-container">
          <div className="vip-capture-card">
            <div className="vip-card-text">
              <h2 className="section-title">Unlock VIP Intelligence</h2>
              <p className="section-content">
                Get premium intelligence on the best tables and exclusive club
                entry through our network of elite promoters.
              </p>
            </div>
            <form
              action="/submit-vip"
              method="POST"
              data-form-id="124897d0-c924-408b-94c4-1af562311913"
              className="vip-form"
            >
              <div className="form-row">
                <div className="form-group">
                  <select
                    id="thq_city_K1Le"
                    name="city"
                    required="true"
                    data-form-field-id="thq_city_K1Le"
                    className="form-select"
                  >
                    <option value="true" disabled="true" selected="true">
                      Select City
                    </option>
                    <option value="miami">Miami</option>
                    <option value="nyc">New York</option>
                    <option value="vegas">Las Vegas</option>
                    <option value="la">Los Angeles</option>
                    <option value="boston">Boston</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    id="thq_date_vSuF"
                    name="date"
                    required="true"
                    data-form-field-id="thq_date_vSuF"
                    className="form-input"
                  />
                </div>
              </div>
              <a
                href="/sub"
                id="thq_button_h0fR"
                name="button"
                data-form-field-id="thq_button_h0fR"
                target="_blank"
                rel="noreferrer noopener"
                className="city-guides-thq-btn-elm20 btn-xl btn btn-primary"
              >
                Unlock VIP Intelligence
              </a>
            </form>
          </div>
        </div>
      </section>
      <section className="city-guides-testimonials-section">
        <div className="testimonials-header">
          <h2 className="section-title">Trusted Intelligence Network</h2>
          <p className="section-subtitle">
            Intelligence verified by nightlife insiders and industry experts.
          </p>
        </div>
        <div className="testimonials-scroller-wrapper">
          <div className="testimonials-horizontal-rail">
            <div className="city-guides-testimonial-card">
              <div className="testimonial-profile">
                <div className="profile-image-slot">
                  <img
                    alt="Marcus V."
                    src="https://images.pexels.com/photos/28918672/pexels-photo-28918672.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="profile-info">
                  <span className="profile-name">Marcus V.</span>
                  <span className="profile-role">Lead Promoter, Miami</span>
                </div>
              </div>
              <div className="testimonial-divider"></div>
              <p className="city-guides-testimonial-quote">
                &quot;AmericaPartyHQ is the only guide that actually understands
                the flow of a night. Their timing advice is spot on.&quot;
              </p>
            </div>
            <div className="city-guides-testimonial-card">
              <div className="testimonial-profile">
                <div className="profile-image-slot">
                  <img
                    alt="Elena R."
                    src="https://images.pexels.com/photos/18704225/pexels-photo-18704225.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="profile-info">
                  <span className="profile-name">Elena R.</span>
                  <span className="profile-role">Resident DJ, NYC</span>
                </div>
              </div>
              <div className="testimonial-divider"></div>
              <p className="city-guides-testimonial-quote">
                &quot;As a DJ, I see people arrive too early or too late
                constantly. This platform fixes that disconnect.&quot;
              </p>
            </div>
            <div className="city-guides-testimonial-card">
              <div className="testimonial-profile">
                <div className="profile-image-slot">
                  <img
                    alt="Jason K."
                    src="https://images.pexels.com/photos/17801450/pexels-photo-17801450.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="profile-info">
                  <span className="profile-name">Jason K.</span>
                  <span className="profile-role">VIP Host, Las Vegas</span>
                </div>
              </div>
              <div className="testimonial-divider"></div>
              <p className="city-guides-testimonial-quote">
                &quot;We only work with high-intent groups. AmericaPartyHQ
                filters for the crowd that matters.&quot;
              </p>
            </div>
            <div className="city-guides-testimonial-card">
              <div className="testimonial-profile">
                <div className="profile-image-slot">
                  <img
                    alt="Sasha L."
                    src="https://images.pexels.com/photos/34009287/pexels-photo-34009287.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="profile-info">
                  <span className="profile-name">Sasha L.</span>
                  <span className="profile-role">Event Curator, LA</span>
                </div>
              </div>
              <div className="testimonial-divider"></div>
              <p className="city-guides-testimonial-quote">
                &quot;The interface is as premium as the clubs we feature.
                It&apos;s the new standard for discovery.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="city-guides-container2">
        <div className="city-guides-container3">
          <Script
            html={`<style>
        @keyframes heroEntrance {0% {opacity: 0;
transform: translateY(40px);}
100% {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="city-guides-container4">
        <div className="city-guides-container5">
          <Script
            html={`<script defer data-name="city-guides-logic">
(function(){
  // Interactive City Filter Simulation
  const cityButtons = document.querySelectorAll(".city-filter-btn")
  cityButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cityName = btn.closest(".city-card").querySelector(".city-name").textContent

      // Visual feedback
      btn.textContent = "Loading..."
      btn.classList.add("btn-primary")
      btn.classList.remove("btn-secondary")

      setTimeout(() => {
        btn.textContent = \`Explore \${cityName}\`
        btn.classList.remove("btn-primary")
        btn.classList.add("btn-secondary")

        // Scroll to venue grid
        document.getElementById("tonight-picks").scrollIntoView({ behavior: "smooth" })
      }, 800)
    })
  })

  // Parallax effect for Hero
  window.addEventListener("scroll", () => {
    const heroImage = document.querySelector(".hero-bg-image")
    const scrollValue = window.scrollY
    if (heroImage) {
      heroImage.style.transform = \`translateY(\${scrollValue * 0.4}px)\`
    }
  })

  // VIP Form Success State
  const vipForm = document.querySelector(".vip-form")
  if (vipForm) {
    vipForm.addEventListener("submit", (e) => {
      // Native validation handles the rest
      const submitBtn = vipForm.querySelector('button[type="submit"]')
      submitBtn.textContent = "Requesting..."
      submitBtn.disabled = true

      // Success state would normally be handled by the backend response,
      // but we provide visual feedback for the demo
      setTimeout(() => {
        vipForm.innerHTML = \`
          <div style="padding: var(--spacing-xl); text-align: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: var(--spacing-md);"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <h3 class="section-title">Request Received</h3>
            <p class="section-content">A VIP host will contact you shortly to confirm your access.</p>
          </div>
        \`
      }, 1500)
    })
  }

  // Horizontal Scroll Drag for City Rail (UX enhancement)
  const rails = document.querySelectorAll(".city-card-rail, .testimonials-scroller-wrapper")
  rails.forEach((rail) => {
    let isDown = false
    let startX
    let scrollLeft

    rail.addEventListener("mousedown", (e) => {
      isDown = true
      rail.classList.add("active")
      startX = e.pageX - rail.offsetLeft
      scrollLeft = rail.scrollLeft
    })
    rail.addEventListener("mouseleave", () => {
      isDown = false
    })
    rail.addEventListener("mouseup", () => {
      isDown = false
    })
    rail.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - rail.offsetLeft
      const walk = (x - startX) * 2
      rail.scrollLeft = scrollLeft - walk
    })
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

export default CityGuides
