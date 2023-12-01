import FaqCard from "./faqCard";
import { faqList } from "@/constants";
import classes from "./faq.module.css";

const Faq = () => {
  const titleFirst = false;
  return (
    <section className="containerGlobal">
      <article className={classes.container}>
        <h2 className={titleFirst ? classes.titleFirst : classes.titleSecond}>
          Frequently Asked Questions
        </h2>
        <div className={classes.line}></div>
        <div
          className={
            titleFirst ? classes.descriptionFirst : classes.descriptionSecond
          }
        >
          {faqList.map((item) => (
            <FaqCard key={item.id} qw={item.qw} answ={item.answ} />
          ))}
          desc
        </div>
      </article>
    </section>
  );
};

export default Faq;
