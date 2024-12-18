import React from "react";
import Menu from "../components/Menu";
import SocialMediaSection from "../components/SocialMediaSection";
import GoToDashboardButton from "../components/GoToDashBoard";
import StoreInfo from "../components/StoreInfo";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* <div className="w-full h-20 flex min-h-[400px]">
        <div className="w-1/2 flex justify-center items-center flex-row">
          <h1 className="text-4xl font-bold">Checkout our montly naaan</h1>  
          <button>Check Now</button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Banner />
        </div>
      </div> */}

      <div className="bg-gradient-to-r from-amber-500 to-pink-500 py-10">
        <div className="min-h-[100px] text-center text-white items-center flex justify-center flex-col py-8">
          <h1 className="text-4xl font-bold drop-shadow-sm">月変わりナン</h1>
          <p className="text-xl mt-3 px-4">
              毎月の楽しみの月変わりナン
          </p>
          <Link to="/naan">
            <button
              type="submit"
              className="bg-[#f57224] text-white py-2 rounded-md px-5 text-sm font-bold mt-8 border-[1px] border-white flex items-center gap-x-1"
            >
              クリック
               <FaAngleRight />
            </button>{" "}
          </Link>
        </div>
      </div>
      <Menu />

      <StoreInfo />
      {/* <Notice /> */}
      <SocialMediaSection />
      <GoToDashboardButton />
    </div>
  );
};

export default Home;
