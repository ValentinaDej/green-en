import Instagram from "@/shared/icons/Instagram";
import Facebook from "@/shared/icons/Facebook";
import ArrowRight from "@/shared/icons/ArrowRight";
import Openness from "@/shared/icons/Openness";
import Quality from "@/shared/icons/Quality";
import Innovation from "@/shared/icons/Innovation";
import Responcibility from "@/shared/icons/Responcibility";

import { logo } from "@/assets/images";

import {
  dudaRhoto,
  shevchenkoPhoto,
  turchenkoPhoto,
  dunaevPhoto,
} from "@/assets/images";

import { buh, kyiv, rivne, zhytomyr, lutsk } from "@/assets/images";

export const masterData = {
  finalCountElecteycity: 1134147814,
  logo: logo,
  address: "79005, Ukraine, Lvivstreet. Shota Rustaveli, 7",
  email: "office@ecosolution.com",
  phone1: "38 (098) 12 34 567",
  phone2: "38 (093) 12 34 567",
  copySign: "ecosolution © 2023",
};

export const navLinks = [
  { href: "#main", label: "Main", icon: ArrowRight },
  { href: "#about", label: "About", icon: ArrowRight },
  { href: "#values", label: "Values", icon: ArrowRight },
  { href: "#cases", label: "Case", icon: ArrowRight },
  { href: "#faq", label: "FAQ", icon: ArrowRight },
  { href: "#contact", label: "Contact", icon: ArrowRight },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com/", icon: Facebook },
  { id: 2, href: "https://www.instagram.com/", icon: Instagram },
];

export const introductionArticleContent = {
  name: "Let`s start with small start with ourselves",
  desc: "ECOSOLUTION is the largest group of companies in Western Ukraine, which is engaged in the development and implementation of renewable environmentally friendly energy sources. We are the first privately owned company that received a loan from the European Bank for Reconstruction and Development (EBRD) and built the first wind farm in Western Ukraine. During the company`s work, a number of projects in the field of energy were implemented. At the same time, new investment projects, in particular small hydropower and biofuels, are constantly being developed and developed with existing objects.",
};

export const mainValueArticleContent = {
  name: "Main values of our company",
  desc: "EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world`s energy needs.",
};

export const teamData = [
  { id: 1, name: "Andrii Duda", position: "CEO", photo: dudaRhoto },
  {
    id: 2,
    name: "Yurii Turchenko",
    position: "Technology officer",
    photo: turchenkoPhoto,
  },
  {
    id: 3,
    name: "Vitalii Shevchenko",
    position: "Director",
    photo: shevchenkoPhoto,
  },
  {
    id: 4,
    name: "Victor Dunaev",
    position: "Senior engineer",
    photo: dunaevPhoto,
  },
];

export const valuesList = [
  {
    id: 1,
    title: "Openness",
    description: "to the world, people, new ideas and projects",
    icon: Openness,
  },
  {
    id: 2,
    title: "Responsibility",
    description:
      "we are aware that the results of our work have an impact on our lives and the lives of future generations",
    icon: Responcibility,
  },
  {
    id: 3,
    title: "Innovation",
    description:
      "we use the latest technology to implement non-standard solutions",
    icon: Innovation,
  },
  {
    id: 4,
    title: "Quality",
    description:
      "we do not strive to be the first among others, but we want to be the best in our business",
    icon: Quality,
  },
];

export const faqList = [
  {
    id: 1,
    qw: "How do wind turbines and solar panels work together in a renewable energy system?",
    answ: "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    id: 2,
    qw: "What sets EcoSolution`s renewable energy solutions apart from others on the market?",
    answ: "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    id: 3,
    qw: "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
    answ: "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    id: 4,
    qw: "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    answ: "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    id: 5,
    qw: "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
    answ: "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
];

export const casesList = [
  {
    id: 1,
    name: "Lviv Region, Radekhiv town ",
    address: "Private Enterprise “ZAKHIDNYI BUH”",
    description: "Wind Power for auto field irrigation",
    date: "July 2023",
    photo: buh,
  },
  {
    id: 2,
    name: "Private Enterprise “Bosch”",
    address: "Zhytomyr city",
    description: "Solar Panels for industrial use",
    date: "July 2023",
    photo: zhytomyr,
  },
  {
    id: 3,
    name: "Dunn, Marshall and Holden",
    address: "8312 Moore Hollow, Jessicaville, KS 09684",
    description: "Re-contextualized dedicated website",
    date: "October 2023",
    photo: rivne,
  },
  {
    id: 4,
    name: "Wallace Group",
    address: "2783 Melissa Mills, Lake Justinland, NV 66919",
    description: "Robust neutral workforce",
    date: "September 2023",
    photo: lutsk,
  },
  {
    id: 5,
    name: "Johnson, Ward and Norman",
    address: "7561 Boyer Pass, Sullivanview, HI 09109",
    description: "Open-architected empowering challenge",
    date: "July 2023",
    photo: kyiv,
  },
];
