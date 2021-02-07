import React from "react"
import BlogPostsContainer from "../components/BlogPostsContainer/BlogPostsContainer"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import "../styles/global.css"
import styles from "./blog.module.css"

export default class BlogIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="Blog" />
				<div className={styles.blogPageContainer}>
					<div className={styles.blogFeedContainer}>
						{/* <div className={styles.blogPageHeading}>
							<h1>Latest Posts</h1>
						</div> */}
						<BlogPostsContainer />
					</div>
				</div>
			</Layout>
		)
	}
}
