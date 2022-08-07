import Link from "next/link"
import styles from "./SidebarItem.module.scss"

export default function SidebarItem({ venue }) {
	const { id, name, slug, logo, currently_operating, location, socal_links } =
		venue
	return (
		<article>
			<Link href={`/venues/${slug}`}>
				<a>
					<div>
						<span>{name}</span>
					</div>
					<div></div>
				</a>
			</Link>
		</article>
	)
}
