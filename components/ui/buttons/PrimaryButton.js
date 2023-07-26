import Link from "next/link"

import styles from "./PrimaryButton.module.scss"

export default function PrimaryButton({
	children,
	onClick,
	buttonProps,
	variation = "fill",
	icon,
	link,
	target,
}) {
	const buttonElement = (
		<button
			className={`${styles.button} ${styles[`variation_${variation}`]}`}
			onClick={onClick}
			{...buttonProps}
		>
			{icon && <span className={`${styles.icon}`}>{icon}</span>}
			{children}
		</button>
	)

	if (link) {
		return (
			<Link href={link} target={target}>
				{buttonElement}
			</Link>
		)
	}

	return buttonElement
}