import React from "react"
import BlogPostQuery from "../../queries/BlogPostQuery"
import styles from "./blogsidebar.module.css"

export default function BlogSidebar() {
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

	return (
		<div className={styles.blogSidebar}>
			<div className={styles.blogSidebarPosts}></div>
		</div>
	)
}
