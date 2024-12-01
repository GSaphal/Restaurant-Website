import React, { useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLine } from 'react-icons/fa';

const SocialMediaCards = () => {
  // Dynamically load the Twitter widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto my-16 px-6 md:px-10">
      <h1 className="sm:text-3xl text-2xl font-semibold text-gray-800 mb-6 text-center">Stay Connected</h1>
      <div className="h-[1px] bg-gray-300 mb-6 w-[60px] mx-auto"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Follow us on Facebook',
            src: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fheavencurry.fukasaku&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId',
            icon: <FaFacebookF size={24} className="text-white" />,
            bg: 'bg-blue-600',
            textColor: 'text-white',
          },
          {
            title: 'Follow us on Twitter',
            element: (
              <div className="w-full h-auto overflow-hidden relative">
                <a
                  className="twitter-timeline"
                  href="https://twitter.com/heaven_fukasaku?ref_src=twsrc%5Etfw"
                  data-height="250" 
                  aria-label="Follow us on Twitter"
                ></a>
              </div>
            ),
            icon: <FaTwitter size={24} className="text-white" />,
            bg: 'bg-blue-500',
            textColor: 'text-white',
          },
          {
            title: 'Connect on LINE',
            src: 'https://line.me/en/',
            icon: <FaLine size={24} className="text-white" />,
            bg: 'bg-green-500',
            textColor: 'text-white',
          },
        ].map((social, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-lg flex flex-col items-center text-center p-4 transition-transform transform hover:scale-105 hover:shadow-2xl`}
          >
            <div className={`w-12 h-12 ${social.bg} rounded-full mb-1 flex items-center justify-center`}>
              {social.icon}
            </div>
            <h2 className={`text-lg font-semibold ${social.textColor} mb-4`}>{social.title}</h2> {/* Reduced bottom margin */}
            {social.src ? (
              <div className="relative w-full max-w-full h-[250px] overflow-hidden rounded-lg">
                <iframe
                  title={social.title}
                  src={social.src}
                  className="w-full h-[250px]" 
                  style={{ border: 'none' }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            ) : (
              <div className="w-full h-[250px]">{social.element}</div> 
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaCards;
