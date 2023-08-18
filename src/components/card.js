import React from "react";
import CardItemYouTube from "./card-item-you-tube";
import CardItemNamu from "./card-item-namu";
import CardItemGoogle from "./card-item-google";
import CardItemNaver from "./card-item-naver";

const Card = ({ popularList, title, hrefUrl, cardType }) => {
  const cardItems = {
    YOUTUBE: <CardItemYouTube popularList={popularList} hrefUrl={hrefUrl} />,
    NAMUWIKI: <CardItemNamu popularList={popularList} hrefUrl={hrefUrl} />,
    GOOGLE: <CardItemGoogle popularList={popularList} hrefUrl={hrefUrl} />,
    NAVER: <CardItemNaver popularList={popularList} hrefUrl={hrefUrl} />,
  };

  const GetCardItem = (cardType) => {
    if (!cardType) {
      return <p>아이템 없음 404</p>;
    }

    return cardItems[cardType.cardType];
  };

  return (
    <div className=" m-auto max-w-sm rounded overflow-hidden shadow-lg grow">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-base">
          <GetCardItem cardType={cardType} />
        </div>
      </div>
    </div>
  );
};
//TODO CardItemYouTube 각각 아이템 google/naver/tweeter/등등 분기치게 아이템 분리해야함
export default Card;
