import React, { useState, useRef } from "react"
import { useOnClickOutside } from "../../hooks/MenuCloseHook"
import "../../styles/global.css"
import styles from "./hamburgercontainer.module.css"
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"
import Hamburger from "./Hamburger/Hamburger"

const HamburgerContainer = ({ navItems }) => {
	const [menuOpen, setMenuOpen] = useState(false)

	const node = useRef()
	useOnClickOutside(node, () => setMenuOpen(false))

	return (
		<div className={styles.hamburgerContainer} ref={node}>
			<Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<HamburgerMenu
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				navItems={navItems}
			/>
		</div>
	)
}

export default HamburgerContainer
