import headshot from '../assets/headshot.png';
import React from 'react';

const HomepageAbout = () => {
  const skills = [
    'JavaScript',
    'React',
    'Typescript',
    'HTML',
    'CSS/Sass/Tailwind',
    'Redux',
    'Node.js',
    'Next.js',
    'AWS (Cognito, S3, Amplify)',
    'REST',
    'Jest',
    'Cypress',
    'Wordpress CMS',
    'Shopify Liquid',
    'UX/UI',
    'Wireframing',
    'Prototyping',
    'Design systems',
    'Figma',
    'Adobe XD',
    'Sketch',
    'Amplitude',
    'Asana',
    'Notion',
    'Linear',
    'Agile',
  ];

  return (
    <div className="homepage-about" id="about">
      <div className="homepage-about-copy">
        <div className="content">
          <h3>About Me</h3>
          <p>
            Welcome! I'm a Product/UX Designer & Frontend Engineer located in
            the New York City area. I've worked on a wide range of projects
            ranging from large-scale web apps to customized, dynamic websites
            for clients.
          </p>
          <br />
          <p>
            I love designing for product-led growth - I'm always thinking about
            how designs and code can scale together, increase conversion rates,
            and reduce user churn. Most recently, I've worked as a founding
            engineer and product designer at a SaaS startup, spearheading all
            design, frontend architecture, API implementations, and CI/CD
            deployments.
          </p>
          <br />
          <p>
            In my free time, you can find me reading, exploring a museum (I have
            a degree in art history!), or walking around NYC neighborhoods
            listening to a great podcast. Thanks for stopping by!
          </p>
          <br />
        </div>
      </div>
      <div className="headshot-container">
        <img src={headshot} className="headshot" alt="headshot" />
      </div>
    </div>
  );
};

export default HomepageAbout;
