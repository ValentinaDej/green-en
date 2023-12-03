import classes from "./article.module.css";

type ArticleProps = {
  id: string;
  titleFirst: boolean;
  name: string;
  desc: string;
  children?: React.ReactNode;
};

const Article = ({ id, titleFirst, name, desc, children }: ArticleProps) => (
  <article id={id} className={classes.container}>
    <header>
      <h2 className={titleFirst ? classes.titleFirst : classes.titleSecond}>
        {name}
      </h2>
    </header>

    <span className={classes.line}></span>

    <section
      className={
        titleFirst ? classes.descriptionFirst : classes.descriptionSecond
      }
    >
      {desc}
    </section>

    <section className={classes.children}>{children}</section>
  </article>
);

export default Article;
