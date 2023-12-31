import { useState } from "react";
import "./styles/index.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Navbar from "./component/Navbar";
import Card from "./component/Card";
import IntroPage from "./page/IntroPage";
import ExperiencePage from "./page/ExperiencePage";
import ContactPage from "./page/ContanctPage";
import ChatPage from "./page/ChatPage";
function App() {
  const [indexes, setIndexes] = useState({
    current: 1,
    previous: 1,
  });
  const next = () => {
    if (indexes.current === 4) {
      return;
    }
    indexes.previous = indexes.current;
    indexes.current = indexes.current + 1;
    setIndexes({ ...indexes });
  };
  const prev = () => {
    if (indexes.current === 1) {
      return;
    }
    indexes.previous = indexes.current;
    indexes.current = indexes.current - 1;
    setIndexes({ ...indexes });
  };
  const jumptoIndex = (index) => {
    indexes.current = index;
    setIndexes({ ...indexes });
  };
  return (
    <div className="container">
      <Navbar jumptoIndex={jumptoIndex} />
      <div className="content">
        <button className="btn-left" onClick={prev}>
          <ArrowBackIosNewIcon color="primary" />
        </button>
        <div className="cards">
          <Card id={1} indexes={indexes}>
            <IntroPage />
          </Card>
          <Card id={2} indexes={indexes}>
            <ExperiencePage />
          </Card>
          <Card id={3} indexes={indexes}>
            <ChatPage />
          </Card>
          <Card id={4} indexes={indexes}>
            <ContactPage />
          </Card>
        </div>
        <button className="btn-right" onClick={next}>
          <ArrowForwardIosIcon color="primary" />
        </button>
      </div>
      {/* <div className="content">
        <button className="btn-left" onClick={prev}>
          <ArrowBackIosNewIcon color="primary" />
        </button>
        <div className="cards">
          <Card id={1} indexes={indexes}>
            <IntroPage />
          </Card>
          <Card id={2} indexes={indexes}>
            <ExperiencePage />
          </Card>
          <Card id={3} indexes={indexes}>
            <ChatPage />
          </Card>
          <Card id={4} indexes={indexes}>
            <ContactPage />
          </Card>
        </div>
        <button className="btn-right" onClick={next}>
          <ArrowForwardIosIcon color="primary" />
        </button>
      </div> */}
    </div>
  );
}

export default App;
