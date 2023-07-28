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
    'GraphQL',
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
          <h3>About</h3>
          <p>
            I'm a Frontend Engineer & UX/UI designer located in the New York
            City area. I've worked on a wide range of projects ranging from
            large-scale web applications to customized, dynamic websites for
            clients.
          </p>
          <br />
          <p>
            Most recently, I've worked as a Founding Engineer at a fast-paced
            SaaS startup, spearheading design systems, frontend architecture,
            API implementations, and CI/CD deployments.
          </p>
          <br />
          <p>
            I love a good challenge, whether it be a design pain-point to solve
            or a new framework or tool to learn. Check out my portfolio below,
            and please reach out with any questions or opportunities! Thanks for
            stopping by.
          </p>
        </div>
        <div className="content">
          <h3 style={{ marginTop: -60 }}>Skills</h3>
          <ul className='skills'>
            {skills.map((skill) => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="headshot-container">
          <img src={headshot} className="headshot" alt="headshot" />
        </div>
      </div>
    </div>
  );
};

export default HomepageAbout;
