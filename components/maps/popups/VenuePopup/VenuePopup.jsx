import PrimaryPopup from "../PrimaryPopup.jsx"

export default function VenuePopup({ venue, onClose }) {
	return (
		<PrimaryPopup
			anchor="top"
			longitude={Number(venue.location.longitude)}
			latitude={Number(venue.location.latitude)}
			onClose={onClose}
		>
			<p>Popup</p>
		</PrimaryPopup>
	)
}
