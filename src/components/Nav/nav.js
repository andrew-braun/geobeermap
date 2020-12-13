import React from "react"
import { Link } from "gatsby"
import "../../styles/global.css"
import styles from "./nav.module.css"

const Nav = () => {
	return (
		<nav className={styles.mainNav}>
			<ul className={styles.navList}>
				<li className={styles.navListItem}>
					<Link to="/" className={styles.navListLink}>
						Home
					</Link>
				</li>
				{/* <li className={styles.navListItem}>
							<Link to="/blog" className={styles.navListLink}>
								Blog
							</Link>
						</li> */}
			</ul>
		</nav>
	)
}

export default Nav
