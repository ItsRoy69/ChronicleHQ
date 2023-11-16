import React from "react";
import "../styles/mobilescreen.css";
import mobilescreen1 from "../assets/mobilescreen1.webp"
import mobilescreen2 from "../assets/mobilescreen2.webp"

const MobileScreen = () => {
  return (
    <section className="mobilescreen_container">
      <div className="mobilescreen-card">
        <div className="mobilescreen-title">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-[3px]"
          >
            <path
              d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z"
              fill="#A594FD"
            ></path>
          </svg>
          Mobile experience
        </div>
        <div className="mobilescreen-heading">Present anywhere. Anytime.</div>
        <div className="mobilescreen-content">
          Transform your stories into a bite-sized format tailored for mobile.
          Quickly browse the summary and dive deeper when needed.
        </div>
      </div>
      <div className="mobile-screen_right">
        <img src={mobilescreen1} alt="" className="mobilescreen1" />
        <img src={mobilescreen2} alt="" className="mobilescreen2" id="back-card1" />
        <img src={mobilescreen2} alt="" className="mobilescreen3" id="back-card2" />
      </div>
    </section>
  );
};

export default MobileScreen;
