import React, { useRef } from "react";
import pageData from "../data/content.json";
import InnerMenuPage from "../Components/menu-inner";

const Lunch = () => {
  const { title, items } = pageData.lunch;
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

export default Lunch;
