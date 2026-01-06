import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './top-3-tonight-locked-partially.css'

const Top3TonightLockedPartially = (props) => {
  return (
    <div className="top3-tonight-locked-partially-container1">
      <Helmet>
        <title>Top-3-Tonight-locked-partially - AMERICAPARTYHQ</title>
        <meta
          property="og:title"
          content="Top-3-Tonight-locked-partially - AMERICAPARTYHQ"
        />
        <link
          rel="canonical"
          href="https://www.americapartyhq.co/top-3-tonight-locked-partially"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="top3-tonight-locked-partially-container2">
        <div className="top3-tonight-locked-partially-container3">
          <Script
            html={`<style>
[data-animate="fade-up"] {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}
[data-animate="fade-up"].visible {
  opacity: 1;
  transform: translateY(0);
}
</style>`}
          ></Script>
        </div>
      </div>
      <main className="aph-page-root">
        <section className="top-3-tonight-hero-section1">
          <div className="hero-media-container">
            <video
              src="https://videos.pexels.com/video-files/9429658/9429658-hd_1920_1080_30fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/9429658/pictures/preview-0.jpeg"
              autoPlay="true"
              playsInline="true"
              className="top-3-tonight-hero-video1"
            ></video>
            <div className="top-3-tonight-hero-overlay1"></div>
          </div>
          <div className="top-3-tonight-hero-content-container">
            <div className="top-3-tonight-hero-text-block">
              <h1 className="hero-title">
                Find the right party, every weekend.
              </h1>
              <p className="hero-subtitle">
                Premium nightlife discovery. No guessing, just high-energy
                experiences optimized for the perfect timing.
              </p>
              <div className="top-3-tonight-hero-cta-group">
                <div
                  onclick="document.getElementById('citygallerysection').scrollIntoView(&#123;behavior: 'smooth'&#125;)"
                  className="btn-xl btn btn-primary"
                >
                  <span>Find My City</span>
                </div>
                <Link to="/top-picks">
                  <div className="top3-tonight-locked-partially-thq-btn-elm2 btn-xl hero-btn-outline btn-outline btn">
                    <span>Tonight&apos;s Top Picks</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="cities" className="city-gallery-section">
          <div className="city-gallery-header">
            <h2 className="section-title">What&apos;s Hot Tonight</h2>
            <p className="section-subtitle">
              Select your city to unlock the best venues.
            </p>
          </div>
          <div className="top-3-tonight-city-rail-container">
            <div className="city-rail top-3-tonight-city-rail">
              <div className="active top-3-tonight-city-card">
                <Link
                  to="/miami"
                  className="top3-tonight-locked-partially-thq-city-name-elm1 top-3-tonight-city-name"
                >
                  Miami
                </Link>
              </div>
              <div className="top-3-tonight-city-card">
                <Link
                  to="/newyork"
                  className="top3-tonight-locked-partially-thq-city-name-elm2 top-3-tonight-city-name"
                >
                  New York
                </Link>
              </div>
              <div className="top-3-tonight-city-card">
                <Link
                  to="/lasvegas"
                  className="top3-tonight-locked-partially-thq-city-name-elm3 top-3-tonight-city-name"
                >
                  Los Angeles
                </Link>
              </div>
              <div className="top-3-tonight-city-card">
                <Link
                  to="/lasvegas"
                  className="top3-tonight-locked-partially-thq-city-name-elm4 top-3-tonight-city-name"
                >
                  Las Vegas
                </Link>
              </div>
              <div className="top-3-tonight-city-card">
                <Link
                  to="/boston"
                  className="top3-tonight-locked-partially-thq-city-name-elm5 top-3-tonight-city-name"
                >
                  Boston
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="tonight" className="featured-clubs-section">
          <div className="featured-clubs-container">
            <div className="featured-grid">
              <article className="top-3-tonight-club-card1">
                <div className="club-image-wrapper">
                  <img
                    alt="LIV Nightclub"
                    src="https://images.pexels.com/photos/3073896/pexels-photo-3073896.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="club-img"
                  />
                  <div className="top-3-tonight-club-badge1">
                    <span>Trending</span>
                  </div>
                </div>
                <div className="club-content">
                  <div className="top-3-tonight-club-meta1">
                    <h3 className="club-name">LIV Nightclub</h3>
                    <div className="club-rating top-3-tonight-club-rating1">
                      <svg
                        fill="var(--color-secondary)"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewbox="0 0 24 24"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <span>4.9</span>
                    </div>
                  </div>
                  <div className="top-3-tonight-club-timing">
                    <svg
                      fill="none"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                    <span>Best Arrival: 11:30 PM</span>
                  </div>
                  <p className="section-content club-description">
                    The ultimate high-energy Miami experience. World-class DJs
                    and unmatched production.
                  </p>
                  <div className="club-actions">
                    <button className="btn-sm btn btn-primary">
                      View Guide
                    </button>
                    <Link
                      to="/vip"
                      className="top3-tonight-locked-partially-thq-btn-elm4 btn-outline btn-sm btn"
                    >
                      VIP Inquiry
                    </Link>
                  </div>
                </div>
              </article>
              <article className="top-3-tonight-club-card1">
                <div className="club-image-wrapper">
                  <img
                    alt="E11EVEN"
                    src="https://images.pexels.com/photos/7270006/pexels-photo-7270006.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="club-img"
                  />
                  <div className="top-3-tonight-club-badge1">
                    <span>24/7</span>
                  </div>
                </div>
                <div className="club-content">
                  <div className="top-3-tonight-club-meta1">
                    <h3 className="club-name">E11EVEN</h3>
                    <div className="club-rating top-3-tonight-club-rating1">
                      <svg
                        fill="var(--color-secondary)"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewbox="0 0 24 24"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <span>4.8</span>
                    </div>
                  </div>
                  <div className="top-3-tonight-club-timing">
                    <svg
                      fill="none"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                    <span>Best Arrival: 1:00 AM</span>
                  </div>
                  <p className="section-content club-description">
                    An immersive 24-hour ultra-club that blurs the lines between
                    circus and nightlife.
                  </p>
                  <div className="club-actions">
                    <button className="btn-sm btn btn-primary">
                      View Guide
                    </button>
                    <Link
                      to="/vip"
                      className="top3-tonight-locked-partially-thq-btn-elm6 btn-outline btn-sm btn"
                    >
                      VIP Inquiry
                    </Link>
                  </div>
                </div>
              </article>
              <article className="top-3-tonight-club-card1">
                <div className="club-image-wrapper">
                  <img
                    alt="Club Space"
                    src="https://images.pexels.com/photos/5192316/pexels-photo-5192316.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="club-img"
                  />
                  <div className="top-3-tonight-club-badge1">
                    <span>Afterhours</span>
                  </div>
                </div>
                <div className="club-content">
                  <div className="top-3-tonight-club-meta1">
                    <h3 className="club-name">Club Space</h3>
                    <div className="club-rating top-3-tonight-club-rating1">
                      <svg
                        fill="var(--color-secondary)"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewbox="0 0 24 24"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <span>5.0</span>
                    </div>
                  </div>
                  <div className="top-3-tonight-club-timing">
                    <svg
                      fill="none"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                    <span>Best Arrival: 3:30 AM</span>
                  </div>
                  <p className="section-content club-description">
                    The legendary terrace where the sunrise meets house and
                    techno beats.
                  </p>
                  <div className="club-actions">
                    <button className="btn-sm btn btn-primary">
                      View Guide
                    </button>
                    <Link
                      to="/vip"
                      className="top3-tonight-locked-partially-thq-btn-elm8 btn-outline btn-sm btn"
                    >
                      VIP Inquiry
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="top-3-tonight-category-grid-section">
          <div className="top-3-tonight-category-grid-container">
            <div className="category-header">
              <h2 className="section-title">Discover Your Vibe</h2>
              <p className="section-subtitle">
                Curated lists for every type of night out.
              </p>
            </div>
            <div className="top-3-tonight-category-grid1">
              <div className="category-card-item">
                <div className="category-icon-box">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-secondary)"
                    viewbox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 5h4m-2-2v4m.985 5.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
                  </svg>
                </div>
                <h3 className="top-3-tonight-category-title1">Top 3 Tonight</h3>
                <p className="section-content">
                  The absolute best options for right now.
                </p>
              </div>
              <div className="category-card-item">
                <div className="category-icon-box">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-secondary)"
                    viewbox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                <h3 className="top-3-tonight-category-title1">
                  Best After 1AM
                </h3>
                <p className="section-content">
                  Where the party really starts late night.
                </p>
              </div>
              <div className="category-card-item">
                <div className="category-icon-box">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-secondary)"
                    viewbox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle r="2" cx="4" cy="20"></circle>
                  </svg>
                </div>
                <h3 className="top-3-tonight-category-title1">
                  Hip-Hop &amp; Open Format
                </h3>
                <p className="section-content">
                  High-energy rooms with the best urban beats.
                </p>
              </div>
              <div className="category-card-item">
                <div className="category-icon-box">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-secondary)"
                    viewbox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535zM8 15H7a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="10" cy="7"></circle>
                  </svg>
                </div>
                <h3 className="top-3-tonight-category-title1">
                  Girls Night Out
                </h3>
                <p className="section-content">
                  Safe, trendy, and cocktail-forward venues.
                </p>
              </div>
              <div className="category-card-item">
                <div className="category-icon-box">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-secondary)"
                    viewbox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m21 21l-4.34-4.34"></path>
                    <circle r="8" cx="11" cy="11"></circle>
                  </svg>
                </div>
                <h3 className="top-3-tonight-category-title1">
                  House &amp; Melodic
                </h3>
                <p className="section-content">
                  Pure vibes for the deep house enthusiasts.
                </p>
              </div>
              <div className="category-card-item">
                <div className="category-icon-box">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-secondary)"
                    viewbox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle r="3" cx="12" cy="10"></circle>
                  </svg>
                </div>
                <h3 className="top-3-tonight-category-title1">Latin Heat</h3>
                <p className="section-content">
                  Reggaeton and Latin hits all night long.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="top-3-tonight-how-it-works-section">
          <div className="how-it-works-container top-3-tonight-how-it-works-container">
            <div className="how-header">
              <h2 className="section-title">Your Night, Optimized</h2>
              <p className="section-subtitle">Stop guessing. Start partying.</p>
            </div>
            <div className="top-3-tonight-steps-horizontal">
              <div className="step-item top-3-tonight-step-item">
                <div className="top-3-tonight-step-number1">
                  <span>01</span>
                </div>
                <div className="step-content-box">
                  <h3 className="top-3-tonight-step-title1">Find Your City</h3>
                  <p className="section-content">
                    Select from our curated list of major nightlife hubs.
                  </p>
                </div>
              </div>
              <div className="top-3-tonight-step-divider"></div>
              <div className="step-item top-3-tonight-step-item">
                <div className="top-3-tonight-step-number1">
                  <span>02</span>
                </div>
                <div className="step-content-box">
                  <h3 className="top-3-tonight-step-title1">Explore Clubs</h3>
                  <p className="section-content">
                    Check real-time ratings and the best arrival windows.
                  </p>
                </div>
              </div>
              <div className="top-3-tonight-step-divider"></div>
              <div className="step-item top-3-tonight-step-item">
                <div className="top-3-tonight-step-number1">
                  <span>03</span>
                </div>
                <div className="step-content-box">
                  <h3 className="top-3-tonight-step-title1">Pull Up Right</h3>
                  <p className="section-content">
                    Arrive when the vibe is peak and the line is moving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="final-cta-section top-3-tonight-final-cta-section6">
          <div className="top-3-tonight-final-cta-container final-cta-container">
            <div className="top-3-tonight-cta-card">
              <div className="cta-content">
                <h2 className="section-title">Ready to own the night?</h2>
                <p className="section-subtitle">
                  Get instant access to tonight&apos;s best picks.
                </p>
                <div className="top-3-tonight-cta-form-wrapper">
                  <div className="city-select-wrapper">
                    <select
                      required="true"
                      className="top-3-tonight-city-dropdown"
                    >
                      <option disabled="true" selected="true">
                        Select Your City
                      </option>
                      <option value="miami">Miami</option>
                      <option value="ny">New York</option>
                      <option value="la">Los Angeles</option>
                      <option value="lv">Las Vegas</option>
                      <option value="boston">Boston</option>
                    </select>
                  </div>
                  <Link
                    to="/explore"
                    className="top3-tonight-locked-partially-thq-btn-elm9 btn-accent btn btn-lg"
                  >
                    Find the Best Clubs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="top-3-tonight-testimonials-section">
          <div className="top-3-tonight-testimonials-header">
            <h2 className="section-title">Trusted by Nightlife Pros</h2>
          </div>
          <div className="testimonial-rail-container">
            <div className="testimonial-rail top-3-tonight-testimonial-rail">
              <div className="top-3-tonight-testimonial-card1">
                <p className="top-3-tonight-testimonial-text testimonial-text">
                  &quot;AmericaPartyHQ is my go-to for knowing exactly when to
                  head out. The timing guides are flawless.&quot;
                </p>
                <div className="testimonial-author top-3-tonight-testimonial-author1">
                  <span className="author-name top-3-tonight-author-name">
                    Julian R.
                  </span>
                  <span className="top-3-tonight-author-role">
                    VIP Host, Miami
                  </span>
                </div>
              </div>
              <div className="top-3-tonight-testimonial-card1">
                <p className="top-3-tonight-testimonial-text testimonial-text">
                  &quot;Finally, a platform that understands the nuance of
                  nightlife. No more wasted nights at dead clubs.&quot;
                </p>
                <div className="testimonial-author top-3-tonight-testimonial-author1">
                  <span className="author-name top-3-tonight-author-name">
                    Sarah M.
                  </span>
                  <span className="top-3-tonight-author-role">
                    Content Creator
                  </span>
                </div>
              </div>
              <div className="top-3-tonight-testimonial-card1">
                <p className="top-3-tonight-testimonial-text testimonial-text">
                  &quot;The category breakdowns are perfect. If I want House
                  music at 2AM, I know exactly where to go.&quot;
                </p>
                <div className="testimonial-author top-3-tonight-testimonial-author1">
                  <span className="author-name top-3-tonight-author-name">
                    Marcus K.
                  </span>
                  <span className="top-3-tonight-author-role">
                    Urban Professional
                  </span>
                </div>
              </div>
              <div className="top-3-tonight-testimonial-card1">
                <p className="top-3-tonight-testimonial-text testimonial-text">
                  &quot;The VIP inquiry feature saved us so much time booking a
                  table for New Year&apos;s in Vegas.&quot;
                </p>
                <div className="testimonial-author top-3-tonight-testimonial-author1">
                  <span className="author-name top-3-tonight-author-name">
                    Elena G.
                  </span>
                  <span className="top-3-tonight-author-role">Tourist</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="top-3-tonight-venue-gallery-section">
          <div className="venue-gallery-container">
            <div className="gallery-header">
              <h2 className="section-title">Inside the Experience</h2>
              <p className="section-subtitle">
                A glimpse into the premium venues we curate.
              </p>
            </div>
            <div className="top-3-tonight-gallery-grid">
              <div className="gallery-item">
                <img
                  alt="Main Stage Energy"
                  src="https://images.pexels.com/photos/3101520/pexels-photo-3101520.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-label">Main Stage</span>
                </div>
              </div>
              <div className="gallery-item">
                <img
                  alt="VIP Lounge"
                  src="https://images.pexels.com/photos/8891399/pexels-photo-8891399.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-label">VIP Lounge</span>
                </div>
              </div>
              <div className="gallery-item">
                <img
                  alt="Bottle Service"
                  src="https://images.pexels.com/photos/4651855/pexels-photo-4651855.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-label">Table Service</span>
                </div>
              </div>
              <div className="gallery-item">
                <img
                  alt="DJ Booth"
                  src="https://images.pexels.com/photos/7271151/pexels-photo-7271151.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-label">DJ Booth</span>
                </div>
              </div>
              <div className="gallery-item">
                <img
                  alt="Dance Floor"
                  src="https://images.pexels.com/photos/7270012/pexels-photo-7270012.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-label">Dance Floor</span>
                </div>
              </div>
              <div className="gallery-item">
                <img
                  alt="Rooftop View"
                  src="https://images.pexels.com/photos/8448579/pexels-photo-8448579.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-label">Rooftop</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="top3-tonight-locked-partially-container4">
        <div className="top3-tonight-locked-partially-container5">
          <Script
            html={`<style>
        @keyframes heroFadeUp {from {opacity: 0;
transform: translateY(40px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="top3-tonight-locked-partially-container6">
        <div className="top3-tonight-locked-partially-container7">
          <Script
            html={`<script defer data-name="aph-interactions">
(function(){
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  document.querySelectorAll("[data-animate]").forEach((el) => {
    animationObserver.observe(el)
  })

  // City selection logic
  const cityCards = document.querySelectorAll(".city-card")
  cityCards.forEach((card) => {
    card.addEventListener("click", () => {
      cityCards.forEach((c) => c.classList.remove("active"))
      card.classList.add("active")

      // Simulate content loading
      const clubGrid = document.querySelector(".featured-grid")
      if (clubGrid) {
        clubGrid.style.opacity = "0.5"
        setTimeout(() => {
          clubGrid.style.opacity = "1"
        }, 300)
      }
    })
  })

  // Testimonial Rail Auto-scroll Hint
  const rail = document.querySelector(".testimonial-rail-container")
  if (rail) {
    let isDown = false
    let startX
    let scrollLeft

    rail.addEventListener("mousedown", (e) => {
      isDown = true
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
  }

  // Form interactivity
  const cityDropdown = document.querySelector(".city-dropdown")
  const ctaBtn = document.querySelector(".final-cta-section .btn")

  if (ctaBtn && cityDropdown) {
    ctaBtn.addEventListener("click", (e) => {
      if (!cityDropdown.value) {
        cityDropdown.style.borderColor = "#e74c3c"
        setTimeout(() => {
          cityDropdown.style.borderColor = "rgba(255,255,255,0.2)"
        }, 2000)
      } else {
        ctaBtn.textContent = "Searching..."
        setTimeout(() => {
          ctaBtn.textContent = "Find the Best Clubs"
        }, 1500)
      }
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

export default Top3TonightLockedPartially
