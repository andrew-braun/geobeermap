import Link from "next/link"
import styles from "./PrimaryTag.module.scss"

export default function Tag({ text, url, color = "light" }) {
	return <>
        {url && (
            <Link href={url} className={`${styles.tag} ${styles[color]}`}>
                {text}
            </Link>
        )}
        {!url && <span className={`${styles.tag} ${styles[color]}`}>{text}</span>}
    </>;
}
