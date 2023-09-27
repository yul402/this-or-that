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