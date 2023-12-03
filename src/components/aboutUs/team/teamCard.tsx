import Image from "next/image";
import classes from "./teamCard.module.css";

type Props = {
  name: string;
  position: string;
  photo: any;
};

const TeamCard = ({ name, position, photo }: Props) => {
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <Image
          src={photo}
          alt={name}
          width={148}
          height={168}
          layout="responsive"
          priority
        />
      </div>
      <p className={classes.name}>{name}</p>
      <p className={classes.position}>{position}</p>
    </div>
  );
};

export default TeamCard;
