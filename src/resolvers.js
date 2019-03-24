const resolvers = {
  Query: {
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
}

module.exports = resolvers