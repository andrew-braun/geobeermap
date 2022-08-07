import Link from "next/link"

export default function SocialLink({ link, icon }) {
	return (
		<Link href={link}>
			<a>
				<span>{icon}</span>
			</a>
		</Link>
	)
}
