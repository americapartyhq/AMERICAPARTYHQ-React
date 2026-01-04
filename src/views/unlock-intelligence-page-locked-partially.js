import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './unlock-intelligence-page-locked-partially.css'

const UnlockIntelligencePageLockedPartially = (props) => {
  return (
    <div className="unlock-intelligence-page-locked-partially-container1">
      <Helmet>
        <title>
          unlock-intelligence-page-locked-partially - AMERICAPARTYHQ
        </title>
        <meta
          property="og:title"
          content="unlock-intelligence-page-locked-partially - AMERICAPARTYHQ"
        />
        <link rel="canonical" href="https://www.americapartyhq.co/sign-up" />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-signup">
        <div className="hero-signup__video-wrapper">
          <video
            src="https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4"
            loop="true"
            muted="true"
            autoPlay="true"
            playsInline="true"
            className="hero-signup__video"
          ></video>
          <div className="hero-signup__overlay"></div>
        </div>
        <div className="hero-signup__content-container">
          <div className="hero-signup__text-block">
            <h1 className="hero-title">Unlock Premium Intelligence</h1>
            <p className="hero-subtitle">
              Join for $9.99/month and access insider ratings, real-time timing,
              crowd intelligence, VIP priority, dress codes, and headliner
              schedules. Preview first, then unlock the intelligence that powers
              nightlife insiders.
            </p>
            <div className="hero-signup__actions">
              <a href="#signup-form">
                <div className="btn-xl btn-accent btn">
                  <span>Unlock Intelligence — $9.99/month</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="benefits-cta">
        <div className="benefits-cta__container">
          <div className="benefits-cta__grid">
            <div className="benefits-cta__item">
              <div className="benefits-cta__icon">
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
              <h3 className="section-subtitle">VIP Priority Intelligence</h3>
              <p className="section-content">
                Access real-time crowd intelligence and VIP priority status.
                Know exactly when to arrive and skip the lines with insider
                timing data.
              </p>
            </div>
            <div className="benefits-cta__item">
              <div className="benefits-cta__icon">
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
              <h3 className="section-subtitle">
                Insider Ratings &amp; Reviews
              </h3>
              <p className="section-content">
                Get exclusive access to verified insider ratings, dress code
                requirements, and headliner schedules before the general public
                knows.
              </p>
            </div>
            <div className="benefits-cta__item">
              <div className="benefits-cta__icon">
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
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle r="2" cx="4" cy="20"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="section-subtitle">Real-Time Crowd Intelligence</h3>
              <p className="section-content">
                Live crowd tracking, optimal arrival times, and intelligence on
                who&apos;s performing tonight. Never miss the peak moment again.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="signup-form" className="signup-form">
        <div className="signup-form__container">
          <div className="signup-form__card">
            <div className="signup-form__header">
              <h2 className="section-title">Join Premium Intelligence</h2>
              <p className="section-content">
                Enter your details to unlock $9.99/month Premium Intelligence
                access. Preview the basics, unlock insider ratings, real-time
                timing, crowd intelligence, VIP priority, dress codes, and
                headliner schedules.
              </p>
            </div>
            <form
              action="/submit-signup"
              method="POST"
              data-form-id="6348a2f0-0bf3-4d30-9c38-582faa653c94"
              className="signup-form__fields"
            >
              <div className="signup-form__group">
                <label htmlFor="full-name" className="signup-form__label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="true"
                  required="true"
                  placeholder="Enter your name"
                  data-form-field-id="full-name"
                  className="signup-form__input"
                />
              </div>
              <div className="signup-form__group">
                <label htmlFor="email" className="signup-form__label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required="true"
                  placeholder="your@email.com"
                  data-form-field-id="email"
                  className="signup-form__input"
                />
              </div>
              <div className="signup-form__group">
                <label htmlFor="phone" className="signup-form__label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required="true"
                  placeholder="+1 (555) 000-0000"
                  data-form-field-id="phone"
                  className="signup-form__input"
                />
              </div>
              <div className="signup-form__group">
                <label htmlFor="city" className="signup-form__label">
                  Preferred City
                </label>
                <select
                  id="city"
                  name="city"
                  data-form-field-id="city"
                  className="signup-form__input"
                >
                  <option value="miami">Miami</option>
                  <option value="new-york">New York</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="las-vegas">Las Vegas</option>
                  <option value="boston">Boston</option>
                </select>
              </div>
              <div className="signup-form__consent">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required="true"
                  data-form-field-id="consent"
                />
                <label htmlFor="consent" className="section-content">
                  I agree to receive exclusive event invites and VIP updates.
                </label>
              </div>
              <button
                id="thq_button_CSol"
                name="button"
                type="submit"
                data-form-field-id="thq_button_CSol"
                className="signup-form__submit btn btn-primary btn-lg"
              >
                Unlock Intelligence — $9.99/month
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="signal-features">
        <div className="signal-features__container">
          <div className="signal-features__header">
            <h2 className="section-title">Why AmericaPartyHQ?</h2>
          </div>
          <div className="signal-features__grid">
            <div className="signal-features__item">
              <div className="signal-features__icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              </div>
              <h4 className="section-subtitle">Curated City Guides</h4>
              <p className="section-content">
                Locally sourced intelligence on the best spots in every major
                nightlife hub.
              </p>
            </div>
            <div className="signal-features__item">
              <div className="signal-features__icon">
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
              <h4 className="section-subtitle">Secure VIP Inquiries</h4>
              <p className="section-content">
                Direct, private communication with venue managers for table
                bookings.
              </p>
            </div>
            <div className="signal-features__item">
              <div className="signal-features__icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              <h4 className="section-subtitle">Real-Time Heatmaps</h4>
              <p className="section-content">
                Know where the crowd is moving tonight with live popularity
                tracking.
              </p>
            </div>
            <div className="signal-features__item">
              <div className="signal-features__icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              </div>
              <h4 className="section-subtitle">Verified Reviews</h4>
              <p className="section-content">
                Unfiltered feedback from the nightlife elite to ensure the vibe
                matches your expectations.
              </p>
            </div>
            <div className="signal-features__item">
              <div className="signal-features__icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 5h4m-2-2v4m.985 5.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h4 className="section-subtitle">After-Hours Access</h4>
              <p className="section-content">
                Discover the best places to be after 1 AM, from hidden lounges
                to underground house clubs.
              </p>
            </div>
            <div className="signal-features__item">
              <div className="signal-features__icon">
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
                    <path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535zM8 15H7a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="10" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <h4 className="section-subtitle">Personal Concierge</h4>
              <p className="section-content">
                A dedicated team to handle your nightlife logistics from arrival
                to the final track.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-rail">
        <div className="testimonials-rail__wrapper">
          <div className="testimonials-rail__track">
            <div className="testimonials-rail__card">
              <p className="section-content">
                &quot;AmericaPartyHQ is the only tool I use to navigate the
                Vegas circuit. The arrival times are spot on.&quot;
              </p>
              <div className="testimonials-rail__author">
                <span className="section-subtitle">Marcus V.</span>
                <span className="section-content">VIP Promoter</span>
              </div>
            </div>
            <div className="testimonials-rail__card">
              <p className="section-content">
                &quot;The access is unparalleled. I&apos;ve been to clubs I
                didn&apos;t even know existed in Miami. Truly premium.&quot;
              </p>
              <div className="testimonials-rail__author">
                <span className="section-subtitle">Elena S.</span>
                <span className="section-content">Content Creator</span>
              </div>
            </div>
            <div className="testimonials-rail__card">
              <p className="section-content">
                &quot;Finally, a platform that understands the vibe matters more
                than just the name of the club.&quot;
              </p>
              <div className="testimonials-rail__author">
                <span className="section-subtitle">Jordan K.</span>
                <span className="section-content">Nightlife Enthusiast</span>
              </div>
            </div>
            <div className="testimonials-rail__card">
              <p className="section-content">
                &quot;The VIP inquiry system saved me hours of back-and-forth
                for my birthday table. Seamless.&quot;
              </p>
              <div className="testimonials-rail__author">
                <span className="section-subtitle">Sarah L.</span>
                <span className="section-content">Socialite</span>
              </div>
            </div>
            <div className="testimonials-rail__card">
              <p className="section-content">
                &quot;If you care about where you&apos;re seen and when you
                arrive, this is your bible.&quot;
              </p>
              <div className="testimonials-rail__author">
                <span className="section-subtitle">David R.</span>
                <span className="section-content">DJ &amp; Producer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="nightlife-gallery">
        <div className="nightlife-gallery__grid">
          <div className="nightlife-gallery__item">
            <img
              alt="Vibrant nightlife scene"
              src="https://images.pexels.com/photos/3419646/pexels-photo-3419646.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="nightlife-gallery__img"
            />
            <div className="nightlife-gallery__overlay">
              <span className="section-subtitle">Miami Nights</span>
            </div>
          </div>
          <div className="nightlife-gallery__item">
            <img
              alt="VIP club experience"
              src="https://images.pexels.com/photos/7594151/pexels-photo-7594151.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="nightlife-gallery__img"
            />
            <div className="nightlife-gallery__overlay">
              <span className="section-subtitle">Exclusive Lounges</span>
            </div>
          </div>
          <div className="nightlife-gallery__item">
            <img
              alt="Lively party crowd"
              src="https://images.pexels.com/photos/9080099/pexels-photo-9080099.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="nightlife-gallery__img"
            />
            <div className="nightlife-gallery__overlay">
              <span className="section-subtitle">Mainstage Energy</span>
            </div>
          </div>
          <div className="nightlife-gallery__item">
            <img
              alt="Neon club lighting"
              src="https://images.pexels.com/photos/11904703/pexels-photo-11904703.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="nightlife-gallery__img"
            />
            <div className="nightlife-gallery__overlay">
              <span className="section-subtitle">After Hours</span>
            </div>
          </div>
          <div className="nightlife-gallery__item">
            <img
              alt="Martini at the bar"
              src="https://images.pexels.com/photos/9565921/pexels-photo-9565921.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="nightlife-gallery__img"
            />
            <div className="nightlife-gallery__overlay">
              <span className="section-subtitle">Mixology Masters</span>
            </div>
          </div>
          <div className="nightlife-gallery__item">
            <img
              alt="Festive celebration"
              src="https://images.pexels.com/photos/31148732/pexels-photo-31148732.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="nightlife-gallery__img"
            />
            <div className="nightlife-gallery__overlay">
              <span className="section-subtitle">VIP Service</span>
            </div>
          </div>
        </div>
      </section>
      <section className="nightlife-faq">
        <div className="nightlife-faq__container">
          <div className="nightlife-faq__header">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="nightlife-faq__list">
            <details className="nightlife-faq__item">
              <summary className="nightlife-faq__trigger">
                <span className="section-subtitle">
                  What do I get with Premium Intelligence?
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="nightlife-faq__icon"
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
              <div className="nightlife-faq__content">
                <p className="section-content">
                  Premium Intelligence is $9.99/month and includes: insider
                  ratings from verified VIPs, real-time crowd timing and arrival
                  windows, live headliner schedules, dress code requirements,
                  VIP priority access coordination, and exclusive crowd
                  intelligence data. Preview basic venue info free, unlock
                  everything for $9.99/month.
                </p>
              </div>
            </details>
            <details className="nightlife-faq__item">
              <summary className="nightlife-faq__trigger">
                <span className="section-subtitle">
                  How do VIP inquiries work?
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="nightlife-faq__icon"
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
              <div className="nightlife-faq__content">
                <p className="section-content">
                  Simply fill out the VIP form for your desired venue. Our team
                  directly connects you with the venue&apos;s table management
                  to secure your booking.
                </p>
              </div>
            </details>
            <details className="nightlife-faq__item">
              <summary className="nightlife-faq__trigger">
                <span className="section-subtitle">
                  What cities are currently covered?
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="nightlife-faq__icon"
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
              <div className="nightlife-faq__content">
                <p className="section-content">
                  We currently offer curated guides for Miami, New York, Los
                  Angeles, Las Vegas, and Boston, with more cities launching
                  every month.
                </p>
              </div>
            </details>
            <details className="nightlife-faq__item">
              <summary className="nightlife-faq__trigger">
                <span className="section-subtitle">Is my data secure?</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="nightlife-faq__icon"
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
              <div className="nightlife-faq__content">
                <p className="section-content">
                  Absolutely. We use industry-standard encryption to protect
                  your personal information and inquiry details. Your privacy is
                  our priority.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <div className="unlock-intelligence-page-locked-partially-container2">
        <div className="unlock-intelligence-page-locked-partially-container3">
          <Script
            html={`<script defer data-name="nightlife-signup-interactions">
(function(){
  // Parallax effect for hero video
  window.addEventListener('scroll', () => {
    const video = document.querySelector('.hero-signup__video');
    const scroll = window.pageYOffset;
    if (video) {
      video.style.transform = \`translateY(\${scroll * 0.3}px)\`;
    }
  });

  // Smooth appearance for signal features on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const signalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        signalObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.signal-features__item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
    signalObserver.observe(item);
  });

  // Form field focus animations
  const inputs = document.querySelectorAll('.signup-form__input');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.style.transform = 'translateX(5px)';
      input.parentElement.style.transition = 'transform 0.3s ease';
    });
    input.addEventListener('blur', () => {
      input.parentElement.style.transform = 'translateX(0)';
    });
  });

  // Simple testimonial rail auto-scroll hint
  const rail = document.querySelector('.testimonials-rail__track');
  if (rail) {
    let isDown = false;
    let startX;
    let scrollLeft;

    rail.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - rail.offsetLeft;
      scrollLeft = rail.scrollLeft;
    });
    rail.addEventListener('mouseleave', () => {
      isDown = false;
    });
    rail.addEventListener('mouseup', () => {
      isDown = false;
    });
    rail.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - rail.offsetLeft;
      const walk = (x - startX) * 2;
      rail.scrollLeft = scrollLeft - walk;
    });
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

export default UnlockIntelligencePageLockedPartially
