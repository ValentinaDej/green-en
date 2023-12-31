import React, { useState } from "react";
import CaseCard from "./caseCard";
import { casesList } from "@/constants";
import classes from "./cases.module.css";
import Button from "@/shared/components/button/button";
import GoLeft from "@/shared/icons/GoLeft";
import GoRight from "@/shared/icons/GoRight";

const Cases = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isSwipeRight = distance > minSwipeDistance;
    const isSwipeLeft = distance < -minSwipeDistance;

    if (isSwipeRight) {
      slideRight();
    } else if (isSwipeLeft) {
      slideLeft();
    }
  };

  const activeSlide = casesList[currentIndex];
  const nextSlide = casesList[(currentIndex + 1) % casesList.length];

  return (
    <article id="cases" className={`containerGlobal ${classes.container}`}>
      <h2 className={classes.title}>SUCCESSFUL CASES OF OUR COMPANY</h2>

      <span aria-hidden="true" className={classes.divider}></span>

      <div className={classes.counter}>
        <span>{`${String(currentIndex + 1).padStart(2, "0")}`}</span>
        <span className={classes.counterCommon}>{` / ${String(
          casesList.length
        ).padStart(2, "0")}`}</span>
      </div>

      <div className={classes.buttons}>
        <Button
          className={classes.button}
          onClick={slideLeft}
          label="Go back"
          variant="sliderButton"
        >
          <GoLeft />
        </Button>
        <Button
          className={classes.button}
          onClick={slideRight}
          label="Go forward"
          variant="sliderButton"
        >
          <GoRight />
        </Button>
      </div>

      <div
        className={classes.imageContainer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <CaseCard
          name={activeSlide.name}
          address={activeSlide.address}
          description={activeSlide.description}
          date={activeSlide.date}
          photo={activeSlide.photo}
        />
      </div>

      <div
        className={classes.secondImageContainer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
