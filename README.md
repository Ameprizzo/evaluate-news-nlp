# News Article NLP

Evaluate a news article with Natural Language Processing
What We will be building
We will be building web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Using an exciting new api called Aylien, we can build a simple web interface to interact with their NLP system. This tool will give us back pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need `node` and `npm` installed on your system to be able to run and build this project.

Node and express will be the webserver and routing, and webpack will be our build tool of choice. Using webpack, we will set up the app to have development and production environments, each with their own set of tools and commands.
We will also use Jest to test our route and other JavaScript functions of our application

### Run project:

Below shows how to run in development and production mode.
run in development mode:
To start the webpack dev server at port 8080

$ npm run build-dev

run in production mode:
Generate the dist files and then start server at port 3000

$ npm run build-prod

$ npm run start

## Configs :

Here, we have two webpack config files for both development mode(webpack.config.dev.js) and production mode(webpack.config.prod.js )

We also have a package.json to manage dependencies

### API :
The project uses the Text Analysis SDKs from aylien, which provides a powerful and flexible AI-driven content analysis solutions.

## Offline Functionality :
The project have service workers set up in webpack to provide the offline functionality of our app.

## Built With

* [Express](https://expressjs.com/) - NodeJS Back-End server
* [Webpack](https://webpack.js.org/) - Front-End code bundler
* [Npm](https://www.npmjs.com/) - Dependency management

