import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import "../../../styles/global.css"
import styles from "./hamburgermenu.module.css"

export default function HamburgerMenu({ menuOpen }) {
	let burgerClassNames = classNames(
		styles.hamburgerMenuContainer,
		menuOpen ? styles.hamburgerMenuOpen : styles.hamburgerMenuClosed
	)

	return (
		<div className={burgerClassNames}>
			<div className={styles.hamburgerElement}>
				<Link to="/" className={styles.hamburgerLink}>
					Home
				</Link>
			</div>
			<div className={styles.hamburgerElement}>
				<Link to="/blog" className={styles.hamburgerLink}>
					Blog
				</Link>
			</div>
		</div>
	)
}

HamburgerMenu.propTypes = {
	open: Boolean.isRequired,
}
