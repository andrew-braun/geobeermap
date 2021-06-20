import React from "react"
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai"
import { GrTwitter } from "react-icons/gr"
import { FaUntappd, FaMapMarkerAlt } from "react-icons/fa"
import styles from "./socialbuttons.module.css"

export default function SocialButtons(props) {
	console.log(props)
	return (
		<div className={styles.socialButtonsContainer}>
			<div className={styles.socialButton}>
				{props.facebook !== "none" ? (
					<a href={props.facebook} target="_blank" rel="noreferrer noopener">
						<AiFillFacebook />
					</a>
				) : null}
				{props.instagram !== "none" ? (
					<a href={props.instagram} target="_blank" rel="noreferrer noopener">
						<AiOutlineInstagram />
					</a>
				) : null}
				{props.twitter !== "none" ? (
					<a href={props.twitter} target="_blank" rel="noreferrer noopener">
						<GrTwitter />
					</a>
				) : null}
				{props.untappd !== "none" ? (
					<a href={props.untappd} target="_blank" rel="noreferrer noopener">
						<FaUntappd />
					</a>
				) : null}
				{props.googlemaps !== "none" ? (
					<a href={props.googlemaps} target="_blank" rel="noreferrer noopener">
						<FaMapMarkerAlt />
					</a>
				) : null}
			</div>
		</div>
	)
}
