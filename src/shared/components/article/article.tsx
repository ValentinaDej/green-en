import classes from "./article.module.css";
import Container from "./container/container";

const Article = ({
  titleFirst,
  name,
  desc,
}: {
  titleFirst: boolean;
  name: string;
  desc: string;
}) => {
  return <Container titleFirst={titleFirst} name={name} desc={desc} />;
};

export default Article;
