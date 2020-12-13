import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../../styles/global.css"
import styles from "./header.module.css"
import SEO from "../SEO"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu/HamburgerMenu"
import Hamburger from "../HamburgerMenu/Hamburger/Hamburger"

const Header = ({ props }) => {
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
		<header className="main-header">
			<div className="site-identity">
				<Link to="/">
					<div className="site-title">{data.site.siteMetadata.title}</div>
				</Link>
				<div className="site-description">
					{data.site.siteMetadata.description}
				</div>
			</div>
			<nav className="main-nav">
				<ul className="nav-list">
					<li className="nav-list-item">
						<Link to="/" className="nav-list-link">
							Home
						</Link>
					</li>
					{/* <li className="nav-list-item">
							<Link to="/blog" className="nav-list-link">
								Blog
							</Link>
						</li> */}
				</ul>
			</nav>
			<div className="hamburger-menu-grid-container">
				<Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				<HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			</div>
		</header>
	)
}

export default Header
