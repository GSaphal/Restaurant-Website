import React, { useRef } from "react";
import pageData from "../data/content.json";
import InnerMenuPage from "../Components/menu-inner";

const Drinks = () => {
  const { title, items } = pageData.drinks;
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

export default Drinks;
