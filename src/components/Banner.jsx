import { useEffect, useState } from 'react'
import "../styles/banner.css";

import btnimg1 from "../assets/hero-btn-1.svg";
import btnimg2 from "../assets/hero-btn-2.svg";
import btnimg3 from "../assets/hero-btn-3.svg";
import btnimg4 from "../assets/hero-btn-4.svg";
import btnbg from "../assets/hero-btn.png";
import leftbtnimg1 from "../assets/leftbtnimg1.webp";
import leftbtnimg2 from "../assets/leftbtnimg2.webp";
import leftbtnimg3 from "../assets/leftbtnimg3.webp";
import leftbtnimg4 from "../assets/leftbtnimg4.webp";
import leftbtnimg5 from "../assets/leftbtnimg5.webp";
import bannerarrow from "../assets/arrow-right.svg";
import bannerinputbox from "../assets/bannerinputbox.png";
import wavinghand from "../assets/hand.png";
import matty from "../assets/matty.png";

const Banner = () => {
  const [rotation, setRotation] = useState(0)
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
      const handleScroll = () => {
          setScrollValue(window.scrollY);
          console.log(scrollValue)
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [window.scrollY]);

  useEffect(() => {
      setRotation(scrollValue / 4)
  }, [scrollValue])

  return (
    <section className="banner">
      <div className="banner_container" style={{ transform: `rotateX(-${rotation}deg)` }}>
        <div className="banner_headbtns">
          <div className="banner_headbtnright">
            <li className="bannercircle"></li>
            <li className="bannercircle"></li>
            <li className="bannercircle"></li>
          </div>
          <div className="banner_headbtnmiddle">
            <div className="banner_headbtn1">
              <img src={btnbg} alt="" className="banner_btn" />
              <img src={btnimg1} alt="" className="banner_btnimg1" />
            </div>
            <div className="banner_headbtn1">
              <img src={btnbg} alt="" className="banner_btn" />
              <img src={btnimg2} alt="" className="banner_btnimg1" />
            </div>
            <div className="banner_headbtn1">
              <img src={btnbg} alt="" className="banner_btn" />
              <img src={btnimg3} alt="" className="banner_btnimg1" />
            </div>
            <div className="banner_headbtn1">
              <img src={btnbg} alt="" className="banner_btn" />
              <img src={btnimg4} alt="" className="banner_btnimg1" />
            </div>
          </div>
          <div className="banner_headbtnleft">
            <img src={leftbtnimg1} alt="" className="btnleftimg" />
            <img src={leftbtnimg2} alt="" className="btnleftimg" />
            <img src={leftbtnimg3} alt="" className="btnleftimg" />
            <img src={leftbtnimg4} alt="" className="btnleftimg" />
            <img src={leftbtnimg5} alt="" className="btnleftimg" />
          </div>
        </div>
        <div className="banner_image">
          <div className="banner_right">
            <div className="banner_rightbtn">
              <p>✨ $7.5M seed raised with Accel & Square Peg </p>
              <img src={bannerarrow} alt="7.5m" className="hero-note__icon"></img>
            </div>
            <h1>Impactful stories. Made effortlessly</h1>
            <p className="banner_rightpara">
              Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
              <span className="banner_textmatty">
                <img src={wavinghand} className="wavinghand" alt="" />
                <img src={matty} alt="" className="banner_matty" />
              </span>
            </p>
          </div>
          <div className="banner_left">
            <div className="banner_typebox">
              <img src={bannerinputbox} className="banner_inputbox" alt="" />
              <p className="bannertyping">Type "/" for shortcuts</p>
            </div>

            <div className="banner_leftcard">
              <button className="banner_btn">
                <img src={btnimg3} alt="" className="banner_btnimg1" />
                <p>Cards</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
