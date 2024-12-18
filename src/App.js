import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import Lunch from "./pages/Lunch";
import Drinks from "./pages/Drinks";
import Dinner from "./pages/Dinner";
import Dessert from "./pages/Dessert";
import PartyCourse from "./pages/PartyCourse";
import Takeout from "./pages/Takeout";
import UberEats from "./pages/UberEats";
import News from "./pages/News";
import { ToastContainer } from "react-toastify";
import BusinessHours from "./pages/BusinessHours";
import ContactForm from "./pages/ContactForm";
import ShopInformation from "./pages/ShopInformation";
import NaanInformation from "./pages/NaanInformation";

function App() {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
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
          <Route path="/news" element={<News />} />
          <Route path="/store" element={<ShopInformation />} />
          <Route path="/naan" element={<NaanInformation />} />
        </Routes>
        <ToastContainer />
      </Layout>
    </Router>
  );
}

export default App;
