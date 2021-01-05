import React from "react"
import { graphql } from "gatsby"
import "../styles/global.css"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styles from "./blog.module.css"

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { Mdx } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = Mdx

	console.log(data)
	return (
		<Layout>
			<SEO title={frontmatter.title} />
			<div className={styles.blogFeedContainer}>
				<div className={styles.blogPostFrontMatter}>
					<h1>{frontmatter.title}</h1>
					<h2>{frontmatter.date}</h2>
					<div
						className={styles.blogPostDescription}
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</div>
			</div>
		</Layout>
	)
}

export const pageQuery = graphql`
	query($path: String!) {
		allMdx(filter: { frontmatter: { path: { eq: $path } } }) {
			edges {
				node {
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						path
						title
					}
				}
			}
		}
	}
`
