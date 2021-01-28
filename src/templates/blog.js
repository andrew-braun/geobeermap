import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../styles/global.css"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styles from "./blog.module.css"

export default function Template({
	data: { mdx }, // this prop will be injected by the GraphQL query below.
}) {
	const { frontmatter, body } = mdx
	const { title, date, path } = frontmatter

	return (
		<Layout>
			<SEO title={title} />
			<div className={styles.blogFeedContainer}>
				<div className={styles.blogPostFrontMatter}>
					<h1>{title}</h1>
					<h2>{date}</h2>
					<div className={styles.blogPostDescription}>
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
