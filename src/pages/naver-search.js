import React from "react";
import Card from "../components/card";

function NaverSearch() {
  const [ranking, setRanking] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const tempD = await getNaverRankings();
      setRanking(tempD.top10);
    }

    fetchData();
  }, []);

  const getNaverRankings = async () => {
    const RANKING_URL = process.env.REACT_APP_NAVER_RANKING_URL;
    const tempPopular = await fetch(RANKING_URL);
    const afterAwait = await tempPopular.json();
    return afterAwait;
  };

  return (
    <section className=" min-h-screen flex items-center">
      <Card
        popularList={ranking}
        title="네이버 인기검색어"
        hrefUrl="https://search.naver.com/search.naver?query="
        cardType="NAVER"
      />
    </section>
  );
}
export default NaverSearch;
