import type { NextPage } from "next";
import { Titles } from "../components/Home/Title/Titles";
import { AccordianInfo } from "../components/Home/Accordion/Accordion";
import { Date } from "../components/Home/Date/Date";
import MultipleTabs from "../components/Home/Tabs/Tabs"

const Home: NextPage = () => {
  return <>
    <Titles />
    <AccordianInfo />
    <Date />
    <MultipleTabs/>
  </>
};

export default Home;
