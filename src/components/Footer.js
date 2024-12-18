import React from "react";
import { useNavigate } from "react-router-dom";
import pageData from "../data/content.json";

const Footer = () => {
  const column1Links = pageData.sidebar.slice(0, 5);
  const column2Links = pageData.sidebar.slice(5, 8);
  console.log(pageData.store);
  const companyInfo = [
    pageData.store.name["jp"],
    pageData.store.businessNumber["jp"],
    pageData.store.address["jp"],
    pageData.store.telephone["jp"],
  ];
  const title = pageData.title;
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  const renderLinks = (links) =>
    links.map((link, idx) => (
      <button
        key={idx}
        onClick={() => handleNavigation(link.route)} // Assume `link` contains a `path` property
        className="text-left hover:text-yellow-500"
      >
        {link["jp"]} {/* Display link label */}
      </button>
    ));

  return (
    <footer className="w-full bg-gray-100">
      <div className="mx-auto px-7 sm:px-2 md:px-20 lg:px-28 grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600 py-[40px]">
        <div className="flex flex-col space-y-2">
          {renderLinks(column1Links)}
        </div>
        <div className="flex flex-col space-y-2">
          {renderLinks(column2Links)}
        </div>
        <div className="flex flex-col space-y-2">
          {companyInfo.map((info, idx) => (
            <p key={idx}>{info}</p>
          ))}
        </div>
      </div>
      <div className="bg-[#333] text-white text-center py-4">
        <p>© {title["jp"]}, {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
