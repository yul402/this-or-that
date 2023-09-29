import { gql } from '@apollo/client';

// Create a new survey after user filling in surveyForm
export const CREATE_SURVEY = gql`
  mutation createSurvey($title: String!, $choice1: String!,$choice2: String!, $description: String!) {
    createSurvey(title: $title, choice1: $choice1,choice2: $choice2, description: $description) {
      _id
      title
      description
      choice1
      choice2
      choice1_votes
      choice2_votes
    }
  }
`;

export const UPDATE_VOTE = gql`
  mutation updateVote($_id: String!, $choiceNum: Int!) {
    updateVote(_id: $_id, choiceNum: $choiceNum) {
      _id
      title
      description
      choice1
      choice2
      choice1_votes
      choice2_votes
    }
  }
`;