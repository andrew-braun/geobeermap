import { graphql, useStaticQuery } from "gatsby"

export default function BlogPostQuery() {
	const data = useStaticQuery(graphql`
		query BlogPostQuery {
			allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
				edges {
					node {
						excerpt(pruneLength: 250)
						id
						body
						mdxAST
						slug
						fileAbsolutePath
						frontmatter {
							date(formatString: "DD MM, YYYY")
							images
							path
							title
							name
							logo
						}
					}
				}
			}
		}
	`)

	return { data }
}
