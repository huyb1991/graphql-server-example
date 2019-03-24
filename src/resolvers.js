const resolvers = {
  Query: {
    async allAuthors (root, args, { models }) {
      return models.Author.findAll()
    },
    async author (root, { id }, { models }) {
      return models.Author.findById(id)
    },
    async allPosts (root, args, { models }) {
      return models.Post.findAll()
    },
    async post (root, { id }, { models }) {
      return models.Post.findById(id)
    }
  },

  Mutation: {
    async createAuthor (root, { name, avatar, description }, { models }) {
      return models.Author.create({
        name,
        avatar,
        description,
      })
    },
    async createPost (root, { authorId, title, content }, { models }) {
      return models.Post.create({ authorId, title, content })
    }
  },
}

module.exports = resolvers