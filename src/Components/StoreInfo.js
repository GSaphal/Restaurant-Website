import React, { useEffect } from "react";
import pageData from "../data/content.json";
import Title from "./title";
import HorizontalLine from "./line";

const StoreInfo = () => {
  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []); // Empty dependency array to run only on mount (initial page load)

  const { storeInformation, storeInformationItems } = pageData.homepage;

  return (
    <div className="w-full mx-auto max-w-[1280px] pt-[40px] px-4 sm:px-6 md:px-8">
      <Title title={storeInformation["jp"]} />
      <HorizontalLine />
      <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
        {/* Image Section */}
        <div className="w-full sm:w-1/2">
          <img
            src={storeInformationItems.image}
            className="w-full h-auto rounded-2xl"
            alt="Heaven"
          />
        </div>

        {/* Map Section */}
        <div className="w-full sm:w-1/2 rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.7012170761614!2d139.6574777546068!3d35.954278344248024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c73d11b7e537%3A0xd812e88095bad6b8!2zSmFwYW4sIOOAkjMzNy0wMDAzIFNhaXRhbWEsIE1pbnVtYSBXYXJkLCBGdWthc2FrdSwgMy1jaMWNbWXiiJLvvJHvvJLiiJIxNCDjgYTjgbXjgZjjg5Pjg6s!5e0!3m2!1sen!2sca!4v1733957497257!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col text-xl font-bold items-center mt-8">
        インドカレーヘブン深作店のSNS
      </div>
    </div>
  );
};

export default StoreInfo;
