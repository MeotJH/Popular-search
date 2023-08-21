import React from "react";

const CardItemNamu = ({ item, index, hrefUrl }) => {
  return (
    <>
      <div key={index} className="border-y-8 border-bodyColor">
        <a href={`${hrefUrl}${item}`} target="_blank" rel="noreferrer">
          <h2 className="text-1xl font-extrabold ">
            {index + 1}.{item}
          </h2>
        </a>
      </div>
    </>
  );
};

export default CardItemNamu;
