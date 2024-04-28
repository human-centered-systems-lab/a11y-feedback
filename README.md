# Feedback Tool Prototype


## Introduction

This repository contains a prototype for a feedback tool implemented using HTML, SCSS, and JavaScript. Bootstrap has been utilized for styling components, and Webpack has been employed to bundle and serve the files. This README provides instructions for local execution and building the project for production.
## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

Clone the repository and navigate to the project directory in the terminal.
`git clone <repository-url>
cd <project-directory>` 

Install the dependencies using npm.

`npm install` 

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
