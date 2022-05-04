import React from "react";
import styles from "./Product.module.css";
import { TopBrands } from "../../Data/ProductData.js";
export const Product = () => {
  return (
    <div>
      <h2>TOP BRANDS</h2>
      <div className={styles.div1}>
        {TopBrands.map((el) => (
          <div
            key={Math.random()}
            className={styles.brand}
            style={{
              backgroundImage: `url(${el.image})`,
            }}
          >
            <div className={styles.off}>{el.discount}</div>
          </div>
        ))}
      </div>
      <div className={styles.last}>
        <div className={styles.lastImg}>
          <div className={styles.off}>Upto 40% Off</div>
        </div>
      </div>
    </div>
  );
};
