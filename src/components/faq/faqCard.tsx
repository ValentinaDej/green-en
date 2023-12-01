import Plus from "@/shared/icons/Plus";
import Minus from "@/shared/icons/Minus";
import classes from "./faqCard.module.css";

type Props = {
  qw: string;
  answ: string;
  isOpen: boolean;
  toggleAccordion: () => void;
};

const FaqCard = ({ qw, answ, isOpen, toggleAccordion }: Props) => {
  return (
    <>
      <div className={classes.cardLine}></div>
      <div className={`${classes.card} ${isOpen ? classes.open : ""}`}>
        <div className={classes.row}>
          <div className={classes.icon} onClick={toggleAccordion}>
            {isOpen ? <Minus /> : <Plus />}
          </div>
          <div className={classes.question} onClick={toggleAccordion}>
            {qw}
          </div>
        </div>
        {isOpen && (
          <div className={classes.row}>
            <div className={classes.iconPlaceholder}></div>
            <div className={classes.answer}>{answ}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default FaqCard;
