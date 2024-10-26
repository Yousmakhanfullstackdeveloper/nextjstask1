import Link from "next/link";
import styles from "../contact/contact.module.css"
const contactPage =() =>{
    return(
        <div>
            <nav><ul className={styles.navbar}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/service">Service</Link></li>
        </ul>
        </nav>
        <h1 className={styles.contact}>This is contact now page</h1>
        
        </div>
    )
};
export default contactPage