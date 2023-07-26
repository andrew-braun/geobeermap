import { HiArrowNarrowLeft } from "react-icons/hi"

import { iconSizes } from "styles/style-variables"
import styles from "./SlideIn.module.scss"

export default function SlideIn({
	onClick,
	hidden = false,
	direction = "right",
	arrowOutside = false,
	children,
}) {
	return (
		<aside
			className={`${styles.slideIn} ${styles[direction]} ${
				hidden ? styles.hide : ""
			}`}
		>
			<div
				className={`${styles.arrow} ${arrowOutside ? styles.arrowOutside : ""}`}
				onClick={onClick}
			>
				<HiArrowNarrowLeft
					size={iconSizes.medium}
					color="var(--primary-text)"
				/>
			</div>
			<div>{children}</div>
		</aside>
	)
}
