export default {
  methods: {
    getAuthorName(authorId) {
        return this.$site.pages.find(p => p.frontmatter.id === authorId)
          && this.$site.pages.find(p => p.frontmatter.id === authorId).frontmatter.title
    }
  }
}
