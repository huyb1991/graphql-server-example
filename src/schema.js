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
    author(id: Int!): Author
    allPosts: [Post!]!
    post(id: Int!): Post
  }

  type Mutation {
  }
`

module.exports = typeDefs