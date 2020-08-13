const path = require(`path`);

exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog.js`);
  const entryPostTemplate = path.resolve(`src/templates/entry.js`);

  const result = await graphql(`
    {
      blogPosts: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      entries: allEntriesJson {
        edges {
          node {
            id
            facebook
            googlemaps
            instagram
            coordinates
            name
            open
            title
            twitter
            type
            website
            body
            path
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return
  }

  result.data.blogPosts.edges.forEach(({node}) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  result.data.entries.edges.forEach(({node}) => {
    createPage({
      path: node.path,
      component: entryPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
};