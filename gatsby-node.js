const path = require("path")

// LEAVE THIS BLOCK COMMENTED OUT //

// exports.onCreateWebpackConfig = ({ actions }) => {
//   const { setWebpackConfig } = actions
//   setWebpackConfig({
//     externals: {
//       jquery: "jQuery", // important: 'Q' capitalized
//     },
//   })
// }

// ------------------------------ //

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        const newsPageTemplate = path.resolve("src/templates/news.js")
        const newsItemPageTemplate = path.resolve("src/templates/newsItem.js")
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
    `).then(async result => {
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
            })

            await result.data.allContentfulNewsItem.edges.forEach(edge => {
                createPage({
                    path: `${edge.node.slug}/`,
                    component: newsItemPageTemplate,
                    context: {
                        slug: edge.node.slug,
                    },
                })
            })

            resolve()
        })
    })
}
