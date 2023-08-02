import React from "react";

const CardItemYouTube = ({ popularList, hrefUrl }) => {
  return (
    <>
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
    </>
  );
};

export default CardItemYouTube;
