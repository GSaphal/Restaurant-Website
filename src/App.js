// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import StoreInfo from "./Components/StoreInfo";
import Notice from "./Components/Notice";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import CompanyInformation from "./Pages/CompanyInformation";
// import Lunch from "./Pages/Lunch";
import Takeout from "./Pages/Takeout";
import Drink from "./Pages/Drink";
// import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";

// import DinnerMenu from "./Components/DinnerMenu";




function App() {

  let slides=[
    <img src="images/food2.png" alt="food2" />,
    <img src="images/food3.jpg" alt="food3" />
    
    
  ];
  const menuItems = [
    "home",
    "Lunch menu",
    "Dinner menu",
    "Drink menu",
    "Banquet/course menu",
    "Takeout menu",
    "Delivery menu",
    "List of news",
    "Frequently Asked Questions",
    "Contact",
    "Company information"
  ];

  const menuCards = [
    <img src="images/menu_lunch-1.jpg" alt="Lunch Menu" />,
    <img src="images/menu_dinner-2.jpg" alt="Dinner Menu" />,
    <img src="images/menu_drink.jpg" alt="Drink Menu" />,
    <img src="images/menu_party-1.jpg" alt="Party Menu" />,
    <img src="images/menu_takeout.jpg" alt="Takeout Menu" />,
    <img src="images/menu_delivery02.jpg" alt="Delivery" />
  ];

  const storeInfo = [
    <img src="images/Heaven-North.jpg" alt="Heaven" />,
    <img src="images/faq.jpg" alt="FAQ" />,
    <img src="images/contact.jpg" alt="Contact" />
  ];

  const column1Links = [
    "Top page", "Lunch menu", "Dinner menu", "Drink menu",
    "Banquet/course menu", "Takeout menu", "Delivery menu"
  ];

  const column2Links = [
    "Heaven North Book West Exit", "(Sales information/access)", "Notice",
    "Frequently Asked Questions", "Privacy policy", "Company information", "Contact"
  ];

  const companyInfo = [
    "SRS Co., Ltd.", "〒364-0031", "Kitamoto City Center, Saitama", 
    "Prefecture 1-61", "TEL 048-592-2155"
  ];

  return (
    
    <div className="App">
     <Navbar  menuItems={menuItems}/>

     <div className="w-[1290px] m-auto pt-5">
      
       <Banner  slides={slides}/>
       <Menu menuCards={menuCards}/>
     <StoreInfo storeInfo={storeInfo} />
     <Notice/>
     <Contact/>
     
     </div>

     <div>
      <Footer 
        column1Links={column1Links} 
        column2Links={column2Links} 
        companyInfo={companyInfo}
      />
     </div>
      <CompanyInformation/>
      {/* <DinnerMenu/> */}
      {/* <Lunch/> */}
      <Takeout/>
      <Drink/>
    
      </div>

    
  ); 
}

export default App;
