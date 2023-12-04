import { ValueCardProps } from "../../../../App.types";
import classes from "./valueCard.module.css";

const ValueCard = ({ icon: Icon, title, description }: ValueCardProps) => {
  return (
    <>
      <div className={classes.titleGroup}>
        <Icon />
        <h3 className={classes.title}>{title}</h3>
      </div>
      <div className={classes.horizontalLine}></div>
      <p className={classes.description}>{description}</p>
    </>
  );
};

export default ValueCard;
