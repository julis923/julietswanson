import myStylerVid from './assets/mystyler-video.mp4'
import myStylerWireframe from './assets/mystyler-wireframe.png'
import resumes1 from './assets/resumes-1.png'
import resumes2 from './assets/resumes-2.png'
import resumes3 from './assets/resumes-3.png'
import icsiVid from './assets/icsi-video.mp4'
import wholesomeVid from './assets/wholesome-video.mp4'
import barebitesVid from './assets/barebites-video.mp4'
import barebitesLofi1 from './assets/barebites-lofi-1.png'
import barebitesLofi2 from './assets/barebites-lofi-2.png'
import barebitesHifi1 from './assets/barebites-hifi-1.png'
import barebitesBranding from './assets/barebites-branding.png'
import railtimeVid from './assets/railtime-video.mp4';


const projects = [
    {
        title: "myStyler App",
        description: "A full stack single page application which generates unique, professional resumes and offers a live preview feature. Resumes are customizable and scale text responsively to fit user input. Created with React, Node.js/Express, and MongoDB + AWS S3.",
        mainImg: {
            type: 'video',
            content: myStylerVid,
            alt: null,
        },
        types: ["Full Stack (MERN) with RESTful API", "UX/UI", "Branding"],
        tags: ["full-stack", "front-end", "ux/ui", "branding", "featured"],
        hashlink: "myStyler",
        viewCode: [true, null, 'https://github.com/julis923/myStyler'],
        viewLive: [true, null, 'https://mystyler.herokuapp.com/'],
        project: [
            "myStyler is an app that allows for flexible, iterable, and fun resume creation. It offers a breadth of stylistic choices, plus the ability to preview the resume as data is being entered (thanks, React)! The app responsively sizes text to fit on the resume to account for dynamic input from the user.",
            "The app quickly generates a screen-readable and hyperlinked PDF and saves resumes to users' accounts for future edits and iterations."
        ],
        projectProcess: [
            {
                step: "Lo-Fi Wireframing",
                description: ["I designed a user-friendly app with minimal pages using Figma. Authenticated users can access a dashboard, a create page, a saved resumes page, and a settings page."],
                images: [{content: myStylerWireframe, alt: "figma wireframe"}]
            },
            {
                step: "Hi-Fi Mockups and Branding",
                description: [
                    "To highlight the resume designs, I opted for a muted color palette with pops of blue and a whimsical geometric pattern accent. Designs also include a custom logo and favicon.",
                    
                ],
                images: [],
                link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FBi5c5N7AJdu4WkfJXtVk89%2FUntitled%3Fnode-id%3D0%253A1'
            },
            {
                step: "Resume Design",
                description: [
                    "To create the resumes themselves, I developed a basic structure (first on Figma, then in HTML) that could be adapted using CSS + Javascript to produce a variety of customized styles.", 
                    "Finally, I selected color and typography combinations for the resumes to appeal to a variety of aesthetics - modern, minimalistic, artistic, etc."
                ],
                images: [{content: resumes1, alt: "resume designs"}, {content: resumes2, alt: "resume designs"}, {content: resumes3, alt: "resume designs"}]
            },
            {
                step: "Building and Deployment",
                description: [
                    "On the backend, I developed an API to handle requests from the frontend including authentication and data/image requests (queried from MongoDB and AWS S3). I used the Puppeteer library to generate a PDF using Headless Chrome.",
                    "On the frontend I focused heavily on the resume preview, which relies on React hooks to rerender the page as the user's data updates.",
                    "The app is currently deployed on Heroku."
                ],
                images: []
            }
        ],
        details: [
            "Designed on Figma",
            "Built with React, Node.js/Express, MongoDB, AWS S3, and Sass",
            "Client-side routing (via React Router) delivers a seamless, mobile-app-like user experience",
            "PDF generation via Puppeteer (Headless Chrome)",
            "Fully responsive, cross-browser-compatible and mobile-friendly",
            "Accessible and SEO-friendly",

        ]
        
    },
    {
        title: "ICSI Website",
        description: "A professional website designed for ICSI, a New York-based construction company. After completing the designs (as an independently contracted UX/UI designer), I assisted in building the website with Next.js and Wordpress Headless CMS.",
        mainImg: {
            type: 'video',
            content: icsiVid,
            alt: null,
        },
        types: ["UX/UI", "Front-End"],
        tags: ["front-end", "ux/ui", "featured"],
        hashlink: "icsi",
        viewCode: [false, 'Code Private'],
        viewLive: [false, 'Site in Development'],
        project: [
            "I designed a modern, streamlined, and bold user experience + interface for a client in the construction industry. I then built out the front end with my project supervisor.",
        ],
        projectProcess: [
            {
                step: "Hi-Fi Mockups and Branding",
                description: [
                    "First, I selected the color scheme and typography. I wanted to emphasize the client's brand as a modern, sophisticated, and bold company known for tackling the toughest challenges in the industry.",
                    "To achieve this aesthetic, I designed the interface with clean, architectural lines. Bold pops of color are accentuated by textural background patterns to increase punchiness and dimensionality.",
                    "Because the client provides their own content via Wordpress, each components is designed to be highly flexible and responsive to dynamic input.",
                ],
                images: [],
                link: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FvxUPlZNFGR4cHqPP0H6lZZ%2FICSI-Mockups%3Fnode-id%3D0%253A1"
            },
            {
                step: "Frontend Development",
                description: [
                    "The frontend was built out with React and Sass. It was important to build scalable components and styles that would withstand the dynamic content provided by the client.",
                    "Queries were made to the CMS using GraphQL."
                ],
                images: []
            }
        ],
        details: [
            "Designed on Figma",
            "Fully responsive design optimized for dynamic content",
            "Built with Next.js/Vercel",
        ]
        
    },
    {
        title: "Wholesome Learning Website",
        description: "I was contracted to complete the UX/UI for a tutoring company's new, rebranded website. I developed the final web designs on Figma in accordance with branding and then built out the front end with the project supervisor.",
        mainImg: {
            type: 'video',
            content: wholesomeVid,
            alt: null,
        },
        types: ["UX/UI", "Front-End"],
        tags: ["front-end", "ux/ui", "featured"],
        hashlink: "wholesome",
        viewCode: [false, 'Code Private'],
        viewLive: [false, 'Site in Development'],
        project: [
            "I inherited a set of UX/UI mockups from another designer, which the client wanted to closer align with Wholesome Learning's new branding. I maintained much of the existing architecture, but overhauled the UI to create a more whimsical, welcoming, and playful user experience.",
        ],
        projectProcess: [
            {
                step: "Hi-Fi Mockups",
                description: [
                    "I used the existing collateral and branding to create playful graphics and patterns that evoked the brand's emphasis on family-friendly, fun learning.",
                    "Bright colors and whimsical shapes give the site a unique and welcoming appeal.",
                    "Because the client provides their own content via Wordpress, each components is designed to be highly flexible and responsive to dynamic input.",
                ],
                images: [],
                link: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFvIuQPkvWbQr3HiNxs32Yq%2FWholesome-Landing-Page-Mockups%3Fnode-id%3D0%253A1" 
            },
            {
                step: "Frontend Development",
                description: [
                    "The frontend was built out with React and Sass. It was important to build scalable components and styles that would withstand the dynamic content provided by the client.",
                    "Queries were made to the CMS using GraphQL."
                ],
                images: []
            }
        ],
        details: [
            "Designed on Figma",
            "Fully responsive design optimized for dynamic content",
            "Built with Next.js/Vercel",
        ]
        
    },
    {
        title: "Barebites Landing Page Demo",
        description: "A branding + landing page design concept for a fictional snackbar company.",
        mainImg: {
            type: 'video',
            content: barebitesVid,
            alt: null,
        },
        types: ["UX/UI", "Front-End", "Branding"],
        tags: ["front-end", "ux/ui", "branding"],
        hashlink: "barebites",
        viewCode: [true, null, 'https://github.com/julis923/Barebites'],
        viewLive: [true, null, 'https://julis923.github.io/Barebites'],
        project: [
            "I challenged myself to design a logo and landing page hero for a snackbar company, and then built and deployed it as a demo.",
        ],
        projectProcess: [
            {
                step: "Lo-Fi Mockups & Wireframing",
                description: [
                    "I first created a simple low-fidelity mockup for the structure of the hero component. I wanted to include a logo, navbar, and two call-to-action buttons.",
                    "I included a mobile mockup as well to achieve responsive design.",
                    "Next, I decided on my color palette and added color to the hero elements."
                ],
                images: [{content: barebitesLofi2, alt: "low fidelity mockup"}, {content: barebitesLofi1, alt: "low fidelity mockup"}],
            },
            {
                step: "Logo Development",
                description: [
                    "I created three versions of the logo on Adobe Illustrator before settling on the final design.",
                    "The final logo is playful - it is comprised of two B's to emulate the company name, one of which utilizes negative space to create a fun 'bite' illusion.",
                ],
                images: [{content: barebitesBranding, alt: "logo development"}]
            },
            {
                step: "Hi-Fi Mockups",
                description: [
                    "With the logo finalized and optimized for use, I designed a high-fidelity mockup of the hero page. I used an image to increase dimensionality and complement the color scheme.",
                ],
                images: [{content: barebitesHifi1, alt: "high-fidelity mockup"}]
            },
            {
                step: "Frontend Development",
                description: [
                    "I built out the design using Vanilla Javascript, HTML and CSS. The demo is hosted on Github.",
                ],
                images: []
            }
        ],
        details: [
            "Designed on Adobe XD and Illustrator",
            "Fully responsive design",
            "Built with Vanilla JS, CSS & HTML",
        ]
        
    },
    {
        title: "Railtime App Prototype",
        description: "UX/UI prototype for an app designed to alert users on public transit before they reach their stop.",
        mainImg: {
            type: 'video',
            content: railtimeVid,
            alt: null,
        },
        types: ["UX/UI", "Branding"],
        tags: ["ux/ui", "branding"],
        hashlink: "railtime",
        viewCode: [true, 'View Hi-Fi Mockup', 'https://www.figma.com/file/5AM7KuEdUDRn5w66FbgMYN/RailTime-HiFi?node-id=0%3A1'],
        viewLive: [true, 'View Prototype', 'https://www.figma.com/proto/5AM7KuEdUDRn5w66FbgMYN/RailTime-HiFi?page-id=0%3A1&node-id=19%3A42&viewport=241%2C48%2C0.15&scaling=scale-down&starting-point-node-id=19%3A42&show-proto-sidebar=1'],
        project: [
            "I challenged myself to design a logo and landing page hero for a snackbar company, and then built and deployed it as a demo.",
        ],
        projectProcess: [
            {
                step: "Understanding the Users",
                description: [
                    "I aimed to target the following user concerns in my design, which I determined to be the most important areas of focus after consulting a number of transit users:",
                    "- Streamlined, easy-to-follow process for choosing the transit route and setting the alert",
                    "- Ability to save frequented routes",
                    "- Ability to optimize alert settings to user’s preference (vibrations, timing, etc)",
                    "- Welcoming and eyecatching user interface",
                ],
                images: [],
            },
            {
                step: "Lo-Fi Mockups & Wireframing",
                description: [
                    "I determined the framework of the app with the main user concerns in mind. The homepage streamlines the ability to create new alerts as well as view previous + current alerts.", 
                    "Saved Routes and Alert Preferences features are easily accessible via the navigation menu.",
                ],
                images: [],
                link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FklU30fb4J9MzT7v9HJKcWT%2FRailTime-LoFi%3Fnode-id%3D0%253A1'
            },
            {
                step: "Hi-Fi Mockups and Branding",
                description: [
                    "The high-fidelity mockup process included choosing a user-friendly palette and prototyping the app navigation.", 
                    "While the palette is constituted of mainly cool colors, the addition of yellow helps the user access and recognize the Saved Routes feature.",
                    "The logo, designed on Adobe Illustrator, emulates a train in motion."
                ],
                images: [],
                link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5AM7KuEdUDRn5w66FbgMYN%2FRailTime-HiFi%3Fnode-id%3D0%253A1'
            },
        ],
        details: [
            "Wireframes, mockups and prototype designed on Figma",
            "Logo designed on Adobe Illustrator",
            "Built with Vanilla JS, CSS & HTML",
        ]
        
    },
]

export default projects;