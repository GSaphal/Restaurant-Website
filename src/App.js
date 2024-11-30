import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components

import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import StoreInfo from "./Components/StoreInfo";
import Notice from "./Components/Notice";
import Footer from "./Components/Footer";
import CompanyInformation from "./Pages/CompanyInformation";
import Lunch from "./Pages/Lunch";
import Takeout from "./Pages/Takeout";
import Drink from "./Pages/Drink";
import Dinner from "./Pages/Dinner";
import ContactForm from "./Components/ContactForm";
import BusinessHours from './Components/BusinessHours';
import UberEats from './Components/UberEats';
import SocialMediaSection from './Components/SocialMediaSection';
import PartyCourse from './Pages/PartyCourse';
import GoToDashboardButton from './Components/GoToDashBoard';
// import MoreNews from "./Pages/MoreNews";


function App() {

  let slides = [
    <img src="images/food2.png" alt="food2" className="w-full h-auto object-cover" />,
    <img src="images/food3.jpg" alt="food3" className="w-full h-auto object-cover" />
  ];
  const menuItems = [
    { text: "Home", route: "/" },
    { text: "Lunch Menu", route: "/lunch" },
    { text: "Dinner Menu", route: "/dinner" },
    { text: "Drink Menu", route: "/drink" },
    { text: "Banquet/Course Menu", route: "/party" },
    { text: "Takeout Menu", route: "/takeout" },
    { text: "Delivery Menu", route: "/delivery" },
    { text: "Contact", route: "/contact" },
    { text: "Company Information", route: "/company-info" },
  ];
  
  const menuCards = [
    { image: <img src="images/menu_lunch-1.jpg" alt="Lunch Menu" />, route: "/lunch" },
    { image: <img src="images/menu_dinner-2.jpg" alt="Dinner Menu" />, route: "/dinner" },
    { image: <img src="images/menu_drink.jpg" alt="Drink Menu" />, route: "/drink" },
    { image: <img src="images/menu_party-1.jpg" alt="Party Menu" />, route: "/party" },
    { image: <img src="images/menu_takeout.jpg" alt="Takeout Menu" />, route: "/takeout" },
    
  ];
  

  const storeInfo = [
    { image: <img src="images/Heaven-North.jpg" alt="Heaven" />, route: "/company" },
    { image: <img src="images/contact.jpg" alt="Contact" />, route: "/contact" },
    { image: <img src="images/menu_delivery02.jpg" alt="Delivery" />, route: "/delivery" }
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
    <Router> 
      
        <Navbar menuItems={menuItems} />

        <div className="px-8 sm:px-2 md:px-20 lg:px-28 w-full pt-[10px] sm:pt-0 ">
          <Routes> 
            <Route path="/" element={ /* Homepage Route */ 
              <>
                <Banner slides={slides} />
                <Menu menuCards={menuCards} />
                <StoreInfo storeInfo={storeInfo} />
                <Notice />
                <SocialMediaSection/>
                <GoToDashboardButton/>
                
              </>
            } />
            {/* Other routes */}
            <Route path="/takeout" element={<Takeout />} />
            <Route path="/drink" element={<Drink />} />
           
            <Route path="/company-information" element={<CompanyInformation/>}/> 
             <Route path="/lunch" element={<Lunch />} />
             <Route path="/drink" element={<Drink />} />
             <Route path="/contact" element={<ContactForm/>} />
             <Route path="/company" element={<BusinessHours/>} />
             <Route path="/delivery" element={<UberEats/>} />
             <Route path="/dinner" element={<Dinner />} />
             <Route path="/takeout" element={<Takeout />} />
             <Route path="/party" element={<PartyCourse/>} />
             <Route path="/company-info" element={<CompanyInformation/>} />
             {/* <Route path="/morenews" element={<MoreNews/>} /> */}
             
          </Routes>
        </div>
       

        <Footer 
          column1Links={column1Links} 
          column2Links={column2Links} 
          companyInfo={companyInfo} 
        />
        <GoToDashboardButton/>
        
      
    </Router>
  );
}

export default App;
