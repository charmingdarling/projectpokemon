# Pokémon Game

## General Information

We decided to try and create a Pokémon turn-based battle system. The project uses Node.js and Express.js for a RESTful API to manage user-server interactions, Handlebars.js for dynamic HTML generation, and MySQL with Sequelize for structured data storage. It follows the Model-View-Controller pattern for code organization, employs security measures like user authentication and data protection, and conducts thorough testing for quality assurance, aligning with the class requirements.


## Table of Contents (Optional)

- [General](#general-information)
- [Description](#description-of-project)
- [Deployed Site](#deployed-site)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Deployed Site

Experience playing a [Pokémon](link) battle through our Heroku deployment.

## Walkthrough Video 

To get an idea of the features of our game, watch our walkthrough video. 

![A test image](image.png) 

## Description

For our second project at Berkeley Coding Bootcamp, we tackled the task of creating a Pokémon turn-based battle system. To make this happen, we built a robust RESTful API using Node.js and Express.js, which forms the core of our web application. This API facilitates communication between users and the server by handling various requests and responses.

On the front-end, we employed Handlebars.js as our template engine, enabling us to generate HTML content dynamically for a smooth user experience. To store data persistently, we opted for MySQL and Sequelize, ensuring efficient database management while adhering to a well-structured schema for Pokémon and user data.

To enable users to interact with the system, we implemented GET and POST routes. This allows users to access information about their Pokémon, initiate battles, and save their progress. Our project follows the Model-View-Controller (MVC) paradigm, providing clear organization and separation of files to enhance code maintenance.

Security is a priority, so we integrated user authentication through Express-Session and Cookies to protect user instances. Additionally, sensitive information like API keys is securely stored using .ENV variables to prevent unauthorized access.

Lastly, rigorous testing ensures the quality of our application. We focus on well-labeled code, data integrity, and consistency in data types throughout the system.

## Technologies Used

- [Node.js v20.5.0](https://nodejs.org/en) - A asynchronous event-driven JavaScript runtime, designed to build scalable network applications.
- [MySQL v2.2.5](https://www.mysql.com/) - Open-source relational database management system.
 - A templating engine in node js
- [BCrypt v5.0.0](https://www.npmjs.com/package/bcrypt)
- [Connect-Session-Sequelize v7.0.4](https://www.npmjs.com/package/connect-session-sequelize)
- [Sequelize v6.3.5](https://sequelize.org/)
- [Express v4.17.1](https://www.npmjs.com/package/express)
- [Express-Session 1.17.1](https://www.npmjs.com/package/express-session)
- [Express Handlebars v5.2.0](https://handlebarsjs.com/)
- [dotenv v8.2.0](https://www.npmjs.com/package/dotenv) - loads environment variables from a .env file into process.env


## Installation

### Prerequisites 

* [Node.js](https://nodejs.org/en)
* [MySQL](https://www.mysql.com/)

### Local Installation 

If you would like to see a local version of the site, follow the steps below: 

  1. Clone the [repository](https://github.com/charmingdarling/projectpokemon).
  2. Change to root directory of the cloned repo in your command line.
  3. Run `npm install` to bring in dependencies.
  4. Create a `.env` file in root directory. 
    Example of contents: 
      DB_NAME = 'pokemon_db'
      DB_USER = 'root'
      DB_PASSWORD = 'your_password'
      SECRET = 'your_secret'
  5. Make a database by logging into MySQL. `mysql -u [YOUR USERNAME] -p`. Enter your password when prompted if applicable. Obtain database by `SOURCE db/schema.sql`.
  6. Seed the database by running `npm run seed`.
  7. Start the server by running `npm start`.
  8. In your browser, go to `http://localhost:3001`.


## Usage

* Provide Instructions *

* Provide ![alt text](assets/images/screenshot.png) *

## Credits

* Provide [Link Name](Link URL) *

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Status](https://img.shields.io/badge/Status-Undergoing Updates-red)

## Contact

### Collaborators
  * Kim Nguyen - [Charming Darling](https://github.com/charmingdarling)
  * Zo Olivar - [Lorenzo-Olivar](https://github.com/Lorenzo-Olivar)
  * Josh Beach - [Jbeach32](https://github.com/Jbeach32)
  * Nurillah Saboorudin - [RahimmullahSaboorudin](https://github.com/RahimmullahSaboorudin)

GitHub: 
[Project Pokemon IO](https://charmingdarling.github.io/projectpokemon/)
[Project Pokemon Repo](https://github.com/charmingdarling/projectpokemon)

---
