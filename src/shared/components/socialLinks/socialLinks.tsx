import classes from "./socialLinks.module.css";
import { socialLinksProps } from "../../../../App.types";

const SocialLinks = ({ socialLinks, mode }: socialLinksProps) => {
  return (
    <div className={classes.group}>
      {socialLinks.map((item: any) => (
        <a
          key={item.id}
          target="_blank"
          href={item.href}
          rel="noopener noreferrer"
          aria-label="Link to social network"
        >
          <item.icon className={`${classes.item} ${classes[mode]}`} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
