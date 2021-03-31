import React from "react";
import styles from "./background-video.module.css";

export default function BackgroundVideo({ src }) {
  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <video
        loop
        autoPlay
        muted
        className={styles.video}
      >
        <source src={src} />
      </video>
    </div>
  );
}
// Video by Artem Podrez from Pexels
