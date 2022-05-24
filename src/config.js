module.exports = {
  siteTitle: 'Sashank Sridhar | Software Developer | Researcher',
  siteDescription:
    'Sashank Sridhar is a Researcher who works on a variety of Deep Learning fields.',
  siteKeywords:
    'Sashank Sridhar, Sashank, Sridhar, sashank.ssridhar, software developer, software engineer, researcher, computer vision, natural language processing, blockchain, ieee, reviewer, anna university, iiit hyderabad, college of engineering guindy, ceg',
  siteUrl: 'https://sashanksridhar.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-229762784-1',
  googleVerification: 'm1799wF5AOhEfKatJwk9o3ef8xnyhrIfudckGtMoWOY',
  name: 'Sashank Sridhar',
  location: 'Chennai, India',
  email: 'sashank.sridhar@research.iiit.ac.in',
  github: 'https://github.com/sashanksridhar',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/sashanksridhar',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sashank-sridhar/',
    },
    
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
