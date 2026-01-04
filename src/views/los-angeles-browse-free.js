import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './los-angeles-browse-free.css'

const LosAngelesBrowseFree = (props) => {
  return (
    <div className="los-angeles-browse-free-container1">
      <Helmet>
        <title>los-angeles-browse-free - AMERICAPARTYHQ</title>
        <meta
          property="og:title"
          content="los-angeles-browse-free - AMERICAPARTYHQ"
        />
        <link rel="canonical" href="https://www.americapartyhq.co/losangeles" />
      </Helmet>
      <Navigation></Navigation>
      <section className="la-city-hero-section">
        <div className="la-hero-media-container">
          <img
            alt="Los Angeles Nightlife Scene"
            src="https://images.pexels.com/photos/7270006/pexels-photo-7270006.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="la-hero-image"
          />
          <div className="la-hero-overlay"></div>
        </div>
        <div className="la-hero-content">
          <h1 className="hero-title">Los Angeles Nightlife</h1>
          <p className="hero-subtitle">
            Discover LA&apos;s premier venues where Hollywood glamour meets
            world-class nightlife. From downtown hotspots to Hollywood clubs,
            find your perfect night out.
          </p>
          <div className="la-hero-actions">
            <a href="#venues">
              <div className="btn btn-primary btn-lg">
                <span>Browse Venues</span>
              </div>
            </a>
            <a href="#guide">
              <div className="btn-outline btn btn-lg">
                <span>View Guide</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="la-filter-section">
        <div className="la-filter-container">
          <h2 className="section-title">Featured LA Venues</h2>
          <div className="la-filter-buttons">
            <button data-filter="all" className="active la-filter-btn">
              All Venues
            </button>
            <button data-filter="tonight" className="la-filter-btn">
              Tonight&apos;s Peak
            </button>
            <button data-filter="after1am" className="la-filter-btn">
              After 1AM
            </button>
            <button data-filter="hiphop" className="la-filter-btn">
              Hip-Hop
            </button>
            <button data-filter="house" className="la-filter-btn">
              House
            </button>
            <button data-filter="latin" className="la-filter-btn">
              Latin
            </button>
            <button data-filter="girls" className="la-filter-btn">
              Girls Night
            </button>
          </div>
        </div>
      </section>
      <section id="venues" className="la-venues-section">
        <div className="la-venues-grid">
          <article className="la-venue-card">
            <div className="la-venue-image-wrapper">
              <img
                alt="Nightlife LA"
                src="https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="la-venue-image"
              />
            </div>
            <div className="la-venue-content">
              <h3 className="la-venue-name">Nightlife LA</h3>
              <div className="la-venue-rating">
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
                <span className="la-venue-rating-value">4.8/5</span>
              </div>
              <div className="la-venue-time">
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
                <span>Peak: 11PM - 2AM</span>
              </div>
              <div className="la-venue-tags">
                <span className="la-venue-tag">Hip-Hop</span>
                <span className="la-venue-tag">House</span>
              </div>
              <p className="la-venue-description">
                Premier downtown venue with state-of-the-art sound system and
                A-list DJs every weekend.
              </p>
              <a href="#details">
                <div className="btn btn-primary">
                  <span>View Details</span>
                </div>
              </a>
            </div>
          </article>
          <article className="la-venue-card">
            <div className="la-venue-image-wrapper">
              <img
                alt="Boom Room"
                src="https://images.pexels.com/photos/8448535/pexels-photo-8448535.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="la-venue-image"
              />
            </div>
            <div className="la-venue-content">
              <h3 className="la-venue-name">Boom Room</h3>
              <div className="la-venue-rating">
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
                <span className="la-venue-rating-value">4.7/5</span>
              </div>
              <div className="la-venue-time">
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
                <span>Peak: 12AM - 3AM</span>
              </div>
              <div className="la-venue-tags">
                <span className="la-venue-tag">EDM</span>
                <span className="la-venue-tag">After 1AM</span>
              </div>
              <p className="la-venue-description">
                Underground energy meets Hollywood style in this exclusive
                after-hours hotspot.
              </p>
              <a href="#details">
                <div className="btn btn-primary">
                  <span>View Details</span>
                </div>
              </a>
            </div>
          </article>
          <article className="la-venue-card">
            <div className="la-venue-image-wrapper">
              <img
                alt="Create Nightclub"
                src="https://images.pexels.com/photos/3122799/pexels-photo-3122799.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="la-venue-image"
              />
            </div>
            <div className="la-venue-content">
              <h3 className="la-venue-name">Create Nightclub</h3>
              <div className="la-venue-rating">
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
                <span className="la-venue-rating-value">4.9/5</span>
              </div>
              <div className="la-venue-time">
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
                <span>Peak: 10PM - 1AM</span>
              </div>
              <div className="la-venue-tags">
                <span className="la-venue-tag">Hip-Hop</span>
                <span className="la-venue-tag">Top 40</span>
              </div>
              <p className="la-venue-description">
                Hollywood&apos;s most iconic venue featuring celebrity
                appearances and world-renowned DJs.
              </p>
              <a href="#details">
                <div className="btn btn-primary">
                  <span>View Details</span>
                </div>
              </a>
            </div>
          </article>
          <article className="la-venue-card">
            <div className="la-venue-image-wrapper">
              <img
                alt="Skybar"
                src="https://images.pexels.com/photos/792833/pexels-photo-792833.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="la-venue-image"
              />
            </div>
            <div className="la-venue-content">
              <h3 className="la-venue-name">Skybar</h3>
              <div className="la-venue-rating">
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
                <span className="la-venue-rating-value">4.6/5</span>
              </div>
              <div className="la-venue-time">
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
                <span>Peak: 9PM - 12AM</span>
              </div>
              <div className="la-venue-tags">
                <span className="la-venue-tag">Rooftop</span>
                <span className="la-venue-tag">House</span>
              </div>
              <p className="la-venue-description">
                Stunning rooftop views with sophisticated ambiance and premium
                cocktail service.
              </p>
              <a href="#details">
                <div className="btn btn-primary">
                  <span>View Details</span>
                </div>
              </a>
            </div>
          </article>
          <article className="la-venue-card">
            <div className="la-venue-image-wrapper">
              <img
                alt="Exchange LA"
                src="https://images.pexels.com/photos/7715500/pexels-photo-7715500.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="la-venue-image"
              />
            </div>
            <div className="la-venue-content">
              <h3 className="la-venue-name">Exchange LA</h3>
              <div className="la-venue-rating">
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
                <span className="la-venue-rating-value">4.8/5</span>
              </div>
              <div className="la-venue-time">
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
                <span>Peak: 11PM - 2:30AM</span>
              </div>
              <div className="la-venue-tags">
                <span className="la-venue-tag">EDM</span>
                <span className="la-venue-tag">Techno</span>
              </div>
              <p className="la-venue-description">
                Historic downtown venue transformed into LA&apos;s premier
                electronic music destination.
              </p>
              <a href="#details">
                <div className="btn btn-primary">
                  <span>View Details</span>
                </div>
              </a>
            </div>
          </article>
          <article className="la-venue-card">
            <div className="la-venue-image-wrapper">
              <img
                alt="Sound Nightclub"
                src="https://images.pexels.com/photos/3101521/pexels-photo-3101521.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="la-venue-image"
              />
            </div>
            <div className="la-venue-content">
              <h3 className="la-venue-name">Sound Nightclub</h3>
              <div className="la-venue-rating">
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
                <span className="la-venue-rating-value">4.7/5</span>
              </div>
              <div className="la-venue-time">
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
                <span>Peak: 10:30PM - 1:30AM</span>
              </div>
              <div className="la-venue-tags">
                <span className="la-venue-tag">House</span>
                <span className="la-venue-tag">Girls Night</span>
              </div>
              <p className="la-venue-description">
                Intimate venue with cutting-edge production and the best sound
                system in Hollywood.
              </p>
              <a href="#details">
                <div className="btn btn-primary">
                  <span>View Details</span>
                </div>
              </a>
            </div>
          </article>
          <article className="la-venue-card">
            <div className="la-venue-image-wrapper">
              <img
                alt="1 OAK"
                src="https://images.pexels.com/photos/2091383/pexels-photo-2091383.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="la-venue-image"
              />
            </div>
            <div className="la-venue-content">
              <h3 className="la-venue-name">1 OAK</h3>
              <div className="la-venue-rating">
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
                <span className="la-venue-rating-value">4.9/5</span>
              </div>
              <div className="la-venue-time">
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
                <span>Peak: 11:30PM - 2AM</span>
              </div>
              <div className="la-venue-tags">
                <span className="la-venue-tag">Hip-Hop</span>
                <span className="la-venue-tag">VIP</span>
              </div>
              <p className="la-venue-description">
                West Hollywood&apos;s most exclusive club known for celebrity
                sightings and bottle service.
              </p>
              <a href="#details">
                <div className="btn btn-primary">
                  <span>View Details</span>
                </div>
              </a>
            </div>
          </article>
          <article className="la-venue-card">
            <div className="la-venue-image-wrapper">
              <img
                alt="Academy LA"
                src="https://images.pexels.com/photos/3073896/pexels-photo-3073896.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="la-venue-image"
              />
            </div>
            <div className="la-venue-content">
              <h3 className="la-venue-name">Academy LA</h3>
              <div className="la-venue-rating">
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
                <span className="la-venue-rating-value">4.8/5</span>
              </div>
              <div className="la-venue-time">
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
                <span>Peak: 10PM - 1:30AM</span>
              </div>
              <div className="la-venue-tags">
                <span className="la-venue-tag">EDM</span>
                <span className="la-venue-tag">House</span>
              </div>
              <p className="la-venue-description">
                Multi-level entertainment complex with diverse music genres and
                immersive production.
              </p>
              <a href="#details">
                <div className="btn btn-primary">
                  <span>View Details</span>
                </div>
              </a>
            </div>
          </article>
          <article className="la-venue-card">
            <div className="la-venue-image-wrapper">
              <img
                alt="Avalon Hollywood"
                src="https://images.pexels.com/photos/2962403/pexels-photo-2962403.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="la-venue-image"
              />
            </div>
            <div className="la-venue-content">
              <h3 className="la-venue-name">Avalon Hollywood</h3>
              <div className="la-venue-rating">
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
                <span className="la-venue-rating-value">4.7/5</span>
              </div>
              <div className="la-venue-time">
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
                <span>Peak: 11PM - 2:30AM</span>
              </div>
              <div className="la-venue-tags">
                <span className="la-venue-tag">Techno</span>
                <span className="la-venue-tag">After 1AM</span>
              </div>
              <p className="la-venue-description">
                Legendary Hollywood venue featuring international DJs and epic
                late-night sessions.
              </p>
              <a href="#details">
                <div className="btn btn-primary">
                  <span>View Details</span>
                </div>
              </a>
            </div>
          </article>
          <article className="la-venue-card">
            <div className="la-venue-image-wrapper">
              <img
                alt="Warwick"
                src="https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="la-venue-image"
              />
            </div>
            <div className="la-venue-content">
              <h3 className="la-venue-name">Warwick</h3>
              <div className="la-venue-rating">
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
                <span className="la-venue-rating-value">4.6/5</span>
              </div>
              <div className="la-venue-time">
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
                <span>Peak: 10PM - 1AM</span>
              </div>
              <div className="la-venue-tags">
                <span className="la-venue-tag">Latin</span>
                <span className="la-venue-tag">Girls Night</span>
              </div>
              <p className="la-venue-description">
                Upscale club showcasing the best in Latin music with a
                sophisticated crowd.
              </p>
              <a href="#details">
                <div className="btn btn-primary">
                  <span>View Details</span>
                </div>
              </a>
            </div>
          </article>
          <article className="la-venue-card">
            <div className="la-venue-image-wrapper">
              <img
                alt="The Reserve"
                src="https://images.pexels.com/photos/4818319/pexels-photo-4818319.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="la-venue-image"
              />
            </div>
            <div className="la-venue-content">
              <h3 className="la-venue-name">The Reserve</h3>
              <div className="la-venue-rating">
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
                <span className="la-venue-rating-value">4.9/5</span>
              </div>
              <div className="la-venue-time">
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
                <span>Peak: 9:30PM - 12:30AM</span>
              </div>
              <div className="la-venue-tags">
                <span className="la-venue-tag">Lounge</span>
                <span className="la-venue-tag">VIP</span>
              </div>
              <p className="la-venue-description">
                Members-only lounge offering unparalleled luxury and intimate
                entertainment.
              </p>
              <a href="#details">
                <div className="btn btn-primary">
                  <span>View Details</span>
                </div>
              </a>
            </div>
          </article>
          <article className="la-venue-card">
            <div className="la-venue-image-wrapper">
              <img
                alt="Groove"
                src="https://images.pexels.com/photos/736355/pexels-photo-736355.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="la-venue-image"
              />
            </div>
            <div className="la-venue-content">
              <h3 className="la-venue-name">Groove</h3>
              <div className="la-venue-rating">
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
                <span className="la-venue-rating-value">4.7/5</span>
              </div>
              <div className="la-venue-time">
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
                <span>Peak: 11PM - 2AM</span>
              </div>
              <div className="la-venue-tags">
                <span className="la-venue-tag">House</span>
                <span className="la-venue-tag">Tonight&apos;s Peak</span>
              </div>
              <p className="la-venue-description">
                Underground house music sanctuary with a dedicated dance floor
                community.
              </p>
              <a href="#details">
                <div className="btn btn-primary">
                  <span>View Details</span>
                </div>
              </a>
            </div>
          </article>
        </div>
      </section>
      <section className="la-peak-times-section">
        <div className="la-peak-times-container">
          <div className="la-peak-times-header">
            <h2 className="section-title">When to Arrive</h2>
            <p className="section-subtitle">
              Maximize your night with data-driven timing intelligence
            </p>
          </div>
          <div className="la-peak-times-card">
            <div className="la-peak-times-days">
              <div className="la-peak-day">
                <div className="la-peak-day-header">
                  <h3 className="la-peak-day-name">Thursday</h3>
                </div>
                <div className="la-peak-timeline">
                  <div className="los-angeles-browse-free-thq-la-peak-bar-elm1 la-peak-bar"></div>
                  <span className="la-peak-time-label">10PM - 1AM</span>
                </div>
              </div>
              <div className="la-peak-day">
                <div className="la-peak-day-header">
                  <h3 className="la-peak-day-name">Friday</h3>
                </div>
                <div className="la-peak-timeline">
                  <div className="los-angeles-browse-free-thq-la-peak-bar-elm2 la-peak-bar"></div>
                  <span className="la-peak-time-label">11PM - 2AM</span>
                </div>
              </div>
              <div className="la-peak-day">
                <div className="la-peak-day-header">
                  <h3 className="la-peak-day-name">Saturday</h3>
                </div>
                <div className="la-peak-timeline">
                  <div className="los-angeles-browse-free-thq-la-peak-bar-elm3 la-peak-bar"></div>
                  <span className="la-peak-time-label">11:30PM - 2:30AM</span>
                </div>
              </div>
            </div>
            <div className="la-peak-unlock-overlay">
              <div className="la-peak-unlock-content">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
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
                <h3 className="la-peak-unlock-title">
                  Unlock VIP Intelligence
                </h3>
                <p className="la-peak-unlock-text">
                  Get real-time crowd data, wait times, and optimal arrival
                  windows for every venue
                </p>
                <a href="#vip">
                  <div className="btn-accent btn btn-lg">
                    <span>Access Premium Data</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="la-categories-section">
        <div className="la-categories-container">
          <h2 className="section-title">Explore by Category</h2>
          <div className="la-categories-grid">
            <div className="la-category-card">
              <div className="la-category-icon">
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
              <h3 className="la-category-title">Best for Hip-Hop</h3>
              <p className="la-category-count">12 venues</p>
            </div>
            <div className="la-category-card">
              <div className="la-category-icon">
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
              <h3 className="la-category-title">Best After 1AM</h3>
              <p className="la-category-count">9 venues</p>
            </div>
            <div className="la-category-card">
              <div className="la-category-icon">
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
              <h3 className="la-category-title">Best for House</h3>
              <p className="la-category-count">14 venues</p>
            </div>
            <div className="la-category-card">
              <div className="la-category-icon">
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
              <h3 className="la-category-title">Best for Latin</h3>
              <p className="la-category-count">8 venues</p>
            </div>
            <div className="la-category-card">
              <div className="la-category-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
              <h3 className="la-category-title">Best for Girls Night</h3>
              <p className="la-category-count">11 venues</p>
            </div>
            <div className="la-category-card">
              <div className="la-category-icon">
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
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle r="3" cx="12" cy="10"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="la-category-title">Best Rooftop</h3>
              <p className="la-category-count">7 venues</p>
            </div>
          </div>
        </div>
      </section>
      <section id="guide" className="la-map-section">
        <div className="la-map-container">
          <div className="la-map-content">
            <h2 className="section-title">LA Venue Map</h2>
            <p className="section-subtitle">
              Explore all venues by neighborhood and plan your night
              geographically
            </p>
            <div className="la-map-placeholder">
              <svg
                width="64"
                xmlns="http://www.w3.org/2000/svg"
                height="64"
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
              <p className="la-map-placeholder-text">
                Interactive map view coming soon
              </p>
            </div>
            <a href="#map">
              <div className="btn btn-primary btn-lg">
                <span>View Full Map</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section id="vip" className="la-vip-cta-section">
        <div className="la-vip-cta-container">
          <div className="la-vip-cta-content">
            <div className="la-vip-cta-icon">
              <svg
                width="56"
                xmlns="http://www.w3.org/2000/svg"
                height="56"
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
            <h2 className="section-title">
              Get VIP Access to LA&apos;s Best Tables
            </h2>
            <p className="section-subtitle">
              Skip the line and experience premium bottle service at
              Hollywood&apos;s most exclusive venues. Our concierge team handles
              everything.
            </p>
            <ul className="la-vip-benefits">
              <li className="la-vip-benefit">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m9 11l3 3L22 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Guaranteed table reservations</span>
              </li>
              <li className="la-vip-benefit">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m9 11l3 3L22 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Priority venue access</span>
              </li>
              <li className="la-vip-benefit">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m9 11l3 3L22 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Personal concierge service</span>
              </li>
              <li className="la-vip-benefit">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m9 11l3 3L22 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Exclusive event invitations</span>
              </li>
            </ul>
            <a href="#inquiry">
              <div className="btn-xl btn-accent btn">
                <span>Submit VIP Inquiry</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <div className="los-angeles-browse-free-container2">
        <div className="los-angeles-browse-free-container3">
          <Script
            html={`<script defer data-name="la-filter-functionality">
(function(){
  const filterButtons = document.querySelectorAll(".la-filter-btn")

  if (filterButtons && filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        this.classList.add("active")
      })
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default LosAngelesBrowseFree
