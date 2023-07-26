import dynamic from "next/dynamic"
const MdWarning = dynamic(
	async () => await import("react-icons/md").then((mod) => mod.MdWarning)
)

export default function UtilityIcon({ icon, size = 25, color }) {
	if (icon === "warning") {
		return <MdWarning color={color ?? "var(--alert-color"} size={size} />
	}
}
