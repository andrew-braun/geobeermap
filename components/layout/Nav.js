import Link from "next/link"
import styles from "./Nav.module.scss"

export default function Nav() {
	const navItems = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Contact",
			path: "/contact",
		},
	]

	const navElements = navItems.map((item) => {
		return (
			<div key={item.name} className={`${styles.navItem}`}>
				<Link href={item.path}>{item.name}</Link>
			</div>
		)
	})

	return <nav className={`${styles.navBar}`}>{navElements}</nav>
}
