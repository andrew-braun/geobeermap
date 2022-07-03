import Header from "./Header"

export default function Layout({ children }) {
	return (
		<>
			<Header></Header>
			<div>{children}</div>
		</>
	)
}
