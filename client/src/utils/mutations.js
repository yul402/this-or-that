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

export const DELETE_SURVEY = gql`
  mutation deleteSurvey($_id: String!) {
    deleteSurvey(_id: $_id) {
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
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;