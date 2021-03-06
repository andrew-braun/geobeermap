import React from "react"
import { Link } from "gatsby"
import SocialButtons from "../SocialButtons/SocialButtons"
import styles from "./sidebaritem.module.css"

export default function SidebarItem(props) {
	return (
		<div
			className={styles.mapSidebarItem}
			id={`${props.id}-sidebar-item`}
			onClick={props.handleItemClick}
			onKeyDown={props.handleItemClick}
			role="button"
			tabIndex="0"
			key={props.id}
		>
			<div className={styles.sidebarInfoContainer}>
				<div className={styles.sidebarName}>
					<Link to={`${props.path}`}>{props.name}</Link>
				</div>
				<div className={styles.sidebarType}>{props.type}</div>
				{props.website ? (
					<span className={styles.sidebarWebsite}>
						<a href={props.website} target="_blank" rel="noreferrer">
							Website
						</a>
					</span>
				) : null}
			</div>
			<div className={styles.sidebarSocialButtons}>
				<SocialButtons
					facebook={props.facebook}
					instagram={props.instagram}
					twitter={props.twitter}
					website={props.website}
					untappd={props.untappd}
					googlemaps={props.googlemaps}
				/>
			</div>
		</div>
	)
}
