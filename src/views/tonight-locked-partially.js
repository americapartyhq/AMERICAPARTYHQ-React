import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './tonight-locked-partially.css'

const TonightLockedPartially = (props) => {
  return (
    <div className="tonight-locked-partially-container1">
      <Helmet>
        <title>Tonight-locked-partially - AMERICAPARTYHQ</title>
        <meta
          property="og:title"
          content="Tonight-locked-partially - AMERICAPARTYHQ"
        />
        <link rel="canonical" href="https://www.americapartyhq.co/tonight" />
      </Helmet>
      <Link to="/">
        <Navigation className="tonight-locked-partially-component1"></Navigation>
      </Link>
      <section className="tonight-hero-section">
        <div className="hero-video-wrapper">
          <video
            src="https://videos.pexels.com/video-files/7722221/7722221-hd_1280_720_25fps.mp4"
            loop="true"
            muted="true"
            poster="https://images.pexels.com/videos/7722221/pictures/preview-0.jpg"
            autoPlay="true"
            playsInline="true"
            className="hero-video-bg"
          ></video>
          <div className="tonight-hero-overlay"></div>
        </div>
        <div className="tonight-hero-content-container">
          <div className="tonight-hero-text-block">
            <h1 className="hero-title tonight-hero-title">
              Tonight&apos;s Top Intelligence
            </h1>
            <p className="tonight-hero-subtitle hero-subtitle">
              Preview tonight&apos;s hottest venues for free. Unlock complete
              Premium Intelligence for $9.99/month.
            </p>
          </div>
          <div className="tonight-hero-actions">
            <div className="hero-selector-wrapper">
              <select
                id="heroCitySelect"
                aria-label="Select City"
                className="hero-city-dropdown"
              >
                <option value="true" disabled="true" selected="true">
                  Select Your City
                </option>
                <option value="miami">Miami</option>
                <option value="nyc">New York</option>
                <option value="la">Los Angeles</option>
                <option value="vegas">Las Vegas</option>
                <option value="boston">Boston</option>
              </select>
            </div>
            <div className="hero-btn-group">
              <button className="btn btn-primary btn-lg">Browse Free</button>
              <button className="btn-accent btn btn-lg">
                Unlock Intelligence — $9.99/month
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="tonight-city-selector-section">
        <div className="city-selector-inner">
          <div className="city-scroller-container">
            <div className="city-scroller">
              <button data-city="miami" className="active tonight-city-card">
                Miami
              </button>
              <button data-city="nyc" className="tonight-city-card">
                New York
              </button>
              <button data-city="la" className="tonight-city-card">
                Los Angeles
              </button>
              <button data-city="vegas" className="tonight-city-card">
                Las Vegas
              </button>
              <button data-city="boston" className="tonight-city-card">
                Boston
              </button>
            </div>
          </div>
          <div className="category-filter-bar">
            <div className="category-chips">
              <button className="chip">Hip-Hop</button>
              <button className="chip">After 1AM</button>
              <button className="chip">Girls Night</button>
              <button className="chip">House</button>
              <button className="chip">Latin</button>
            </div>
            <div className="hot-toggle-wrapper">
              <span className="toggle-label">Hot Tonight</span>
              <label className="switch">
                <input type="checkbox" checked="true" />
                <span className="tonight-locked-partially-thq-slider-elm"></span>
              </label>
            </div>
          </div>
        </div>
      </section>
      <section className="showcase-section">
        <div className="showcase-header">
          <h2 className="section-title">
            Tonight&apos;s Premium Intelligence Preview
          </h2>
          <p className="section-content">
            Get a taste of Premium Intelligence. Members unlock full details,
            timing, and insider strategies.
          </p>
        </div>
        <div className="showcase-grid">
          <div className="tonight-club-card">
            <div className="club-image-container">
              <img
                alt="Club Interior"
                src="https://images.pexels.com/photos/7715623/pexels-photo-7715623.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="club-img"
              />
              <div className="club-badge">
                <span>Elite Choice</span>
              </div>
            </div>
            <div className="club-info">
              <div className="tonight-club-meta">
                <h3 className="club-name">E11EVEN</h3>
                <div className="club-rating">
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <span>4.9</span>
                </div>
              </div>
              <div className="tonight-club-details">
                <div className="detail-item">
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <span>Best Arrival: 11:30 PM</span>
                </div>
                <p className="club-desc">
                  The world&apos;s only 24/7 ultraclub. High-energy performances
                  and VIP treatment.
                </p>
              </div>
              <a href="#">
                <div className="btn-outline btn-sm club-btn btn">
                  <span>Browse</span>
                </div>
              </a>
            </div>
          </div>
          <div className="tonight-club-card">
            <div className="club-image-container">
              <img
                alt="Club Crowd"
                src="https://images.pexels.com/photos/7270006/pexels-photo-7270006.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="club-img"
              />
            </div>
            <div className="club-info">
              <div className="tonight-club-meta">
                <h3 className="club-name">LIV Miami</h3>
                <div className="club-rating">
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <span>4.8</span>
                </div>
              </div>
              <div className="tonight-club-details">
                <div className="detail-item">
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <span>Best Arrival: 12:00 AM</span>
                </div>
                <p className="club-desc">
                  The quintessential nightlife experience. A massive space with
                  world-class DJs.
                </p>
              </div>
              <a href="#">
                <div className="btn-outline btn-sm club-btn btn">
                  <span>Browse</span>
                </div>
              </a>
            </div>
          </div>
          <div className="tonight-club-card">
            <div className="club-image-container">
              <img
                alt="Club Dancefloor"
                src="https://images.pexels.com/photos/5191742/pexels-photo-5191742.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="club-img"
              />
            </div>
            <div className="club-info">
              <div className="tonight-club-meta">
                <h3 className="club-name">Marquee NYC</h3>
                <div className="club-rating">
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <span>4.7</span>
                </div>
              </div>
              <div className="tonight-club-details">
                <div className="detail-item">
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <span>Best Arrival: 11:00 PM</span>
                </div>
                <p className="club-desc">
                  A premier multi-level club in Chelsea featuring top-tier
                  electronic music.
                </p>
              </div>
              <a href="#">
                <div className="btn-outline btn-sm club-btn btn">
                  <span>Browse</span>
                </div>
              </a>
            </div>
          </div>
          <div className="tonight-club-card">
            <div className="club-image-container">
              <img
                alt="Club VIP"
                src="https://images.pexels.com/photos/9080099/pexels-photo-9080099.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="club-img"
              />
            </div>
            <div className="club-info">
              <div className="tonight-club-meta">
                <h3 className="club-name">Omnia Vegas</h3>
                <div className="club-rating">
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <span>4.9</span>
                </div>
              </div>
              <div className="tonight-club-details">
                <div className="detail-item">
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <span>Best Arrival: 12:30 AM</span>
                </div>
                <p className="club-desc">
                  Featuring a kinetic chandelier and a massive terrace
                  overlooking the Strip.
                </p>
              </div>
              <a href="#">
                <div className="btn-outline btn-sm club-btn btn">
                  <span>Browse</span>
                </div>
              </a>
            </div>
          </div>
          <div className="tonight-club-card">
            <div className="club-image-container">
              <img
                alt="Club DJ"
                src="https://images.pexels.com/photos/35412555/pexels-photo-35412555.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="club-img"
              />
            </div>
            <div className="club-info">
              <div className="tonight-club-meta">
                <h3 className="club-name">The Grand</h3>
                <div className="club-rating">
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <span>4.6</span>
                </div>
              </div>
              <div className="tonight-club-details">
                <div className="detail-item">
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <span>Best Arrival: 11:45 PM</span>
                </div>
                <p className="club-desc">
                  Boston&apos;s premier luxury nightlife destination. Opulent
                  decor and elite service.
                </p>
              </div>
              <a href="#">
                <div className="btn-outline btn-sm club-btn btn">
                  <span>Browse</span>
                </div>
              </a>
            </div>
          </div>
          <div className="tonight-club-card">
            <div className="club-image-container">
              <img
                alt="Club Lights"
                src="https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="club-img"
              />
            </div>
            <div className="club-info">
              <div className="tonight-club-meta">
                <h3 className="club-name">Sound LA</h3>
                <div className="club-rating">
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <span>4.8</span>
                </div>
              </div>
              <div className="tonight-club-details">
                <div className="detail-item">
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <span>Best Arrival: 12:15 AM</span>
                </div>
                <p className="club-desc">
                  Intimate Hollywood spot focused on deep house and tech house
                  with incredible sound.
                </p>
              </div>
              <a href="#">
                <div className="btn-outline btn-sm club-btn btn">
                  <span>Browse</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="category-gallery-section">
        <div className="gallery-container">
          <div className="gallery-header">
            <h2 className="section-title">Premium Intelligence by Category</h2>
            <p className="section-content">
              Browse free previews. Members access complete intelligence for
              each category.
            </p>
          </div>
          <div className="gallery-grid">
            <a href="#">
              <div className="tonight-category-card">
                <img
                  alt="Top 3"
                  src="https://images.pexels.com/photos/2240763/pexels-photo-2240763.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="cat-bg"
                />
                <div className="cat-overlay"></div>
                <div className="cat-content">
                  <span className="cat-label">Curated</span>
                  <h3 className="cat-title">Top Intelligence Tonight</h3>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="tonight-category-card">
                <img
                  alt="Late Night"
                  src="https://images.pexels.com/photos/219101/pexels-photo-219101.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="cat-bg"
                />
                <div className="cat-overlay"></div>
                <div className="cat-content">
                  <span className="cat-label">Late Night</span>
                  <h3 className="cat-title">Top Intelligence After 1AM</h3>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="tonight-category-card">
                <img
                  alt="Hip-Hop"
                  src="https://images.pexels.com/photos/3249760/pexels-photo-3249760.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="cat-bg"
                />
                <div className="cat-overlay"></div>
                <div className="cat-content">
                  <span className="cat-label">BPM</span>
                  <h3 className="cat-title">
                    Top Intelligence for Hip-Hop Tonight
                  </h3>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="tonight-category-card">
                <img
                  alt="Girls Night"
                  src="https://images.pexels.com/photos/1677573/pexels-photo-1677573.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="cat-bg"
                />
                <div className="cat-overlay"></div>
                <div className="cat-content">
                  <span className="cat-label">Exclusive</span>
                  <h3 className="cat-title">
                    Top Intelligence for Girls Night
                  </h3>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="tonight-category-card">
                <img
                  alt="House"
                  src="https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="cat-bg"
                />
                <div className="cat-overlay"></div>
                <div className="cat-content">
                  <span className="cat-label">Deep</span>
                  <h3 className="cat-title">
                    Top Intelligence for House Tonight
                  </h3>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="tonight-category-card">
                <img
                  alt="Latin"
                  src="https://images.pexels.com/photos/844928/pexels-photo-844928.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="cat-bg"
                />
                <div className="cat-overlay"></div>
                <div className="cat-content">
                  <span className="cat-label">Fuego</span>
                  <h3 className="cat-title">
                    Top Intelligence for Latin Tonight
                  </h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="vip-contact-section">
        <div className="vip-container">
          <div className="vip-card">
            <div className="vip-card-header">
              <h2 className="section-title">VIP Table Intelligence</h2>
              <p className="section-content">
                Access Premium Intelligence for VIP table strategies, pricing
                insights, and optimal booking timing.
              </p>
            </div>
            <form
              action="/submit-vip"
              method="POST"
              data-form-id="afb7fe1f-f94c-4053-99cb-bd5c00c9f488"
              className="vip-form"
            >
              <div className="tonight-form-row">
                <div className="tonight-form-group">
                  <label htmlFor="vipName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="vipName"
                    name="true"
                    required="true"
                    placeholder="Your name"
                    data-form-field-id="vipName"
                    className="tonight-form-input"
                  />
                </div>
                <div className="tonight-form-group">
                  <label htmlFor="vipEmail" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="vipEmail"
                    name="email"
                    required="true"
                    placeholder="your@email.com"
                    data-form-field-id="vipEmail"
                    className="tonight-form-input"
                  />
                </div>
              </div>
              <div className="tonight-form-row">
                <div className="tonight-form-group">
                  <label htmlFor="vipCity" className="form-label">
                    Preferred City
                  </label>
                  <select
                    id="vipCity"
                    name="city"
                    required="true"
                    data-form-field-id="vipCity"
                    className="tonight-form-input"
                  >
                    <option value="miami">Miami</option>
                    <option value="nyc">New York</option>
                    <option value="la">Los Angeles</option>
                    <option value="vegas">Las Vegas</option>
                    <option value="boston">Boston</option>
                  </select>
                </div>
                <div className="tonight-form-group">
                  <label htmlFor="vipDate" className="form-label">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="vipDate"
                    name="date"
                    required="true"
                    data-form-field-id="vipDate"
                    className="tonight-form-input"
                  />
                </div>
              </div>
              <div className="tonight-form-group">
                <label htmlFor="vipMessage" className="form-label">
                  Venue or Special Requests
                </label>
                <textarea
                  id="vipMessage"
                  name="message"
                  rows="3"
                  placeholder="Tell us which club or how many people..."
                  data-form-field-id="vipMessage"
                  className="tonight-form-input"
                ></textarea>
              </div>
              <button
                id="thq_button_6Yih"
                name="button"
                type="submit"
                data-form-field-id="thq_button_6Yih"
                className="btn-xl vip-submit-btn btn btn-primary"
              >
                Submit VIP Request
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="final-cta-section">
        <div className="cta-container">
          <div className="tonight-cta-card">
            <div className="tonight-cta-content">
              <h2 className="section-title">
                Ready for Tonight&apos;s Intelligence?
              </h2>
              <p className="section-content">
                Join thousands using Premium Intelligence for the ultimate
                nightlife experience. Just $9.99/month.
              </p>
              <div className="cta-form-wrapper">
                <div className="cta-dropdown-container">
                  <select aria-label="Select City" className="cta-city-select">
                    <option value="miami">Miami</option>
                    <option value="nyc">New York</option>
                    <option value="la">Los Angeles</option>
                    <option value="vegas">Las Vegas</option>
                    <option value="boston">Boston</option>
                  </select>
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
                    className="cta-dropdown-icon"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
                <button className="btn-xl btn-accent btn">
                  Unlock Intelligence — $9.99/month
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tonight-locked-partially-container2">
        <div className="tonight-locked-partially-container3">
          <Script
            html={`<style>
input:checked + .slider {
  background-color: var(--color-secondary);
}
input:checked + .slider:before {
  transform: translateX(24px);
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="tonight-locked-partially-container4">
        <div className="tonight-locked-partially-container5">
          <Script
            html={`<script defer data-name="tonight-interactions">
(function(){
  // Handle City Card Selection
  const cityCards = document.querySelectorAll(".city-card")
  cityCards.forEach((card) => {
    card.addEventListener("click", () => {
      cityCards.forEach((c) => c.classList.remove("active"))
      card.classList.add("active")
    })
  })

  // Handle Category Chip Selection
  const chips = document.querySelectorAll(".chip")
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chip.classList.toggle("active")
      if (chip.classList.contains("active")) {
        chip.style.backgroundColor = "var(--color-secondary)"
        chip.style.color = "var(--color-on-secondary)"
        chip.style.borderColor = "var(--color-secondary)"
      } else {
        chip.style.backgroundColor = "transparent"
        chip.style.color = "var(--color-on-surface-secondary)"
        chip.style.borderColor = "var(--color-border)"
      }
    })
  })

  // Parallax Effect for Hero
  window.addEventListener("scroll", () => {
    const scroll = window.pageYOffset
    const heroVideo = document.querySelector(".hero-video-bg")
    if (heroVideo) {
      heroVideo.style.transform = \`translateY(\${scroll * 0.4}px)\`
    }
  })

  // Form Submission Feedback
  const vipForm = document.querySelector(".vip-form")
  if (vipForm) {
    vipForm.addEventListener("submit", (e) => {
      // Native validation handles the rest
      const submitBtn = vipForm.querySelector(".vip-submit-btn")
      submitBtn.textContent = "Request Sent!"
      submitBtn.classList.add("btn-secondary")
      submitBtn.disabled = true
    })
  }

  // Smooth Reveal on Scroll (Intersection Observer)
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  const revealElements = document.querySelectorAll(".club-card, .category-card, .vip-card")
  revealElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
    observer.observe(el)
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

export default TonightLockedPartially
