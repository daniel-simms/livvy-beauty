import Image from "next/image";
import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div
        className={styles.logo}
      >
        <Image
          priority
          src="/images/livvy-logo.png"
          layout="fill"
          alt="Logo for Livvy Beauty"
          style={{
            margin: "auto",
          }}
        />
      </div>
      <div className={styles.nav}>
        <ul>
          <li>Treatments</li>
          <li>Gallery</li>
          <li>Testimonials</li>
          <li>FAQ</li>
          <li>Conact</li>
        </ul>
      </div>
    </div>
  );
}
