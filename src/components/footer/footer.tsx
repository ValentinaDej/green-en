import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./footer.module.css";
import { headerLogo } from "@/assets/images";
import SocialLinks from "@/shared/components/socialLinks/socialLinks";
import { socialLinks } from "@/constants";

function Footer() {
  return (
    <footer className="containerGlobal">
      <div className={classes.footerContainer}>
        <div className={classes.footerLogo}>
          <Link href="/">
            <Image
              src={headerLogo}
              alt="Logo"
              width={269}
              height={40}
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
          <address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</address>
        </div>
        <div className={classes.footerEmail}>
          <p> office@ecosolution.com</p>
        </div>
        <div className={classes.footerInfo}>
          <p className={classes.footerCopy}>ecosolution © 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
