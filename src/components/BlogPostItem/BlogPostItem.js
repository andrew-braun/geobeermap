import { Link } from "gatsby"
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
	const { path, title, date, name } = frontmatter

	const postLink = fileAbsolutePath.includes("blog") ? slug : path

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
					<p className={styles.postExcerpt}>{excerpt}</p>
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
