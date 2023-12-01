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
      <Image src={photo} alt={name} width={159} height={168} priority />
      <p className={classes.name}>{name}</p>
      <p className={classes.position}>{position}</p>
    </div>
  );
};

export default TeamCard;
