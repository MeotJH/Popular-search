import React from "react";

const CardItemYouTube = ({ item, index, hrefUrl }) => {
  return (
    <>
      <div key={index}>
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
            <img src={item.snippet.thumbnails.standard.url} alt={item.id}></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default CardItemYouTube;
