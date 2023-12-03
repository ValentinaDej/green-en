import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import NavMenu from "./menu/NavMenu";
import { masterData } from "@/constants";
import { hamburger } from "@/assets/icons";

import classes from "./Nav.module.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overlay");
    } else {
      document.body.classList.remove("overlay");
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <nav className={classes.container} role="navigation">
        <div className={classes.navLogo}>
          <Link href="/">
            <Image
              src={masterData.logo}
              alt="Heder Logo"
              width={269}
              height={40}
              layout="responsive"
              priority
            />
          </Link>
        </div>

        <div className={classes.nav}>
          <Link href="/">
            <Image
              src={hamburger}
              alt="menu icon"
              width={25}
              height={25}
              priority
              onClick={toggleMenu}
              role="button"
            />
          </Link>

          <div className={classes.navHidden}>
            <div>
              <Link href="#contact">
                <div>Get in touch</div>
              </Link>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className={classes.navPosition}>
            <div className={classes.navHidenSubPosition}></div>
            <div className={classes.navSubPosition}>
              <NavMenu toggleMenu={toggleMenu} />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
