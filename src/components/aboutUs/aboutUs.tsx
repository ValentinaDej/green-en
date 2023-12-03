import { introductionArticleContent } from "@/constants/index";
import Article from "@/shared/components/article/article";
import Team from "./team/team";

const AboutUs = () => {
  const { name: nameIntro, desc: descIntro } = introductionArticleContent;
  return (
    <Article id="about" titleFirst={false} name={nameIntro} desc={descIntro}>
      <Team />
    </Article>
  );
};

export default AboutUs;
