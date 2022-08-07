import { FaFacebookF, FaTwitter, FaInstagram, FaUntappd } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"
import { SiGooglemaps } from "react-icons/si"
import SocialLink from "./SocialLink"

import { iconSizes } from "styles/style-variables"
import styles from "./SocialLinks.module.scss"

export default function SocialLinks({
	facebook,
	instagram,
	twitter,
	untappd,
	website,
	googleMaps,
	size = iconSizes.small,
}) {
	return (
		<div>
			{facebook && (
				<SocialLink
					link={facebook}
					icon={<FaFacebookF size={size} />}
					size={size}
				/>
			)}
			{instagram && (
				<SocialLink
					link={instagram}
					icon={<FaTwitter size={size} />}
					size={size}
				/>
			)}
			{twitter && (
				<SocialLink
					link={twitter}
					icon={<FaInstagram size={size} />}
					size={size}
				/>
			)}
			{untappd && (
				<SocialLink
					link={untappd}
					icon={<FaUntappd size={size} />}
					size={size}
				/>
			)}
			{website && (
				<SocialLink link={website} icon={<TbWorld size={size} />} size={size} />
			)}
			{googleMaps && (
				<SocialLink
					link={googleMaps}
					icon={<SiGooglemaps size={size} />}
					size={size}
				/>
			)}
		</div>
	)
}
