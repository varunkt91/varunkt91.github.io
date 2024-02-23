/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'North Carolina State University, USA',
    position: 'Research Assistant',
    url: 'https://www.ncsu.edu/',
    startDate: '2022-01-01',
    summary: `I am working under a NASA-funded project aimed at developing a novel method for mapping global
    surface water and flooding dynamics using Synthetic Aperture RADAR data.`,
    highlights: [
      'Surface water and flooding dynamics using machine learning and multi-sensor satellite data.',
      'Crop production forecasting by integrating machine learning and remote sensing datasets.',
      'Time-series analysis.',
      'Developed a pipeline for monitoring global flood events using a deep learning model.',
      'Deploying machine learning and deep learning frameworks for regression and classification problems.',
      'Big data analysis.',
      'Flooding from Space: Using Satellite Imagery to Detect Floodwaters in Reidsville and Collins, Georgia.',
    ],
  },

  {
    name: 'United States Department of Agriculture (USDA), USA',
    position: 'Data Science Intern',
    url: 'https://www.usda.gov/',
    startDate: '2023-06-01',
    endDate: '2023-08-31',
    highlights: [
      'Developed a frame work for rice yield prediction using satellite data and machine learning',
    ],
  },

  {
    name: 'Borlaug Institute of South Asia, CGIAR, India',
    position: 'Spatial Modelling Specialist',
    url: 'https://www.icimod.org/',
    startDate: '2021-09-01',
    endDate: '2022-01-09',
    summary: `Worked on a project which aims to identify dry, wet and concurrent events in rainy season using satellite data,
    with the aim of evaluation of its impact over agriculture areas in early and reproductive stage.`,
    highlights: [
      'Big data analysis.',
      'Satellite data processing.',
      'Machine learning for satellite data classification.',
      'Climate data analysis',
      'Coordination with stakeholders partners for implementing the project',

    ],
  },
  {
    name: 'International Centre for Integrated Mountain Development, Nepal',
    position: 'Remote Senisng and Geoinformation Analyst',
    url: 'https://www.icimod.org/',
    startDate: '2016-09-01',
    endDate: '2021-08-31',
    summary: `I worked as a Remote Sensing and GIS Analyst in SERVIR Phase II, a joint development initiative of the United States Agency for International Development (USAID) and the National Aeronautics and Space Administration (NASA). SERVIR collaborates with leading regional organizations around the globe.
    The objective of the SERVIR-Hindukush Himalaya program is to connect space technology to the village.`,
    highlights: [
      'Worked in Afghanistan and developed an operational framework for wheat area mapping in Afghanistan using machine learning techniques and Google Earth Engine.',
      'Developed an operational framework for a Rangeland monitoring system in Afghanistan using the TIMESAT model and machine learning techniques',
      'Developed a framework for crop area estimation using remote sensing and machine learning in Bangladesh',
      'Developed a framework for crop area estimation using remote sensing and machine learning in Bangladesh',
      'Coordinated with stakeholders and partners for project implementation',
      'Contributing to capacity-building activities within the scope of SERVIR to benefit all the regional partners in the Hindu Kush Himalayan region.',
      'Providing input on user engagement, report writing, and fieldwork.',
      'Collaborated closely with stakeholder partners, including national government agencies, to effectively implement project initiatives',

    ],
  },
  {
    name: 'Defence Geoinformatics Research Establishment (DGRE), India',
    position: 'Junior Research Fellow',
    url: 'https://www.drdo.gov.in/labs-and-establishments/terminal-ballistics-research-laboratory-tbrl',
    startDate: '2016-04-01',
    endDate: '2016-08-31',
    summary: 'Snow and Glacier monitoring using multi-sensor satellite imagery.',
    highlights: [
      'Developed a framework for automatic snow and glacier monitoring using multi-sensor satellite data.',
    ],
  },
  {
    name: 'Indian Agriculture Research Institute, India',
    position: 'Research Engineer',
    url: 'http://enveritas.org',
    startDate: '2015-09-01',
    endDate: '2016-01-01',
    summary: `Enveritas is a non-profit that works with coffee farmers to improve their livelihoods.
    I joined on day one and helped build a variety of tools to collect and analyze data. I also advised
    on technical strategy, helped hire engineers, and advised on their YC application.`,
    highlights: [
      'Designed and deployed desktop-based software to analyze and process hyperspectral data, tailored to meet organizational requirements',
      'Contributed to scientific report writing and actively participated in fieldwork to collect spectroscopic data from rice fields for calibrating satellite data.',
    ],
  },

  // {
  //   name: 'Planetary Resources',
  //   position: 'Avionics Intern',
  //   startDate: '2014-01-01',
  //   endDate: '2014-05-01',
  //   url: 'http://planetaryresources.com',
  //   highlights: [
  //     'Developed simulations in Matlab for Attitude Determination and Control Subsystem.',
  //     'Developed processes for in lab testing and characterization of various subsystems.',
  //     'Assembled flight hardware in cleanroom.',
  //   ],
  // },
];

export default work;
