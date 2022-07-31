import Image from "next/image"
import Link from "next/link"

import PrimaryTag from "components/ui/tags/PrimaryTag"

import styles from "./PrimaryCard.module.scss"

export default function PrimaryCard({ title, slug, image, tag, data1 }) {
	console.log(tag)
	return (
		<article className={`${styles.card}`}>
			<Link href={`${slug}`}>
				<a className={`${styles.link}`}>
					<div className={`${styles.image}`}>
						<Image
							src={`${image.url}`}
							alt={image.alternativeText}
							layout="responsive"
							width={400}
							height={400}
							objectFit="cover"
						/>
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
				</a>
			</Link>
		</article>
	)
}
