import { CgArrowLongLeftR } from "react-icons/cg"

import { iconSizes } from "styles/style-variables"
import styles from "./SlideIn.module.scss"

export default function SlideIn({
	onClick,
	hidden = false,
	direction = "right",
	children,
}) {
	return (
		<aside
			className={`${styles.slideIn} ${styles[direction]} ${
				hidden ? styles.hide : ""
			}`}
		>
			<div className={`${styles.arrow}`} onClick={onClick}>
				<CgArrowLongLeftR size={iconSizes.medium} />
			</div>
			<div>{children}</div>
		</aside>
	)
}
