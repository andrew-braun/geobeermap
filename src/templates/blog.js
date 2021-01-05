import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../styles/global.css"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styles from "./blog.module.css"

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const post = data.allMdx.edges[0].node // data.markdownRemark holds your post data
	const { frontmatter, body } = post

	return (
		<Layout>
			<SEO title={frontmatter.title} />
			<div className={styles.blogFeedContainer}>
				<div className={styles.blogPostFrontMatter}>
					<h1>{frontmatter.title}</h1>
					<h2>{frontmatter.date}</h2>
					<div className={styles.blogPostDescription}>
						<MDXRenderer>{body}</MDXRenderer>
					</div>
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
					body
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
