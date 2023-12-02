import Link from "next/link";
import classes from "./socialLinks.module.css";

type Props = {
  socialLinks: any;
  mode: string;
};
const SocialLinks = ({ socialLinks, mode }: Props) => {
  return (
    <div className={classes.group}>
      {socialLinks.map((item: any) => (
        <Link key={item.id} href={item.href}>
          <item.icon className={`${classes.item} ${classes[mode]}`} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
