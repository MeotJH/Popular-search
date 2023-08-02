import React from "react";
import Card from "../components/card";

function NamuWikiSearch() {
  const [ranking, setRanking] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const tempD = await getNamuWikiRankings();
      console.info(tempD, "tempD");
      setRanking(tempD);
    }

    fetchData();
  }, []);

  const getNamuWikiRankings = async () => {
    const RANKING_URL = process.env.REACT_APP_NAMU_WIKI_RANKING_URL;
    const tempPopular = await fetch(RANKING_URL);
    const afterAwait = await tempPopular.json();
    return afterAwait;
  };

  return (
    <section className=" min-h-screen flex items-center">
      <Card
        popularList={ranking}
        title="나무위키 인기검색어"
        hrefUrl="https://namu.wiki/w/"
        cardType="NAMUWIKI"
      />
    </section>
  );
}

export default NamuWikiSearch;
