import "./App.css";
import { Routes, Route } from "react-router-dom";
import YouTubeSearch from "./pages/you-tube-search";
import Navbar from "./pages/header";
import NaverSearch from "./pages/naver-search";
import TweeterSearch from "./pages/tweeter-search";
import GoogleSearch from "./pages/google-search";

function App() {
  return (
    <div className="App bg-bodyColor min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<YouTubeSearch />}></Route>
        <Route path="/naver" element={<NaverSearch />}></Route>
        <Route path="/tweeter" element={<TweeterSearch />}></Route>
        <Route path="/google" element={<GoogleSearch />}></Route>
      </Routes>
    </div>
  );
}

// TO-DO 라우팅 동적으로 구현하게 리팩토링 해야한다.
export default App;
