import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {pic1} from "./img/"
import "./cleanserDetails.css";
export const CleanserDetail = () => {
  const { userId } = useParams();
  const [cleanser, cleanserDetail] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/products/${userId}`, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        cleanserDetail(json);
      })
      .catch((err) => {
        cleanserDetail("err", err);
      });
  }, [userId]);
  return (
    <div className="div0">
      <div className="div1">
        <div>
          <img src={cleanser.image1} alt="" />
        </div>
        <div>
          <h1>{cleanser.card_title}</h1>
          <h3>₹{cleanser.off_price}</h3>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};
