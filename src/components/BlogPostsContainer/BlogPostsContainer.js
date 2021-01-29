import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlogPostItem from "../BlogPostItem/BlogPostItem"
import styles from "./blogpostscontainer.module.css"

export default function BlogPostsContainer() {
	const data = useStaticQuery(graphql`
		query BlogPostQuery {
			allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
				edges {
					node {
						excerpt(pruneLength: 400)
						id
						body
						mdxAST
						slug
						frontmatter {
							date(formatString: "MMMM DD, YYYY")
							images
							path
							title
							name
						}
					}
				}
			}
		}
	`)

	const posts = data.allMdx.edges

	const postItems =
		posts.map(post => <BlogPostItem postData={post} />) ??
		"Where has all the beer gone?"

	return <div className={styles.feedContainer}>{postItems}</div>
}
