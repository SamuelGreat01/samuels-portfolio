/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Dribble, Product } from '../components/Icons';

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  href="https://github.com/samuelgreat"
                >
                  Physiotherapy{' '}
                  <small>
                    <Github />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  id="cardHover"
                  href="https://github.com/samuelgreat"
                  className="float-right"
                >
                  View Github
                </a>
                <p>
                  As a third-year Physiotherapy and Rehabilitation student at Cyprus International University, I bring hands-on clinical experience from multiple internships at Kolan British Hospital. My clinical background in evaluating and treating musculoskeletal and neurological patients, combined with my passion for user-centered digital design, allows me to approach healthcare technology with deep empathy and understanding. I specialize in creating accessible design solutions that truly understand user needs, particularly in healthtech and wellness sectors.
                </p>
              </li>
              <li>
                <Link href="/projects" aria-label="Open Products Page">
                  Product Design{' '}
                  <small>
                    <Product />
                  </small>
                </Link>
                <Link
                  href="/projects"
                  aria-label="Open Products Page"
                  id="cardHover"
                  className="float-right"
                >
                  View Products
                </Link>
                <p>
                  While I may not fit the conventional mold of a product
                  manager, my diverse skill set in research, product design, and
                  product coordination empowers me to drive the growth of a
                  product from its inception. As an exceptional analytical
                  thinker, I possess the ability to uphold the product's vision
                  throughout its entire journey, effectively bridging the
                  technical and product aspects. By leveraging my expertise, I
                  can navigate the path from 0 to 1, ensuring the product's
                  success at every stage.
                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  href="https://dribbble.com/samuelgreat"
                >
                  Design Skills{' '}
                  <small>
                    <Dribble />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  id="cardHover"
                  href="https://dribbble.com/samuelgreat"
                  className="float-right"
                >
                  View Dribbble
                </a>
                <p>
                  My design expertise spans Figma (wireframing, prototyping, auto layout, components), Adobe Illustrator, Canva, and Blender for 3D visualization. I excel in user research and usability testing, bringing empathy and active listening from my clinical background to design processes. My soft skills include team collaboration, adaptability, critical thinking, and detail-oriented time management. I'm always exploring new design trends and methodologies to improve healthcare delivery and patient outcomes.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <article>
            <h4>Education & Certificates.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Cyprus International University"
                  href="https://ciu.edu.tr"
                >
                  B.Sc. Physiotherapy & Rehabilitation. <small>Cyprus International University</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2021 - Present</b>
                </a>
                <p>
                  Third-year student with hands-on clinical experience through multiple internships. 
                  Relevant courses include Kinesiology, Neurological Rehabilitation, and Biomechanics. 
                  Active participant in clinical rotations and case studies, gaining practical experience 
                  in evaluating and treating musculoskeletal and neurological patients.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Figma UI UX Design Course"
                  href="https://www.udemy.com/course/figma-ui-ux-design-essentials/"
                >
                  Figma UI UX Design Essentials. <small>Udemy</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2025</b>
                </a>
                <p>
                  Comprehensive course covering wireframing, prototyping, auto layout, components, 
                  and design systems. This certification has enhanced my ability to create 
                  professional UI/UX designs and collaborate effectively with development teams.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Bay Flowers School"
                  href="#"
                >
                  West African Examination Council (WAEC). <small>Bay Flowers</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2012 - 2019</b>
                </a>
                <p>
                  Completed secondary education with focus on sciences and mathematics, 
                  providing a strong foundation for my healthcare and design studies.
                </p>
              </li>
              <li>
                <Link
                  href="/articles"
                  aria-label="Check my articles and recent reads"
                  id="cardHover"
                >
                  Continuous Learning 😉
                </Link>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Currently</b>
                </a>
                <p>Always exploring new design trends, healthcare technology, and user research methodologies. </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my contact information section"
        >
          <article>
            <h4>Contact & Experience.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Phone Contact"
                  href="tel:+905428777344"
                >
                  Phone Contact. <small>+90 5428 7773 44</small>
                </a>
                <a
                  target="_blank"
                  id="cardHover"
                  rel="noopener noreferrer"
                  aria-label="Call Now"
                  href="tel:+905428777344"
                  className="float-right"
                >
                  Call Now
                </a>
                <p>
                  Available for calls and WhatsApp messages. Best time to reach me is during 
                  evenings and weekends when I'm not in clinical placements or classes.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Email Contact"
                  href="mailto:Samuelerighba@gmail.com"
                >
                  Email Contact <small>Samuelerighba@gmail.com</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Send Email"
                  id="cardHover"
                  href="mailto:Samuelerighba@gmail.com"
                  className="float-right"
                >
                  Send Email
                </a>
                <p>
                  Best way to reach me for professional inquiries, design collaborations, 
                  and healthcare technology discussions. I typically respond within 24 hours.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Location Info"
                  href="#"
                >
                  Location <small>Cyprus</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Location"
                  id="cardHover"
                  href="#"
                  className="float-right"
                >
                  View Location
                </a>
                <p>
                  Currently based in Cyprus, studying at Cyprus International University. 
                  Fluent in English and open to remote collaborations worldwide.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Professional Experience"
                  href="#"
                >
                  Professional Experience <small>Kolan British Hospital</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Experience"
                  id="cardHover"
                  href="#"
                  className="float-right"
                >
                  View Details
                </a>
                <p>
                  Two internships at Kolan British Hospital (Sep 2024 - Nov 2024, Feb 2025 - Apr 2025). 
                  Experience in musculoskeletal, neurological, geriatric, and orthopedic rehabilitation programs.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper aria-label="You are now in interests section">
          <article>
            <h4>Interests & Goals.</h4>
            <ul className="timeline">
              <li>
                <Link href="/projects">
                  Healthcare Technology. <small>Passion Project</small>
                </Link>
                <Link href="/projects" className="float-right" id="cardHover">
                  View Projects
                </Link>
                <p>
                  Passionate about merging healthcare knowledge with technology to create 
                  intuitive user experiences. I'm particularly interested in healthtech 
                  and wellness sectors, always exploring how design can improve patient 
                  outcomes and healthcare delivery.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
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
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
