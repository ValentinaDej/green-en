import Link from "next/link";
import { navLinks, socialLinks } from "@/constants/index";

import SocialLinks from "@/shared/components/socialLinks/socialLinks";
import Close from "@/shared/icons/Close";
import classes from "./NavMenu.module.css";

type Props = {
  toggleMenu: () => void;
};

const NavMenu = ({ toggleMenu }: Props) => {
  return (
    <div className={classes.menu}>
      <div className={classes.menuClose}>
        <Close onClick={toggleMenu} className={classes.menuCommonIcon} />
        <span onClick={toggleMenu}>close</span>
      </div>

      <div className={classes.menuContent}>
        <ul>
          {navLinks.map((item) => (
            <li key={item.label} className={classes.menuItem}>
              <Link href={item.href}>
                <span className={classes.menuItemText}> {item.label}</span>
                <span>
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
