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
				filter: { fileAbsolutePath: { regex: "/blog/" } }
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						id
						slug
						frontmatter {
							path
						}
					}
				}
			}
			entries: allMdx(
				filter: {
					fileAbsolutePath: { regex: "/entries/" }
					frontmatter: { open: { ne: null } }
				}
			) {
				edges {
					node {
						id
						excerpt
						slug
						body
						fileAbsolutePath
						frontmatter {
							title
							path
							date
							open
							address
							beers
							city
							coordinates
							country
							facebook
							googlemaps
							images
							instagram
							name
							opening_date
							twitter
							type
							untappd
							website
							location {
								coordinates
							}
						}

						rawBody
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
			path: `blog/${node.slug}`,
			component: blogPostTemplate,
			context: { id: node.id }, // additional data can be passed via context
		})
	})

	result.data.entries.edges.forEach(({ node }) => {
		createPage({
			path: node.slug,
			component: entryPostTemplate,
			context: { id: node.id }, // additional data can be passed via context
		})
	})
}
