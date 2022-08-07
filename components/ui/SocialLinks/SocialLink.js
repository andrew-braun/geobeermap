import Link from "next/link"

import styles from "./SocialLink.module.scss"

export default function SocialLink({ link, icon, size }) {
	return (
		<Link href={link}>
			<a target="_blank" className={`${styles.link}`}>
				{icon}
			</a>
		</Link>
	)
}
