const { gql } = require('apollo-server')

const typeDefs = gql`
  type Author {
    id: Int!
    name: String!
    avatar: String!
    description: String
  }

  type Post {
    id: Int!
    title: String
    content: String
  }

  type Query {
  }

  type Mutation {
  }
`

module.exports = typeDefs