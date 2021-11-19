import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.css";
import logo from "../../assets/shared/logo.svg";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.imageContainer}>
        <Image src={logo} alt="Logo" />
      </div>
      <span className={styles.line}></span>
      <ul className={styles.menu}>
        <li>
          <Link href="/">00 Home</Link>
        </li>
        <li>
          <Link href="/destination">01 Destination</Link>
        </li>
        <li>
          <Link href="/crew">02 Crew</Link>
        </li>
        <li>
          <Link href="/technology">03 Technology</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
