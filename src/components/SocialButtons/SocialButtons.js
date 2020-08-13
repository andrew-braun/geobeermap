import React from "react"
import { MaterialDesign, DevIcons, AmtDesignIcons, Ionicons, Typicons, Feather, FlatColorIcons, GrommetIcons, Remix} from "react-icons"
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai"
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
                        <AiFillFacebook />
                    </a> : null
                } 
                { (props.instagram) ?
                    <a href={props.instagram}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiOutlineInstagram />
                    </a> : null
                } 
            </div>
        </div>
    )
}