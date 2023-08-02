import React from "react";

const Card = ({ popularList, title, hrefUrl }) => {
  return (
    <div className=" m-auto max-w-sm rounded overflow-hidden shadow-lg grow">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {popularList.map((item, index) => {
            return (
              <div>
                <a href={`${hrefUrl}${item.id}`}>
                  <p>{item.snippet.title}</p>
                  <img
                    src={item.snippet.thumbnails.standard.url}
                    alt={item.id}
                  ></img>
                </a>
              </div>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Card;
