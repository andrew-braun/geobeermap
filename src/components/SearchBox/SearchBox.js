import React from "react"
import "../../styles/global.css"
import styles from "./searchbox.module.css"

export default function SearchBox(props) {
	const { searchValue, onSearchChange } = props

	return (
		<div className={styles.searchBoxContainer}>
			<input
				className={styles.searchBoxInput}
				type="text"
				placeholder="Search by name, city, or type"
				value={searchValue}
				onChange={onSearchChange}
			/>
		</div>
	)
}
