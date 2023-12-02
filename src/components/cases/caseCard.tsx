import Image from "next/image";
import classes from "./caseCard.module.css";

type CaseCardProps = {
  photo: any;
  name: string;
  address: string;
  description: string;
  date: string;
};

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
          width={600}
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
        <button className={classes.button}>Button</button>
        <div className={classes.line}></div>
        <div className={classes.description}>{description}</div>
        <div className={classes.date}>{date}</div>
      </div>
    </div>
  );
};

export default CaseCard;
