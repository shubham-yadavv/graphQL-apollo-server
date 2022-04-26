const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: ID!
        name: String
        age: Int
        programmer: Boolean
    }

    type Query {
        getUsers: [User!]!
    }

    type Mutation {
        createUser(name: String!, age: Int!, programmer: Boolean!): User!
        updateUser(id: ID!, name: String, age: Int, programmer: Boolean): User!
        deleteUser(id: ID!): User!
        
    }


`;

module.exports = { typeDefs }
