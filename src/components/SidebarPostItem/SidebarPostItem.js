import { Link } from "gatsby"
import React from "react"
import styles from "./sidebarpostitem.module.css"

export default function SideBarItem(props) {
	const {
		excerpt,
		id,
		frontmatter,
		slug,
		fileAbsolutePath,
	} = props.postData.node

	const { path, title, date, name } = frontmatter

	const sidebarItemLink = fileAbsolutePath.includes("blog") ? slug : path

	return (
		<div className={styles.sidebarItemContainer} key={id}>
			<article className={styles.sidebarItem}>
				<header className={styles.sidebarItemHeader}>
					<p className={styles.sidebarItemTitle}>
						<Link className={styles.sidebarItemTitleLink} to={sidebarItemLink}>
							{name ?? title}
						</Link>
					</p>
				</header>
			</article>
		</div>
	)
}
