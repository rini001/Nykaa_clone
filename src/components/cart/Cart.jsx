import React from "react";
import { useSelector } from "react-redux";

export const Cart = () => {
  const cartProducts = useSelector((state) => state.cartProducts);
  console.log(cartProducts);
  return (
    <div>
      {cartProducts.map((el) => (
        <img src={el.image1} alt="" />
      ))}
    </div>
  );
};
