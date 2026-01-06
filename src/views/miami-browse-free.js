import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './miami-browse-free.css'

const MiamiBrowseFree = (props) => {
  return (
    <div className="miami-browse-free-container1">
      <Helmet>
        <title>Miami-browse-free - AMERICAPARTYHQ</title>
        <meta
          property="og:title"
          content="Miami-browse-free - AMERICAPARTYHQ"
        />
        <link rel="canonical" href="https://www.americapartyhq.co/miami" />
      </Helmet>
      <div className="miami-city-page-wrapper">
        <Navigation></Navigation>
        <section className="miami-hero-section">
          <div className="miami-hero-background">
            <img
              alt="Miami nightclub scene with laser lights and crowd"
              src="https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="miami-hero-img"
            />
            <div className="miami-hero-overlay"></div>
          </div>
          <div className="miami-hero-content">
            <h1 className="hero-title">Nightlife Intelligence - Miami</h1>
            <p className="hero-subtitle">Premium venue timing and ratings</p>
            <div className="miami-hero-actions">
              <Link
                to="/explore"
                className="miami-browse-free-thq-btn-elm10 btn-accent btn btn-lg"
              >
                View All Venues
              </Link>
              <Link
                to="/tonight"
                className="miami-browse-free-thq-btn-elm11 btn-outline btn btn-lg"
              >
                Browse Tonight&apos;s Top Picks
              </Link>
            </div>
          </div>
        </section>
        <section className="miami-filter-section">
          <div className="miami-filter-container">
            <div className="miami-filter-controls">
              <button className="active miami-filter-btn">
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
                <span>Tonight&apos;s Peak</span>
              </button>
              <button className="miami-filter-btn">
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
                    <path d="M12 6v10"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
                <span>After 1AM</span>
              </button>
              <button className="miami-filter-btn">
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
                    <path d="M9 18V5l12-2v13"></path>
                    <circle r="3" cx="6" cy="18"></circle>
                    <circle r="3" cx="18" cy="16"></circle>
                  </g>
                </svg>
                <span>By Music Genre</span>
              </button>
            </div>
            <div className="miami-city-selector">
              <span className="miami-city-label">City:</span>
              <div className="miami-city-dropdown">
                <span>Miami</span>
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
        <section className="miami-venues-section">
          <div className="miami-venues-container">
            <div className="miami-venues-grid">
              <article className="miami-venue-card">
                <div className="miami-venue-image">
                  <img
                    alt="LIV Nightclub"
                    src="https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="miami-venue-content">
                  <h3 className="miami-venue-name">LIV Nightclub</h3>
                  <div className="miami-venue-timing">
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
                    <span>Best 11PM-1AM</span>
                  </div>
                  <div className="miami-venue-rating">
                    <svg
                      fill="currentColor"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span>4.8</span>
                  </div>
                  <span className="miami-venue-genre">EDM / House</span>
                  <button className="btn-sm miami-venue-btn btn btn-primary">
                    View Guide
                  </button>
                </div>
              </article>
              <article className="miami-venue-card">
                <div className="miami-venue-image">
                  <img
                    alt="E11EVEN Miami"
                    src="https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="miami-venue-content">
                  <h3 className="miami-venue-name">E11EVEN Miami</h3>
                  <div className="miami-venue-timing">
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
                    <span>Best 12AM-3AM</span>
                  </div>
                  <div className="miami-venue-rating">
                    <svg
                      fill="currentColor"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span>4.9</span>
                  </div>
                  <span className="miami-venue-genre">Hip-Hop / Top 40</span>
                  <button className="btn-sm miami-venue-btn btn btn-primary">
                    View Guide
                  </button>
                </div>
              </article>
              <article className="miami-venue-card">
                <div className="miami-venue-image">
                  <img
                    alt="Story Nightclub"
                    src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="miami-venue-content">
                  <h3 className="miami-venue-name">Story Nightclub</h3>
                  <div className="miami-venue-timing">
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
                    <span>Best 11:30PM-1:30AM</span>
                  </div>
                  <div className="miami-venue-rating">
                    <svg
                      fill="currentColor"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span>4.7</span>
                  </div>
                  <span className="miami-venue-genre">EDM / Progressive</span>
                  <button className="btn-sm miami-venue-btn btn btn-primary">
                    View Guide
                  </button>
                </div>
              </article>
              <article className="miami-venue-card">
                <div className="miami-venue-image">
                  <img
                    alt="Basement Miami"
                    src="https://images.pexels.com/photos/2240763/pexels-photo-2240763.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="miami-venue-content">
                  <h3 className="miami-venue-name">Basement Miami</h3>
                  <div className="miami-venue-timing">
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
                    <span>Best 10:30PM-12:30AM</span>
                  </div>
                  <div className="miami-venue-rating">
                    <svg
                      fill="currentColor"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span>4.6</span>
                  </div>
                  <span className="miami-venue-genre">Hip-Hop / Reggaeton</span>
                  <button className="btn-sm miami-venue-btn btn btn-primary">
                    View Guide
                  </button>
                </div>
              </article>
              <article className="miami-venue-card">
                <div className="miami-venue-image">
                  <img
                    alt="Wall Lounge"
                    src="https://images.pexels.com/photos/219101/pexels-photo-219101.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="miami-venue-content">
                  <h3 className="miami-venue-name">Wall Lounge</h3>
                  <div className="miami-venue-timing">
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
                    <span>Best 11PM-1:30AM</span>
                  </div>
                  <div className="miami-venue-rating">
                    <svg
                      fill="currentColor"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span>4.5</span>
                  </div>
                  <span className="miami-venue-genre">House / Tech House</span>
                  <button className="btn-sm miami-venue-btn btn btn-primary">
                    View Guide
                  </button>
                </div>
              </article>
              <article className="miami-venue-card">
                <div className="miami-venue-image">
                  <img
                    alt="Club Space"
                    src="https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="miami-venue-content">
                  <h3 className="miami-venue-name">Club Space</h3>
                  <div className="miami-venue-timing">
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
                    <span>Best 1AM-4AM</span>
                  </div>
                  <div className="miami-venue-rating">
                    <svg
                      fill="currentColor"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span>4.9</span>
                  </div>
                  <span className="miami-venue-genre">Techno / House</span>
                  <button className="btn-sm miami-venue-btn btn btn-primary">
                    View Guide
                  </button>
                </div>
              </article>
              <article className="miami-venue-card">
                <div className="miami-venue-image">
                  <img
                    alt="Treehouse"
                    src="https://images.pexels.com/photos/849/people-festival-party-dancing.jpg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="miami-venue-content">
                  <h3 className="miami-venue-name">Treehouse</h3>
                  <div className="miami-venue-timing">
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
                    <span>Best 10PM-12AM</span>
                  </div>
                  <div className="miami-venue-rating">
                    <svg
                      fill="currentColor"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span>4.7</span>
                  </div>
                  <span className="miami-venue-genre">Rooftop / Top 40</span>
                  <button className="btn-sm miami-venue-btn btn btn-primary">
                    View Guide
                  </button>
                </div>
              </article>
              <article className="miami-venue-card">
                <div className="miami-venue-image">
                  <img
                    alt="Mynt Lounge"
                    src="https://images.pexels.com/photos/3249760/pexels-photo-3249760.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="miami-venue-content">
                  <h3 className="miami-venue-name">Mynt Lounge</h3>
                  <div className="miami-venue-timing">
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
                    <span>Best 11:30PM-1AM</span>
                  </div>
                  <div className="miami-venue-rating">
                    <svg
                      fill="currentColor"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span>4.6</span>
                  </div>
                  <span className="miami-venue-genre">
                    VIP Lounge / Hip-Hop
                  </span>
                  <button className="btn-sm miami-venue-btn btn btn-primary">
                    View Guide
                  </button>
                </div>
              </article>
              <article className="miami-venue-card">
                <div className="miami-venue-image">
                  <img
                    alt="Rockwell"
                    src="https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="miami-venue-content">
                  <h3 className="miami-venue-name">Rockwell</h3>
                  <div className="miami-venue-timing">
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
                    <span>Best 12AM-2AM</span>
                  </div>
                  <div className="miami-venue-rating">
                    <svg
                      fill="currentColor"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span>4.8</span>
                  </div>
                  <span className="miami-venue-genre">House / Techno</span>
                  <button className="btn-sm miami-venue-btn btn btn-primary">
                    View Guide
                  </button>
                </div>
              </article>
              <article className="miami-venue-card">
                <div className="miami-venue-image">
                  <img
                    alt="Hyde Beach"
                    src="https://images.pexels.com/photos/8448535/pexels-photo-8448535.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="miami-venue-content">
                  <h3 className="miami-venue-name">Hyde Beach</h3>
                  <div className="miami-venue-timing">
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
                    <span>Best 11PM-1:30AM</span>
                  </div>
                  <div className="miami-venue-rating">
                    <svg
                      fill="currentColor"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span>4.7</span>
                  </div>
                  <span className="miami-venue-genre">Beach Club / EDM</span>
                  <button className="btn-sm miami-venue-btn btn btn-primary">
                    View Guide
                  </button>
                </div>
              </article>
              <article className="miami-venue-card">
                <div className="miami-venue-image">
                  <img
                    alt="Vendome"
                    src="https://images.pexels.com/photos/1677573/pexels-photo-1677573.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="miami-venue-content">
                  <h3 className="miami-venue-name">Vendome</h3>
                  <div className="miami-venue-timing">
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
                    <span>Best 10:30PM-12:30AM</span>
                  </div>
                  <div className="miami-venue-rating">
                    <svg
                      fill="currentColor"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span>4.5</span>
                  </div>
                  <span className="miami-venue-genre">Upscale Lounge</span>
                  <button className="btn-sm miami-venue-btn btn btn-primary">
                    View Guide
                  </button>
                </div>
              </article>
              <article className="miami-venue-card">
                <div className="miami-venue-image">
                  <img
                    alt="Do Not Sit"
                    src="https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="miami-venue-content">
                  <h3 className="miami-venue-name">Do Not Sit</h3>
                  <div className="miami-venue-timing">
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
                    <span>Best 11PM-1AM</span>
                  </div>
                  <div className="miami-venue-rating">
                    <svg
                      fill="currentColor"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span>4.6</span>
                  </div>
                  <span className="miami-venue-genre">Latin / Reggaeton</span>
                  <button className="btn-sm miami-venue-btn btn btn-primary">
                    View Guide
                  </button>
                </div>
              </article>
              <article className="miami-venue-card">
                <div className="miami-venue-image">
                  <img
                    alt="LIV on Sunday"
                    src="https://images.pexels.com/photos/844928/pexels-photo-844928.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="miami-venue-content">
                  <h3 className="miami-venue-name">LIV on Sunday</h3>
                  <div className="miami-venue-timing">
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
                    <span>Best 4PM-8PM</span>
                  </div>
                  <div className="miami-venue-rating">
                    <svg
                      fill="currentColor"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span>4.8</span>
                  </div>
                  <span className="miami-venue-genre">Pool Party / EDM</span>
                  <button className="btn-sm miami-venue-btn btn btn-primary">
                    View Guide
                  </button>
                </div>
              </article>
              <article className="miami-venue-card">
                <div className="miami-venue-image">
                  <img
                    alt="Giselle"
                    src="https://images.pexels.com/photos/736355/pexels-photo-736355.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="miami-venue-content">
                  <h3 className="miami-venue-name">Giselle</h3>
                  <div className="miami-venue-timing">
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
                    <span>Best 11:30PM-1:30AM</span>
                  </div>
                  <div className="miami-venue-rating">
                    <svg
                      fill="currentColor"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span>4.7</span>
                  </div>
                  <span className="miami-venue-genre">Exclusive / Hip-Hop</span>
                  <button className="btn-sm miami-venue-btn btn btn-primary">
                    View Guide
                  </button>
                </div>
              </article>
              <article className="miami-venue-card">
                <div className="miami-venue-image">
                  <img
                    alt="Swan"
                    src="https://images.pexels.com/photos/1398266/pexels-photo-1398266.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="miami-venue-content">
                  <h3 className="miami-venue-name">Swan</h3>
                  <div className="miami-venue-timing">
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
                    <span>Best 10PM-12AM</span>
                  </div>
                  <div className="miami-venue-rating">
                    <svg
                      fill="currentColor"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span>4.9</span>
                  </div>
                  <span className="miami-venue-genre">
                    Upscale Dining / Lounge
                  </span>
                  <button className="btn-sm miami-venue-btn btn btn-primary">
                    View Guide
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="miami-premium-section">
          <div className="miami-premium-container">
            <div className="miami-premium-lock-badge">
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
            <h2 className="section-title">Unlock Full Intelligence</h2>
            <p className="section-subtitle">
              Get access to peak arrival times, crowd predictions, and VIP
              details
            </p>
            <div className="miami-premium-preview">
              <div className="miami-premium-blur-overlay"></div>
              <div className="miami-premium-content">
                <div className="miami-premium-item">
                  <h4>Detailed Timing Analysis</h4>
                  <p>
                    Hour-by-hour crowd predictions and optimal entry windows
                  </p>
                </div>
                <div className="miami-premium-item">
                  <h4>Insider Tips &amp; Dress Code</h4>
                  <p>What to wear, who to know, and how to skip the line</p>
                </div>
                <div className="miami-premium-item">
                  <h4>VIP Table Pricing</h4>
                  <p>
                    Real bottle service costs and minimum spend requirements
                  </p>
                </div>
                <div className="miami-premium-item">
                  <h4>Guest List Access</h4>
                  <p>
                    Direct promoter contacts and complimentary entry details
                  </p>
                </div>
              </div>
            </div>
            <Link
              to="/sub"
              className="miami-browse-free-thq-btn-elm27 btn-xl btn-accent btn miami-premium-cta"
            >
              Join Premium - $19.99/month
            </Link>
          </div>
        </section>
        <section className="miami-map-section">
          <div className="miami-map-container">
            <h2 className="section-title">Venues Across Miami</h2>
            <div className="miami-map-wrapper">
              <img
                alt="Miami aerial view"
                src="https://images.pexels.com/photos/9400901/pexels-photo-9400901.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="miami-map-placeholder"
              />
              <div className="miami-map-overlay">
                <div className="miami-browse-free-thq-miami-map-pin-elm1 miami-map-pin">
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
                  <span className="miami-map-label">South Beach</span>
                </div>
                <div className="miami-browse-free-thq-miami-map-pin-elm2 miami-map-pin">
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
                  <span className="miami-map-label">Downtown</span>
                </div>
                <div className="miami-browse-free-thq-miami-map-pin-elm3 miami-map-pin">
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
                  <span className="miami-map-label">Wynwood</span>
                </div>
                <div className="miami-browse-free-thq-miami-map-pin-elm4 miami-map-pin">
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
                  <span className="miami-map-label">Brickell</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="miami-final-cta-section">
          <div className="miami-final-cta-container">
            <h2 className="section-title">
              Ready to Experience Miami Nightlife?
            </h2>
            <p className="section-content">
              Access premium timing intelligence and VIP insights for every
              venue
            </p>
            <div className="miami-final-cta-actions">
              <Link
                to="/miami"
                className="miami-browse-free-thq-btn-elm28 btn-xl btn-accent btn"
              >
                Browse All Miami Venues
              </Link>
              <Link
                to="/sub"
                className="miami-browse-free-thq-btn-elm29 btn-outline btn btn-lg"
              >
                View Membership Plans
              </Link>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
      <div className="miami-browse-free-container2">
        <div className="miami-browse-free-container3">
          <Script
            html={`<style>
        @keyframes pinPulse {0%,100% {transform: scale(1);}
50% {transform: scale(1.1);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="miami-browse-free-container4">
        <div className="miami-browse-free-container5">
          <Script
            html={`<script defer data-name="miami-city-page">
(function(){
  // Filter buttons functionality
  const filterButtons = document.querySelectorAll(".miami-filter-btn")
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default MiamiBrowseFree
