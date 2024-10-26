import Link from "next/link";
import styles from "../contact-us/contact-us.module.css"
const contactusPage =() =>{
    return(
        <div>
            <nav><ul className={styles.navbar}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/service">Service</Link></li>
        </ul>
        </nav>
        <h1 className={styles.contactus}>This is contact page</h1>
        </div>
    )
};
export default contactusPage