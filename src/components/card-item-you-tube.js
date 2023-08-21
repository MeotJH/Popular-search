import React from "react";
import AdvertisementBanner from "./advertisement-banner";

const CardItemYouTube = ({ popularList, hrefUrl }) => {
  const ADBanner = ({ index }) => {
    const bannerIndex = popularList.length / 2 - 1;
    if (bannerIndex === index) {
      return <AdvertisementBanner />;
    }
  };

  return (
    <>
      {popularList.map((item, index) => {
        return (
          <div key={index}>
            <ADBanner index={index} />
            <div className="border-y-8 border-bodyColor">
              <a
                href={`${hrefUrl}${item.id}`}
                target="_blank"
                rel="noreferrer"
                className="border-y-8 border-bodyColor"
              >
                <h2 className="text-1xl font-extrabold dark:text-white">
                  {item.snippet.title}
                </h2>
                <img
                  src={item.snippet.thumbnails.standard.url}
                  alt={item.id}
                ></img>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardItemYouTube;
