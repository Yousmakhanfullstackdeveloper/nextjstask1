import Link from "next/link";
import styles from "./service.module.css"
const servicePage =() =>{
    return(
        <div>
            <nav><ul className={styles.navbar}>
        <li><Link href="/"></Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/service">Service</Link></li>
        </ul>
        </nav>
        <h1 className={styles.service}>This is Service page</h1>
        </div>
    )
};
export default servicePage