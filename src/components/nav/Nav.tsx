import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import NavMenu from "./menu/NavMenu";
import { masterData } from "@/constants";
import Button from "@/shared/components/button/button";
import Menu from "@/shared/icons/Menu";
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
    <header id="nav">
      <nav className={classes.container} role="navigation">
        {/* <div className={classes.fixed}> */}
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
          <Button
            variant="navigationButton"
            onClick={toggleMenu}
            label="Menu button"
          >
            <Menu />
          </Button>

          <div className={classes.navHidden}>
            <div>
              <Button
                link="#contact"
                text="Get in touch"
                variant="ovalWithDot"
              />
            </div>
          </div>
        </div>
        {/* </div> */}

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
