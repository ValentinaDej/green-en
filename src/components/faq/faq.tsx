import React, { useState } from "react";
import FaqCard from "./faqCard";
import { faqList } from "@/constants";
import classes from "./faq.module.css";
import Button from "@/shared/components/button/button";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <article id="faq" className={`containerGlobal ${classes.container}`}>
      <h2 className={classes.title}>Frequently Asked Questions</h2>
      <div className={classes.description}>
        {faqList.map((item, index) => (
          <FaqCard
            key={item.id}
            qw={item.qw}
            answ={item.answ}
            isOpen={activeIndex === index}
            toggleAccordion={() => toggleAccordion(index)}
          />
        ))}
      </div>
      <span aria-hidden="true" className={classes.divider}></span>

      <div className={classes.text}>
        Didn`t find the answer to your question?
      </div>
      <Button link="#contact" text="Contact us" variant="ovalWithDot" />
    </article>
  );
};

export default Faq;
