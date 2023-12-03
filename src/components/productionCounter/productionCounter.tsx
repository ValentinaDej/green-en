import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { masterData } from "@/constants";
import classes from "./productionCounter.module.css";

const ProductionCounter = () => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    let interval: any;
    if (inView) {
      interval = setInterval(() => {
        setCount((prevCount) =>
          prevCount < masterData.finalCountElecteycity
            ? prevCount + 1
            : masterData.finalCountElecteycity
        );
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [inView, count]);

  return (
    <article className={`containerGlobal ${classes.gridContainer}`} ref={ref}>
      <h2 className={classes.title}>
        Electricity we produced <br />
        for all time
      </h2>

      <span className={classes.separator}></span>
      <section className={classes.counter}>
        <div className={classes.counterGrid}>
          <div className={`${classes.counterNumber}`}>
            {count.toLocaleString("de-DE")}
          </div>
          <div className={classes.counterUnit}>kWh</div>
        </div>
      </section>
    </article>
  );
};

export default ProductionCounter;
