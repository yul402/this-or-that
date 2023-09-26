import { gql } from '@apollo/client';

export const CREATE_SURVEY = gql`
  mutation createSurvey($title: String!, $choice1: String!,$choice2: String!, $description: String!) {
    createSurvey(title: $title, choice1: $choice1,choice2: $choice2, description: $description) {
      _id
      title
      choice1
      choice2
      description
    }
  }
`;

