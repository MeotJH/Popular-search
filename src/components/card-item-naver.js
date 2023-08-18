import React from "react";

const CardItemNaver = ({ popularList, hrefUrl }) => {
  return (
    <>
      {popularList.map((item, index) => {
        return (
          <div key={index} className="border-y-8 border-bodyColor">
            <a
              href={`${hrefUrl}${item.keyword}`}
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="text-1xl font-extrabold ">
                {item.rank}.{item.keyword}
              </h2>
            </a>
          </div>
        );
      })}
    </>
  );
};

export default CardItemNaver;
