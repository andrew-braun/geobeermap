import Link from "next/link"

import styles from "./SocialLink.module.scss"

export default function SocialLink({ link, icon, size }) {
	return (
		<Link
			href={link}
			target="_blank"
			className={`${styles.link}`}
			style={{ width: parseInt(size) * 2, height: parseInt(size) * 2 }}
		>
			{icon}
		</Link>
	)
}
