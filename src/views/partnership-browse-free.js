import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './partnership-browse-free.css'

const PartnershipBrowseFree = (props) => {
  return (
    <div className="partnership-browse-free-container">
      <Helmet>
        <title>partnership-browse-free - AMERICAPARTYHQ</title>
        <meta
          property="og:title"
          content="partnership-browse-free - AMERICAPARTYHQ"
        />
        <link
          rel="canonical"
          href="https://www.americapartyhq.co/partnership-browse-free"
        />
      </Helmet>
      <Navigation rootClassName="navigationroot-class-name1"></Navigation>
      <section className="partners-hero-section">
        <div className="partners-hero-background">
          <img
            alt="Luxury nightclub interior"
            src="https://images.pexels.com/photos/1398266/pexels-photo-1398266.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="partners-hero-image"
          />
          <div className="partners-hero-overlay"></div>
        </div>
        <div className="partners-hero-content">
          <div className="partners-hero-content-wrapper">
            <h1 className="hero-title">Become a Venue Partner</h1>
            <p className="hero-subtitle">
              Join America&apos;s premier nightlife discovery platform and
              connect with thousands of party-goers looking for their next
              unforgettable night out
            </p>
            <div className="partners-hero-actions">
              <button className="btn-accent btn btn-lg">Apply Now</button>
              <button className="btn-outline btn btn-lg">Learn More</button>
            </div>
          </div>
        </div>
      </section>
      <section className="partners-benefits-section">
        <div className="partners-container">
          <div className="partners-section-header">
            <h2 className="section-title">Partnership Benefits</h2>
            <p className="section-subtitle">
              Elevate your venue with exclusive advantages designed for growth
            </p>
          </div>
          <div className="partners-benefits-grid">
            <div className="partners-benefit-card">
              <div className="partners-benefit-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m3 3l20 20M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71M9.309 3.652A12.3 12.3 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a10 10 0 0 1-.08 1.264"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="partners-benefit-title">Increased Visibility</h3>
              <p className="partners-benefit-description">
                Get featured on our platform with priority placement in search
                results and category listings across major cities
              </p>
            </div>
            <div className="partners-benefit-card">
              <div className="partners-benefit-icon">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="partners-benefit-title">Premium Member Access</h3>
              <p className="partners-benefit-description">
                Connect with our engaged community of verified members actively
                seeking premium nightlife experiences
              </p>
            </div>
            <div className="partners-benefit-card">
              <div className="partners-benefit-icon">
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
              <h3 className="partners-benefit-title">Enhanced Listings</h3>
              <p className="partners-benefit-description">
                Showcase your venue with rich media, detailed descriptions, and
                real-time event updates to attract more guests
              </p>
            </div>
            <div className="partners-benefit-card">
              <div className="partners-benefit-icon">
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
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="m19 9l-5 5l-4-4l-3 3"></path>
                  </g>
                </svg>
              </div>
              <h3 className="partners-benefit-title">
                Analytics &amp; Insights
              </h3>
              <p className="partners-benefit-description">
                Track performance with detailed analytics on views, engagement,
                and conversion rates to optimize your strategy
              </p>
            </div>
            <div className="partners-benefit-card">
              <div className="partners-benefit-icon">
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="partners-benefit-title">Verified Status</h3>
              <p className="partners-benefit-description">
                Build trust with a verified partner badge that distinguishes
                your venue as an official AmericaPartyHQ partner
              </p>
            </div>
            <div className="partners-benefit-card">
              <div className="partners-benefit-icon">
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
              <h3 className="partners-benefit-title">24/7 Support</h3>
              <p className="partners-benefit-description">
                Dedicated partner success team available around the clock to
                help you maximize your partnership benefits
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="partners-process-section">
        <div className="partners-container">
          <div className="partners-section-header">
            <h2 className="section-title">How Partnership Works</h2>
            <p className="section-subtitle">
              Simple steps to join America&apos;s premier nightlife network
            </p>
          </div>
          <div className="partners-process-timeline">
            <div className="partners-process-step">
              <div className="partners-process-number">
                <span>01</span>
              </div>
              <div className="partners-process-content">
                <h3 className="partners-process-title">Submit Application</h3>
                <p className="partners-process-description">
                  Complete our partnership application with your venue details
                  and business information. Takes less than 5 minutes.
                </p>
              </div>
            </div>
            <div className="partners-process-connector">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-7-7l7 7l-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="partners-process-step">
              <div className="partners-process-number">
                <span>02</span>
              </div>
              <div className="partners-process-content">
                <h3 className="partners-process-title">
                  Review &amp; Approval
                </h3>
                <p className="partners-process-description">
                  Our team reviews your application and contacts you within 48
                  hours to discuss partnership opportunities.
                </p>
              </div>
            </div>
            <div className="partners-process-connector">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-7-7l7 7l-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="partners-process-step">
              <div className="partners-process-number">
                <span>03</span>
              </div>
              <div className="partners-process-content">
                <h3 className="partners-process-title">Setup &amp; Launch</h3>
                <p className="partners-process-description">
                  We&apos;ll help you create your premium listing with photos,
                  descriptions, and events to go live on the platform.
                </p>
              </div>
            </div>
            <div className="partners-process-connector">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-7-7l7 7l-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="partners-process-step">
              <div className="partners-process-number">
                <span>04</span>
              </div>
              <div className="partners-process-content">
                <h3 className="partners-process-title">Grow &amp; Thrive</h3>
                <p className="partners-process-description">
                  Start receiving bookings, track analytics, and grow your
                  audience with our marketing and promotional support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partners-showcase-section">
        <div className="partners-container">
          <div className="partners-section-header">
            <h2 className="section-title">Featured Partner Venues</h2>
            <p className="section-subtitle">
              Join these premier venues already thriving on our platform
            </p>
          </div>
          <div className="partners-showcase-grid">
            <div className="partners-showcase-card">
              <div className="partners-showcase-image-wrapper">
                <img
                  alt="Luxury venue interior"
                  src="https://images.pexels.com/photos/18408870/pexels-photo-18408870.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="partners-showcase-image"
                />
                <div className="partners-showcase-badge">
                  <span>Miami</span>
                </div>
              </div>
              <div className="partners-showcase-content">
                <h3 className="partners-showcase-name">LIV Nightclub</h3>
                <p className="partners-showcase-description">
                  Ultra-luxury nightclub featuring world-class DJs and VIP
                  experiences. One of Miami&apos;s most iconic nightlife
                  destinations.
                </p>
                <div className="partners-showcase-stats">
                  <div className="partners-showcase-stat">
                    <span className="partners-showcase-stat-value">12K+</span>
                    <span className="partners-showcase-stat-label">
                      Monthly Views
                    </span>
                  </div>
                  <div className="partners-showcase-stat">
                    <span className="partners-showcase-stat-value">4.8</span>
                    <span className="partners-showcase-stat-label">Rating</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="partners-showcase-card">
              <div className="partners-showcase-image-wrapper">
                <img
                  alt="Nightclub with vibrant lighting"
                  src="https://images.pexels.com/photos/7271403/pexels-photo-7271403.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="partners-showcase-image"
                />
                <div className="partners-showcase-badge">
                  <span>New York</span>
                </div>
              </div>
              <div className="partners-showcase-content">
                <h3 className="partners-showcase-name">Marquee NYC</h3>
                <p className="partners-showcase-description">
                  Premier nightlife experience in the heart of Manhattan with
                  state-of-the-art sound and lighting systems.
                </p>
                <div className="partners-showcase-stats">
                  <div className="partners-showcase-stat">
                    <span className="partners-showcase-stat-value">15K+</span>
                    <span className="partners-showcase-stat-label">
                      Monthly Views
                    </span>
                  </div>
                  <div className="partners-showcase-stat">
                    <span className="partners-showcase-stat-value">4.9</span>
                    <span className="partners-showcase-stat-label">Rating</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="partners-showcase-card">
              <div className="partners-showcase-image-wrapper">
                <img
                  alt="DJ performing at nightclub"
                  src="https://images.pexels.com/photos/7270005/pexels-photo-7270005.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="partners-showcase-image"
                />
                <div className="partners-showcase-badge">
                  <span>Las Vegas</span>
                </div>
              </div>
              <div className="partners-showcase-content">
                <h3 className="partners-showcase-name">XS Nightclub</h3>
                <p className="partners-showcase-description">
                  Lavish Vegas mega-club offering indoor-outdoor experiences
                  with celebrity DJ performances nightly.
                </p>
                <div className="partners-showcase-stats">
                  <div className="partners-showcase-stat">
                    <span className="partners-showcase-stat-value">18K+</span>
                    <span className="partners-showcase-stat-label">
                      Monthly Views
                    </span>
                  </div>
                  <div className="partners-showcase-stat">
                    <span className="partners-showcase-stat-value">4.7</span>
                    <span className="partners-showcase-stat-label">Rating</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="partners-showcase-card">
              <div className="partners-showcase-image-wrapper">
                <img
                  alt="Elegant bar setting"
                  src="https://images.pexels.com/photos/5863542/pexels-photo-5863542.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="partners-showcase-image"
                />
                <div className="partners-showcase-badge">
                  <span>Los Angeles</span>
                </div>
              </div>
              <div className="partners-showcase-content">
                <h3 className="partners-showcase-name">Bootsy Bellows</h3>
                <p className="partners-showcase-description">
                  Celebrity hotspot on the Sunset Strip featuring intimate
                  spaces, craft cocktails, and A-list entertainment.
                </p>
                <div className="partners-showcase-stats">
                  <div className="partners-showcase-stat">
                    <span className="partners-showcase-stat-value">10K+</span>
                    <span className="partners-showcase-stat-label">
                      Monthly Views
                    </span>
                  </div>
                  <div className="partners-showcase-stat">
                    <span className="partners-showcase-stat-value">4.6</span>
                    <span className="partners-showcase-stat-label">Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partners-tiers-section">
        <div className="partners-container">
          <div className="partners-section-header">
            <h2 className="section-title">Partnership Tiers</h2>
            <p className="section-subtitle">
              Choose the level that fits your venue&apos;s needs
            </p>
          </div>
          <div className="partners-tiers-grid">
            <div className="partners-tier-card">
              <div className="partners-tier-header">
                <h3 className="partners-tier-name">Standard</h3>
                <p className="partners-tier-tagline">
                  Perfect for growing venues
                </p>
              </div>
              <ul className="partners-tier-features">
                <li className="partners-tier-feature">
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
                  <span>Basic listing profile</span>
                </li>
                <li className="partners-tier-feature">
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
                  <span>Up to 10 photos</span>
                </li>
                <li className="partners-tier-feature">
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
                  <span>Monthly analytics</span>
                </li>
                <li className="partners-tier-feature">
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
                  <span>Email support</span>
                </li>
                <li className="partners-tier-feature">
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
                  <span>Event calendar</span>
                </li>
              </ul>
              <button className="btn-outline partners-tier-cta btn btn-lg">
                Get Started
              </button>
            </div>
            <div className="partners-tier-card partners-tier-featured">
              <div className="partners-tier-badge">
                <span>Most Popular</span>
              </div>
              <div className="partners-tier-header">
                <h3 className="partners-tier-name">Premium</h3>
                <p className="partners-tier-tagline">
                  Best value for serious venues
                </p>
              </div>
              <ul className="partners-tier-features">
                <li className="partners-tier-feature">
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
                  <span>Enhanced listing profile</span>
                </li>
                <li className="partners-tier-feature">
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
                  <span>Unlimited photos &amp; videos</span>
                </li>
                <li className="partners-tier-feature">
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
                  <span>Priority search placement</span>
                </li>
                <li className="partners-tier-feature">
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
                  <span>Verified partner badge</span>
                </li>
                <li className="partners-tier-feature">
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
                  <span>Real-time analytics dashboard</span>
                </li>
                <li className="partners-tier-feature">
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
                  <span>Featured in category listings</span>
                </li>
                <li className="partners-tier-feature">
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
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="partners-tier-cta btn-accent btn btn-lg">
                Get Started
              </button>
            </div>
            <div className="partners-tier-card">
              <div className="partners-tier-header">
                <h3 className="partners-tier-name">Elite</h3>
                <p className="partners-tier-tagline">
                  Ultimate visibility &amp; control
                </p>
              </div>
              <ul className="partners-tier-features">
                <li className="partners-tier-feature">
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
                  <span>Everything in Premium</span>
                </li>
                <li className="partners-tier-feature">
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
                  <span>Homepage featured placement</span>
                </li>
                <li className="partners-tier-feature">
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
                  <span>Dedicated account manager</span>
                </li>
                <li className="partners-tier-feature">
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
                  <span>Custom marketing campaigns</span>
                </li>
                <li className="partners-tier-feature">
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
                  <span>Advanced analytics &amp; reporting</span>
                </li>
                <li className="partners-tier-feature">
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
                  <span>Social media promotion</span>
                </li>
                <li className="partners-tier-feature">
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
                  <span>24/7 VIP support</span>
                </li>
              </ul>
              <button className="btn-outline partners-tier-cta btn btn-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="partners-form-section">
        <div className="partners-container">
          <div className="partners-form-wrapper">
            <div className="partners-form-header">
              <h2 className="section-title">Apply to Partner Program</h2>
              <p className="section-subtitle">
                Tell us about your venue and we&apos;ll get back to you within
                48 hours
              </p>
            </div>
            <form
              action="/submit-partner-application"
              method="POST"
              data-form-id="782abbe2-b852-407d-98be-d1cec02b39ef"
              className="partners-form"
            >
              <div className="partners-form-row">
                <div className="partners-form-group">
                  <label htmlFor="venueName" className="partners-form-label">
                    Venue Name
                  </label>
                  <input
                    type="text"
                    id="venueName"
                    name="venueName"
                    required="true"
                    placeholder="Enter your venue name"
                    data-form-field-id="venueName"
                    className="partners-form-input"
                  />
                </div>
                <div className="partners-form-group">
                  <label htmlFor="city" className="partners-form-label">
                    City
                  </label>
                  <select
                    id="city"
                    name="city"
                    required="true"
                    data-form-field-id="city"
                    className="partners-form-select"
                  >
                    <option value="true">Select your city</option>
                    <option value="miami">Miami</option>
                    <option value="new-york">New York</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="las-vegas">Las Vegas</option>
                    <option value="boston">Boston</option>
                    <option value="chicago">Chicago</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="partners-form-row">
                <div className="partners-form-group">
                  <label htmlFor="email" className="partners-form-label">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required="true"
                    placeholder="your@email.com"
                    data-form-field-id="email"
                    className="partners-form-input"
                  />
                </div>
                <div className="partners-form-group">
                  <label htmlFor="phone" className="partners-form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required="true"
                    placeholder="(555) 123-4567"
                    data-form-field-id="phone"
                    className="partners-form-input"
                  />
                </div>
              </div>
              <div className="partners-form-group">
                <label htmlFor="description" className="partners-form-label">
                  Venue Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  required="true"
                  placeholder="Tell us about your venue, capacity, atmosphere, and what makes it unique..."
                  data-form-field-id="description"
                  className="partners-form-textarea"
                ></textarea>
              </div>
              <div className="partners-form-group">
                <label className="partners-form-label">Venue Categories</label>
                <div className="partners-form-checkboxes">
                  <label className="partners-form-checkbox">
                    <input
                      type="checkbox"
                      id="thq_categories_N7zN"
                      name="categories"
                      value="hip-hop"
                      data-form-field-id="thq_categories_N7zN"
                    />
                    <span className="partnership-browse-free-thq-partners-form-checkbox-label-elm1">
                      Hip-Hop
                    </span>
                  </label>
                  <label className="partners-form-checkbox">
                    <input
                      type="checkbox"
                      id="thq_categories_HpY4"
                      name="categories"
                      value="house"
                      data-form-field-id="thq_categories_HpY4"
                    />
                    <span className="partnership-browse-free-thq-partners-form-checkbox-label-elm2">
                      House
                    </span>
                  </label>
                  <label className="partners-form-checkbox">
                    <input
                      type="checkbox"
                      id="thq_categories_rfNd"
                      name="categories"
                      value="latin"
                      data-form-field-id="thq_categories_rfNd"
                    />
                    <span className="partnership-browse-free-thq-partners-form-checkbox-label-elm3">
                      Latin
                    </span>
                  </label>
                  <label className="partners-form-checkbox">
                    <input
                      type="checkbox"
                      id="thq_categories_-ML9"
                      name="categories"
                      value="after-1am"
                      data-form-field-id="thq_categories_-ML9"
                    />
                    <span className="partnership-browse-free-thq-partners-form-checkbox-label-elm4">
                      After 1AM
                    </span>
                  </label>
                  <label className="partners-form-checkbox">
                    <input
                      type="checkbox"
                      id="thq_categories_oNOl"
                      name="categories"
                      value="girls-night"
                      data-form-field-id="thq_categories_oNOl"
                    />
                    <span className="partnership-browse-free-thq-partners-form-checkbox-label-elm5">
                      Girls Night
                    </span>
                  </label>
                  <label className="partners-form-checkbox">
                    <input
                      type="checkbox"
                      id="thq_categories_km-C"
                      name="categories"
                      value="rooftop"
                      data-form-field-id="thq_categories_km-C"
                    />
                    <span className="partnership-browse-free-thq-partners-form-checkbox-label-elm6">
                      Rooftop
                    </span>
                  </label>
                  <label className="partners-form-checkbox">
                    <input
                      type="checkbox"
                      id="thq_categories_j9pv"
                      name="categories"
                      value="lounge"
                      data-form-field-id="thq_categories_j9pv"
                    />
                    <span className="partnership-browse-free-thq-partners-form-checkbox-label-elm7">
                      Lounge
                    </span>
                  </label>
                  <label className="partners-form-checkbox">
                    <input
                      type="checkbox"
                      id="thq_categories_uNTX"
                      name="categories"
                      value="club"
                      data-form-field-id="thq_categories_uNTX"
                    />
                    <span className="partnership-browse-free-thq-partners-form-checkbox-label-elm8">
                      Club
                    </span>
                  </label>
                </div>
              </div>
              <div className="partners-form-group">
                <label htmlFor="additionalInfo" className="partners-form-label">
                  Additional Information (Optional)
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows="3"
                  placeholder="Any other details you'd like us to know..."
                  data-form-field-id="additionalInfo"
                  className="partners-form-textarea"
                ></textarea>
              </div>
              <button
                id="thq_button_g8Kr"
                name="button"
                type="submit"
                data-form-field-id="thq_button_g8Kr"
                className="partners-form-submit btn-accent btn btn-lg"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="partners-faq-section">
        <div className="partners-container">
          <div className="partners-section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about partnering with us
            </p>
          </div>
          <div className="partners-faq-list">
            <details className="partners-faq-item">
              <summary className="partners-faq-summary">
                <span className="partners-faq-question">
                  What are the requirements to become a partner?
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="partners-faq-icon"
                >
                  <path
                    d="M5 12h14m-7-7l7 7l-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="partners-faq-answer">
                <p>
                  We partner with licensed nightlife venues, clubs, lounges, and
                  entertainment spaces that provide high-quality experiences.
                  Your venue should have proper licensing, insurance, and a
                  commitment to customer satisfaction. We welcome venues of all
                  sizes from boutique lounges to mega-clubs.
                </p>
              </div>
            </details>
            <details className="partners-faq-item">
              <summary className="partners-faq-summary">
                <span className="partners-faq-question">
                  How much does partnership cost?
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="partners-faq-icon"
                >
                  <path
                    d="M5 12h14m-7-7l7 7l-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="partners-faq-answer">
                <p>
                  Partnership pricing varies by tier and city. We offer
                  Standard, Premium, and Elite tiers with monthly and annual
                  billing options. Contact our sales team for detailed pricing
                  specific to your venue and market. We also offer
                  performance-based options for qualified partners.
                </p>
              </div>
            </details>
            <details className="partners-faq-item">
              <summary className="partners-faq-summary">
                <span className="partners-faq-question">
                  How long does the approval process take?
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="partners-faq-icon"
                >
                  <path
                    d="M5 12h14m-7-7l7 7l-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="partners-faq-answer">
                <p>
                  Our team reviews all applications within 48 hours of
                  submission. If your venue meets our partnership criteria,
                  we&apos;ll contact you to discuss next steps and schedule an
                  onboarding call. The entire process from application to going
                  live typically takes 5-7 business days.
                </p>
              </div>
            </details>
            <details className="partners-faq-item">
              <summary className="partners-faq-summary">
                <span className="partners-faq-question">
                  Can I update my venue information and photos?
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="partners-faq-icon"
                >
                  <path
                    d="M5 12h14m-7-7l7 7l-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="partners-faq-answer">
                <p>
                  Absolutely! All partners have access to a dedicated dashboard
                  where you can update venue information, add photos and videos,
                  manage events, view analytics, and more. Premium and Elite
                  partners get assistance from our team for major updates and
                  promotional campaigns.
                </p>
              </div>
            </details>
            <details className="partners-faq-item">
              <summary className="partners-faq-summary">
                <span className="partners-faq-question">
                  What kind of analytics do you provide?
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="partners-faq-icon"
                >
                  <path
                    d="M5 12h14m-7-7l7 7l-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="partners-faq-answer">
                <p>
                  Partners receive comprehensive analytics including profile
                  views, search impressions, click-through rates, peak viewing
                  times, geographic data, and engagement metrics. Premium and
                  Elite tiers include advanced reporting with demographic
                  insights and conversion tracking.
                </p>
              </div>
            </details>
            <details className="partners-faq-item">
              <summary className="partners-faq-summary">
                <span className="partners-faq-question">
                  Can I cancel my partnership anytime?
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="partners-faq-icon"
                >
                  <path
                    d="M5 12h14m-7-7l7 7l-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="partners-faq-answer">
                <p>
                  Yes, there are no long-term contracts. Monthly partnerships
                  can be canceled anytime with 30 days notice. Annual
                  partnerships offer discounted rates and can be canceled at
                  renewal. We&apos;re confident you&apos;ll see value in our
                  platform and choose to stay long-term.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="partners-final-cta-section">
        <div className="partners-container">
          <div className="partners-final-cta-content">
            <h2 className="section-title">Ready to Elevate Your Venue?</h2>
            <p className="section-subtitle">
              Join thousands of venues already thriving on America&apos;s
              premier nightlife platform
            </p>
            <div className="partners-final-cta-actions">
              <button className="btn-xl btn-accent btn">
                Apply to Partner Program
              </button>
              <button className="btn-xl btn-outline btn">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default PartnershipBrowseFree
