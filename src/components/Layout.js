import React from "react"
import SEO from "./SEO"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import "./layout.css"

const Layout = ({ children }) => {
	return (
		<div className="main-grid">
			<SEO />
			<Header />
			<main className="main-container">{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
