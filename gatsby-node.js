const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const newsPageTemplate = path.resolve("src/templates/news.js")
    return graphql(`
      {
        allContentfulNewsItem(
          limit: 1000
          sort: { fields: date, order: DESC }
        ) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      const posts = result.data.allContentfulNewsItem.edges
      const postsPerPage = 5
      const numPages = Math.ceil(posts.length / postsPerPage)

      Array.from({ length: numPages }).forEach((edge, i) => {
        createPage({
          path: i === 0 ? `/news/` : `/news/page-${i + 1}/`,
          component: newsPageTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
        resolve()
      })
    })
  })
}
