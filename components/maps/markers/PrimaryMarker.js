import { forwardRef } from "react"
import styles from "./PrimaryMarker.module.scss"

function PrimaryMarker({ onClick }) {
	return <div className={`${styles.primaryMarker}`}>M</div>
}

export default forwardRef(PrimaryMarker)
