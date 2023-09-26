const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Survey {
    _id: ID
    title: String
    choice1: String
    choice2: String
    description: String
  }

  type Query {
    survey: [Survey]
  }

  # Define which mutations the client is allowed to make
  type Mutation {
    # Set the required fields for new survey
    createSurvey(title: String!, choice1: String!, choice2: String!,description: String!): Survey
  }
`;

module.exports = typeDefs;