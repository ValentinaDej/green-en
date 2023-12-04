import Image from "next/image";
import { masterData } from "@/constants";
import { banerImage } from "@/assets/images";
import clasess from "./hero.module.css";
import Button from "@/shared/components/button/button";
import ArrowUp from "@/shared/icons/ArrowUp";

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
      <div className={clasess.grigRowCenterToBlockLeft}>
        <Button link="#cases" label="Go back" text="Learn more" variant="oval">
          <ArrowUp className={clasess.icon} />
        </Button>
      </div>

      <div className={clasess.horizontalLine}></div>

      <div className={clasess.grigRowCenterToBlockLeft}>
        <p>{masterData.address}</p>
      </div>
      <div className={clasess.contactContainer}>
        <p className={clasess.centerText}>{masterData.email}</p>
        <p className={clasess.elHidden}>{masterData.copySign}</p>
      </div>

      <div className={clasess.fullWidthContent}>
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
