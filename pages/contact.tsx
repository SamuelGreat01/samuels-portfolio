/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (form.current) {
      emailjs
        .sendForm(
          'service_ms7fm15',
          'template_awka1fm',
          form.current,
          'k9tHMaICBIGOnCdKs'
        )
        .then(
          (result) => {
            console.log(result.text);
            setSubmitStatus('success');
            setIsSubmitting(false);
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.log(error.text);
            setSubmitStatus('error');
            setIsSubmitting(false);
          }
        );
    }
  };

  return (
    <Layout title="Contact">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Contact.</h1>
          <article>
            <p>
              Get in touch or shoot me an email directly on{' '}
              <b>samuelgreat82@gmail.com</b>
            </p>
          </article>
          <br />
          
          {submitStatus === 'success' && (
            <div className="alert alert-success">
              <p>✅ Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="alert alert-error">
              <p>❌ Sorry, there was an error sending your message. Please try again.</p>
            </div>
          )}

          <form ref={form} onSubmit={sendEmail}>
            <div className="fields">
              <div className="field half">
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                  aria-required="true"
                  required
                />
              </div>
              <div className="field half">
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  aria-required="true"
                  required
                />
              </div>
              <div className="field">
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  className="form-control"
                  placeholder="Message"
                  aria-required="true"
                  required
                />
              </div>
            </div>
            <button
              className="btn btn-default"
              type="submit"
              aria-label="Send Message"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/" className="mt-3 mb-5">
          Go Back Home
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }
  input,
  textarea {
    background: transparent;
    color: var(--cw) !important;
    margin-bottom: 2rem;
    box-shadow: none !important;
    resize: none;
    padding: 24px 21px !important;
    border-color: var(--border-color) !important;
    &:focus {
      background-color: var(--bg);
    }
  }
  button {
    font-size: calc(var(--font-sm) + 1.1px);
    background: var(--cw);
    border: none;
    color: var(--bg);
    border-radius: 5px;
    padding: 15px 40px;
    margin-bottom: 3rem;
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
  .alert {
    padding: 15px 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    font-size: calc(var(--font-sm) + 0.5px);
    p {
      margin: 0;
      color: var(--cw) !important;
    }
  }
  .alert-success {
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    p {
      color: #155724 !important;
    }
  }
  .alert-error {
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    p {
      color: #721c24 !important;
    }
  }
  form {
    width: 60%;
  }
  @media (max-width: 585px) {
    form {
      width: 100% !important;
    }
  }
  @media (max-width: 989px) {
    form {
      width: 100% !important;
    }
  }
  @media (max-width: 220px) {
    form {
      width: 100% !important;
    }
  }
`;

export default Contact;
