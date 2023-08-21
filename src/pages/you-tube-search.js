import Card from "../components/card";
import React from "react";
import { youtubeDefault } from "../data/no-file";

function YouTubeSearch() {
  const [popularList, setPopularList] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const tempD = await googlePopularVideo();
      setPopularList(tempD.items);
    }

    fetchData();
  }, []);

  const googlePopularVideo = async () => {
    let afterAwait;
    try {
      const tempPopular = await fetch(`http://localhost:8080/api/v1/youtube`);
      afterAwait = await tempPopular.json();
    } catch (error) {
      afterAwait = JSON.parse(youtubeDefault);
    }

    return afterAwait;
  };
  return (
    <section className=" min-h-screen flex items-center">
      <Card
        popularList={popularList}
        title="YOU TUBE 인급동"
        hrefUrl="https://www.youtube.com/watch?v="
        cardType="YOUTUBE"
      />
    </section>
  );
}

export default YouTubeSearch;
