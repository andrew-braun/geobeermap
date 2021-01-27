import React from "react"
import "../styles/global.css"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styles from "./blog.module.css"
import BlogSidebar from "../components/BlogSidebar/BlogSidebar"
import BlogPostsContainer from "../components/BlogPostsContainer/BlogPostsContainer"

export default class BlogIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="Blog" />
				<div className={styles.blogPageContainer}>
					<div className={styles.blogPageHeading}>
						<h1>Latest Posts</h1>
					</div>
					<div className={styles.blogSidebarContainer}>
						<BlogSidebar />
					</div>
					<div className={styles.blogFeedContainer}>
						<BlogPostsContainer />
					</div>
				</div>
			</Layout>
		)
	}
}
