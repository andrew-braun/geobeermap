import React from "react"
import BlogPostQuery from "../../queries/BlogPostQuery"
import styles from "./blogsidebar.module.css"

export default function BlogSidebar() {
	const { data } = BlogPostQuery()

	const posts = data.allMdx.edges

	// const postItems =
	// 	posts.map(post => <BlogPostItem postData={post} />) ??
	// 	"Where has all the beer gone?"

	return (
		<div className={styles.blogSidebar}>
			<div className={styles.blogSidebarPosts}></div>
		</div>
	)
}
