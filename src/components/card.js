import React from "react";
import CardItemYouTube from "./card-item-you-tube";

const Card = ({ popularList, title, hrefUrl }) => {
  return (
    <div className=" m-auto max-w-sm rounded overflow-hidden shadow-lg grow">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-base">
          <CardItemYouTube popularList={popularList} hrefUrl={hrefUrl} />
        </div>
      </div>
    </div>
  );
};
//TODO CardItemYouTube 각각 아이템 google/naver/tweeter/등등 분기치게 아이템 분리해야함
export default Card;
