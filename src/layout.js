import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GoToDashboardButton from "./components/GoToDashBoard";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Navbar />
        <>{children}</>
        <GoToDashboardButton />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
