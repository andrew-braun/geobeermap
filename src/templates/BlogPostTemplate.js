import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import BlogSidebar from "../components/BlogSidebar/BlogSidebar"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import "../styles/global.css"
import styles from "./blogposttemplate.module.css"

export default function Template({
	data: { mdx }, // this prop will be injected by the GraphQL query below.
}) {
	const { frontmatter, body } = mdx
	const { title, date, logo } = frontmatter

	console.log(logo)

	return (
		<Layout>
			<SEO title={title} />
			<div className={styles.blogPostPageContainer}>
				<div className={styles.blogPostSidebarContainer}>
					<BlogSidebar />
				</div>
				<div className={styles.blogPostContainer}>
					<div className={styles.blogPostFrontmatter}>
						<h1 className={styles.blogPostTitle}>{title}</h1>
						<div className={styles.blogPostFrontmatterDate}>{date}</div>
					</div>
					<div className={styles.blogPostContent}>
						<MDXRenderer>{body}</MDXRenderer>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export const pageQuery = graphql`
	query blogPostQuery($id: String!) {
		mdx(id: { eq: $id }) {
			id
			body
			excerpt
			mdxAST
			slug
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				images
				path
				title
			}
		}
	}
`
