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
    title: String!
    content: String!
  }

  type Query {
    allAuthors: [Author!]!
    author(id: Int!): Author
    allPosts: [Post!]!
    post(id: Int!): Post
  }

  type Mutation {
    createAuthor(
      name: String!
      avatar: String!
      description: String
    ): Author!

    deleteAuthor(id: Int!): Author!

    createPost(
      authorId: Int!
      title: String!
      content: String!
    ): Post!
  }
`

module.exports = typeDefs