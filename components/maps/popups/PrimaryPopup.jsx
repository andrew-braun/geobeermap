import { Popup } from "react-map-gl"
import styles from "./PrimaryPopup.module.scss"

export default function PrimaryPopup({
	anchor,
	latitude,
	longitude,
	children,
	onClose,
}) {
	return (
		<Popup
			anchor={anchor}
			longitude={Number(longitude)}
			latitude={Number(latitude)}
			className={`${styles.primaryPopup}`}
			onClose={onClose}
		>
			{children}
		</Popup>
	)
}
