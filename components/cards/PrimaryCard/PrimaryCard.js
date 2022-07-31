import Image from "next/image"
import Link from "next/link"
import styles from "./PrimaryCard.module.scss"

export default function PrimaryCard({ title, slug, image, data1 }) {
	return (
		<article className={`${styles.card}`}>
			<Link href={`${slug}`}>
				<div>
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
					<div className={`${styles.row1}`}>
						<span>{title}</span>
						{data1 && <span>{data1}</span>}
					</div>
				</div>
			</Link>
		</article>
	)
}
