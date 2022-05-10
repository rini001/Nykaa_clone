import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pic1 from "./img/cleanserfooter.png";
import "./cleanserDetail.css";
export const CleanserDetail = () => {

  const [pin, setPin] = useState(true);
  const [countPin, setCountPin] = useState(0);
  const handleCountPin = (e) => {
    setCountPin(e.target.value);
    console.log(1);
  };

  const handlePin = () => {
    if (countPin.length >= 6 ) {
      setPin(!pin);
    }
    else{
      alert("PLEASE ENTER A VALID PIN CODE")
    }

  };
  const { userId } = useParams();
  const [cleanser, cleanserDetail] = useState([]);
  useEffect(() => {
    fetch(`https://nykaa-db01.herokuapp.com/products/${userId}`, {
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
        <div className="imgDiv">
          <img src={cleanser.image1} alt="" />
        </div>
        <div className="div2">
          <h1>{cleanser.card_title}</h1>
          <h3>₹{cleanser.off_price}</h3>
          <div className="bagAndpin">
            <div className="bag">
              <button className="btnbag">ADD TO BAG</button>
            </div>
            {pin ? (
              <div>
                <h4>Delivery Options</h4>
                <input
                  type="text"
                  placeholder="enter pincode"
                  onChange={handleCountPin}
                />
                <button onClick={handlePin}>Check</button>
              </div>
            ) : (
              <div>
                <div style={{ display: "flex" }}>
                  <h4>Delivery Options : 143001</h4>
                  <button className="change" onClick={handlePin}>
                    change
                  </button>
                </div>
                <p>Shipping to: Amritsar, India</p>
                <p>Delivered by 9th May</p>
                <p>Cash on Delivery available on orders above ₹499</p>
              </div>
            )}
          </div>
          {/* <div className="footerDiv"> */}
          <img src={pic1} alt="" />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
