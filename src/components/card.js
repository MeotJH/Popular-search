import React from "react";
import CardItemYouTube from "./card-item-you-tube";
import CardItemNamu from "./card-item-namu";
import CardItemGoogle from "./card-item-google";
import CardItemNaver from "./card-item-naver";
import AdvertisementBanner from "./advertisement-banner";

const Card = ({ popularList, title, hrefUrl, cardType }) => {
  const GetCardItem = ({ cardType, item, index }) => {
    const cardItems = {
      YOUTUBE: <CardItemYouTube item={item} index={index} hrefUrl={hrefUrl} />,
      NAMUWIKI: <CardItemNamu item={item} index={index} hrefUrl={hrefUrl} />,
      GOOGLE: <CardItemGoogle item={item} index={index} hrefUrl={hrefUrl} />,
      NAVER: <CardItemNaver item={item} index={index} hrefUrl={hrefUrl} />,
    };

    if (!cardType) {
      return <p>아이템 없음 404</p>;
    }

    return cardItems[cardType];
  };

  const ADBanner = ({ index }) => {
    const bannerIndex = popularList.length / 2 - 1;
    if (bannerIndex === index) {
      return <AdvertisementBanner />;
    }
  };

  return (
    <div className=" m-auto max-w-sm rounded overflow-hidden shadow-lg grow">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-base">
          {popularList.map((item, index) => {
            return (
              <>
                <GetCardItem cardType={cardType} item={item} index={index} />
                <ADBanner index={index} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
//TODO CardItemYouTube 각각 아이템 google/naver/tweeter/등등 분기치게 아이템 분리해야함
export default Card;
