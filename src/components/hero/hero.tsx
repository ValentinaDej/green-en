import Image from "next/image";
import { masterData } from "@/constants";
import { banerImage } from "@/assets/images";
import clasess from "./hero.module.css";

const Hero = () => {
  return (
    <article id="main" className={`containerGlobal ${clasess.containerGrid}`}>
      <header className={clasess.containerTitle}>
        <h1 className={clasess.title}>RENEWABLE ENERGY FOR ANY TASK</h1>
      </header>
      <section className={clasess.descriptionContainer}>
        <p className={clasess.justifyText}>
          Development and implementation of renewable non-polluting energy
          sources, generating power generation using energy wind, sun, water,
          biomass
        </p>
      </section>
      <div className="grigRowCenterToBlockLeft">
        <div>
          <a href="#cases" className={clasess.learnmore}>
            Learn more →
          </a>
        </div>
      </div>

      <div className={clasess.horizontalLine}></div>

      <div className="grigRowCenterToBlockLeft">
        <p>{masterData.address}</p>
      </div>
      <div className={clasess.contactContainer}>
        <p className={clasess.centerText}>{masterData.email}</p>
        <p className={clasess.elHidden}>{masterData.copySign}</p>
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
    </article>
  );
};

export default Hero;
