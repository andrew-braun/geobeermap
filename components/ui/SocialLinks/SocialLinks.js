import { FaFacebookF, FaTwitter, FaInstagram, FaUntappd } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"
import SocialLink from "./SocialLink"

import styles from "./SocialLinks.module.scss"

export default function SocialLinks({
	facebook,
	instagram,
	twitter,
	untappd,
	website,
}) {
	return (
		<div>
			{facebook && <SocialLink link={facebook} icon={<FaFacebookF />} />}
			{instagram && <SocialLink link={instagram} icon={<FaTwitter />} />}
			{twitter && <SocialLink link={twitter} icon={<FaInstagram />} />}
			{untappd && <SocialLink link={untappd} icon={<FaUntappd />} />}
			{website && <SocialLink link={website} icon={<TbWorld />} />}
		</div>
	)
}
