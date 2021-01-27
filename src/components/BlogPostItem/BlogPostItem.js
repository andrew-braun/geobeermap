import React from "react"
import { Link } from "gatsby"
import styles from "./blogpostitem.module.css"

export default function BlogPostItem(props) {
	const { excerpt, id, frontmatter } = props.postData.node
	const { path, title, date } = frontmatter

	console.log(title)

	return (
		<div className={styles.postContainer} key={id}>
			<article className={styles.post}>
				<header>
					<p className={styles.postMeta}>
						<Link className={styles.postTitle} to={path}>
							{title}
						</Link>
						<span> &bull; </span>
						<span className={styles.postData}>{date}</span>
					</p>
				</header>
				<p>
					{excerpt}
					<br />
					<br />
					<Link className={styles.postLink} to={path}>
						Keep Reading →
					</Link>
				</p>
			</article>
		</div>
	)
}
