import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/schemas";
import { userResolver } from "./graphql/resolvers/userResolver";
import { productResolver } from "./graphql/resolvers/productResolver";
import { context } from "./context";

const resolvers = {
  Query: {
    ...userResolver.Query,
    ...productResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
    ...productResolver.Mutation,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
