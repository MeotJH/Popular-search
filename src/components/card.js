import React from "react";

const Card = ({ title, description, imageUrl }) => {
  const [popularList, setPopularList] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const tempD = await googlePopularVideo();
      setPopularList(tempD.items);
    }

    fetchData();
  }, []);

  const googlePopularVideo = async () => {
    const API_KEY = process.env.REACT_APP_GOOGLE_KEY;
    const tempPopular = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=kr&key=${API_KEY}`
    );
    const afterAwait = await tempPopular.json();
    return afterAwait;
  };

  return (
    <div className=" m-auto max-w-sm rounded overflow-hidden shadow-lg grow">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">YOU TUBE 인급동</div>
        <p className="text-gray-700 text-base">
          {popularList.map((item, index) => {
            return (
              <div>
                <a href={`https://www.youtube.com/watch?v=${item.id}`}>
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
