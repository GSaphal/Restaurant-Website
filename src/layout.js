import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import GoToDashboardButton from "./Components/GoToDashBoard";

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
