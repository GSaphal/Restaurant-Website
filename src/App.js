import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyInformation from "./pages/CompanyInformation";
import Lunch from "./pages/Lunch";
import Takeout from "./pages/Takeout";
import Drinks from "./pages/Drinks";
import Dinner from "./pages/Dinner";
import ContactForm from "./components/ContactForm";
import BusinessHours from "./components/BusinessHours";
import UberEats from "./components/UberEats";
import PartyCourse from "./pages/PartyCourse";
import Home from "./pages/Home";
import Layout from "./layout";
import { useEffect } from "react";
import Dessert from "./pages/Dessert";
import { ToastContainer } from "react-toastify";
import News from "./pages/News";

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
          <Route path="/company-info" element={<CompanyInformation />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <ToastContainer />
      </Layout>
    </Router>
  );
}

export default App;
