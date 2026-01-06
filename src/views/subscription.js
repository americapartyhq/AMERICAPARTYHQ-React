import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './subscription.css'

const Subscription = (props) => {
  return (
    <div className="subscription-container1">
      <Helmet>
        <title>subscription - AMERICAPARTYHQ</title>
        <meta property="og:title" content="subscription - AMERICAPARTYHQ" />
        <link rel="canonical" href="https://www.americapartyhq.co/sub" />
      </Helmet>
      <div className="membership-page-container">
        <Navigation rootClassName="navigationroot-class-name"></Navigation>
        <section className="membership-hero-section">
          <div className="membership-hero-background">
            <img
              alt="Sophisticated nightclub interior"
              src="https://images.pexels.com/photos/18408870/pexels-photo-18408870.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="membership-hero-image"
            />
          </div>
          <div className="membership-hero-overlay"></div>
          <div className="membership-hero-content">
            <div className="membership-hero-badge">
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
              <span>Elite Membership</span>
            </div>
            <h1 className="hero-title">Join the Elite</h1>
            <p className="hero-subtitle">
              Unlock VIP access to exclusive clubs, reserved tables, and insider
              intelligence
            </p>
            <div className="membership-hero-actions">
              <button className="btn-accent btn btn-lg">
                Start Free Trial
              </button>
              <button className="btn-outline btn btn-lg">
                View All Benefits
              </button>
            </div>
          </div>
        </section>
        <section
          id="membership-tiers-anchor"
          className="membership-tiers-section"
        >
          <div className="membership-tiers-container">
            <div className="membership-tiers-header">
              <h2 className="section-title">Choose Your Experience</h2>
              <p className="section-subtitle">
                Select the membership tier that fits your nightlife lifestyle
              </p>
            </div>
            <div className="membership-tiers-grid">
              <article className="membership-tier-card">
                <div className="tier-card-header">
                  <h3 className="tier-card-name">Discover</h3>
                  <div className="tier-card-price">
                    <span className="tier-price-amount">$9.99</span>
                    <span className="tier-price-period">per month</span>
                  </div>
                </div>
                <ul className="tier-card-features">
                  <li className="tier-feature-item">
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
                    <span>Access to city guides</span>
                  </li>
                  <li className="tier-feature-item">
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
                    <span>Club ratings &amp; reviews</span>
                  </li>
                  <li className="tier-feature-item">
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
                    <span>Peak time insights</span>
                  </li>
                  <li className="tier-feature-item">
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
                    <span>Basic filters</span>
                  </li>
                </ul>
                <button className="btn-outline tier-card-cta btn btn-lg">
                  Get Started
                </button>
              </article>
              <article className="tier-featured membership-tier-card">
                <div className="tier-featured-badge">
                  <span>Most Popular</span>
                </div>
                <div className="tier-card-header">
                  <h3 className="tier-card-name">Premium</h3>
                  <div className="tier-card-price">
                    <span className="tier-price-amount">$19.99</span>
                    <span className="tier-price-period">per month</span>
                  </div>
                </div>
                <ul className="tier-card-features">
                  <li className="tier-feature-item">
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
                    <span>Everything in Discover +</span>
                  </li>
                  <li className="tier-feature-item">
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
                    <span>VIP table requests</span>
                  </li>
                  <li className="tier-feature-item">
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
                    <span>Reserved seating at 50+ clubs</span>
                  </li>
                  <li className="tier-feature-item">
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
                  <li className="tier-feature-item">
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
                    <span>Exclusive club partnerships</span>
                  </li>
                  <li className="tier-feature-item">
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
                    <span>Early access to events</span>
                  </li>
                </ul>
                <button
                  onclick="document.getElementById('membership-tiers-anchor').scrollIntoView(&#123;behavior: 'smooth'&#125;)"
                  className="tier-card-cta btn-accent btn btn-lg"
                >
                  Start 1-day Free Trial
                </button>
              </article>
              <article className="membership-tier-card">
                <div className="tier-card-header">
                  <h3 className="tier-card-name">Concierge</h3>
                  <div className="tier-card-price">
                    <span className="tier-price-amount">$59.99</span>
                    <span className="tier-price-period">per month</span>
                  </div>
                </div>
                <ul className="tier-card-features">
                  <li className="tier-feature-item">
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
                    <span>Everything in VIP +</span>
                  </li>
                  <li className="tier-feature-item">
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
                    <span>Personal concierge service</span>
                  </li>
                  <li className="tier-feature-item">
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
                    <span>Direct club manager access</span>
                  </li>
                  <li className="tier-feature-item">
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
                    <span>Custom event planning</span>
                  </li>
                  <li className="tier-feature-item">
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
                    <span>VIP transportation coordination</span>
                  </li>
                  <li className="tier-feature-item">
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
                    <span>Unlimited table requests</span>
                  </li>
                  <li className="tier-feature-item">
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
                    <span>White-glove service</span>
                  </li>
                </ul>
                <button className="btn-outline tier-card-cta btn btn-lg">
                  Get started
                </button>
              </article>
            </div>
          </div>
        </section>
        <section className="membership-benefits-section">
          <div className="membership-benefits-container">
            <div className="membership-benefits-header">
              <h2 className="section-title">Why Members Love Us</h2>
              <p className="section-subtitle">
                Experience nightlife like never before with exclusive benefits
              </p>
            </div>
            <div className="membership-benefits-grid">
              <article className="benefit-card">
                <div className="benefit-card-icon">
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
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                      <circle r="2" cx="4" cy="20"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="benefit-card-title">Insider Intelligence</h3>
                <p className="benefit-card-description">
                  Real-time data on what&apos;s hot tonight. Know which clubs
                  are packed, which DJs are spinning, and where the energy is
                  highest.
                </p>
              </article>
              <article className="benefit-card">
                <div className="benefit-card-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
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
                <h3 className="benefit-card-title">Exclusive Access</h3>
                <p className="benefit-card-description">
                  Skip the line and get VIP treatment. Reserved tables, priority
                  entry, and direct connections to club managers at 50+ venues.
                </p>
              </article>
              <article className="benefit-card">
                <div className="benefit-card-icon">
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
                <h3 className="benefit-card-title">Smart Timing</h3>
                <p className="benefit-card-description">
                  Know exactly when to arrive for the best experience. Our
                  timing intelligence ensures you hit every venue at peak
                  energy.
                </p>
              </article>
              <article className="benefit-card">
                <div className="benefit-card-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="benefit-card-title">Premium Support</h3>
                <p className="benefit-card-description">
                  24/7 VIP assistance whenever you need it. Our concierge team
                  is always ready to help with reservations, recommendations,
                  and emergencies.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="membership-guarantee-section">
          <div className="membership-guarantee-container">
            <div className="guarantee-icon-wrapper">
              <svg
                width="64"
                xmlns="http://www.w3.org/2000/svg"
                height="64"
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
            <h2 className="guarantee-title">100% Satisfaction Guaranteed</h2>
            <p className="guarantee-description">
              Not happy? Cancel anytime, no questions asked. We&apos;re
              confident you&apos;ll love the experience, but your satisfaction
              is our priority.
            </p>
          </div>
        </section>
        <section className="membership-faq-section">
          <div className="membership-faq-container">
            <div className="membership-faq-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Everything you need to know about membership
              </p>
            </div>
            <div className="membership-faq-list">
              <details className="page6-faq-item1">
                <summary className="faq-question">
                  <span>Can I cancel anytime?</span>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    className="page6-faq-chevron1"
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
                <div className="faq-answer">
                  <p>
                    Yes, absolutely. You can cancel your membership at any time
                    from your account settings. There are no long-term contracts
                    or cancellation fees. If you cancel, you&apos;ll continue to
                    have access until the end of your current billing period.
                  </p>
                </div>
              </details>
              <details className="page6-faq-item1">
                <summary className="faq-question">
                  <span>What payment methods are accepted?</span>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    className="page6-faq-chevron1"
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
                <div className="faq-answer">
                  <p>
                    We accept all major credit cards (Visa, Mastercard, American
                    Express, Discover), debit cards, and digital wallets like
                    Apple Pay and Google Pay. All transactions are securely
                    processed and encrypted.
                  </p>
                </div>
              </details>
              <details className="page6-faq-item1">
                <summary className="faq-question">
                  <span>Do I get a free trial?</span>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    className="page6-faq-chevron1"
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
                <div className="faq-answer">
                  <p>
                    Yes! The VIP tier includes a 14-day free trial with full
                    access to all features. No credit card required to start.
                    You&apos;ll only be charged after your trial period ends,
                    and you can cancel anytime during the trial with no charges.
                  </p>
                </div>
              </details>
              <details className="page6-faq-item1">
                <summary className="faq-question">
                  <span>How do VIP table requests work?</span>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    className="page6-faq-chevron1"
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
                <div className="faq-answer">
                  <p>
                    Simply browse our partner clubs, select your preferred venue
                    and time, and submit a table request through the platform.
                    Our team will coordinate directly with the club and confirm
                    your reservation within 2-4 hours. For Concierge members, we
                    handle all the details including bottle service and special
                    requests.
                  </p>
                </div>
              </details>
              <details className="page6-faq-item1">
                <summary className="faq-question">
                  <span>Is there a group discount?</span>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    className="page6-faq-chevron1"
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
                <div className="faq-answer">
                  <p>
                    Yes! We offer special group rates for teams of 5 or more.
                    Contact our sales team to learn about corporate packages,
                    bachelor/bachelorette party groups, and custom plans
                    tailored to your crew&apos;s nightlife needs.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="membership-final-cta-section">
          <div className="membership-final-cta-container">
            <div className="final-cta-content">
              <h2 className="final-cta-title">
                Ready to Level Up Your Nightlife?
              </h2>
              <p className="final-cta-description">
                Join thousands of members who never miss the best nights out
              </p>
              <div className="final-cta-actions">
                <button className="btn-xl btn-accent btn">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="subscription-container2">
        <div className="subscription-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.membership-tier-card, .benefit-card, .faq-item, .faq-chevron {
  transition: none;
}
.membership-tier-card:hover, .tier-featured:hover, .benefit-card:hover {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Subscription
