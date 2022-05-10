import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cleanser.css";
import { Categories, Categories2 } from "./Categories";
import { useDispatch, useSelector } from "react-redux";
import { addingToBag, getCartData, getData } from "../../redux/action";
import { Link } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
const images = [
  "https://images-static.nykaa.com/uploads/bbcd8dfe-1703-46d3-ae16-23d441eefe53.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/d3466326-8979-4679-8635-7efeaf42811f.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/22a3e2e7-e6df-4f4d-adc8-f0c95610cafb.jpg?tr=w-1200,cm-pad_resize",
];
export const Cleanser = () => {
  const produc = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
    dispatch(getCartData());
  }, []);
  const filter = useSelector((state) => state.filter);
  // console.log(filter)
  let data;
  if (filter.length === 0) {
    data = produc;
  } else {
    data = filter;
  }

  const addtobag = (item) => {
    fetch("https://nykaa-db01.herokuapp.com/cartProducts", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((res) => dispatch(addingToBag(res)));

  };

  // console.log("produc:",produc)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Navbar/>
      <div>Home ❯ Search</div>
      <div className="slideDiv">
        <Slider className="custom1" {...settings}>
          {images.map((el, i) => (
            <img className="custom2" key={i} src={el} alt="" />
          ))}
        </Slider>
      </div>
      <h2 className="heading1">Showing 40 of 3642 results for cleanser</h2>
      <div className="flex">
        <div className="try">
          <Categories />
          <Categories2 />
        </div>
        <div className="imgs">
          {data.map((el) => (
            <div key={el.id}  className="imgs2">
              <div>
                <Link  to={`./${el.id}`} style={{textDecoration:"none",color:"grey"}}>
                  <p className="link" >FEATURED BESTSELLER</p>
                  <img className="originalImg" src={el.image1} alt="" />
                  <h3>{el.cart_title}</h3>
                  <p>
                    <span  style={{textDecoration:"line-through",color:"#fc2779"}}>MRP:₹{el.price}</span> {el.price-el.off_price} {el.discount} Off
                  </p>
                  <p>Enjoy free gift</p>
                  <p>reviews</p>
                </Link>
              </div>
          <button className="btn1" onClick={() => addtobag(el)}>
               ADD TO BAG
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
