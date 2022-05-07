import React from "react";
import styles from "./Nav3.module.css";
import { NykaaFashion } from "./NykaaFashion";

export const Nav3 = () => {
  let contents = [
    "Makeup",
    "Hair",
    "Skin",
    "Appliances",
    "Personal Care",
    "Natural",
    "Moms & Baby",
    "Health & Wellness",
    "Men",
    "Fragnance",
    "LUXE",
  ];
  return (
    <div>
      <div className={styles.nav3}>
        {contents.map((el, i) => (
          <div key={i} className={styles.dropdown}>
            <div className={styles.dropbtn}>{el}</div>
            <div className={styles.dropdownContent}>
              {el === "Makeup" ||
              el === "Skin" ||
              el === "Personal Care" ||
              el === "Moms & Baby" ||
              el === "Men" ||
              el === "LUXE" ? (
                <NykaaFashion />
              ) : (
                <div>product details</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
