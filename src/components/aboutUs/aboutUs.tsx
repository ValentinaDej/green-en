import { introductionArticleContent } from "@/constants/index";

import Article from "../../shared/components/article/article";
import Team from "./team/team";

const AboutUs = () => {
  const { name: nameIntro, desc: descIntro } = introductionArticleContent;
  return (
    <section className="containerGlobal">
      <Article titleFirst={false} name={nameIntro} desc={descIntro} />
      <Team />
    </section>
  );
};

export default AboutUs;
