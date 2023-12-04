export type navMenuProps = {
  toggleMenu: () => void;
};

export type ValueCardProps = {
  id: number;
  icon: any;
  title: string;
  description: string;
  image?: string;
};

export type ValuesSectionProps = {
  values: ValueCardProps[];
};

export type TeamCardProps = {
  name: string;
  position: string;
  photo: any;
};

export type CaseCardProps = {
  photo: any;
  name: string;
  address: string;
  description: string;
  date: string;
};

export type faqCardProps = {
  qw: string;
  answ: string;
  isOpen: boolean;
  toggleAccordion: () => void;
};

export type ArticleProps = {
  id: string;
  titleFirst: boolean;
  name: string;
  desc: string;
  children?: React.ReactNode;
};

export type socialLinksProps = {
  socialLinks: any;
  mode: string;
};

export type ButtonProps = {
  children?: React.ReactNode;
  link?: string;
  onClick?: () => void;
  text?: string;
  className?: string;
  variant?:
    | "round"
    | "oval"
    | "navigationButton"
    | "sliderButton"
    | "ovalWithDot";
  label?: string;
};
