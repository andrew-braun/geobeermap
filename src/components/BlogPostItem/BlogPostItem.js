import React from "react"
import { Link } from "gatsby"
import styles from "./blogpostitem.module.css"

export default function BlogPostItem(props) {
	const { excerpt, id, frontmatter, slug } = props.postData.node
	const { path, title, date, name } = frontmatter

	console.log(title)

	return (
		<div className={styles.postContainer} key={id}>
			<article className={styles.post}>
				<header className={styles.postHeader}>
					<p className={styles.postTitle}>
						<Link className={styles.postTitleLink} to={slug}>
							{name ?? title}
						</Link>
					</p>
				</header>
				<p className={styles.postExcerpt}>{excerpt}</p>
				<footer className={styles.postFooter}>
					<p className={styles.postDate}>{date}</p>
					<div className={styles.postLinkButton}>
						<Link className={styles.postLink} to={path}>
							Keep Reading →
						</Link>
					</div>
				</footer>
			</article>
		</div>
	)
}
