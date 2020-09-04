import React from "react"
import styles from "./hamburger.module.css"

export default function Hamburger({ menuOpen, setMenuOpen }) {
    return(
        <div className={styles.hamburgerContainer} menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <div />
            <div />
            <div />
        </div>
    )   
}

Hamburger.propTypes = {
    menuOpen: Boolean.isRequired,
    setMenuOpen: Function.isRequired,
};