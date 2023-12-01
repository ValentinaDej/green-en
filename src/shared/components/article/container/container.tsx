import classes from "./container.module.css";

type ContainerProps = {
  titleFirst: boolean;
  name: string;
  desc: string;
};

const Container = ({ titleFirst, name, desc }: ContainerProps) => {
  return (
    <article className={classes.container}>
      <h2 className={titleFirst ? classes.titleFirst : classes.titleSecond}>
        {name}
      </h2>
      <div className={classes.line}></div>
      <p
        className={
          titleFirst ? classes.descriptionFirst : classes.descriptionSecond
        }
      >
        {desc}
      </p>
    </article>
  );
};

export default Container;
