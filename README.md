# ChuckNorris Joke Server

This repository contains a simple Express server with Apollo Server integration to fetch Chuck Norris jokes.

## Getting Started

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/chucknorris-joke-server.git
    cd chucknorris-joke-server
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Run the Server:**

    ```bash
    npm start
    ```

4. **Open in Browser:**

    Open your browser and navigate to [http://localhost:4000/graphql](http://localhost:4000/graphql) to interact with the GraphQL Playground.

## Server Overview

The server is built using Express and Apollo Server to provide Chuck Norris jokes through a GraphQL API. It fetches jokes from the ChuckNorris.io API.

## Usage

### Get Categories

- **Query:**

    ```graphql
    query {
      categories
    }
    ```

- **Response:**

    ```json
    {
      "data": {
        "categories": ["dev", "animal", "science", "food", "history"]
      }
    }
    ```

### Get Random Joke by Category

- **Query:**

    ```graphql
    query {
      randomJoke(category: "dev") {
        id
        value
        category
      }
    }
    ```

- **Response:**

    ```json
    {
      "data": {
        "randomJoke": {
          "id": "123",
          "value": "Chuck Norris can divide by zero.",
          "category": "dev"
        }
      }
    }
    ```

## Contributing

Feel free to contribute to the development of this server by following the steps in our [CONTRIBUTING.md](CONTRIBUTING.md) guide.

## License

This project is licensed under the [MIT License](LICENSE).
