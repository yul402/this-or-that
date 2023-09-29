const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Survey {
    _id: ID
    title: String
    choice1: String
    choice2: String
    description: String
    choice1_votes: Int
    choice2_votes: Int
  }
  type Auth {
    token: ID!
    user: User
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    survey: [Survey]
    singleSurvey(_id: String): [Survey]
  }

  # Define which mutations the client is allowed to make
  type Mutation {
    # Set the required fields for new survey
    createSurvey(title: String!, choice1: String!, choice2: String!,description: String!): Survey

    updateVote(_id: String!, choiceNum: Int!): Survey

    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
