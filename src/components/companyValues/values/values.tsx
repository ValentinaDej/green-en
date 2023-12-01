import Image from "next/image";
import ValueCard from "./valueCard";
import classes from "./values.module.css";
import { valuesList } from "@/constants";
import { solarPanels, emploee } from "@/assets/images";

const Values = () => {
  return (
    <div className={classes.gridContainer}>
      <div className={classes.photo + " " + classes.topPhoto}>
        <Image
          src={emploee}
          alt="wind, turbine clean energy"
          layout="responsive"
          width={596}
          height={339}
          priority
        />
      </div>
      <div className={classes.textContainer}>
        <ValueCard
          id={valuesList[0].id}
          icon={valuesList[0].icon}
          title={valuesList[0].title}
          description={valuesList[0].description}
        />
      </div>
      <div className={classes.textContainer}>
        <ValueCard
          id={valuesList[1].id}
          icon={valuesList[1].icon}
          title={valuesList[1].title}
          description={valuesList[1].description}
        />
      </div>

      <div className={classes.textContainer}>
        <ValueCard
          id={valuesList[2].id}
          icon={valuesList[2].icon}
          title={valuesList[2].title}
          description={valuesList[2].description}
        />
      </div>
      <div className={classes.textContainer}>
        <ValueCard
          id={valuesList[3].id}
          icon={valuesList[3].icon}
          title={valuesList[3].title}
          description={valuesList[3].description}
        />
      </div>

      <div className={classes.photo + " " + classes.bottomPhoto}>
        <Image
          src={solarPanels}
          alt="wind, turbine clean energy"
          layout="responsive"
          width={596}
          height={339}
          priority
        />
      </div>
    </div>
  );
};

export default Values;
