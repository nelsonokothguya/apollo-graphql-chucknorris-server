import axios from 'axios';
import { gql } from 'apollo-server-express';

interface Joke {
  id: string;
  value: string;
  category: string;
}

export const typeDefs = gql`
  type Query {
    categories: [String]
    randomJoke(category: String): Joke
  }

  type Joke {
    id: ID
    value: String
    category: String
  }
`;

export const resolvers = {
  Query: {
    categories: async (): Promise<string[]> => {
      try {
        // Fetch categories from ChuckNorris.io API
        const response = await axios.get<string[]>('https://api.chucknorris.io/jokes/categories');
        return response.data;
      } catch (error: any) {
        console.error('Error fetching categories:', error.message);
        throw new Error('Failed to fetch categories');
      }
    },
    randomJoke: async (_: any, { category }: { category: string }): Promise<Joke> => {
      try {
        // Fetch a random joke by category from ChuckNorris.io API
        const response = await axios.get<Joke>(`https://api.chucknorris.io/jokes/random?category=${category}`);
        return response.data;
      } catch (error: any) {
        console.error('Error fetching random joke:', error.message);
        throw new Error('Failed to fetch random joke');
      }
    },
  },
};
