import React, { useRef } from "react";
import pageData from "../data/content.json";
import InnerMenuPage from "../components/menu-inner";

const Dinner = () => {
  const { title, items } = pageData.dinner;
  const sectionRefs = useRef([]);
  const scrollToSection = (index) => {
    sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <InnerMenuPage
    title={title["jp"]}
    items={items}
    scrollToSection={scrollToSection}
    sectionRefs={sectionRefs}
  />
  );
};

export default Dinner;