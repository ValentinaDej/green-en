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
