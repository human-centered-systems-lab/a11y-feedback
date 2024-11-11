# Universal Web Accessibility Feedback Form


## Introduction

**In one Sentence:** This is a open-source feedback tool, that helps to receive accessibility feedback.

**Technical Stuff:** Implemented using HTML, SCSS, and JavaScript. Bootstrap has been utilized for styling components, and Webpack has been employed to bundle and serve the files. This README provides instructions for local execution and building the project for production. An already built example project is provided. Currently the feedback tool will build in english. For a German text versions please check out the code annotations.
## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

Clone the repository and navigate to the project directory in the terminal.
`git clone <repository-url>
cd <project-directory>` 

Install the dependencies using npm.

`npm install` 

## Example Build
In the repository folder `dist` you can find an example build for the universal feedback tool. (currently german version)

## Local Execution

To run the project locally, use either of the following commands:

`npm start` 
or
`webpack serve` 

Visit `http://localhost:8080` in your browser to view the feedback tool prototype.

## Production Build

To build the project for production, use the following command:

`webpack build --mode=production` 

The production-ready files will be generated in the `dist` directory.

## Integration

Included in the project is a file containing the link to the feedback tool. This link is implemented for demonstration purposes on the inovex website. If you wish to integrate it into a different website, make sure to adapt the JavaScript code accordingly. Note that the JavaScript is appended to the specific page, so adjustments may be required for other websites.
ATTENTION: Please be sure to modify the data security information, contact mails and impress links for your project.

## Publications
**Please cite as:**

Adrian Wegener, Kathrin Fausel, Saskia Haug, and Alexander Maedche. 2024. A Universal Web Accessibility Feedback Form: A Participatory Design Study.
In Proceedings of May 13–14, 2024 (W4A’24). ACM, New York, NY, USA, 12 page
[https://doi.org/10.1145/3677846.3677853](https://doi.org/10.1145/3677846.3677853) 

## Showcases
This feedback tool has already been implemented on the following sites:
- [Inovex](https://www.inovex.de/de/) (temporary)

Please let us know if you want to be listed as a showcase by creating a ticket or via mail to [adrian.wegener@kit.edu](mailto:adrian.wegener@kit.edu).
