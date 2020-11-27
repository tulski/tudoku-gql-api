import { ApolloServer } from "apollo-server";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

import TudokuAPI from "./data-source/TudokuAPI";

const index = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ tudokuAPI: new TudokuAPI() }),
  context: ({ req }) => ({
    token: req.headers.authorization,
  }),
});

index.listen().then(({ url }: { url: string }) => {
  console.log(`🚀 Server ready at ${url}`);
});
