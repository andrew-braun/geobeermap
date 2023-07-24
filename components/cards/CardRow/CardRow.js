import styles from "./CardRow.module.scss"

export default function CardRow({ children }) {
	return <div className={`${styles.cardRow}`}>{children}</div>
}
