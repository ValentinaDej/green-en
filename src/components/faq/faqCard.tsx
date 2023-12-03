import Plus from "@/shared/icons/Plus";
import Minus from "@/shared/icons/Minus";
import classes from "./faqCard.module.css";
import { faqCardProps } from "../../../App.types";

const FaqCard = ({ qw, answ, isOpen, toggleAccordion }: faqCardProps) => {
  return (
    <>
      <div className={classes.cardLine}></div>
      <div className={`${classes.card} ${isOpen ? classes.open : ""}`}>
        <div
          className={classes.row}
          onClick={toggleAccordion}
          aria-controls="content"
        >
          <div
            role="button"
            aria-label="icon for opening"
            className={classes.icon}
          >
            {isOpen ? <Minus /> : <Plus />}
          </div>
          <div role="button" className={classes.question}>
            {qw}
          </div>
        </div>
        {isOpen && (
          <div id="content" className={classes.row}>
            <div aria-hidden="true" className={classes.iconPlaceholder}></div>
            <div className={classes.answer}>{answ}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default FaqCard;
