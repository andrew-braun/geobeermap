import PrimaryPopup from "../PrimaryPopup.jsx"

export default function VenuePopup({ venue, onClose }) {
	return venue.location.locations.map((location, index) => {
		return (
			<PrimaryPopup
				anchor="top"
				longitude={Number(location.longitude)}
				latitude={Number(location.latitude)}
				onClose={onClose}
				key={index}
			>
				<h2>{venue.name}</h2>
			</PrimaryPopup>
		)
	})
}
