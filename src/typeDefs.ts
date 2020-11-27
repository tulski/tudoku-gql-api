import { gql } from "apollo-server";

export default gql`
  enum Status {
    todo
    doing
    done
  }

  type Item {
    _id: ID!
    title: String!
    description: String
    status: Status!
    categories: [String]!
  }

  input SignInInput {
    email: String!
    password: String!
  }

  input SignUpInput {
    username: String!
    email: String!
    password: String!
  }

  type AuthToken {
    token: String!
    expiresIn: Int!
  }

  type Query {
    test: String!
    items: [Item]!
  }

  type Mutation {
    signIn(input: SignInInput!): AuthToken!
    signUp(input: SignUpInput!): AuthToken!
  }
`;
