import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../../styles/global.css"
import styles from "./header.module.css"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu/HamburgerMenu"
import Hamburger from "../HamburgerMenu/Hamburger/Hamburger"

const Nav = ({ props }) => {
	const [menuOpen, setMenuOpen] = useState(false)

	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`
	)
	return (
		<header className={styles.mainHeader}>
			<div className={styles.siteIdentity}>
				<Link to="/">
					<div className={styles.siteTitle}>{data.site.siteMetadata.title}</div>
				</Link>
				<div className={styles.siteDescription}>
					{data.site.siteMetadata.description}
				</div>
			</div>
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
			<div className={styles.hamburgerMenuGridContainer}>
				<Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				<HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			</div>
		</header>
	)
}

export default Nav
