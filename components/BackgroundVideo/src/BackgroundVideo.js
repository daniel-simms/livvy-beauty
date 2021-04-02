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
        playsInline
        className={styles.video}
      >
        <source src={src} />
      </video>
    </div>
  );
}
// TODO: Credit Pexels video + Sort something out with the video on smaller/ unsupported devices
