import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './how-we-work-browse-free.css'

const HowWeWorkBrowseFree = (props) => {
  return (
    <div className="how-we-work-browse-free-container">
      <Helmet>
        <title>how-we-work-browse-free - AMERICAPARTYHQ</title>
        <meta
          property="og:title"
          content="how-we-work-browse-free - AMERICAPARTYHQ"
        />
        <link
          rel="canonical"
          href="https://www.americapartyhq.co/how-we-work-browse-free"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="how-we-work-browse-free-thq-how-it-works-hero-elm how-it-works-hero">
        <div className="how-it-works-hero-background">
          <img
            alt="Luxury nightlife atmosphere"
            src="https://images.pexels.com/photos/7270015/pexels-photo-7270015.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
          />
        </div>
        <div className="how-it-works-hero-overlay"></div>
        <div className="how-it-works-hero-content">
          <h1 className="hero-title">How AmericaPartyHQ Works</h1>
          <p className="hero-subtitle">
            Three simple steps to unlock the perfect nightlife experience every
            weekend
          </p>
        </div>
      </section>
      <section className="how-it-works-process">
        <div className="how-it-works-process-container">
          <div className="how-it-works-step-card">
            <div className="how-it-works-step-icon">
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
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle r="3" cx="12" cy="10"></circle>
                </g>
              </svg>
            </div>
            <div className="how-it-works-step-number">
              <span>01</span>
            </div>
            <h3 className="how-it-works-step-title">Discover Your City</h3>
            <p className="how-it-works-step-description">
              Browse curated nightlife venues and categories tailored to your
              city. From hip-hop clubs to exclusive lounges, find the perfect
              vibe for your night.
            </p>
          </div>
          <div className="how-it-works-step-connector"></div>
          <div className="how-it-works-step-card">
            <div className="how-it-works-step-icon">
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
                  <path d="M12 6v6l4 2"></path>
                  <circle r="10" cx="12" cy="12"></circle>
                </g>
              </svg>
            </div>
            <div className="how-it-works-step-number">
              <span>02</span>
            </div>
            <h3 className="how-it-works-step-title">Check Peak Times</h3>
            <p className="how-it-works-step-description">
              See best arrival times, live crowd data, and venue vibes. Our
              smart timing recommendations ensure you arrive when the energy is
              perfect.
            </p>
          </div>
          <div className="how-it-works-step-connector"></div>
          <div className="how-it-works-step-card">
            <div className="how-it-works-step-icon">
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
                  <path d="M8 2v4m8-4v4"></path>
                  <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                  <path d="M3 10h18"></path>
                </g>
              </svg>
            </div>
            <div className="how-it-works-step-number">
              <span>03</span>
            </div>
            <h3 className="how-it-works-step-title">Book Your Night</h3>
            <p className="how-it-works-step-description">
              Make VIP reservations for premium treatment or confidently walk in
              at the perfect moment. Your night, your way.
            </p>
          </div>
        </div>
      </section>
      <section className="how-it-works-visual-timeline">
        <div className="how-it-works-timeline-container">
          <div className="how-it-works-timeline-item">
            <div className="how-it-works-timeline-image">
              <img
                alt="Smartphone showing city nightlife"
                src="https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="how-it-works-timeline-badge">
                <span>Step 1</span>
              </div>
            </div>
            <div className="how-it-works-timeline-content">
              <h4 className="how-it-works-timeline-heading">
                Select Your City
              </h4>
              <p className="how-it-works-timeline-text">
                Choose from Miami, New York, Los Angeles, Las Vegas, Boston, and
                more. Each city features hand-picked venues verified by our
                team.
              </p>
            </div>
          </div>
          <div className="how-it-works-timeline-divider">
            <div className="how-it-works-timeline-line"></div>
            <div className="how-it-works-timeline-dot"></div>
          </div>
          <div className="how-it-works-timeline-item how-it-works-timeline-item-reverse">
            <div className="how-it-works-timeline-content">
              <h4 className="how-it-works-timeline-heading">
                Explore Timing Data
              </h4>
              <p className="how-it-works-timeline-text">
                View real-time insights on crowd levels, peak hours, and optimal
                arrival windows. Never show up too early or too late again.
              </p>
            </div>
            <div className="how-it-works-timeline-image">
              <img
                alt="Nightclub interior with premium lighting"
                src="https://images.pexels.com/photos/10548499/pexels-photo-10548499.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="how-it-works-timeline-badge">
                <span>Step 2</span>
              </div>
            </div>
          </div>
          <div className="how-it-works-timeline-divider">
            <div className="how-it-works-timeline-line"></div>
            <div className="how-it-works-timeline-dot"></div>
          </div>
          <div className="how-it-works-timeline-item">
            <div className="how-it-works-timeline-image">
              <img
                alt="VIP champagne service"
                src="https://images.pexels.com/photos/16125869/pexels-photo-16125869.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="how-it-works-timeline-badge">
                <span>Step 3</span>
              </div>
            </div>
            <div className="how-it-works-timeline-content">
              <h4 className="how-it-works-timeline-heading">
                Reserve or Walk In
              </h4>
              <p className="how-it-works-timeline-text">
                Book VIP tables for bottle service and premium seating, or use
                our timing intel to walk in with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works-features">
        <div className="how-it-works-features-container">
          <div className="how-it-works-features-header">
            <h2 className="section-title">Powered By Intelligence</h2>
            <p className="section-subtitle">
              Everything you need to make every night legendary
            </p>
          </div>
          <div className="how-it-works-features-grid">
            <div className="how-it-works-feature-card">
              <div className="how-it-works-feature-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="how-it-works-feature-title">
                Real-Time Venue Data
              </h3>
              <p className="how-it-works-feature-description">
                Live crowd tracking, wait times, and energy levels updated
                throughout the night.
              </p>
            </div>
            <div className="how-it-works-feature-card">
              <div className="how-it-works-feature-icon">
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
              <h3 className="how-it-works-feature-title">
                Smart Timing Recommendations
              </h3>
              <p className="how-it-works-feature-description">
                AI-powered arrival windows based on historical data and current
                trends.
              </p>
            </div>
            <div className="how-it-works-feature-card">
              <div className="how-it-works-feature-icon">
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
              <h3 className="how-it-works-feature-title">
                VIP Table Reservations
              </h3>
              <p className="how-it-works-feature-description">
                Direct booking access for bottle service, tables, and premium
                experiences.
              </p>
            </div>
            <div className="how-it-works-feature-card">
              <div className="how-it-works-feature-icon">
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
              <h3 className="how-it-works-feature-title">
                Comprehensive City Guides
              </h3>
              <p className="how-it-works-feature-description">
                Curated insights for every major nightlife destination in
                America.
              </p>
            </div>
            <div className="how-it-works-feature-card">
              <div className="how-it-works-feature-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
              </div>
              <h3 className="how-it-works-feature-title">
                Advanced Category Filters
              </h3>
              <p className="how-it-works-feature-description">
                Find exactly what you want: Hip-Hop, House, Latin, After 1AM,
                and more.
              </p>
            </div>
            <div className="how-it-works-feature-card">
              <div className="how-it-works-feature-icon">
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
              <h3 className="how-it-works-feature-title">
                Verified Venue Information
              </h3>
              <p className="how-it-works-feature-description">
                Every club vetted and verified by our team for accuracy and
                quality.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works-cta">
        <div className="how-it-works-cta-container">
          <div className="how-it-works-cta-content">
            <h2 className="section-title">Ready to Own the Night?</h2>
            <p className="section-subtitle">
              Select your city and discover the best venues happening right now
            </p>
          </div>
          <div className="how-it-works-cta-form">
            <select className="how-it-works-city-select">
              <option value="true">Select Your City</option>
              <option value="miami">Miami</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="las-vegas">Las Vegas</option>
              <option value="boston">Boston</option>
              <option value="chicago">Chicago</option>
              <option value="atlanta">Atlanta</option>
            </select>
            <button className="btn-accent btn btn-lg">Start Exploring</button>
          </div>
        </div>
      </section>
      <section className="how-it-works-faq">
        <div className="how-it-works-faq-container">
          <div className="how-it-works-faq-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="how-it-works-faq-list">
            <details className="how-it-works-faq-item">
              <summary className="how-it-works-faq-question">
                <span>How accurate is the timing data?</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              </summary>
              <div className="how-it-works-faq-answer">
                <p className="section-content">
                  Our timing recommendations are based on real-time data
                  collection, historical patterns, and insights from venue
                  partners. We track crowd levels, wait times, and peak hours
                  with 90%+ accuracy. Data is continuously updated throughout
                  the night to reflect current conditions.
                </p>
              </div>
            </details>
            <details className="how-it-works-faq-item">
              <summary className="how-it-works-faq-question">
                <span>Can I book VIP tables through AmericaPartyHQ?</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              </summary>
              <div className="how-it-works-faq-answer">
                <p className="section-content">
                  Yes! We offer VIP table reservations for most featured venues.
                  Submit a VIP inquiry through our booking form, and our team
                  will connect you with venue partners to secure premium
                  seating, bottle service, and exclusive access. Turnaround time
                  is typically 24-48 hours.
                </p>
              </div>
            </details>
            <details className="how-it-works-faq-item">
              <summary className="how-it-works-faq-question">
                <span>Which cities are currently covered?</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              </summary>
              <div className="how-it-works-faq-answer">
                <p className="section-content">
                  We currently feature nightlife guides for Miami, New York
                  City, Los Angeles, Las Vegas, Boston, Chicago, and Atlanta.
                  New cities are added regularly based on user demand. Each city
                  includes 15-50+ verified venues with detailed timing data,
                  categories, and booking options.
                </p>
              </div>
            </details>
            <details className="how-it-works-faq-item">
              <summary className="how-it-works-faq-question">
                <span>Is there a membership or subscription required?</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              </summary>
              <div className="how-it-works-faq-answer">
                <p className="section-content">
                  AmericaPartyHQ offers both free and premium tiers. Basic venue
                  browsing, timing recommendations, and category filters are
                  completely free. Premium membership unlocks exclusive access
                  to VIP-only venues, priority booking, concierge services, and
                  advanced analytics on crowd patterns.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default HowWeWorkBrowseFree
