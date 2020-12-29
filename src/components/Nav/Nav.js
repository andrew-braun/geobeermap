import React from "react"
import { Link } from "gatsby"
import "../../styles/global.css"
import styles from "./nav.module.css"

const Nav = ({ navItems }) => {
	const NavItems = navItems.map(item => {
		return (
			<li className={styles.navListItem}>
				<Link to={item.path} className={styles.navListLink}>
					{item.name}
				</Link>
			</li>
		)
	})
	return (
		<nav className={styles.mainNav}>
			<ul className={styles.navList}>
				{NavItems}
				{/* <li className={styles.navListItem}>
					<Link to="/" className={styles.navListLink}>
						Home
					</Link>
				</li> */}
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
