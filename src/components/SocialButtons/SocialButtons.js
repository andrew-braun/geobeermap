import React from "react"
import styles from "./socialbuttons.module.css"

export default function SocialButtons ( props ) {
    return (
        <div className={styles.socialButtonContainer}>
            <div className={styles.socialButton}>
                { (props.facebook) ?
                    <a href={props.facebook}
                        target="_blank"
                        rel="noreferrer"
                    >
                        FB
                    </a> : null
                } 
                { (props.instagram) ?
                    <a href={props.instagram}
                        target="_blank"
                        rel="noreferrer"
                    >
                        IG
                    </a> : null
                } 
            </div>
        </div>
    )
}