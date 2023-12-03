import React from "react";
import ContactCard from "./contactCard";
import ContactForm from "./contactForm";
import classes from "./contact.module.css";

const Contact = () => {
  return (
    <article className={`containerGlobal ${classes.container}`}>
      <h2 className={classes.title}>CONTACT US</h2>
      <div className={classes.gridContainer}>
        <section className={classes.contact}>
          <ContactCard />
        </section>
        <span className={classes.line}></span>
        <section className={classes.form}>
          <ContactForm />
        </section>
      </div>
    </article>
  );
};

export default Contact;
