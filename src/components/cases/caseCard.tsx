import Image from "next/image";
import classes from "./caseCard.module.css";
import { CaseCardProps } from "../../../App.types";
import Button from "@/shared/components/button/button";
import ArrowRight from "@/shared/icons/ArrowRight";

const CaseCard = ({
  name,
  description,
  address,
  date,
  photo,
}: CaseCardProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.imageWrapper}>
        <Image
          src={photo}
          alt={name}
          width={300}
          height={150}
          layout="responsive"
          priority
        />
      </div>

      <div className={classes.infoWrapper}>
        <div className={classes.name}>
          {name}
          <br />
          {address}
        </div>
        <div className={classes.button}>
          <Button
            className={classes.button}
            label="Go to succes story"
            variant="round"
          >
            <ArrowRight className={classes.icon} />
          </Button>
        </div>
        <div className={classes.line}></div>
        <div className={classes.description}>{description}</div>
        <div className={classes.date}>{date}</div>
      </div>
    </div>
  );
};

export default CaseCard;
