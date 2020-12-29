import React from "react"
import styles from "./hamburger.module.css"

export default function Hamburger({ menuOpen, setMenuOpen }) {
	return (
		<div
			className={styles.hamburgerContainer}
			onClick={() => setMenuOpen(!menuOpen)}
			onKeyDown={() => setMenuOpen(!menuOpen)}
			role="button"
			tabIndex="0"
		>
			<div />
			<div />
			<div />
		</div>
	)
}
