import React, { useState, useEffect } from "react";
import "../styles/text.css";

export const Text = () => {
  const text =
    "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.";
  const words = text.split(" ");

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollStep = window.innerHeight / (words.length + 1);

  // Calculate the translateY value based on scroll position
  const translateY =
    scrollPosition > words.length * scrollStep
      ? `translateY(-${(scrollPosition - words.length * scrollStep) / 5}px)`
      : "translateY(0)";

  return (
    <div className="textbox_container" style={{ transform: translateY }}>
      <div className="para">
        {" "}
        {words.map((word, index) => {
          const isHighlighted = scrollPosition > index * scrollStep;
          return (
            <span
              key={index}
              style={{
                color: `rgba(255, 255, 255, ${isHighlighted ? 1 : 0.2})`,
              }}
            >
              {word}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Text;
