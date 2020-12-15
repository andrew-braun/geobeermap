import React, { useState } from "react"
import "../../styles/global.css"
import styles from "./hamburgercontainer.module.css"
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"
import Hamburger from "./Hamburger/Hamburger"

const HamburgerContainer = ({ props }) => {
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<div className={styles.hamburgerContainer}>
			<Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
		</div>
	)
}

export default HamburgerContainer
