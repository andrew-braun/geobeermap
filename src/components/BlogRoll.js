import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import styles from "./blogroll.module.css"

class BlogRoll extends React.Component {
	render() {
		const { data } = this.props
		const { edges: posts } = data.allMarkdownRemark

		return (
			<div className={styles.feedContainer}>
				{posts &&
					posts.map(({ node: post }) => (
						<div className={styles.postContainer} key={post.id}>
							<article className={styles.post}>
								<header>
									<p className={styles.postMeta}>
										<Link
											className={styles.postTitle}
											to={post.frontmatter.path}
										>
											{post.frontmatter.title}
										</Link>
										<span> &bull; </span>
										<span className={styles.postData}>
											{post.frontmatter.date}
										</span>
									</p>
								</header>
								<p>
									{post.excerpt}
									<br />
									<br />
									<Link className={styles.postLink} to={post.frontmatter.path}>
										Keep Reading →
									</Link>
								</p>
							</article>
						</div>
					))}
			</div>
		)
	}
}

BlogRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array,
		}),
	}),
}

export default () => (
	<StaticQuery
		query={graphql`
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
		`}
		render={(data, count) => <BlogRoll data={data} count={count} />}
	/>
)
