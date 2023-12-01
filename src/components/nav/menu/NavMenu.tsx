import Link from "next/link";
import { navLinks, socialLinks } from "@/constants/index";

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

        <ul className={classes.socialLink}>
          {socialLinks.map((item) => (
            <li key={item.id} className={classes.menuItem}>
              <Link href={item.href}>
                <span>
                  <item.icon className={classes.menuCommonIcon} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
