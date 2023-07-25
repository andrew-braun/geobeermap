import Fuse from "fuse.js"

import styles from "./SearchBox.module.scss"

export default function SearchBox({
	searchData,
	keys,
	updateSearchState,
	idsOnly = true,
}) {
	const fuse = new Fuse(searchData, {
		keys,
		includeScore: true,
		threshold: 0.5,
	})

	function fuseSearch(query) {
		if (!query) {
			return []
		}

		const results = fuse.search(query).map((result) => {
			const item = result.item
			let resultObject = {}

			if (idsOnly) {
				resultObject.id = item.id
			} else {
				resultObject = item
			}
			if (result?.score) {
				resultObject.score = result.score
			}

			return resultObject
		})

		return results
	}

	const handleSearch = (event) => {
		const query = event.target.value
		const result = fuseSearch(query)
		updateSearchState(() => result)

		return
	}

	return (
		<div className={`${styles.searchBox}`}>
			<input
				type="text"
				placeholder="Search"
				onKeyUp={handleSearch}
				className={`${styles.input}`}
			/>
		</div>
	)
}
