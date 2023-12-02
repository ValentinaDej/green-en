import React from "react";
import ContactCard from "./contactCard";
import ContactForm from "./contactForm";
import classes from "./contact.module.css";

const Contact = () => {
  return (
    <section className="containerGlobal">
      <div className={classes.container}>
        <h2 className={classes.title}>CONTACT US</h2>
        <div className={classes.gridContainer}>
          <div className={classes.contact}>
            <ContactCard />
          </div>
          <div className={classes.line}></div>
          <div className={classes.form}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
