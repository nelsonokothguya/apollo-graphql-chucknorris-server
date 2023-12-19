import express from 'express';
import { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import {typeDefs, resolvers} from './schema';

const server = new ApolloServer({ typeDefs, resolvers });

await server.start();
const app: Application = express();
server.applyMiddleware({ app });

const PORT: number | string = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
});
