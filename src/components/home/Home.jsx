import React from 'react'
import { Footer } from './Footer'
import Slider from "react-slick";
import "./Home.css";
import {Navbar} from "../navbar/Navbar"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Product } from './Product';
const images = [
  "https://images-static.nykaa.com/uploads/a557ef30-a34e-47c6-bda2-df9f87affe9b.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/2d312445-12bd-4d54-b562-561696f12c71.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/34fd9e91-51c1-44a6-9b16-22b38f9beb0e.jpg?tr=w-1200,cm-pad_resize"
];
export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000 
  };

  return (
    <div>
      <Navbar/>
    <div className="slideImg">
       <Slider className="slideImg" {...settings}>
        {images.map((el,i) => (
          
          <img key={i} src={el} alt="" />
         
        ))}
      </Slider>
      </div>
      <div className='gridImg'>
        <div>
          <img className='img1' src="https://images-static.nykaa.com/uploads/438e3026-b1e4-4aac-9c83-24ea1a794afc.gif?tr=w-1200,cm-pad_resize" alt="" />
        </div>
       
        <div className='flexImg'>
          <div className='flexx'>
            <img className='img2' src="https://images-static.nykaa.com/uploads/2ee71459-0d81-4ff3-b24f-34ed43365928.jpg?tr=w-300,cm-pad_resize" alt="" />
          </div>
          <div className='flexx'>
            <img className='img2' src="https://images-static.nykaa.com/uploads/2bc961ab-e751-4d4a-8b78-51a02ec7ce23.jpg?tr=w-300,cm-pad_resize" alt="" />
          </div>
          <div className='flexx'>
            <img className='img2' src="https://images-static.nykaa.com/uploads/af1fc92a-34fe-4c94-afca-35f614ffc096.jpg?tr=w-300,cm-pad_resize" alt="" />
          </div>
          <div className='flexx'>
            <img className='img2' src="https://images-static.nykaa.com/uploads/5216409d-a9fb-4796-8663-2b674cd23ae7.jpg?tr=w-300,cm-pad_resize" alt="" />
          </div>
        </div>
        <div>
          <img className='img1' src="https://images-static.nykaa.com/uploads/409a59b2-a1f4-4d0f-a51c-939f73d0cdb7.jpg?tr=w-1200,cm-pad_resize" alt="" />
        </div>
        <div>
          <img className='img1' src="https://images-static.nykaa.com/uploads/9e742270-e021-4d40-afa5-c198e79b3492.jpg?tr=w-1200,cm-pad_resize" alt="" />
        </div>
      </div>
      <Product/>
      <Footer/>
    </div>
  )
}
