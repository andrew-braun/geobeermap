import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./blogroll.module.css"

export default function BlogRoll() {
	const data = useStaticQuery(graphql`
		query BlogRollQuery {
			allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
				edges {
					node {
						excerpt(pruneLength: 400)
						id
						frontmatter {
							path
							title
							date(formatString: "MMMM DD, YYYY")
						}
					}
				}
			}
		}
	`)

	const posts = data.allMdx.edges
	console.log(posts)

	return (
		<div className={styles.feedContainer}>
			{posts &&
				posts.map(post => (
					<div className={styles.postContainer} key={post.node.frontmatter.id}>
						<article className={styles.post}>
							<header>
								<p className={styles.postMeta}>
									<Link
										className={styles.postTitle}
										to={post.node.frontmatter.path}
									>
										{post.node.frontmatter.title}
									</Link>
									<span> &bull; </span>
									<span className={styles.postData}>
										{post.node.frontmatter.date}
									</span>
								</p>
							</header>
							<p>
								{post.excerpt}
								<br />
								<br />
								<Link
									className={styles.postLink}
									to={post.node.frontmatter.path}
								>
									Keep Reading →
								</Link>
							</p>
						</article>
					</div>
				))}
		</div>
	)
}
