import { useState } from "react";

import Ellipsis from "./Ellipsis";

import "./App.css";

const App = () => {
  const [isEllipsisBig, setIsEllipsisBig] = useState(true);
  return (
    <div className="App">
      <button
        className="toggleButton"
        onClick={() => {
          setIsEllipsisBig(!isEllipsisBig);
        }}
      >
        Toggle container size
      </button>
      <Ellipsis isBig={isEllipsisBig} />
    </div>
  );
};

export default App;
