import { gql } from '@apollo/client';

export const QUERY_CHOICES = gql`
  query survey{
    survey {
      _id
      choice1
      choice2
      choice1_votes
      choice2_votes
    }
  }
`;