import { useState } from "react";
import classes from "./faqCard.module.css";

type Props = {
  qw: string;
  answ: string;
};

const FaqCard = ({ qw, answ }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.card}>
      <div className={classes.name}>{qw}</div>
      <div className={classes.position}>{answ}</div>
    </div>
  );
};

export default FaqCard;
