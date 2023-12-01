import classes from "./productionCounter.module.css";

const ProductionCounter = () => (
  <section className="containerGlobal">
    <div className={classes.gridContainer}>
      <div className={classes.title}>
        Electricity we produced <br />
        for all time
      </div>
      <div className={classes.separator}></div>
      <div className={classes.counter}>
        <div className={classes.counterGrid}>
          <div className={classes.counterNumber}>1.134.147.814</div>
          <div className={classes.counterUnit}>kWh</div>
        </div>
      </div>
      <div className={classes.separator}></div>
    </div>
  </section>
);

export default ProductionCounter;
