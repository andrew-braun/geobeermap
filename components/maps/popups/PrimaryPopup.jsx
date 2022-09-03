import { Popup } from "react-map-gl"

export default function PrimaryPopup({
	anchor,
	latitude,
	longitude,
	children,
}) {
	return (
		<Popup
			anchor={anchor}
			longitude={Number(longitude)}
			latitude={Number(latitude)}
		>
			<div>{children}</div>
		</Popup>
	)
}
