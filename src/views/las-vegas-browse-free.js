import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './las-vegas-browse-free.css'

const LasVegasBrowseFree = (props) => {
  return (
    <div className="las-vegas-browse-free-container1">
      <Helmet>
        <title>las-vegas-browse-free - AMERICAPARTYHQ</title>
        <meta
          property="og:title"
          content="las-vegas-browse-free - AMERICAPARTYHQ"
        />
        <link rel="canonical" href="https://www.americapartyhq.co/lasvegas" />
      </Helmet>
      <Navigation></Navigation>
      <section className="vegas-hero-section">
        <div className="vegas-hero-media">
          <img
            alt="Las Vegas nightclub experience"
            src="https://images.pexels.com/photos/7271154/pexels-photo-7271154.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="vegas-hero-image"
          />
          <div className="vegas-hero-overlay"></div>
        </div>
        <div className="vegas-hero-content">
          <h1 className="hero-title">Las Vegas Nightlife</h1>
          <p className="hero-subtitle">
            The Strip&apos;s best clubs, tables &amp; VIP experiences
          </p>
          <div className="vegas-hero-actions">
            <button className="btn-accent btn btn-lg">Book VIP Table</button>
            <button className="btn-outline btn btn-lg">Explore Tonight</button>
          </div>
        </div>
      </section>
      <section className="vegas-filters-section">
        <div className="vegas-filters-container">
          <h2 className="section-title vegas-filters-title">
            Las Vegas Clubs Tonight
          </h2>
          <div className="vegas-filters-group">
            <button className="vegas-filter-active vegas-filter-btn">
              Peak Hours
            </button>
            <button className="vegas-filter-btn">After 1AM</button>
            <button className="vegas-filter-btn">House</button>
            <button className="vegas-filter-btn">Hip-Hop</button>
            <button className="vegas-filter-btn">Latin</button>
          </div>
        </div>
      </section>
      <section className="vegas-venues-section">
        <div className="vegas-venues-container">
          <div className="vegas-venues-grid">
            <article className="vegas-venue-card">
              <div className="vegas-venue-image-wrapper">
                <img
                  alt="Omnia nightclub"
                  src="https://images.pexels.com/photos/7271390/pexels-photo-7271390.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="vegas-venue-image"
                />
              </div>
              <div className="vegas-venue-content">
                <h3 className="vegas-venue-name">Omnia</h3>
                <div className="vegas-venue-meta">
                  <div className="vegas-venue-time">
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
                  <div className="vegas-venue-rating">
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
                <p className="vegas-venue-description">
                  Caesars Palace&apos;s premier nightclub with multi-level
                  design and world-class DJs
                </p>
                <button className="btn btn-primary vegas-venue-btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="vegas-venue-card">
              <div className="vegas-venue-image-wrapper">
                <img
                  alt="Marquee nightclub"
                  src="https://images.pexels.com/photos/7270005/pexels-photo-7270005.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="vegas-venue-image"
                />
              </div>
              <div className="vegas-venue-content">
                <h3 className="vegas-venue-name">Marquee</h3>
                <div className="vegas-venue-meta">
                  <div className="vegas-venue-time">
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
                    <span>11:00 PM</span>
                  </div>
                  <div className="vegas-venue-rating">
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
                <p className="vegas-venue-description">
                  The Cosmopolitan&apos;s iconic venue with rooftop dayclub and
                  stunning production
                </p>
                <button className="btn btn-primary vegas-venue-btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="vegas-venue-card">
              <div className="vegas-venue-image-wrapper">
                <img
                  alt="Hakkasan nightclub"
                  src="https://images.pexels.com/photos/7269228/pexels-photo-7269228.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="vegas-venue-image"
                />
              </div>
              <div className="vegas-venue-content">
                <h3 className="vegas-venue-name">Hakkasan</h3>
                <div className="vegas-venue-meta">
                  <div className="vegas-venue-time">
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
                    <span>11:45 PM</span>
                  </div>
                  <div className="vegas-venue-rating">
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
                <p className="vegas-venue-description">
                  MGM Grand&apos;s five-level nightclub with electronic music
                  and luxury ambiance
                </p>
                <button className="btn btn-primary vegas-venue-btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="vegas-venue-card">
              <div className="vegas-venue-image-wrapper">
                <img
                  alt="XS nightclub"
                  src="https://images.pexels.com/photos/7271399/pexels-photo-7271399.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="vegas-venue-image"
                />
              </div>
              <div className="vegas-venue-content">
                <h3 className="vegas-venue-name">XS</h3>
                <div className="vegas-venue-meta">
                  <div className="vegas-venue-time">
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
                    <span>10:30 PM</span>
                  </div>
                  <div className="vegas-venue-rating">
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
                <p className="vegas-venue-description">
                  Encore&apos;s opulent nightclub featuring outdoor pool area
                  and top-tier talent
                </p>
                <button className="btn btn-primary vegas-venue-btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="vegas-venue-card">
              <div className="vegas-venue-image-wrapper">
                <img
                  alt="Wynn Nightclub"
                  src="https://images.pexels.com/photos/2962403/pexels-photo-2962403.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="vegas-venue-image"
                />
              </div>
              <div className="vegas-venue-content">
                <h3 className="vegas-venue-name">Wynn Nightclub</h3>
                <div className="vegas-venue-meta">
                  <div className="vegas-venue-time">
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
                    <span>11:15 PM</span>
                  </div>
                  <div className="vegas-venue-rating">
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
                <p className="vegas-venue-description">
                  Luxury meets cutting-edge technology in this sophisticated
                  nightlife destination
                </p>
                <button className="btn btn-primary vegas-venue-btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="vegas-venue-card">
              <div className="vegas-venue-image-wrapper">
                <img
                  alt="Wasted Space"
                  src="https://images.pexels.com/photos/7271145/pexels-photo-7271145.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="vegas-venue-image"
                />
              </div>
              <div className="vegas-venue-content">
                <h3 className="vegas-venue-name">Wasted Space</h3>
                <div className="vegas-venue-meta">
                  <div className="vegas-venue-time">
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
                    <span>10:00 PM</span>
                  </div>
                  <div className="vegas-venue-rating">
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
                <p className="vegas-venue-description">
                  Hard Rock&apos;s live music venue with rock n&apos; roll
                  spirit and intimate setting
                </p>
                <button className="btn btn-primary vegas-venue-btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="vegas-venue-card">
              <div className="vegas-venue-image-wrapper">
                <img
                  alt="Foundation nightclub"
                  src="https://images.pexels.com/photos/7270927/pexels-photo-7270927.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="vegas-venue-image"
                />
              </div>
              <div className="vegas-venue-content">
                <h3 className="vegas-venue-name">Foundation</h3>
                <div className="vegas-venue-meta">
                  <div className="vegas-venue-time">
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
                  <div className="vegas-venue-rating">
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
                <p className="vegas-venue-description">
                  Underground house music haven for true electronic music
                  enthusiasts
                </p>
                <button className="btn btn-primary vegas-venue-btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="vegas-venue-card">
              <div className="vegas-venue-image-wrapper">
                <img
                  alt="Intrigue nightclub"
                  src="https://images.pexels.com/photos/14275473/pexels-photo-14275473.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="vegas-venue-image"
                />
              </div>
              <div className="vegas-venue-content">
                <h3 className="vegas-venue-name">Intrigue</h3>
                <div className="vegas-venue-meta">
                  <div className="vegas-venue-time">
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
                    <span>11:00 PM</span>
                  </div>
                  <div className="vegas-venue-rating">
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
                <p className="vegas-venue-description">
                  Wynn&apos;s intimate club with elegant design and exclusive
                  atmosphere
                </p>
                <button className="btn btn-primary vegas-venue-btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="vegas-venue-card">
              <div className="vegas-venue-image-wrapper">
                <img
                  alt="Drai's nightclub"
                  src="https://images.pexels.com/photos/5175491/pexels-photo-5175491.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="vegas-venue-image"
                />
              </div>
              <div className="vegas-venue-content">
                <h3 className="vegas-venue-name">Drai&apos;s</h3>
                <div className="vegas-venue-meta">
                  <div className="vegas-venue-time">
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
                    <span>10:30 PM</span>
                  </div>
                  <div className="vegas-venue-rating">
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
                <p className="vegas-venue-description">
                  Rooftop hip-hop nightclub with panoramic Vegas views at The
                  Cromwell
                </p>
                <button className="btn btn-primary vegas-venue-btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="vegas-venue-card">
              <div className="vegas-venue-image-wrapper">
                <img
                  alt="Cosmo nightclub"
                  src="https://images.pexels.com/photos/12297243/pexels-photo-12297243.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="vegas-venue-image"
                />
              </div>
              <div className="vegas-venue-content">
                <h3 className="vegas-venue-name">Cosmo</h3>
                <div className="vegas-venue-meta">
                  <div className="vegas-venue-time">
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
                  <div className="vegas-venue-rating">
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
                <p className="vegas-venue-description">
                  Multi-concept venue with eclectic music and artistic
                  atmosphere
                </p>
                <button className="btn btn-primary vegas-venue-btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="vegas-venue-card">
              <div className="vegas-venue-image-wrapper">
                <img
                  alt="Surrender nightclub"
                  src="https://images.pexels.com/photos/16322928/pexels-photo-16322928.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="vegas-venue-image"
                />
              </div>
              <div className="vegas-venue-content">
                <h3 className="vegas-venue-name">Surrender</h3>
                <div className="vegas-venue-meta">
                  <div className="vegas-venue-time">
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
                  <div className="vegas-venue-rating">
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
                <p className="vegas-venue-description">
                  Encore&apos;s indoor-outdoor nightclub with stunning
                  production and design
                </p>
                <button className="btn btn-primary vegas-venue-btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="vegas-venue-card">
              <div className="vegas-venue-image-wrapper">
                <img
                  alt="Sapphire nightclub"
                  src="https://images.pexels.com/photos/33588956/pexels-photo-33588956.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="vegas-venue-image"
                />
              </div>
              <div className="vegas-venue-content">
                <h3 className="vegas-venue-name">Sapphire</h3>
                <div className="vegas-venue-meta">
                  <div className="vegas-venue-time">
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
                    <span>10:00 PM</span>
                  </div>
                  <div className="vegas-venue-rating">
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
                <p className="vegas-venue-description">
                  Massive entertainment complex with multiple rooms and diverse
                  experiences
                </p>
                <button className="btn btn-primary vegas-venue-btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="vegas-venue-card">
              <div className="vegas-venue-image-wrapper">
                <img
                  alt="Mizumi nightclub"
                  src="https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="vegas-venue-image"
                />
              </div>
              <div className="vegas-venue-content">
                <h3 className="vegas-venue-name">Mizumi</h3>
                <div className="vegas-venue-meta">
                  <div className="vegas-venue-time">
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
                    <span>11:15 PM</span>
                  </div>
                  <div className="vegas-venue-rating">
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
                <p className="vegas-venue-description">
                  Japanese-inspired venue with sophisticated design and premium
                  bottle service
                </p>
                <button className="btn btn-primary vegas-venue-btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="vegas-venue-card">
              <div className="vegas-venue-image-wrapper">
                <img
                  alt="Studio 54"
                  src="https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="vegas-venue-image"
                />
              </div>
              <div className="vegas-venue-content">
                <h3 className="vegas-venue-name">Studio 54</h3>
                <div className="vegas-venue-meta">
                  <div className="vegas-venue-time">
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
                    <span>10:30 PM</span>
                  </div>
                  <div className="vegas-venue-rating">
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
                <p className="vegas-venue-description">
                  MGM Grand&apos;s legendary reboot with disco glamour and
                  modern production
                </p>
                <button className="btn btn-primary vegas-venue-btn">
                  View Details
                </button>
              </div>
            </article>
            <article className="vegas-venue-card">
              <div className="vegas-venue-image-wrapper">
                <img
                  alt="The Cosmopolitan"
                  src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="vegas-venue-image"
                />
              </div>
              <div className="vegas-venue-content">
                <h3 className="vegas-venue-name">The Cosmopolitan</h3>
                <div className="vegas-venue-meta">
                  <div className="vegas-venue-time">
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
                    <span>11:00 PM</span>
                  </div>
                  <div className="vegas-venue-rating">
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
                <p className="vegas-venue-description">
                  Upscale nightlife complex with multiple bars and lounges
                  throughout the property
                </p>
                <button className="btn btn-primary vegas-venue-btn">
                  View Details
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="vegas-intelligence-section">
        <div className="vegas-intelligence-container">
          <div className="vegas-intelligence-content">
            <div className="vegas-intelligence-lock-badge">
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
              <span>Premium Members Only</span>
            </div>
            <h2 className="section-title vegas-intelligence-title">
              Unlock Premium Intelligence
            </h2>
            <p className="vegas-intelligence-subtitle">
              Get insider access to arrival times, crowd analytics, table
              pricing and VIP contacts
            </p>
            <div className="vegas-intelligence-preview">
              <div className="vegas-intelligence-blur">
                <div className="vegas-intelligence-item">
                  <div className="vegas-intelligence-item-icon">
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
                  </div>
                  <div className="vegas-intelligence-item-content">
                    <h4>Optimal Arrival Times</h4>
                    <p>Know exactly when to show up for the best experience</p>
                  </div>
                </div>
                <div className="vegas-intelligence-item">
                  <div className="vegas-intelligence-item-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M2 16l4.039-9.69a.5.5 0 0 1 .923 0L11 16m-7.696-3h6.392"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="vegas-intelligence-item-content">
                    <h4>Crowd Flow Analytics</h4>
                    <p>Real-time data on venue capacity and energy levels</p>
                  </div>
                </div>
                <div className="vegas-intelligence-item">
                  <div className="vegas-intelligence-item-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2v20M2 12h20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="vegas-intelligence-item-content">
                    <h4>VIP Table Pricing</h4>
                    <p>Transparent pricing and direct booking access</p>
                  </div>
                </div>
                <div className="vegas-intelligence-item">
                  <div className="vegas-intelligence-item-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <circle r="4" cx="9" cy="7"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87m-1-7.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="vegas-intelligence-item-content">
                    <h4>Direct VIP Contacts</h4>
                    <p>Connect with hosts and promoters instantly</p>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to="/sub"
              className="las-vegas-browse-free-thq-btn-elm27 vegas-intelligence-cta btn-accent btn btn-lg"
            >
              Get VIP Access
            </Link>
          </div>
        </div>
      </section>
      <section className="vegas-map-section">
        <div className="vegas-map-container">
          <h2 className="section-title vegas-map-title">Las Vegas Venue Map</h2>
          <p className="vegas-map-subtitle">
            Explore all venues across The Strip and Downtown
          </p>
          <div className="vegas-map-wrapper">
            <div className="vegas-map-placeholder">
              <svg
                width="64"
                xmlns="http://www.w3.org/2000/svg"
                height="64"
                viewBox="0 0 24 24"
                className="vegas-map-icon"
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
              <p>Interactive map with all Las Vegas nightlife venues</p>
            </div>
          </div>
          <button className="vegas-map-btn btn btn-primary btn-lg">
            View on Map
          </button>
        </div>
      </section>
      <section className="vegas-final-cta-section">
        <div className="vegas-final-cta-container">
          <div className="vegas-final-cta-content">
            <h2 className="section-title vegas-final-cta-title">
              Ready to Experience Las Vegas?
            </h2>
            <p className="vegas-final-cta-subtitle">
              Book your VIP table and skip the line at the best clubs on The
              Strip
            </p>
            <div className="vegas-final-cta-form">
              <select className="vegas-final-cta-select">
                <option value="true">Select City</option>
                <option value="las-vegas" selected="true">
                  Las Vegas
                </option>
                <option value="miami">Miami</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="boston">Boston</option>
              </select>
              <Link
                to="/vip"
                className="las-vegas-browse-free-thq-btn-elm29 vegas-final-cta-btn btn-accent btn btn-lg"
              >
                Book Your VIP Experience
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="las-vegas-browse-free-container2">
        <div className="las-vegas-browse-free-container3">
          <Script
            html={`<script defer data-name="vegas-city-page">
(function(){
  const filterButtons = document.querySelectorAll(".vegas-filter-btn")

  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        filterButtons.forEach((btn) => btn.classList.remove("vegas-filter-active"))
        this.classList.add("vegas-filter-active")
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

export default LasVegasBrowseFree
