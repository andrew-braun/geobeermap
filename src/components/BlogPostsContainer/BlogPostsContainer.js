import React, { useEffect, useRef } from "react"
import BlogPostQuery from "../../queries/BlogPostQuery"
import BlogPostItem from "../BlogPostItem/BlogPostItem"
import styles from "./blogpostscontainer.module.css"

export default function BlogPostsContainer() {
	// const data = useStaticQuery(graphql`
	// 	query BlogPostQuery {
	// 		allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
	// 			edges {
	// 				node {
	// 					excerpt(pruneLength: 250)
	// 					id
	// 					body
	// 					mdxAST
	// 					slug
	// 					fileAbsolutePath
	// 					frontmatter {
	// 						date(formatString: "DD MM, YYYY")
	// 						images
	// 						path
	// 						title
	// 						name
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `)

	const posts = BlogPostQuery.allMdx.edges

	const postItems =
		posts.map(post => <BlogPostItem postData={post} />) ??
		"Where has all the beer gone?"

	const feedRef = useRef()

	useEffect(() => {
		feedRef.current.focus()
	}, [])

	return (
		<div className={styles.feedContainer} tabIndex="-1" ref={feedRef}>
			{postItems}
		</div>
	)
}
