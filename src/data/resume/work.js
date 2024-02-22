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
      'Development of python scripts for satellite data processing.',
      'Time-series analysis.',
      'Deploying machine learning and deep learning frameworks for regression and classification problems.',
      'Big data.',
    ],
  },
  {
    name: 'Borlaug Institute of South Asia, CGIAR, India',
    position: 'Spatial Modelling Specialist',
    url: 'https://www.icimod.org/',
    startDate: '2021-09-01',
    endDate: '2021-12-31',
    summary: `Worked on a project which aims to identify dry, wet and concurrent events in rainy season using satellite data,
    with the aim of evaluation of its impact over agriculture areas in early and reproductive stage.`,
    highlights: [
      'Big data analysis.',
      'Satellite data processing.',
      'Machine learning for satellite data classification.',
      'Climate data analysis',
      'Coordination with stakeholders partners for implementing the project',
      'Contributing to capacity building activities within the scope of SERVIR for benefiting all the regional partners in HKH.',

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
      'Responsible for developing agriculture and food security services in Afghanistan, Bangladesh & Nepal.',
      'Developing an operational framework for crop area estimation and vegetation health monitoring in a cloud-based open-source environment (Google Earth Engine).',
      'Developing an operational framework for the Rangeland monitoring system in Afghanistan.',
      'Developing an operational framework for flood mapping using Google Earth Engine.',
      'Coordination with stakeholders partners for implementing the project',
      'Contributing to capacity building activities within the scope of SERVIR for benefiting all the regional partners in HKH.',

    ],
  },
  {
    name: 'Defence Geoinformatics Research Establishment (DGRE), India',
    position: 'Junior Research Fellow',
    url: 'https://www.drdo.gov.in/labs-and-establishments/terminal-ballistics-research-laboratory-tbrl',
    startDate: '2016-04-01',
    endDate: '2016-08-31',
    summary: `Arthena is a Series A Company funded by <a href="https://www.anthemis.com/">Athemis</a>,
    <a href="https://foundationcapital.com">Foundation Capital</a>, and <a href="https://ycombinator.com/">YC</a>.
    We develop quantitative strategies to predict the value of fine art and build investment products.
    I ran a 20-person product and engineering org for 8 years. We were acquired by
    <a href="https://www.masterworks.com/">Masterworks</a> in 2023.`,
    highlights: [
      'Developed a framework for automatic snow and glacier monitoring using multi-sensor satellite data.',
    ],
  },
  {
    name: 'Indian Agriculture Research Institute, India',
    position: 'Research Engineer',
    url: 'http://enveritas.org',
    startDate: '2016-09-01',
    endDate: '2018-01-01',
    summary: `Enveritas is a non-profit that works with coffee farmers to improve their livelihoods.
    I joined on day one and helped build a variety of tools to collect and analyze data. I also advised
    on technical strategy, helped hire engineers, and advised on their YC application.`,
    highlights: [
      'Trained a model for the Brazilian Coffee Scenes Dataset with better than state of the art accuracy.',
      'Collected training sets on the ground in Uganda. Built dashboards to visualize work of surveyors using Flask, React, and D3.',
      'Performed supporting analysis to ensure data integrity using Pandas, t-SNE, SVM\'s, and other techniques.',
    ],
  },
  {
    name: 'Indian Agriculture Research Institute, India',
    position: 'Research Engineer',
    url: 'https://zenysis.com',
    startDate: '2016-02-01',
    endDate: '2016-03-01',
    summary: `Zenysis develops data analysis and visualization tools for government agencies and international organizations.
    Their solutions help improve decision-making by integrating and analyzing large-scale datasets from various sources.
    I was the second contributor to the codebase. We built data visualization tools and tackled complex data ingestion
    challenges for the Ethiopian Ministry of Health.`,
    highlights: [
      'Worked in Addis Ababa for the Ethiopian Ministry of Health and built data visualization tools in React and Flask.',
      'Ingested multiple databases with different alphabets, calendars, and without official spellings of geographic locations.',
    ],
  },
  {
    name: 'United States Department of Agriculture (USAD), USA',
    position: 'Data Science Intern',
    url: 'https://www.usda.gov/',
    startDate: '2023-06-01',
    endDate: '2023-08-31',
    highlights: [
      'Developed a frame work for rice yield prediction using satellite data and machine learning',
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
