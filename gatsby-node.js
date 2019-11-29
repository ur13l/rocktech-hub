/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const slash = require(`slash`)

/**
 * Method that create pages dynamically.
 * Pages created: all posts entries, glosary entries and category entries (These include
 * a paginator with the posts per category).
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
      posts: allWordpressPost(
        filter: { categories: { elemMatch: { name: { eq: "blog" } } } }
      ) {
        edges {
          node {
            id
            slug
            tags {
              id
            }
          }
        }
      }
      tags: allWordpressTag {
        edges {
          node {
            id
            slug
          }
        }
      }
      glosary: allWordpressPost(
        filter: { categories: { elemMatch: { name: { eq: "glosario" } } } }
      ) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve(`./src/components/post.js`)
  const categoryTemplate = path.resolve(`./src/components/category.js`)
  const glosaryEntryTemplate = path.resolve(`./src/components/glosary-entry.js`)

  result.data.posts.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })

  /**
   * Creating an array from the number of pages and category posts per page.
   */
  result.data.tags.edges.forEach(edge => {
    //Paginator options for category template.
    const categoryPostsPerPage = 10
    const posts = result.data.posts.edges.filter(post => {

      return post.node.tags.findIndex(e => e.id === edge.node.id) !== -1
    })
    const numPages = Math.ceil(posts.length / categoryPostsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `categoria/${edge.node.slug}`
            : `categoria/${edge.node.slug}/${i + 1}`,
        component: slash(categoryTemplate),
        context: {
          id: edge.node.id,
          limit: categoryPostsPerPage,
          skip: i * categoryPostsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  result.data.glosary.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: "/glosario/" + edge.node.slug,
      // specify the component template of your choice
      component: slash(glosaryEntryTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
}
