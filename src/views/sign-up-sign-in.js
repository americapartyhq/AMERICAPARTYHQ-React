import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './sign-up-sign-in.css'

const SignUpSignIn = (props) => {
  return (
    <div className="sign-up-sign-in-container">
      <Helmet>
        <title>sign-up-sign-in - AMERICAPARTYHQ</title>
        <meta property="og:title" content="sign-up-sign-in - AMERICAPARTYHQ" />
        <link rel="canonical" href="https://www.americapartyhq.co/sign" />
      </Helmet>
      <Navigation></Navigation>
      <section className="auth-page-container">
        <div className="auth-background-wrapper">
          <img
            alt="Luxury nightclub ambient lighting"
            src="https://images.pexels.com/photos/2020309/pexels-photo-2020309.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="auth-background-image"
          />
          <div className="auth-background-overlay"></div>
        </div>
        <div className="auth-cards-wrapper">
          <article className="auth-card">
            <div className="auth-card-header">
              <h1 className="auth-card-title hero-title">Create Account</h1>
            </div>
            <form
              action="/signup"
              method="POST"
              enctype="application/x-www-form-urlencoded"
              data-form-id="c0f332a8-e8e0-4d22-a6c5-37096fe47e18"
              className="auth-form"
            >
              <div className="auth-input-group">
                <label htmlFor="signup-email" className="auth-input-label">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    className="sign-up-sign-in-thq-auth-input-icon-elm1"
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
                  <span className="sign-up-sign-in-thq-visually-hidden-elm1">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  id="signup-email"
                  name="email"
                  required="true"
                  placeholder="Email Address"
                  data-form-field-id="signup-email"
                  className="auth-input"
                />
              </div>
              <div className="auth-input-group">
                <label htmlFor="signup-password" className="auth-input-label">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    className="sign-up-sign-in-thq-auth-input-icon-elm2"
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
                  <span className="sign-up-sign-in-thq-visually-hidden-elm2">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  id="signup-password"
                  name="password"
                  required="true"
                  minlength="8"
                  placeholder="Password"
                  data-form-field-id="signup-password"
                  className="auth-input"
                />
              </div>
              <button
                id="tbld753fu6HOCSdvz"
                name="button"
                type="submit"
                data-form-field-id="tbld753fu6HOCSdvz"
                className="auth-submit-btn btn-accent btn btn-lg"
              >
                Create Account
              </button>
            </form>
            <div className="auth-card-footer">
              <p className="section-content auth-footer-text">
                <span>
                  {' '}
                  Already have an account?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a href="#signin">
                  <div className="sign-up-sign-in-thq-auth-link-elm1">
                    <span>
                      {' '}
                      Sign in
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                      className="auth-link-icon"
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
                </a>
              </p>
            </div>
          </article>
          <article className="auth-card">
            <div className="auth-card-header">
              <h1 className="auth-card-title hero-title">Welcome Back</h1>
            </div>
            <form
              action="/login"
              method="POST"
              data-form-id="17527add-737e-4175-9a4c-92a3a8885b21"
              className="auth-form"
            >
              <div className="auth-input-group">
                <label htmlFor="signin-email" className="auth-input-label">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    className="sign-up-sign-in-thq-auth-input-icon-elm3"
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
                  <span className="sign-up-sign-in-thq-visually-hidden-elm3">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  id="signin-email"
                  name="email"
                  required="true"
                  placeholder="Email Address"
                  data-form-field-id="signin-email"
                  className="auth-input"
                />
              </div>
              <div className="auth-input-group">
                <label htmlFor="signin-password" className="auth-input-label">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    className="sign-up-sign-in-thq-auth-input-icon-elm4"
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
                  <span className="sign-up-sign-in-thq-visually-hidden-elm4">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  id="signin-password"
                  name="password"
                  required="true"
                  minlength="8"
                  placeholder="Password"
                  data-form-field-id="signin-password"
                  className="auth-input"
                />
              </div>
              <button
                id="tbld753fu6HOCSdvz"
                name="button"
                type="submit"
                data-form-field-id="tbld753fu6HOCSdvz"
                className="auth-submit-btn btn-accent btn btn-lg"
              >
                Sign In
              </button>
            </form>
            <div className="auth-card-footer">
              <p className="section-content auth-footer-text">
                <span>
                  {' '}
                  Don&apos;t have an account?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a href="#signup">
                  <div className="sign-up-sign-in-thq-auth-link-elm2">
                    <span>
                      {' '}
                      Create one
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                      className="auth-link-icon"
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
                </a>
              </p>
            </div>
          </article>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default SignUpSignIn
