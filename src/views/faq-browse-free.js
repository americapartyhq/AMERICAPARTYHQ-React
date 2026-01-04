import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './faq-browse-free.css'

const FAQBrowseFree = (props) => {
  return (
    <div className="faq-browse-free-container1">
      <Helmet>
        <title>FAQ-browse-free - AMERICAPARTYHQ</title>
        <meta property="og:title" content="FAQ-browse-free - AMERICAPARTYHQ" />
        <link rel="canonical" href="https://www.americapartyhq.co/faq" />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-faq">
        <div className="hero-faq-media">
          <video
            src="https://videos.pexels.com/video-files/5011088/5011088-hd_1920_1080_25fps.mp4"
            loop="true"
            muted="true"
            poster="https://images.pexels.com/videos/5011088/pictures/preview-0.jpg"
            autoPlay="true"
            playsInline="true"
          ></video>
          <div className="hero-faq-overlay"></div>
        </div>
        <div className="hero-faq-content">
          <h1 className="faq-hero-title hero-title">
            Unlock Nightlife Intelligence
          </h1>
          <p className="hero-subtitle">
            Preview clubs for free. Unlock premium intelligence for insider
            timing, ratings, and VIP access.
          </p>
          <div className="hero-faq-search-wrapper">
            <div className="hero-faq-search-container">
              <div className="hero-faq-icon">
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
              <select className="hero-faq-select">
                <option value="true" disabled="true" selected="true">
                  Select your city for tailored info...
                </option>
                <option value="miami">Miami</option>
                <option value="nyc">New York City</option>
                <option value="vegas">Las Vegas</option>
                <option value="la">Los Angeles</option>
                <option value="boston">Boston</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-accordion-section">
        <div className="faq-accordion-container">
          <h2 className="section-title">Premium Intelligence Features</h2>
          <div className="faq-accordion-list">
            <details className="faq-item">
              <summary className="faq-summary">
                <span>What can I see with free preview access?</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="faq-chevron"
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
              <div className="faq-content">
                <p className="section-content">
                  Free preview shows club names, basic info, and general
                  location. Unlock Intelligence ($9.99/month) reveals real-time
                  crowd data, insider arrival times, and curated ratings from
                  industry experts.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                <span>What is Premium Intelligence access?</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="faq-chevron"
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
              <div className="faq-content">
                <p className="section-content">
                  Premium Intelligence unlocks exclusive insights: optimal
                  arrival windows to avoid lines, real-time crowd density,
                  headliner schedules, and insider ratings. Available for
                  $9.99/month.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                <span>Does VIP booking require Premium Intelligence?</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="faq-chevron"
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
              <div className="faq-content">
                <p className="section-content">
                  No. VIP Table inquiries are available to all users. However,
                  Premium Intelligence members get priority response times and
                  exclusive table placement recommendations.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                <span>What intelligence is included in premium access?</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="faq-chevron"
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
              <div className="faq-content">
                <p className="section-content">
                  Premium Intelligence includes: insider ratings from nightlife
                  professionals, real-time arrival timing, crowd density
                  forecasts, exclusive dress code tips, and headliner
                  performance schedules.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                <span>Can I cancel Premium Intelligence anytime?</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="faq-chevron"
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
              <div className="faq-content">
                <p className="section-content">
                  Yes. Premium Intelligence subscriptions ($9.99/month) can be
                  cancelled anytime. You&apos;ll retain access until the end of
                  your current billing period. Free preview access remains
                  available.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                <span>Is there a free trial for Premium Intelligence?</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="faq-chevron"
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
              <div className="faq-content">
                <p className="section-content">
                  New users get 7 days free to experience full Premium
                  Intelligence access. Browse unlimited insider data, arrival
                  times, and ratings risk-free before committing to $9.99/month.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="booking-timeline-section">
        <div className="booking-timeline-container">
          <h2 className="section-title">How Premium Intelligence Works</h2>
          <div className="timeline-steps">
            <div className="timeline-step">
              <div className="step-header">
                <div className="faq-step-number">
                  <span>01</span>
                </div>
                <div className="step-line"></div>
              </div>
              <div className="step-body">
                <h3 className="faq-step-title">Browse Free Previews</h3>
                <p className="section-content">
                  Explore club names, locations, and basic details at no cost.
                  See what&apos;s available before unlocking premium insights.
                </p>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-header">
                <div className="faq-step-number">
                  <span>02</span>
                </div>
                <div className="step-line"></div>
              </div>
              <div className="step-body">
                <h3 className="faq-step-title">Unlock Intelligence</h3>
                <p className="section-content">
                  Subscribe for $9.99/month to reveal insider arrival times,
                  real-time crowd data, and expert ratings on every club.
                </p>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-header">
                <div className="faq-step-number">
                  <span>03</span>
                </div>
                <div className="step-line"></div>
              </div>
              <div className="step-body">
                <h3 className="faq-step-title">Access Exclusive Data</h3>
                <p className="section-content">
                  View complete intelligence: optimal timing windows, density
                  forecasts, dress code specifics, and VIP table availability.
                </p>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-header">
                <div className="faq-step-number">
                  <span>04</span>
                </div>
                <div className="step-line"></div>
              </div>
              <div className="step-body">
                <h3 className="faq-step-title">Optimize Your Night</h3>
                <p className="section-content">
                  Use intelligence data to arrive at peak energy, skip lines,
                  and maximize your nightlife experience with insider knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="rules-grid-section">
        <div className="rules-grid-container">
          <h2 className="section-title">Premium Intelligence Benefits</h2>
          <div className="rules-grid">
            <div className="rule-card">
              <div className="rule-icon">
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
              <h3 className="rule-title">Real-Time Timing</h3>
              <p className="section-content">
                Premium members see live arrival windows and peak capacity
                alerts—know exactly when to arrive for optimal entry.
              </p>
            </div>
            <div className="rule-card">
              <div className="rule-icon">
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
              <h3 className="rule-title">Insider Ratings</h3>
              <p className="section-content">
                Access curated ratings from nightlife professionals—not generic
                reviews. Intelligence based on sound quality, service, and crowd
                caliber.
              </p>
            </div>
            <div className="rule-card">
              <div className="rule-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11-4v2m0 10v2m0-8v2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="rule-title">Crowd Intelligence</h3>
              <p className="section-content">
                Premium reveals real-time density forecasts and guest
                demographics. Know the vibe before you commit.
              </p>
            </div>
            <div className="rule-card">
              <div className="rule-icon">
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
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path>
                  </g>
                </svg>
              </div>
              <h3 className="rule-title">VIP Priority Access</h3>
              <p className="section-content">
                Premium Intelligence members get priority VIP inquiry responses
                and exclusive table placement recommendations from our concierge
                team.
              </p>
            </div>
            <div className="rule-card">
              <div className="rule-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              </div>
              <h3 className="rule-title">Dress Code Details</h3>
              <p className="section-content">
                See exact dress code requirements for each venue. Premium
                members get specific guidance to ensure entry every time.
              </p>
            </div>
            <div className="rule-card">
              <div className="rule-icon">
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
                    <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"></path>
                    <path d="m7 18l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 13l6 6"></path>
                  </g>
                </svg>
              </div>
              <h3 className="rule-title">Headliner Schedules</h3>
              <p className="section-content">
                Premium Intelligence reveals DJ set times, special performances,
                and guest artist appearances before general announcements.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="trust-policies-section">
        <div className="trust-policies-container">
          <h2 className="section-title">Safety &amp; Terms</h2>
          <div className="policies-grid">
            <div className="policy-item">
              <h3 className="policy-title">Age Policy</h3>
              <p className="section-content">
                Strict 21+ only. Valid government-issued ID or Passport is
                mandatory for entry at all partner venues.
              </p>
            </div>
            <div className="policy-item">
              <h3 className="policy-title">ID Requirements</h3>
              <p className="section-content">
                Digital IDs are not accepted. Physical IDs must be in good
                condition with a clear photo and birthdate.
              </p>
            </div>
            <div className="policy-item">
              <h3 className="policy-title">Refund Policy</h3>
              <p className="section-content">
                Inquiry fees are non-refundable. Table deposits follow
                individual venue cancellation windows.
              </p>
            </div>
            <div className="policy-item">
              <h3 className="policy-title">Safety Protocol</h3>
              <p className="section-content">
                We only partner with vetted venues that maintain high security
                standards and professional staff.
              </p>
            </div>
            <div className="policy-item">
              <h3 className="policy-title">Entry Rights</h3>
              <p className="section-content">
                Venues reserve the right to refuse entry based on intoxication,
                conduct, or dress code violations.
              </p>
            </div>
            <div className="policy-item">
              <h3 className="policy-title">Privacy</h3>
              <p className="section-content">
                Your personal data and booking details are encrypted and never
                shared with third-party advertisers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="final-cta-section faq-final-cta-section">
        <div className="final-cta-container">
          <div className="faq-cta-card">
            <div className="faq-cta-content">
              <h2 className="section-title">Start With Free Preview</h2>
              <p className="section-content">
                Browse clubs for free, then unlock Premium Intelligence
                ($9.99/month) for insider timing, ratings, and exclusive access
                data.
              </p>
            </div>
            <form
              action="/search"
              method="GET"
              data-form-id="0b46dd42-476a-451c-ad6b-49e43b5a6a83"
              className="faq-cta-form"
            >
              <div className="cta-input-group">
                <select
                  id="thq_select_QEgn"
                  name="select"
                  required="true"
                  data-form-field-id="thq_select_QEgn"
                  className="cta-select"
                >
                  <option value="true" disabled="true" selected="true">
                    Choose City
                  </option>
                  <option value="miami">Miami</option>
                  <option value="nyc">New York City</option>
                  <option value="vegas">Las Vegas</option>
                  <option value="la">Los Angeles</option>
                </select>
                <button
                  id="thq_button_q4E-"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_q4E-"
                  className="btn-accent btn btn-lg"
                >
                  Browse Free
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="faq-browse-free-container2">
        <div className="faq-browse-free-container3">
          <Script
            html={`<style>
section {
  padding: var(--spacing-4xl) 0;
  position: relative;
  overflow: hidden;
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="faq-browse-free-container4">
        <div className="faq-browse-free-container5">
          <Script
            html={`<script defer data-name="faq-interactions">
(function(){
  const heroSelect = document.querySelector(".hero-faq-select")
  if (heroSelect) {
    heroSelect.addEventListener("change", (e) => {
      const city = e.target.value
      console.log(\`User selected city: \${city}. Updating FAQ context...\`)
      // In a real app, this would trigger a fetch for city-specific FAQ data
    })
  }

  const faqItems = document.querySelectorAll(".faq-item")
  faqItems.forEach((item) => {
    item.addEventListener("toggle", (e) => {
      if (item.open) {
        faqItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.open) {
            otherItem.removeAttribute("open")
          }
        })
      }
    })
  })

  const ctaForm = document.querySelector(".cta-form")
  if (ctaForm) {
    ctaForm.addEventListener("submit", (e) => {
      const select = ctaForm.querySelector("select")
      if (!select.value) {
        e.preventDefault()
        select.style.borderColor = "#e74c3c"
        setTimeout(() => (select.style.borderColor = "var(--color-border)"), 2000)
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

export default FAQBrowseFree
