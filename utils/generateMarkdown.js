const { link } = require("fs");
const { url } = require("inspector");

// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache 2.0':
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GNU General Public v3.0':
      badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'MIT':
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'BSD 2-Clause Simplified':
      badge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case 'BSD 3-Clause New or Revised':
      badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'BoostSoftware 1.0':
      badge = `[![License](https://img.shields.io/badge/License-BoostSoftware-blue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case 'Creative Commons Zero V1.0 Universal':
      badge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case 'Eclispse Public 2.0':
      badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case 'GNU Affero General Public v3.0':
      badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case 'GNU General Public v2.0':
      badge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    case 'GNU Lesser General Public v2.1':
      badge = `[![License: GPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    case 'Mozilla Public 2.0':
      badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case 'The Unlicense':
      badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      break;
    case 'None':
      badge = ''
  }
  return badge
}

// Function that returns the license link
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache 2.0':
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GNU General Public v3.0':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'BSD 2-Clause Simplified':
      licenseLink = 'https://opensource.org/licenses/BSD-2-Clause';
      break;
    case 'BSD 3-Clause New or Revised':
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'BoostSoftware 1.0':
      licenseLink = 'https://www.boost.org/LICENSE_1_0.txt';
      break;
    case 'Creative Commons Zero V1.0 Universal':
      licenseLink = 'http://creativecommons.org/publicdomain/zero/1.0/';
      break;
    case 'Eclispse Public 2.0':
      licenseLink = 'https://opensource.org/licenses/EPL-1.0';
      break;
    case 'GNU Affero General Public v3.0':
      licenseLink = 'https://www.gnu.org/licenses/agpl-3.0';
      break;
    case 'GNU General Public v2.0':
      licenseLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
      break;
    case 'GNU Lesser General Public v2.1':
      licenseLink = 'https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html'
      break;
    case 'Mozilla Public 2.0':
      licenseLink = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'The Unlicense':
      licenseLink = 'http://unlicense.org/';
      break;
    case 'None':
      licenseLink = '';
  }
  return licenseLink;
}

// Function that returns the license section of README
function renderLicenseSection(name,license) {
  if(license != 'None') {
  return `## License
  Copyright (c) ${name}. All rights reserved.  
  Licensed under the [${license}](${renderLicenseLink(license)}) license.`
  } else {
    return ''
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)
  ${data.license != 'None' ? '- [License](#license)' : ''}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## Tests

  ${data.tests}

  ## Questions

  If you would like to know more about this project or to view other projects I have worked on please visit me at [${data.github}](https://github.com/${data.github}).

  If you have any questions about this project that aren't answered in the github repository, I can be reached at ${data.email}.

  ${renderLicenseSection(data.user, data.license)}
`;
}

module.exports = generateMarkdown;
