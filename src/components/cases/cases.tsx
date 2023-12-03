import React, { useState } from "react";
import CaseCard from "./caseCard";
import { casesList } from "@/constants";
import classes from "./cases.module.css";

const Cases = () => {
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
    <article className={`containerGlobal ${classes.container}`}>
      <h2 className={classes.title}>SUCCESSFUL CASES OF OUR COMPANY</h2>

      <span className={classes.dividerColored}></span>

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

      <span className={classes.dividerTransp}></span>

      <div className={classes.secondImageContainer}>
        <CaseCard
          name={nextSlide.name}
          address={nextSlide.address}
          description={nextSlide.description}
          date={nextSlide.date}
          photo={nextSlide.photo}
        />
      </div>
    </article>
  );
};

export default Cases;
