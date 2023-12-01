import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./cases.module.css"; // Імпорт модульних стилів

const data = [
  { id: 1, text: "AAA" },
  { id: 2, text: "BBB" },
  { id: 3, text: "CCC" },
  { id: 4, text: "DDD" },
  { id: 5, text: "EEE" },
  { id: 6, text: "FFF" },
  { id: 7, text: "GGG" },
  { id: 8, text: "KKK" },
  { id: 9, text: "LLL" },
  { id: 10, text: "MMM" },
  { id: 11, text: "NNN" },
];

const TrendingSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeSlide = data[currentIndex];
  const nextSlide = data[(currentIndex + 1) % data.length];

  return (
    <section className="containerGlobal">
      <div className={classes.container}>
        <h2 className={classes.title}>SUCCESSFUL CASES OF OUR COMPANY</h2>
        <div className={classes.dividerColored}></div>
        <div className={classes.counter}>
          <span>{`${String(currentIndex + 1).padStart(2, "0")}`}</span>
          <span className={classes.counterCommon}>{` / ${String(
            data.length
          ).padStart(2, "0")}`}</span>
        </div>
        <div className={classes.buttons}>
          <button className={classes.button} onClick={slideLeft}>
            ←
          </button>
          <button className={classes.button} onClick={slideRight}>
            →
          </button>
        </div>
        <div className={classes.imageContainer}>
          <div>{activeSlide.text}</div>
        </div>
        <div className={classes.dividerTransp}></div>
        <div className={classes.secondImageContainer}>
          <div>{nextSlide.text}</div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSlider;
