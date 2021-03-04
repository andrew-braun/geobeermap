import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styles from "./blogpostitem.module.css"

export default function BlogPostItem(props) {
	const {
		excerpt,
		id,
		frontmatter,
		slug,
		fileAbsolutePath,
	} = props.postData.node
	const { path, title, date, name, logo } = frontmatter

	/*
	const LogoQuery = useStaticQuery(graphql`
		query LogoQuery {
			logo: file(
				extension: { regex: "/(jpg)|(jpeg)|(png)|(svg)|(webp)/" }
				name: { eq: "geobeermap-megobrebi" }
			) {
				childImageSharp {
					...GatsbyImageSharpFluid
				}
			}
		}
	`)
	*/

	const postLink = fileAbsolutePath.includes("blog") ? slug : path

	console.log(logo)
	return (
		<div className={styles.postContainer} key={id}>
			<article className={styles.post}>
				<header className={styles.postHeader}>
					<p className={styles.postTitle}>
						<Link className={styles.postTitleLink} to={postLink}>
							{name ?? title}
						</Link>
					</p>
				</header>
				<Link className={styles.postBodyLink} to={postLink}>
					{logo ? (
						<div
							className={styles.postImage}
							style={{
								backgroundImage: `url(/${logo})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
							}}
						></div>
					) : (
						<p className={styles.postExcerpt}>{excerpt}</p>
					)}
				</Link>
				<footer className={styles.postFooter}>
					<p className={styles.postDate}>{date}</p>
					<div className={styles.postLinkButton}>
						{/* <Link className={styles.postLink} to={postLink}>
							→
						</Link> */}
					</div>
				</footer>
			</article>
		</div>
	)
}
