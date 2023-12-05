import Head from "next/head";
import {
  Nav,
  Hero,
  AboutUs,
  CompanyValues,
  ProductionCounter,
  Cases,
  Faq,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eco solution</title>
        <meta name="description" content="Green energy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <AboutUs />
        <CompanyValues />
        <ProductionCounter />
        <Cases />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
