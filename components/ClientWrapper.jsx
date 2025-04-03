"use client";

import { usePathname } from "next/navigation";
import styles from "./ClientWrapper.module.css";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div className={`${isHome ? styles.greened_white : styles.white} ${styles.wrapper}`}>
      <div className={styles.container}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
