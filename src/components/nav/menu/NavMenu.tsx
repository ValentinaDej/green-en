import Link from "next/link";
import { navLinks, socialLinks } from "@/constants/index";

import SocialLinks from "@/shared/components/socialLinks/socialLinks";
import Close from "@/shared/icons/Close";
import classes from "./NavMenu.module.css";
import { navMenuProps } from "../../../../App.types";

const NavMenu = ({ toggleMenu }: navMenuProps) => {
  return (
    <div className={classes.menu}>
      <div onClick={toggleMenu} className={classes.menuClose} role="button">
        <Close className={classes.menuCommonIcon} aria-label="Close" />
        <div>close</div>
      </div>

      <div className={classes.menuContent}>
        <ul onClick={toggleMenu}>
          {navLinks.map((item) => (
            <li key={item.label} className={classes.menuItem}>
              <Link href={item.href}>
                <span role="button" className={classes.menuItemText}>
                  {item.label}
                </span>
                <span role="button">
                  <item.icon className={classes.menuItemIcon} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className={classes.socialLink}></div>
      </div>

      <SocialLinks socialLinks={socialLinks} mode="lightMode" />
    </div>
  );
};

export default NavMenu;
