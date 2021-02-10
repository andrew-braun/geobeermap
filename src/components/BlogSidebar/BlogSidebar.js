import React, { useEffect, useState } from "react"
import BlogPostQuery from "../../queries/BlogPostQuery"
import SidebarPostItem from "../SidebarPostItem/SidebarPostItem"
import styles from "./blogsidebar.module.css"

export default function BlogSidebar() {
	const [randomPosts, setRandomPosts] = useState([])
	const { data } = BlogPostQuery()

	const posts = data.allMdx.edges

	useEffect(() => {
		// Shuffle array
		const shuffledPosts = posts.sort(() => 0.5 - Math.random())

		// Get sub-array of first n elements after shuffled
		setRandomPosts(shuffledPosts.slice(0, 10))
	}, [])

	const sidebarItems =
		randomPosts.map(item => <SidebarPostItem postData={item} />) ??
		"Where has all the beer gone?"

	return (
		<div className={styles.blogSidebar}>
			<div className={styles.blogSidebarPosts}>{sidebarItems}</div>
		</div>
	)
}
