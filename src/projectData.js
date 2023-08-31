import myStylerMain from './assets/mystylerTwo.png';
import myStylerWireframe from './assets/mystyler-wireframe.png';
import designSystemProposal from './assets/designSystemProposal.png';
import resumes from './assets/resumes.png';
import icsiMain from './assets/icsiTwo.png';
import wholesomeMain from './assets/wholesomeTwo.png';
import wholesomeBranding from './assets/wholesomeBranding.png';
import barebitesMain from './assets/barebitesTwo.png';
import barebitesLofi1 from './assets/barebites-lofi-1.png';
//import barebitesLofi2 from './assets/barebites-lofi-2.png';
import barebitesHifi1 from './assets/barebites-hifi-1.png';
import barebitesBranding from './assets/barebites-branding.png';
//import railTimeMain from './assets/railtimeTwo.png';
import embueLandingMain from './assets/embueTwo.png';
import procotoRebrand from './assets/designSystemTwo.png';
import procotoMain from './assets/procotoTwo.png';
import procotoDeployments from './assets/procotoDeployments.png';
import procotoBanner from './assets/procotoBanner.png';
import icsiBanner from './assets/icsiBanner.png';
import designSystemBanner from './assets/designSystemBanner.png';
import wholesomeBanner from './assets/wholesomeBanner.png';
//import railtimeBanner from './assets/railtimeBanner.png';
import embueBanner from './assets/embueBanner.png';
import isciHifi from './assets/icsi-hifi.png';
import mystylerBanner from './assets/mystylerBanner.png';
import designSystemFigma from './assets/designSystemFigma.png';
import icsiBranding from './assets/icsiBranding.png';
import icsiFinal from './assets/icsiFinal.png';
import wholesomeHifi from './assets/wholesomeHifi.png';
import wholesomeFinal from './assets/wholesomeFinal.png';
import procotoQuote1 from './assets/procotoQuote1.png';
import procotoUserStories from './assets/procotoUserStories.png';
import procotoPrototypes from './assets/procotoPrototypes.png';
import procotoQuoteTwo from './assets/procotoQuoteTwo.png';
import procotoUserStoriesTwo from './assets/procotoUserStories2.png';
import approvalsFlow from './assets/approvalsFlow.png';
import approvalsPrototypes from './assets/approvalsProto.png';
import implementationSpec from './assets/implementationSpec.png';
import embueLofi from './assets/embueLofi.png';
import embueHifi from './assets/embueHifi.png';
import myStylerHifi from './assets/myStylerHifi.png';

const projects = [
  {
    title: 'Procoto',
    subtitle:
      'Automating the sourcing process so modern purchasing teams get better results faster and with less effort.',
    id: 'procoto',
    hex: '#30b4e5',
    mainImg: procotoMain,
    bannerImg: procotoBanner,
    bannerBtns: [
      { text: 'Case studies', link: 'case-study', classes: '' },
      {
        text: 'View live',
        link: 'https://app.procoto.com/',
        classes: 'external-link',
      },
    ],
    sections: [
      {
        sectionTitle: 'About Procoto',
        subsections: [
          {
            title: '',
            text: [
              'Procoto is a procurement app aimed at modernizing sourcing and purchasing for businesses, providing highly intuitive and user-friendly workflows to make sourcing efficient and simple without any lengthy or expensive onboarding.',
              'I took on a hybrid Product Design/Frontend Engineer role for all app development and features, including the authentication flow, vendor bid solicitations, user authority tiers, custom form fields, fine-grained approvals, and more.',
            ],
          },
          {
            title: 'My role',
            text: ['Product Designer, Frontend Engineer'],
          },
          {
            title: 'The team',
            text: [
              'Founder & CEO (Michael Otis), Senior Architect (Austin Ellingwood), Backend Engineer (Michael Willett)',
            ],
          },
          {
            title: 'Tools & technologies',
            text: [
              'Figma, Javascript, React, Saas, Cypress, Jest, AWS, Formik',
            ],
          },
        ],
      },
      {
        caseStudyTitle: 'Case Study #1: Custom Fields',
        sectionTitle: 'Background',
        subsections: [
          {
            title: 'Inception',
            text: [
              "Initially, all of Procoto's forms (such as pricing request and contract creation forms) had default input fields with no ability to customize.",
              'We were receiving a lot of feedback from users regarding this - some enterprise users were requesting for us to build out custom forms for them, while others were asking if we offered custom form creation capabilities.',
            ],
            image: procotoQuote1,
            imageAlt:
              'Can we add a default “Max Budget” input field to the vendor bid form?',
          },
          {
            title: 'Research & analysis',
            text: [
              'There were strong indications that we needed to allow for more customization. Because procurement is such a diverse space, different users need to store and share unique data points based on their vertical or company policies. There is no such thing as a one-size-fits-all form in procurement.',
              'Besides our user feedback, research showed that most competitor procurement software offered custom field functionality. However, users indicated that there was often a steep learning curve to understanding how to successfully create and use custom form fields, and many software companies would build out custom solutions for their enterprise clients.',
            ],
          },
        ],
      },
      {
        sectionTitle: 'Defining the Problem',
        subsections: [
          {
            title: 'What problem do we need to solve for our users?',
            text: [
              'Procurement teams need to create reusable internal and vendor-facing input fields that intuitively integrate into forms in order to efficiently source goods and services.',
              'How can we make our platform more flexible for a diverse user base while preserving scalability?',
            ],
          },
        ],
      },
      {
        sectionTitle: 'Ideation',
        subsections: [
          {
            title: 'Method: user stories',
            text: [
              'Creating real-world scenarios helped me empathize with our users and identify pain points.',
            ],
            image: procotoUserStories,
            imageAlt: 'user story ideation',
          },
          {
            title: 'Method: user journeys',
            text: [
              'I used a user journey map to walk through the steps of creating a Request for Pricing form (RFP). The map flow included creating a sourcing request, filling out required fields, adding custom internal information, pulling in reusable fields, and building out external Request for Information (RFI) fields for vendors to submit in a bid web portal.',
              'The user journey helped me land on a form structure that truly reflected the RFP creation process.',
            ],
          },
          {
            title: 'Method: wireframing',
            text: [
              'I used wireframes to map out the approvals flow and layout, including an intuitive form layout that would seamlessly integrate custom field creation and editing within forms.',
            ],
          },
        ],
      },
      {
        sectionTitle: 'Prototyping',
        subsections: [
          {
            title: 'Hi-fi mockups',
            text: [
              'I created prototypes in Figma using the wireframe layouts from the previous step.',
            ],
            image: procotoPrototypes,
            imageAlt: 'Figma prototypes',
          },
        ],
      },
      {
        sectionTitle: 'Implementation & Deployment',
        subsections: [
          {
            title: '',
            text: [],
            image: procotoDeployments,
            imageAlt: 'Figma prototypes',
          },
        ],
      },
      {
        caseStudyTitle: 'Case Study #2: Approvals',
        sectionTitle: 'Background',
        subsections: [
          {
            title: 'Inception',
            text: [
              "Initially, Procoto was not offering a fine-grained approvals workflow for organizations. For example, if a manager wanted to sign off on their direct report's RFP before it was solicited to vendors, there was no way to track that approval process within the app.",
              'Many users were requesting an in-app feature to allow them to track approvals.',
            ],
            image: procotoQuoteTwo,
            imageAlt:
              'We’re handling our approvals process over email and it’s not efficient.',
          },
          {
            title: 'Research & analysis',
            text: [
              'The majority of our users (even smaller teams) indicated that this was a feature they would use, and many prospective users indicated that this was a feature they would consider switching platforms for.',
              'In addition, market research showed that approvals workflows were being offered by our competitors.',
            ],
          },
        ],
      },
      {
        sectionTitle: 'Defining the Problem',
        subsections: [
          {
            title: 'What problem do we need to solve for our users?',
            text: [
              'A procurement team needs an approvals workflow in order to track changes within the platform and ensure that actions are executed accurately as per leadership guidelines.',
            ],
          },
        ],
      },
      {
        sectionTitle: 'Ideation',
        subsections: [
          {
            title: 'Method: user stories',
            text: [
              'Creating real-world scenarios helped me empathize with our users and identify pain points.',
            ],
            image: procotoUserStoriesTwo,
            imageAlt: 'user story ideation',
          },
          {
            title: 'Method: user flow mapping',
            text: [
              'This method was helpful for mapping out complex, cyclical workflows and data transfers across multiple screens in the application.',
            ],
            image: approvalsFlow,
            imageAlt: 'user flow mapping',
          },
        ],
      },
      {
        sectionTitle: 'Prototyping',
        subsections: [
          {
            title: 'Scoping',
            text: [
              'I determined the specific components, layouts, and pages that needed to be built. Ex: dashboards to track all approvals tasks, an approvals slider component to display event history, changes, and pending approvals tasks for each item, etc.',
            ],
          },
          {
            title: 'Hi-fi mockups',
            text: [
              'This method was helpful for mapping out complex, cyclical workflows and data transfers across multiple screens in the application.',
            ],
            image: approvalsPrototypes,
          },
          {
            title: 'Implementation spec',
            text: [
              'As a hybrid engineer/designer, I was able to create flow maps that detailed interactions not only between the user and interface, but the browser and server as well. This helped us scope and plan implementation details, such as API integrations and data model updates.',
            ],
            image: implementationSpec,
          },
        ],
      },
      {
        sectionTitle: 'Conclusion',
        subsections: [
          {
            title: 'Did it ship?',
            text: [
              'Despite completing design and frontend implementation, we did not have the resources to ship this feature. However, it is still a great example of using design methods and user feedback to come up with a strong design solution that our users were very excited about.',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Procoto Design System',
    subtitle:
      'Design guidelines and a scalable UI Library for a procurement app.',
    id: 'procoto-design',
    bannerImg: designSystemBanner,
    mainImg: procotoRebrand,
    hex: '#30b4e5',
    bannerBtns: [{ text: 'Case study', link: 'case-study', classes: '' }],
    sections: [
      {
        sectionTitle: 'Background',
        subsections: [
          {
            title: '',
            text: [
              'Procoto is a procurement app aimed at modernizing sourcing and purchasing for businesses, providing highly intuitive and user-friendly interfaces to make sourcing efficient and simple without any lengthy or expensive onboarding.',
              'When I joined Procoto as a founding Frontend Engineer and employee #3, the application was operating in a private beta. Our first task was to rebuild it with a more modern tech stack and launch to the public. No design systems or guidelines were being used at the time, and I quickly volunteered to take on all product and UX design responsibilies in addition to engineering.',
              'My first task was to create and implement a design system to help us efficiently scale and ship features.',
            ],
          },
          {
            title: 'My role',
            text: ['Product Designer, Frontend Engineer'],
          },
          {
            title: 'The team',
            text: [
              'Founder & CEO (Michael Otis), Senior Architect (Austin Ellingwood)',
            ],
          },
          {
            title: 'Duration',
            text: ['March 2022 - May 2022'],
          },
          {
            title: 'Tools & technologies',
            text: [
              'Figma, Javascript, React, Saas, Cypress, Jest, AWS Amplify, Formik',
            ],
          },
        ],
      },
      {
        sectionTitle: 'Why build a design system?',
        subsections: [
          {
            title: '',
            text: [
              'Because we were already implementing Procoto v2 with a new tech stack, and it made sense to concurrently create a branded and streamlined design library. Additionally, the Procoto UI is very modular by nature and includes many repetitious components (forms, inputs, etc), so I knew that it would save time to in the long run to create a reusable component library for later projects and features.',
            ],
          },
        ],
      },
      {
        sectionTitle: 'The process',
        subsections: [
          {
            title: 'Component audit',
            text: [
              'I walked through the beta application and identified all existing components (buttons, tables, icons, tabs, inputs, text areas…) in order to fully scope out the project.',
            ],
          },
          {
            title: 'Proposal',
            text: [
              "I worked with the CEO to solidify Procoto's brand and visual identity. I then used pre-existing brand assets to develop a more comprehensive guideline that fit the company ethos and would serve as strong building blocks for complex interfaces. I chose colors and fonts that, when paired, would allow for easy maintenance of web readability and accessibility.",
              'Next, I created a proposal of the initial design guidelines and mockups and shared with teammates and stakeholders for approval.',
            ],
            image: designSystemProposal,
            imageAlt: 'Design system and branding proposal presentation',
          },
          {
            title: 'Figma UI library',
            text: [
              'I created scalable, reusable Figma components & instances using the approved design guidelines in order to standardize design elements and speed up prototyping.',
              'The library was built using Atomic Design principles.',
            ],
            image: designSystemFigma,
            imageAlt: 'Figma component examples',
          },
          {
            title: 'Implementation',
            text: [
              'I built a reusable component library in using Javascript (React), HTML and CSS. These modular elements allowed for rapid development and scalability when building out new features.',
              'React in particular plays very nicely with Atomic Design, as the framework is designed for component reusability.',
            ],
          },
          {
            title: 'Guidelines and documentation',
            text: [
              'I used Notion for all of our documentation, including component use cases, brand guidelines and development assets. Kindly note that this documentation is proprietary.',
            ],
          },
          {
            title: 'Keep scaling',
            text: [
              'Throughout product development, I continued to identify more components and elements to add to the UI library.',
            ],
          },
        ],
      },
      {
        sectionTitle: 'Conclusion',
        subsections: [
          {
            title: '',
            text: [
              'Overall, the Design System saved me hours of design and implementation work and helped us scale and push features out efficiently.',
              'It also helped Procoto to more strongly define its brand, look, and feel, which are key pillars in its product-market fit and product-led growth strategy.',
              'Finally, I was able to audit, design, and implement the library quickly with no tech or design debt. A win-win all around!',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'ICSI',
    id: 'icsi',
    hex: '#99504E',
    subtitle:
      'Branding, web design, and web development for a New York-based construction company.',
    mainImg: icsiMain,
    bannerImg: icsiBanner,
    bannerBtns: [{ text: 'Case study', link: 'case-study', classes: '' }],
    sections: [
      {
        sectionTitle: 'Background',
        subsections: [
          {
            title: '',
            text: [
              'I designed and implemented the frontend for ICSI, a client in the construction industry. Because the site would be used to attract clients and grow business, strong branding, SEO, and web accessibility were important design concerns.',
            ],
          },
          {
            title: 'My role',
            text: ['UI/UX Designer, Frontend Engineer'],
          },
          {
            title: 'The team',
            text: ['Backend Engineer (Mike Acre)'],
          },
          {
            title: 'Duration',
            text: ['Oct 2021 - Nov 2021'],
          },
          {
            title: 'Tools & technologies',
            text: ['Figma, Wordpress Headless CMS, Next.js, Sass, GraphQL'],
          },
        ],
      },
      {
        sectionTitle: 'Defining the problem',
        subsections: [
          {
            title: '',
            text: [
              "A website visitor needs to be able to easily view ICSI's impressive projects and capabilities and have the ability to contact them directly. This will help ICSI grow their customer base.",
            ],
          },
        ],
      },
      {
        sectionTitle: 'The process',
        subsections: [
          {
            title: 'Client vision & branding',
            text: [
              "After getting a sense of the client's brand vision (modern, sophisticated, bold, and capable, known for tackling the toughest challenges in the industry), I selected a color and typography scheme for the website.",
              'The proposed design guidelines were then shared with the client and tweaked until final approval was granted.',
            ],
            image: icsiBranding,
            imageAlt: 'typography and colorways',
          },
          {
            title: 'Wireframing',
            text: [
              'Wireframing was an important step, as information artchitecture and the user journey are crucial components for quickly converting customers. Our north star was to have as many website visitors utilize a contact form to get directly in touch with ICSI. In order to do that, I determined the page and navigation structure and strategically placed call-to-actions across various screens.',
              "I also created mobile wireframes to determine the website's responsive design.",
            ],
          },
          {
            title: 'Hi-fi mockups',
            text: [
              'To achieve the proposed brand aesthetic, I designed the interface with clean, architectural lines. Bold pops of color are accentuated by textural background patterns to increase punchiness and dimensionality.',
              'Because the client provides their own content via Wordpress, each component is designed to be highly flexible and responsive to dynamic input.',
            ],
            image: isciHifi,
            imageAlt: '',
          },
          {
            title: 'Frontend development',
            text: [
              'The frontend was built out with Next.js and Sass. It was important to build scalable components and styles that would withstand the dynamic content provided by the client. Queries were made to the CMS using GraphQL.',
              'Because SEO and accessibility were priorities for this client, I made sure to optimize images, load times, and markup.',
            ],
          },
        ],
      },
      {
        sectionTitle: 'Conclusion',
        subsections: [
          {
            title: '',
            text: [
              'Overall, the client was very satisfied with the design and build of the website. ICSI is still in the process of adding their custom content to the Wordpress CMS, but when the website is live we will perform additional testing to ensure optimal performance.',
            ],
            image: icsiFinal,
            imageAlt: 'ICSI screen examples',
          },
        ],
      },
    ],
  },
  {
    title: 'Wholesome Learning',
    id: 'wholesome-learning',
    subtitle:
      'Rebranding, web design and web development for a tutoring company.',
    hex: '#8D9B65',
    bannerImg: wholesomeBanner,
    bannerBtns: [
      { text: 'Case study', link: 'case-study', classes: '' },
      {
        text: 'View live',
        link: 'https://learnwholesomely.com/',
        classes: 'external-link',
      },
    ],
    sections: [
      {
        sectionTitle: 'Background',
        subsections: [
          {
            title: '',
            text: [
              "I was contracted to complete the UI/UX for a tutoring company's new, rebranded website. I inherited a set of Figma mockups from another designer, which the client wanted me to update in order to reflect Wholesome Learning's new branding. I maintained much of the existing architecture, but overhauled the UI to create a more whimsical, welcoming, and playful design. I then built out the frontend.",
            ],
          },
          {
            title: 'My role',
            text: ['UI/UX Designer, Frontend Engineer'],
          },
          {
            title: 'The team',
            text: ['Backend Engineer (Mike Acre)'],
          },
          {
            title: 'Duration',
            text: ['Sept 2021 - Oct 2021'],
          },
          {
            title: 'Tools & technologies',
            text: ['Figma, Wordpress Headless CMS, Next.js, Sass, GraphQL'],
          },
        ],
      },
      {
        sectionTitle: 'Defining the Problem',
        subsections: [
          {
            title: '',
            text: [
              "A website visitor needs to be able to learn about Wholesome Learnings's programs and capabilities and have the ability to contact them directly. This will help Wholesome Learning grow their customer base.",
            ],
          },
        ],
      },
      {
        sectionTitle: 'The process',
        subsections: [
          {
            title: 'Client vision & branding',
            text: [
              "I used existing assets and coloways to create playful graphics and patterns that evoked the brand's emphasis on family-friendly, fun learning.",
              'Bright colors and whimsical shapes give the site a unique and welcoming appeal.',
              'Because the client provides their own content via Wordpress, each components is designed to be highly flexible and responsive to dynamic input.',
            ],
            image: wholesomeBranding,
            imageAlt: 'Colorways and typography guidelines',
          },

          {
            title: 'Wireframing & user flow mapping',
            text: [
              'A handful of pages required restructuring, so I used wireframes to determine page layouts and user flows. I made sure to include more call-to-action sections to guide the user to various conversion flows, including an evaluation consultation and contact form.',
            ],
          },
          {
            title: 'Hi-fi mockups',
            text: [
              'Once the wireframes were completed, I build out high-fidelity screen mockups for each page in both web and mobile screens. The mockups were shared with the client for final approval, and then prepared for implementation.',
            ],
            image: wholesomeHifi,
            imageAlt: 'high fidelity Figma mockups of web pages',
          },
          {
            title: 'Frontend development',
            text: [
              'The frontend was built out with React and Sass. It was important to build scalable components and styles that would withstand the dynamic content provided by the client. Queries were made to the CMS using GraphQL.',
              'Because SEO and accessibility were priorities for this client, I made sure to optimize images, load times, and markup.',
            ],
          },
        ],
      },
      {
        sectionTitle: 'Conclusion',
        subsections: [
          {
            title: '',
            text: [
              'Once the client added their custom content to the Wordpress CMS, the website was successfully launched. It has since contributed to customer growth and higher organic search rankings.',
            ],
            image: wholesomeFinal,
            imageAlt: 'Screen mockups of website',
          },
        ],
      },
    ],
    mainImg: wholesomeMain,
  },
  // {
  //   title: 'Railtime',
  //   description:
  //     'UX/UI prototype for an app designed to alert users on public transit before they reach their stop.',
  //   mainImg: railTimeMain,
  //   subtitle:
  //     'UI/UX prototype for a transit alert app. How can an app help users maximize their time on public transit?',
  //   hex: '#309e7f',
  //   bannerImg: railtimeBanner,
  //   bannerBtns: [
  //     { text: 'Case study', link: '#', classes: '' },
  //     {
  //       text: 'View live',
  //       link: 'https://app.procoto.com/',
  //       classes: 'external-link',
  //     },
  //   ],
  //   role: 'Product Designer + Frontend Engineer',
  //   team: [
  //     'CEO',
  //     '2 Backend Engineers',
  //     'Product Designer + Frontend Engineer',
  //   ],
  //   duration: 'Feb 2022 - Aug 2023',
  //   background: [
  //     'When I joined Procoto as a founding Frontend Engineer and employee #3, the application was operating in a private beta. Our first task was to rebuild it with a more modern tech stack and launch to the public. No design systems or guidelines were being used at the time, and I quickly volunteered to take on all product and UX design responsibilies in addition to engineering (see my Procoto Design System case study).',
  //     'After building out a design system and shipping the public app, I took on a Product Design role for all subsequent roadmap features, including user authority tiers, custom form fields, bulk data imports, fine-grained approvals flows, and more.',
  //   ],
  //   id: 'railtime',
  //   types: ['UX/UI', 'Branding'],
  //   tags: ['ux/ui', 'branding', 'featured'],
  //   hashlink: 'railtime',
  //   viewCode: [
  //     true,
  //     'View Hi-Fi Mockup',
  //     'https://www.figma.com/file/5AM7KuEdUDRn5w66FbgMYN/RailTime-HiFi?node-id=0%3A1',
  //   ],
  //   viewLive: [
  //     true,
  //     'View Prototype',
  //     'https://www.figma.com/proto/5AM7KuEdUDRn5w66FbgMYN/RailTime-HiFi?page-id=0%3A1&node-id=19%3A42&viewport=241%2C48%2C0.15&scaling=scale-down&starting-point-node-id=19%3A42&show-proto-sidebar=1',
  //   ],
  //   viewDemo: [false],
  //   project: [
  //     'I designed and branded an app which allows users to quickly and easily set an alert for their stop on public transportation, plus save alerts to make future trips a breeze.',
  //   ],
  //   projectProcess: [
  //     {
  //       step: 'Understanding the Users',
  //       description: [
  //         'I aimed to target the following user concerns in my design, which I determined to be the most important areas of focus after consulting a number of transit users:',
  //         '- Streamlined, easy-to-follow process for choosing the transit route and setting the alert',
  //         '- Ability to save frequented routes',
  //         '- Ability to optimize alert settings to user’s preference (vibrations, timing, etc)',
  //         '- Welcoming and eyecatching user interface',
  //       ],
  //       images: [],
  //     },
  //     {
  //       step: 'Lo-Fi Mockups & Wireframing',
  //       description: [
  //         'I determined the framework of the app with the main user concerns in mind. The homepage streamlines the ability to create new alerts as well as view previous + current alerts.',
  //         'Saved Routes and Alert Preferences features are easily accessible via the navigation menu.',
  //       ],
  //       images: [],
  //       link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FklU30fb4J9MzT7v9HJKcWT%2FRailTime-LoFi%3Fnode-id%3D0%253A1',
  //     },
  //     {
  //       step: 'Hi-Fi Mockups and Branding',
  //       description: [
  //         'The high-fidelity mockup process included choosing a user-friendly palette and prototyping the app navigation.',
  //         'While the palette is constituted of mainly cool colors, the addition of yellow helps the user access and recognize the Saved Routes feature.',
  //         'The logo, designed on Adobe Illustrator, emulates a train in motion.',
  //       ],
  //       images: [],
  //       link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5AM7KuEdUDRn5w66FbgMYN%2FRailTime-HiFi%3Fnode-id%3D0%253A1',
  //     },
  //   ],
  //   details: [
  //     'Wireframes, mockups and prototype designed on Figma',
  //     'Logo designed on Adobe Illustrator',
  //     'Built with Vanilla JS, CSS & HTML',
  //   ],
  // },
  {
    title: 'Embue Cacao',
    id: 'embue',
    hex: '#9F6D57',
    description:
      'Two landing pages for customers navigating to Embue Cacao (Custom Shopify Theme) from external links. The client wanted to include plenty of additional links and calls to action while maintaining the brand, look, and feel of the website.',
    mainImg: embueLandingMain,
    bannerImg: embueBanner,
    bannerBtns: [
      { text: 'Case study', link: 'case-study', classes: '' },
      {
        text: 'View live',
        link: 'https://www.embuecacao.com/',
        classes: 'external-link',
      },
    ],
    sections: [
      {
        sectionTitle: 'Background',
        subsections: [
          {
            title: '',
            text: [
              'I was initially brought on as a Frontend Engineer to implement a custom Shopify theme for Embue, a cacao e-tailer. I also took on some design tasks, including reworking the website Figma mockups and creating marketing collateral for the company.',
              'The project detailed below is the design of two landing pages. The client wanted to include plenty of additional links and calls to action while maintaining the brand, look, and feel of the website. I designed the landing pages to include plenty of links and calls to action, plus text with important keywords to boost SEO. I then implemented the designs as custom shopify sections with reusable components to make building future landing pages a breeze for the client.',
            ],
          },
          { title: 'My role', text: ['UI/UX Designer, Frontend Engineer'] },
          { title: 'The team', text: ['Backend Engineer (Mike Acre)'] },
          { title: 'Duration', text: ['July 2021 - Sept 2021'] },
        ],
      },
      {
        sectionTitle: 'The process',
        subsections: [
          {
            title: 'Wireframing',
            text: [
              'I created one wireframe per landing page. I wanted the structure to be similar so that in development I could create and use resuable components.',
              'In order to boost SEO, each section includes important text, at least one internal link, and a call to action.',
            ],
            image: embueLofi,
            imageAlt: 'wireframes of embue landing pages',
          },
          {
            title: 'High fidelity mockups',
            text: [
              'I designed reusable CTA buttons and added images and on-brand colors to make the sections pop.',
              'Additionally, I wrote copy for each section, keeping the text short and easily digestible.',
              'Also pictured below are mockups for social media marketing assets which link to the landing pages.',
            ],
            image: embueHifi,
            imageAlt: 'mockups of embue landing pages',
          },
          {
            title: 'Implementation',
            text: [
              'I designed the landing pages by building reusable Liquid (Shopify) components and styling with custom CSS + Tailwind utility classes.',
              'Each component is build with a schema that allows the client to duplicate, edit, or add more sections.',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'myStyler',
    id: 'mystyler',
    hex: '#1D8694',
    mainImg: myStylerMain,
    bannerImg: mystylerBanner,
    subtitle:
      'A resume generator that adapts and formats based on your content.',
    bannerBtns: [
      { text: 'Case study', link: 'case-study', classes: '' },
      {
        text: 'View live',
        link: 'https://mystyler.herokuapp.com/create-demo',
        classes: 'external-link',
      },
    ],
    sections: [
      {
        sectionTitle: 'Background',
        subsections: [
          {
            title: '',
            text: [
              'One of the most common pieces of career advice is to limit your resume to one page in length. Hiring managers often do not have the time and bandwith to scroll through multiple pages of information, and all of your important information, such as contact info, skills, and education, should be immediately visible.',
              'As someone who has struggled to format and fit everything on one page, I searched high and low for an application that would responsively size all of my text to meet that one-page minimum...',
              'myStyler is an app that allows for flexible, iterable, and fun resume creation. It offers a breadth of stylistic choices, plus the ability to preview the resume as data is being entered (thanks, React)! The app responsively sizes text to fit on the resume to account for dynamic input from the user.',
              "The app quickly generates a screen-readable and hyperlinked PDF and saves resumes to users' accounts for future edits and iterations.",
            ],
          },
          {
            title: 'My role',
            text: ['UI/UX Designer & Fullstack Software Engineer'],
          },
          {
            title: 'The team',
            text: [
              'Just me! I handled design, backend, and frontend development.',
            ],
          },
          { title: 'Duration', text: ['Oct 2021 - Nov 2021'] },
        ],
      },
      {
        sectionTitle: 'Defining the Problem',
        subsections: [
          {
            title: '',
            text: [
              'How can an application format and resize resume content to fit everything on a one-page document while still offering stylish and diverse designs?',
            ],
          },
          {
            title: 'The solution',
            text: [
              'As users fill out their resume information within the app, frontend code will reponsively resize text using recursion to make sure that the content fits within a section. The text sizes and resume style are saved as variables and sent to the server for PDF generation.',
              'Design components/features include a form for resume information, a live preview, and the ability to save and edit resumes.',
            ],
          },
        ],
      },
      {
        sectionTitle: 'The process',
        subsections: [
          {
            title: 'Wireframing',
            text: [
              'I designed a user-friendly app with minimal pages using Figma. Authenticated users can access a dashboard, a create page, a saved resumes page, and a settings page.',
            ],
            image: myStylerWireframe,
            imageAlt: 'Figma wireframe',
          },
          {
            title: 'Prototypes and branding',
            text: [
              'To highlight the resume designs, I opted for a muted color palette with pops of blue and a whimsical geometric pattern accent. Designs also include a custom logo and favicon.',
            ],
            image: myStylerHifi,
            imageAlt: 'Figma high-fidelity mockups',
          },
          {
            title: 'Resume design',
            text: [
              'To create the resumes themselves, I developed a basic structure (first on Figma, then in HTML) that could be adapted using CSS + Javascript to produce a variety of customized styles.',
              'Finally, I selected color and typography combinations for the resumes to appeal to a variety of aesthetics - modern, minimalistic, artistic, etc.',
            ],
            image: resumes,
            imageAlt: 'all resume styles',
          },
          {
            title: 'Implementation and Deployment',
            text: [
              'On the backend, I developed an API to handle requests from the frontend including authentication and data/image requests (queried from MongoDB and AWS S3). I used the Puppeteer library to generate a PDF using Headless Chrome.',
              "On the frontend I focused heavily on the resume preview, which relies on React hooks to rerender the page as the user's data updates.",
              'The app is currently deployed on Heroku.',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Barebites',
    subtitle: 'Landing page & branding for a fictional energy bar company.',
    id: 'barebites',
    hex: '#D67E4E',
    bannerImg: barebitesMain,
    mainImg: barebitesMain,
    bannerBtns: [
      { text: 'Case studies', link: 'case-study', classes: '' },
      {
        text: 'View live',
        link: 'https://julis923.github.io/Barebites/',
        classes: 'external-link',
      },
    ],
    sections: [
      {
        sectionTitle: 'Background',
        subsections: [
          {
            title: '',
            text: [
              'I challenged myself to design a logo and landing page hero for a snackbar company, and then built and deployed it as a demo.',
            ],
          },
          { title: 'My role', text: ['UI/UX Designer, Frontend Engineer'] },
          { title: 'The team', text: ['Just me!'] },
          { title: 'Duration', text: ['2 days'] },
        ],
      },
      {
        sectionTitle: 'The process',
        subsections: [
          {
            title: 'Wireframing',
            text: [
              'I first created a simple low-fidelity mockup for the structure of the hero component. I wanted to include a logo, navbar, and two call-to-action buttons.',
              'I included a mobile mockup as well to achieve responsive design.',
              'Next, I decided on my color palette and added color to the hero elements.',
            ],
            image: barebitesLofi1,
            imageAlt: 'wireframe of landing page',
          },
          {
            title: 'Logo development',
            text: [
              'I created three versions of the logo on Adobe Illustrator before settling on the final design.',
              "The final logo is playful - it is comprised of two B's to emulate the company name, one of which utilizes negative space to create a fun 'bite' illusion.",
            ],
            image: barebitesBranding,
            imageAlt: 'logo and brand development',
          },
          {
            title: 'Prototyping',
            text: [
              'With the logo finalized and optimized for use, I designed a high-fidelity mockup of the hero page. I used an image to increase dimensionality and complement the color scheme.',
            ],
            image: barebitesHifi1,
            imageAlt: 'high-fidelity mockup',
          },
          {
            title: 'Implementation',
            text: [
              'I built out the design using Vanilla Javascript, HTML and CSS. The demo is hosted on Github.',
            ],
          },
        ],
      },
    ],
  },
];

export default projects;
