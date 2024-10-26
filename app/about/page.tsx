import Link from "next/link";
import styles from "../about/about.module.css"
const aboutPage =() =>{
    return(
        <div>

        <nav><ul className={styles.navbar}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/service">Service</Link></li>
        </ul>
        </nav>
        <h1 className={styles.about}>This is About page</h1>
        </div>
    )
};
export default aboutPage