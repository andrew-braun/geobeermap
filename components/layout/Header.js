import Image from "next/image"
import Link from "next/link"
import styles from "./Header.module.scss"
export default function Header() {
	return (
		<header className={`${styles.header}`}>
			<Link href="/" className={`${styles.brand}`}>
				<div className={`${styles.logo}`}>
					<Image
						src="/images/icons/logo.svg"
						alt="GeoBeerMap logo - a beer mug"
						fill
					/>
				</div>
				<span className={`${styles.title}`}>GeoBeerMap</span>
			</Link>
		</header>
	)
}
