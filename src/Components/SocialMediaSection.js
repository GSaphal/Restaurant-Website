import React from 'react';

const SocialMediaCards = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto my-[40px] sm:px-0 px-7 ">
      <h1 className="text-[20px] font-medium mb-2 text-gray-800">SNS</h1>
      <div className="h-[1px] bg-gray-300 mb-7"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { title: 'Follow us on Facebook', src: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFacebookPageName&tabs=timeline&width=300&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId' },
          { title: 'Follow us on Twitter', src: 'https://platform.twitter.com/widgets/timeline.html?screen_name=TwitterHandle&dnt=false&width=300&height=300' },
          { title: 'Connect on WhatsApp', src: 'https://web.whatsapp.com/send?phone=1234567890&text=Hello%20there!' }
        ].map((social, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg flex flex-col items-center text-center border">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 pt-3">{social.title}</h2>
            <iframe
              title={social.title}
              src={social.src}
              className="w-full h-[300px]  "
              allow="encrypted-media"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaCards;
