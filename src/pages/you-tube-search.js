import Card from "../components/card";
import React from "react";

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
    const API_KEY = process.env.REACT_APP_GOOGLE_KEY;
    const tempPopular = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=kr&key=${API_KEY}`
    );
    const afterAwait = await tempPopular.json();
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
