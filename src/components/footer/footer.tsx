import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./footer.module.css";
import SocialLinks from "@/shared/components/socialLinks/socialLinks";
import { socialLinks, masterData } from "@/constants";

function Footer() {
  const { logo, address, email, copySign } = masterData;
  return (
    <footer className={`containerGlobal ${classes.footerContainer}`}>
      <div className={classes.footerDivider}></div>
      <div className={classes.footerLogo}>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={269}
            height={40}
            layout="responsive"
            priority
          />
        </Link>
      </div>
      <div className={classes.footerButton}>
        <button className={classes.footerToTop}>↑</button>
      </div>
      <div className={classes.footerSocials}>
        <SocialLinks mode="darkMode" socialLinks={socialLinks} />
      </div>
      <div className={classes.footerAddress}>
        <address>{address}</address>
      </div>
      <div className={classes.footerEmail}>
        <p> {email}</p>
      </div>
      <div className={classes.footerInfo}>
        <p className={classes.footerCopy}>{copySign}</p>
      </div>
    </footer>
  );
}

export default Footer;
