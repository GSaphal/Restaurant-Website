import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./Pages/Home";
import Lunch from "./Pages/Lunch";
import Drinks from "./Pages/Drinks";
import Dinner from "./Pages/Dinner";
import Dessert from "./Pages/Dessert";
import PartyCourse from "./Pages/PartyCourse";
import Takeout from "./Pages/Takeout";
import UberEats from "./Pages/UberEats";
import CompanyInformation from "./Pages/Company";
import News from "./Pages/News";
import { ToastContainer } from "react-toastify";
import BusinessHours from "./Pages/BusinessHours";
import ContactForm from "./Pages/ContactForm";
import ShopInformation from "./Pages/ShopInformation";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/party" element={<PartyCourse />} />
          <Route path="/takeout" element={<Takeout />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/company" element={<BusinessHours />} />
          <Route path="/delivery" element={<UberEats />} />
          <Route path="/company" element={<CompanyInformation />} />
          <Route path="/news" element={<News />} />
          <Route path="/store" element={<ShopInformation />} />
        </Routes>
        <ToastContainer />
      </Layout>
    </Router>
  );
}

export default App;
