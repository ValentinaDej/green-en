import React from "react";
import classes from "./contactForm.module.css";

function ContactForm() {
  return (
    <form className={classes.form}>
      <div className={classes.formGroup}>
        <label htmlFor="fullName" className={classes.label}>
          Full name:
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="John Rosie"
          className={classes.input}
          required
        />
      </div>

      <div className={classes.formGroup}>
        <label htmlFor="email" className={classes.label}>
          E-mail:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="johnrosie@gmail.com"
          className={classes.input}
          required
        />
      </div>

      <div className={classes.formGroup}>
        <label htmlFor="phone" className={classes.label}>
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="380961234567"
          className={classes.input}
          pattern="\d{10,}"
          required
        />
      </div>

      <div className={classes.formGroup}>
        <label htmlFor="message" className={classes.label}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          className={classes.textarea}
        ></textarea>
      </div>

      <button type="button" className={classes.button}>
        Send <span className={classes.arrow}>→</span>
      </button>
    </form>
  );
}

export default ContactForm;
