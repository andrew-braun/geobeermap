import Header from "./Header"
import styles from "./Layout.module.scss"

export default function Layout({ children }) {
	return (
		<div className={`${styles.layout}`}>
			<Header></Header>
			<div className={`${styles.content}`}>{children}</div>
		</div>
	)
}
