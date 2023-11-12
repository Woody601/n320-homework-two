import React from "react";
import styles from "@/styles/styles.module.css";

export default function GameContainer(props) {
  return (
    <>
      <div className={styles.gameHolder}>
        <h4 className={styles.gameTitle}>{props.gameTitle}</h4>
        <div
          className={styles.gameImage}
          style={{
            backgroundImage: `url(${props.gameImage})`,
          }}
        ></div>
        <div className={styles.briefRating}>
          <div className={styles.briefDes}>{props.gameBriefDescription}</div>
          <div className={styles.briefRating}>Rating: {props.gameRating}</div>
        </div>
      </div>
    </>
  );
}
