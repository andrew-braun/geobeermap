import { createContext, useState, useEffect } from "react"
import { useRouter } from "next/router"

export const SearchContext = createContext({
	searchState: [],
	setSearchState: () => [],
})

export const SearchProvider = ({ children }) => {
	const [searchState, setSearchState] = useState([])

	const router = useRouter()

	useEffect(() => {
		setSearchState([])
	}, [router.asPath])

	return (
		<SearchContext.Provider value={{ searchState, setSearchState }}>
			{children}
		</SearchContext.Provider>
	)
}
