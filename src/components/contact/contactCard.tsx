import Phone from "@/shared/icons/Phone";
import Email from "@/shared/icons/Email";
import Address from "@/shared/icons/Address";
import SocialLinks from "@/shared/components/socialLinks/socialLinks";
import { socialLinks } from "@/constants";
import classes from "./contactCard.module.css";

const ContactCard = () => {
  return (
    <div className={classes.contactContainer}>
      <div className={classes.contactGroup}>
        <div className={classes.title}>Phone:</div>
        <div className={classes.dataGroup}>
          <Phone />
          <div className={classes.dataText}>38 (098) 12 34 567</div>
        </div>
        <div className={classes.dataGroup}>
          <Phone />
          <div className={classes.dataText}>38 (093) 12 34 567</div>
        </div>
      </div>

      <div className={classes.contactGroup}>
        <div className={classes.title}>E-mail:</div>
        <div className={classes.dataGroup}>
          <Email />
          <div className={classes.dataText}>office@ecosolution.com</div>
        </div>
      </div>

      <div className={classes.contactGroup}>
        <div className={classes.title}>Address:</div>
        <div className={classes.dataGroup}>
          <Address />
          <div className={classes.dataText}>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </div>
        </div>
      </div>

      <div className={classes.contactGroup}>
        <div className={classes.title}>Social Networks:</div>
        <SocialLinks mode="darkMode" socialLinks={socialLinks} />
      </div>
    </div>
  );
};

export default ContactCard;
