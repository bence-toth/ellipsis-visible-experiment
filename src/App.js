import { useState } from "react";

import Ellipsis from "./Ellipsis";

import "./App.css";

const App = () => {
  const [isEllipsisBig, setIsEllipsisBig] = useState(true);
  return (
    <div className="App" data-big={isEllipsisBig}>
      <button
        className="toggleButton"
        onClick={() => {
          setIsEllipsisBig(!isEllipsisBig);
        }}
      >
        Toggle container size
      </button>
      <div className="ellipsisWrapper" data-big={isEllipsisBig}>
        <Ellipsis />
      </div>
    </div>
  );
};

export default App;
