import React, { useState } from "react";
import FaqCard from "./faqCard";
import { faqList } from "@/constants";
import classes from "./faq.module.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="containerGlobal">
      <article className={classes.container}>
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
        <div className={classes.line}></div>

        <div className={classes.text}>
          Didn`t find the answer to your question?
        </div>
        <div className={classes.button}>
          <button>Contact Us</button>
        </div>
      </article>
    </section>
  );
};

export default Faq;
