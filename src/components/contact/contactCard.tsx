import Phone from "@/shared/icons/Phone";
import Email from "@/shared/icons/Email";
import Address from "@/shared/icons/Address";
import SocialLinks from "@/shared/components/socialLinks/socialLinks";
import { socialLinks, masterData } from "@/constants";
import classes from "./contactCard.module.css";

const ContactCard = () => {
  return (
    <>
      <div className={classes.contactGroup}>
        <div className={classes.title}>Phone:</div>
        <div className={classes.dataGroup}>
          <Phone />
          <div className={classes.dataText}>{masterData.phone1}</div>
        </div>
        <div className={classes.dataGroup}>
          <Phone />
          <div className={classes.dataText}>{masterData.phone2}</div>
        </div>
      </div>

      <div className={classes.contactGroup}>
        <div className={classes.title}>E-mail:</div>
        <div className={classes.dataGroup}>
          <Email />
          <div className={classes.dataText}>{masterData.email}</div>
        </div>
      </div>

      <div className={classes.contactGroup}>
        <div className={classes.title}>Address:</div>
        <div className={classes.dataGroup}>
          <Address />
          <div className={classes.dataText}>{masterData.address}</div>
        </div>
      </div>

      <div className={classes.contactGroup}>
        <div className={classes.title}>Social Networks:</div>
        <SocialLinks mode="darkMode" socialLinks={socialLinks} />
      </div>
    </>
  );
};

export default ContactCard;
