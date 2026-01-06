import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './contact-us.css'

const ContactUs = (props) => {
  return (
    <div className="contact-us-container1">
      <Helmet>
        <title>contact-us - AMERICAPARTYHQ</title>
        <meta property="og:title" content="contact-us - AMERICAPARTYHQ" />
        <link rel="canonical" href="https://www.americapartyhq.co/contact" />
      </Helmet>
      <div className="contact-us-container2">
        <div className="contact-us-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
* {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <Navigation></Navigation>
      <section className="contact-hero-section">
        <div className="contact-hero-background">
          <img
            alt="Luxury nightclub interior"
            src="https://images.pexels.com/photos/7270015/pexels-photo-7270015.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="contact-hero-image"
          />
        </div>
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1 className="hero-title">Get in Touch</h1>
          <p className="hero-subtitle">
            Questions? Partnerships? We&apos;d love to hear from you.
          </p>
        </div>
      </section>
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-wrapper">
            <h2 className="section-title">Send Us a Message</h2>
            <form
              action="/submit"
              method="POST"
              data-form-id="13039947-8bfe-4a7b-acdd-8f6a7f8b1074"
              className="contact-form"
            >
              <div className="contact-form-row">
                <div className="contact-form-field">
                  <label htmlFor="contact-name" className="contact-form-label">
                    Full Name
                  </label>
                  <div className="contact-input-wrapper">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      className="contact-input-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle r="4" cx="12" cy="7"></circle>
                      </g>
                    </svg>
                    <input
                      type="text"
                      id="contact-name"
                      name="true"
                      required="true"
                      placeholder="John Doe"
                      data-form-field-id="contact-name"
                      className="contact-form-input"
                    />
                  </div>
                </div>
                <div className="contact-form-field">
                  <label htmlFor="contact-email" className="contact-form-label">
                    Email Address
                  </label>
                  <div className="contact-input-wrapper">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      className="contact-input-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required="true"
                      placeholder="john@example.com"
                      data-form-field-id="contact-email"
                      className="contact-form-input"
                    />
                  </div>
                </div>
              </div>
              <div className="contact-form-row">
                <div className="contact-form-field">
                  <label htmlFor="contact-phone" className="contact-form-label">
                    Phone Number
                  </label>
                  <div className="contact-input-wrapper">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      className="contact-input-icon"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder="(555) 123-4567"
                      data-form-field-id="contact-phone"
                      className="contact-form-input"
                    />
                  </div>
                </div>
                <div className="contact-form-field">
                  <label
                    htmlFor="contact-subject"
                    className="contact-form-label"
                  >
                    Subject
                  </label>
                  <div className="contact-input-wrapper">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      className="contact-input-icon"
                    >
                      <path
                        d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <select
                      id="contact-subject"
                      name="subject"
                      required="true"
                      data-form-field-id="contact-subject"
                      className="contact-form-select"
                    >
                      <option value="true">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="contact-form-field">
                <label htmlFor="contact-message" className="contact-form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  required="true"
                  placeholder="Tell us how we can help you..."
                  data-form-field-id="contact-message"
                  className="contact-form-textarea"
                ></textarea>
              </div>
              <a
                href="/home"
                id="tblAoG17IVWLU0IMK"
                name="button"
                data-form-field-id="tblAoG17IVWLU0IMK"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-us-thq-btn-elm contact-submit-btn btn btn-primary"
              >
                Send Message
              </a>
            </form>
          </div>
        </div>
      </section>
      <section className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon-wrapper">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="contact-info-icon"
                >
                  <path
                    d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="contact-info-title">Phone</h3>
              <p className="contact-info-text">In progress..</p>
              <p className="contact-info-subtext">Mon-Fri 9am-6pm EST</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon-wrapper">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="contact-info-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                  </g>
                </svg>
              </div>
              <h3 className="contact-info-title">Email</h3>
              <p className="contact-us-thq-contact-info-text-elm2 contact-info-text">
                contact.americapartyhq@gmail.com
              </p>
              <p className="contact-info-subtext">We reply within 24 hours</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon-wrapper">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="contact-info-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                    <circle r="3" cx="10" cy="10"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="contact-info-title">Office</h3>
              <p className="contact-info-text">AMERICAPARTYHQ</p>
              <p className="contact-info-subtext">Chicopee, ma 01013</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-social-section">
        <div className="contact-social-container">
          <h2 className="section-title">Follow Our Journey</h2>
          <p className="section-subtitle">
            Stay connected with the latest nightlife updates
          </p>
          <div className="contact-social-links">
            <div
              aria-label="Follow us on Instagram"
              className="contact-social-link"
            >
              <a
                href="https://www.instagram.com/americaparty.hq/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="contact-us-icon25"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                      width="20"
                      height="20"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                  </g>
                </svg>
              </a>
            </div>
            <a
              href="https://www.tiktok.com/@americapartyhq"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div
                aria-label="Follow us on TikTok"
                className="contact-us-thq-contact-social-link-elm2 contact-social-link"
              >
                <svg
                  fill="currentColor"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74a2.89 2.89 0 0 1 2.31-4.64a2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="contact-faq-section">
        <div className="contact-faq-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="contact-faq-list">
            <details className="contact-faq-item">
              <summary className="contact-faq-summary">
                <span className="contact-faq-question">
                  How do I submit a VIP inquiry?
                </span>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  className="contact-faq-icon"
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
              <div className="contact-faq-answer">
                <p className="section-content">
                  You can submit a VIP inquiry through our contact form above by
                  selecting &quot;Partnership&quot; as your subject. Our team
                  will respond within 24 hours with availability and pricing
                  options.
                </p>
              </div>
            </details>
            <details className="contact-faq-item">
              <summary className="contact-faq-summary">
                <span className="contact-faq-question">
                  Do you offer media partnerships?
                </span>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  className="contact-faq-icon"
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
              <div className="contact-faq-answer">
                <p className="section-content">
                  Yes! We collaborate with content creators, influencers, and
                  media outlets. Select &quot;Media&quot; in the subject
                  dropdown and tell us about your platform and audience.
                </p>
              </div>
            </details>
            <details className="contact-faq-item">
              <summary className="contact-faq-summary">
                <span className="contact-faq-question">
                  How can I list my venue on the platform?
                </span>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  className="contact-faq-icon"
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
              <div className="contact-faq-answer">
                <p className="section-content">
                  Venue owners can apply for a listing by selecting
                  &quot;Partnership&quot; in the contact form. Include your
                  venue name, location, and a brief description. We&apos;ll
                  reach out to discuss next steps.
                </p>
              </div>
            </details>
            <details className="contact-faq-item">
              <summary className="contact-faq-summary">
                <span className="contact-faq-question">
                  What are your response times?
                </span>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  className="contact-faq-icon"
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
              <div className="contact-faq-answer">
                <p className="section-content">
                  We typically respond to all inquiries within 24 hours during
                  business days (Monday-Friday). For urgent partnership
                  requests, please include &quot;URGENT&quot; in your message
                  subject.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <div className="contact-us-container4">
        <div className="contact-us-container5">
          <Script
            html={`<style>
        @keyframes fadeIn {from {opacity: 0;
transform: translateY(-10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="contact-us-container6">
        <div className="contact-us-container7">
          <Script
            html={`<script defer data-name="contact-form-validation">
(function(){
const form = document.getElementById('contact-name')?.form;

if (form) {
  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
  
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (!this.checkValidity()) {
        this.setAttribute('aria-invalid', 'true');
      } else {
        this.setAttribute('aria-invalid', 'false');
      }
    });
    
    input.addEventListener('input', function() {
      if (this.checkValidity()) {
        this.setAttribute('aria-invalid', 'false');
      }
    });
  });
}
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
