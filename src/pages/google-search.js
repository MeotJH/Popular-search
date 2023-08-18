import React from "react";
import Card from "../components/card";

function GoogleSearch() {
  const [trendsList, setTrendsList] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const result = await getGoogleSearchRankings();
      setTrendsList(result.items);
    }

    fetchData();
  }, []);

  const getGoogleSearchRankings = async () => {
    const RSS_URL =
      "https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR";
    const TRENDS_URL =
      "https://api.rss2json.com/v1/api.json?rss_url=" +
      encodeURIComponent(RSS_URL);
    const tempTrends = await fetch(TRENDS_URL);
    const afterAwait = await tempTrends.json();
    return afterAwait;
  };

  return (
    <section className=" min-h-screen flex items-center">
      <Card
        popularList={trendsList}
        title="Google 트렌드"
        hrefUrl="https://www.google.com/search?q="
        cardType="GOOGLE"
      />
    </section>
  );
}

export default GoogleSearch;
