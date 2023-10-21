import { useState } from "react";
import "./App.css";

function App() {
  const [indexes, setIndexes] = useState({
    current: 1,
    previous: 1,
  });
  const next = () => {
    if (indexes.current === 5) {
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
  return (
    <div className="app">
      <button onClick={prev}>prev</button>
      <div className="container">
        <Card id={1} indexes={indexes}>
          data 1
        </Card>
        <Card id={2} indexes={indexes}>
          data 2
        </Card>
        <Card id={3} indexes={indexes}>
          data 3
        </Card>
        <Card id={4} indexes={indexes}>
          data 4
        </Card>
        <Card id={5} indexes={indexes}>
          data 5
        </Card>
      </div>
      <button onClick={next}>next</button>
    </div>
  );
}
const Card = ({ id, indexes, children }) => {
  const classNameBuilder = () => {
    let classes = "cards ";
    if (indexes.current === id) {
      return classes + " active";
    }
    // if (indexes.previous === id) {
    //   if (indexes.current > id) {
    //     classes = classes + "fade-out-right ";
    //   } else {
    //     classes = classes + "fade-out-left ";
    //   }
    // }
    if (indexes.current > id) {
      return classes + "inactive-left";
    } else {
      return classes + "inactive-right";
    }
  };
  return (
    <>
      <div key={id} className={classNameBuilder()}>
        {children}
      </div>
    </>
  );
};

export default App;
