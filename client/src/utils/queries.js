export const QUERY_CHOICES = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      choice1
      choice2
      choice1_votes
      choice2_votes
    }
  }
`;