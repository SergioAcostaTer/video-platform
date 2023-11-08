import { Routes, Route, BrowserRouter } from "react-router-dom";
import VideoPage from "./pages/VideoPage";
import Header from "./components/Header";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
};

export default App;
