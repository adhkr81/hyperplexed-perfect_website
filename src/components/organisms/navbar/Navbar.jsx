import { ReactComponent as Logo } from "../../../assets/logo.svg"
import { ReactComponent as Instagram } from "../../../assets/instagram.svg"
import { ReactComponent as Linkedin } from "../../../assets/linkedin.svg"
import { ReactComponent as Twitter } from "../../../assets/twitter.svg"
import styles from "./navbar.module.css"

export default function Navbar() {

    return (
    <nav>
        <div id={styles.navLogoSection} className={styles.navSection}>
            <Logo className={styles.logoStyles}/>
        </div>
        <div id={styles.navLinkSection} className={styles.navSection}>
            <a>ABOUT</a>
            <a>WORK</a> 
        </div>
        <div id={styles.navSocialSection} className={styles.navSection}>
            <Instagram className={styles.logoStyles} />
            <Linkedin className={styles.logoStyles} />
            <Twitter className={styles.logoStyles} />
        </div>
        <div id={styles.navContactSection} className={styles.navSection}>
            <a>GET IN TOUCH</a> 
        </div>
    </nav>
    )
}