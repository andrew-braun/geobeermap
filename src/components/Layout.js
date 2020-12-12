import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import SEO from "../components/SEO"
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu/HamburgerMenu"
import Hamburger from "./HamburgerMenu/Hamburger/Hamburger"
import "./layout.css"

const Layout = ({ children }) => {
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
		<div className="main-grid">
			<SEO />
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
			</header>
			<main className="main-container">{children}</main>
			<footer className="main-footer">
				<p>Made by Andrew Braun</p>
			</footer>
			<div className="hamburger-menu-grid-container">
				<Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				<HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			</div>
		</div>
	)
}

export default Layout
