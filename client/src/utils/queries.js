import { gql } from '@apollo/client';

export const QUERY_CHOICES = gql`
  query survey{
    survey {
      _id
      choice1
      choice2
      description
      choice1_votes
      choice2_votes
      title
    }
  }
`;

export const QUERY_SINGLE_SURVEY = gql`
  query singleSurvey($_id: String) {
    singleSurvey(_id: $_id) {
      _id
      title
      choice1
      choice2
      description
      choice1_votes
      choice2_votes
    }
  }
`;