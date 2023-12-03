import { mainValueArticleContent } from "@/constants/index";

import Article from "@/shared/components/article/article";
import Values from "./values/values";

const CompanyValues = () => {
  const { name: nameVal, desc: descVal } = mainValueArticleContent;
  return (
    <Article titleFirst={true} name={nameVal} desc={descVal}>
      <Values />
    </Article>
  );
};

export default CompanyValues;
