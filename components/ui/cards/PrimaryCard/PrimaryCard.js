import Image from "next/image"
import Link from "next/link"

import PrimaryTag from "components/ui/tags/PrimaryTag"

import styles from "./PrimaryCard.module.scss"

export default function PrimaryCard({ title, slug, image, tag, data1 }) {
	return (
		<article className={`${styles.card}`}>
			<Link href={`${slug}`} className={`${styles.link}`}>
				<div className={`${styles.image}`}>
					{image?.url && (
						<Image
							src={`${image.url}`}
							alt={image.alternativeText}
							fill
							style={{ objectFit: "cover" }}
						/>
					)}
					<span className={`${styles.tagWrapper}`}>
						<PrimaryTag text={tag.text} url={tag.url} color="dark" />
					</span>
				</div>
				<div className={`${styles.content}`}>
					<div className={`${styles.row1}`}>
						<span className={`${styles.title}`}>{title}</span>
					</div>
					<div className={`${styles.row2}`}>
						{data1 && <span className={`${styles.data1}`}>{data1}</span>}
					</div>
				</div>
			</Link>
		</article>
	)
}
