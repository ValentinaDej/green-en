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
          alt="emploee"
          layout="responsive"
          width={596}
          height={339}
          priority
        />
      </div>

      {valuesList.map(({ id, icon, title, description }) => (
        <div key={id} className={classes.textContainer}>
          <ValueCard
            id={id}
            icon={icon}
            title={title}
            description={description}
          />
        </div>
      ))}

      <div className={classes.photo + " " + classes.bottomPhoto}>
        <Image
          src={solarPanels}
          alt="solar panels"
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
