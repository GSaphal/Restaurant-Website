import React from "react";
import Banner from "../components/Banner";
import Menu from "../components/Menu";
import Notice from "../components/Notice";
import SocialMediaSection from "../components/SocialMediaSection";
import GoToDashboardButton from "../components/GoToDashBoard";
import StoreInfo from "../components/StoreInfo";

const Home = () => {


  return (
    <div>
      <Banner />
      <Menu />
      <StoreInfo />
      <Notice />
      <SocialMediaSection />
      <GoToDashboardButton />
    </div>
  );
};

export default Home;
