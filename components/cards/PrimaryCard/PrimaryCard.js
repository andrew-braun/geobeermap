import Image from "next/image"
import Link from "next/link"
import styles from "./PrimaryCard.module.scss"

export default function PrimaryCard({ title, slug, image, data1 }) {
	return (
		<article className={`${styles.card}`}>
			<Link href={`${slug}`}>
				<a className={`${styles.link}`}>
					<div className={`${styles.image}`}>
						<Image
							src={`${image.url}`}
							alt={image.alternativeText}
							layout="responsive"
							width={300}
							height={250}
							objectFit="cover"
						/>
					</div>
					<div className={`${styles.content}`}>
						<div className={`${styles.row1}`}>
							<span className={`${styles.title}`}>{title}</span>
						</div>
						<div className={`${styles.row2}`}>
							{data1 && <span className={`${styles.data1}`}>{data1}</span>}
						</div>
					</div>
				</a>
			</Link>
		</article>
	)
}
