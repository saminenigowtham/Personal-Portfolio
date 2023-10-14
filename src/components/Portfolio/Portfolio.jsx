import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import simon from "../../img/simon.jpg";
import Drumkit from "../../img/drum1.png";
import Travel from "../../img/cab1.jpg";
import Temp from "../../img/temp3.jpg";
import TinDog from "../../img/dogg.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="swiper-slide-container">
            <img src={Travel} alt="" className="zoom-image" />
            <a href="https://pradeep1g.github.io/_HomePage/" className="overlay-text">Travel Website</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-container">
            <img src={Temp} alt="" className="zoom-image" />
            <a href="https://weatherapp-8n68.onrender.com" className="overlay-text">Weather App</a>
          </div>
        </SwiperSlide>

        <SwiperSlide> 
          <div className="swiper-slide-container">
            <img src={TinDog} alt="" className="zoom-image" />
            <a href="https://gouthamsamineni.github.io/cvpets/" className="overlay-text">Tin Dogs</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-slide-container">
            <img  src={Drumkit}  alt="" className="zoom-image" />
            <a href="https://gouthamsamineni.github.io/drumkit/" className="overlay-text">DrumKit</a>
          </div>
        </SwiperSlide>
         
        <SwiperSlide>
           <div className="swiper-slide-container">
            <img src={simon} alt="" className="zoom-image" style={{ height: '12.5rem' }}/>
            <a href="https://gouthamsamineni.github.io/simon_game/" className="overlay-text">Simon Game</a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
