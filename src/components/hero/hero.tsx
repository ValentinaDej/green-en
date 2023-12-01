import Image from "next/image";

import { banerImage } from "@/assets/images";
import clasess from "./hero.module.css";

const Hero = () => {
  return (
    <section className={clasess.container}>
      <div className={clasess.titleContainer}>
        <h1 className={clasess.title}>RENEWABLE ENERGY FOR ANY TASK</h1>
      </div>
      <div className={clasess.descriptionContainer}>
        <p className={clasess.justifyText}>
          Development and implementation of renewable non-polluting energy
          sources, generating power generation using energy wind, sun, water,
          biomass
        </p>
      </div>
      <div className="grigRowCenterToBlockLeft">
        <div>
          <a href="#" className={clasess.learnmore}>
            Learn more →
          </a>
        </div>
      </div>

      <div className={clasess.horizontalLine}></div>

      <div className="grigRowCenterToBlockLeft">
        <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
      </div>
      <div className={clasess.contactContainer}>
        <p className={clasess.centerText}>office@ecosolution.com</p>
        <p className={clasess.elHidden}>ecosolution © 2023</p>
      </div>
      <div className="fullWidthContent">
        <Image
          src={banerImage}
          alt="wind, turbine clean energy"
          layout="responsive"
          width={1920}
          height={1080}
          priority
          className={clasess.baner}
        />
      </div>
    </section>
  );
};

export default Hero;
