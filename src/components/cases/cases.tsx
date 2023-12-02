import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./cases.module.css"; // Імпорт модульних стилів
import CaseCard from "./caseCard";
import { casesList } from "@/constants";

const TrendingSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? casesList.length - 1 : prevIndex - 1
    );
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === casesList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeSlide = casesList[currentIndex];
  const nextSlide = casesList[(currentIndex + 1) % casesList.length];

  return (
    <section className="containerGlobal">
      <div className={classes.container}>
        <h2 className={classes.title}>SUCCESSFUL CASES OF OUR COMPANY</h2>
        <div className={classes.dividerColored}></div>
        <div className={classes.counter}>
          <span>{`${String(currentIndex + 1).padStart(2, "0")}`}</span>
          <span className={classes.counterCommon}>{` / ${String(
            casesList.length
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
          <CaseCard
            name={activeSlide.name}
            address={activeSlide.address}
            description={activeSlide.description}
            date={activeSlide.date}
            photo={activeSlide.photo}
          />
        </div>
        <div className={classes.dividerTransp}></div>
        <div className={classes.secondImageContainer}>
          <CaseCard
            name={nextSlide.name}
            address={nextSlide.address}
            description={nextSlide.description}
            date={nextSlide.date}
            photo={nextSlide.photo}
          />
        </div>
      </div>
    </section>
  );
};

export default TrendingSlider;
