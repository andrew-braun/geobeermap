import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
	return (
		<>
			<Header></Header>
			<div>{children}</div>
			<Footer></Footer>
		</>
	)
}
