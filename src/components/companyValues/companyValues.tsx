import { mainValueArticleContent } from "@/constants/index";

import Article from "../../shared/components/article/article";
import Values from "./values/values";

const CompanyValues = () => {
  const { name: nameVal, desc: descVal } = mainValueArticleContent;
  return (
    <section className="containerGlobal">
      <Article titleFirst={false} name={nameVal} desc={descVal} />
      <Values />
    </section>
  );
};

export default CompanyValues;
