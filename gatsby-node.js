const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions
	const typeDefs = `
	  type Mdx implements Node {
		frontmatter: MdxFrontmatter!
	  }
	  type MdxFrontmatter {
		  address: String
		  beers: [String]
		  city: String
		  coordinates: String
		  country: String
		  date(
			difference: String
			formatString: String
			fromNow: Boolean
			locale: String
		  ): Date
		  facebook: String
		  googlemaps: String
		  instagram: String
		  locations: [String]
		  name: String
		  open: Boolean
		  path: String
		  title: String
		  twitter: String
		  type: [String]
		  untappd: String
		  website: String
	  }
	`
	createTypes(typeDefs)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions

	const blogPostTemplate = path.resolve(`src/templates/blog.js`)
	const entryPostTemplate = path.resolve(`src/templates/entry.js`)

	const result = await graphql(`
		{
			blogPosts: allMdx(
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
			entries: allMdx(filter: { frontmatter: { open: { ne: null } } }) {
				edges {
					node {
						id
						body
						frontmatter {
							name
							open
							address
							city
							country
							coordinates
							openingdate
							locations
							website
							googlemaps
							facebook
							instagram
							twitter
							untappd
							path
							date
							opening_date
							images
							beers
							title
							type
						}
						fileAbsolutePath
					}
				}
			}
		}
	`)

	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	result.data.blogPosts.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.path,
			component: blogPostTemplate,
			context: {}, // additional data can be passed via context
		})
	})

	result.data.entries.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.path,
			component: entryPostTemplate,
			context: {}, // additional data can be passed via context
		})
	})
}
