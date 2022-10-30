import Link from "next/link"

import styles from "./SocialLink.module.scss"

export default function SocialLink({ link, icon, size }) {
	return (
        (<Link href={link} target="_blank" className={`${styles.link}`}>

            {icon}

        </Link>)
    );
}
