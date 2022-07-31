import Link from "next/link"
import styles from "./PrimaryTag.module.scss"

export default function Tag({ text, url, color = "light" }) {
	return (
		<>
			{url && (
				<Link href={url}>
					<a className={`${styles.tag} ${styles[color]}`}>{text}</a>
				</Link>
			)}
			{!url && <span className={`${styles.tag} ${styles[color]}`}>{text}</span>}
		</>
	)
}
