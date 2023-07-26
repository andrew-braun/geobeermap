import { createContext, useState } from "react"

export const SearchContext = createContext({
	searchState: [],
	setSearchState: () => [],
})

export const SearchProvider = ({ children }) => {
	const [searchState, setSearchState] = useState([])

	return (
		<SearchContext.Provider value={{ searchState, setSearchState }}>
			{children}
		</SearchContext.Provider>
	)
}
