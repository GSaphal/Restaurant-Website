import React from "react";
import Banner from "../Components/Banner";
import Menu from "../Components/Menu";
import Notice from "../Components/Notice";
import SocialMediaSection from "../Components/SocialMediaSection";
import GoToDashboardButton from "../Components/GoToDashBoard";
import StoreInfo from "../Components/StoreInfo";

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
