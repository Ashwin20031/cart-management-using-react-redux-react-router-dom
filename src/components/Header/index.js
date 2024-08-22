import { Link } from "react-router-dom";
import styles from "./index.module.css"

function Header() {
    return (
        <header className={styles.container}>
            <nav className={styles.navbar}>
                <Link to="/"> <h1 className={styles.logo}>Cart-Management</h1></Link>
                <Link to="/Cart" className={styles.link}><h2>Go to Cart</h2></Link>
            </nav>
        </header>
    );
}

export default Header;