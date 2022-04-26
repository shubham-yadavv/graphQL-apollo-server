const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema/typeDefs');
const { resolvers } = require('./schema/resolvers');

const express = require('express');

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.start()
  .then(res => {
    server.applyMiddleware({ app });
    app.listen({ port: 3000 }, () =>
      console.log("server started at http://localhost:3000/graphql")
    )
  })