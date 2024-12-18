import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GoToDashboardButton from "./components/GoToDashBoard";
import ScrollToTop from "./components/scroll";

const Layout = ({ children }) => {
  return (
    <>
      <div>
      <ScrollToTop />
        <Navbar />
        {children}
        <GoToDashboardButton />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
