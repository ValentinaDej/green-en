import { useState } from "react";
import classes from "./faqCard.module.css";

type Props = {
  qw: string;
  answ: string;
  isOpen: boolean;
  toggleAccordion: () => void;
};

const FaqCard = ({ qw, answ, isOpen, toggleAccordion }: Props) => {
  return (
    <div className={classes.card}>
      <button className={classes.name} onClick={toggleAccordion}>
        {qw}
      </button>
      {isOpen && <div className={classes.position}>{answ}</div>}
    </div>
  );
};

export default FaqCard;
