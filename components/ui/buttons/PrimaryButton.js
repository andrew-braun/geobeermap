import styles from "./PrimaryButton.module.scss"

export default function Button({ children, onClick, buttonProps }) {
	return (
		<button className={`${styles.button}`} onClick={onClick} {...buttonProps}>
			{children}
		</button>
	)
}
