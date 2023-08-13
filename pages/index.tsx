import type { NextPage } from "next";
import { Titles } from "../components/Home/Title/Titles";
import { AccordianInfo } from "../components/Home/Accordion/Accordion";
import { Date } from "../components/Home/Date/Date";
import MultipleTabs from "../components/Home/Tabs/Tabs"
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zakat calculator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Titles />
      <AccordianInfo />
      <Date />
      <MultipleTabs />
    </>
  )
};

export default Home;
