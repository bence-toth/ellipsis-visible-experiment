import { useState } from "react";
import {
  useEllipsisVisibleWrapper,
  EllipsisVisibleWrapperWidthContext,
} from "react-hook-text-overflow";

import Ellipsis from "./Ellipsis";

import "./App.css";

const App = () => {
  const [isEllipsisBig, setIsEllipsisBig] = useState(true);

  const [wrapperNodeWidth, wrapperRef] = useEllipsisVisibleWrapper();

  return (
    <div className="App" data-big={isEllipsisBig} ref={wrapperRef}>
      <button
        className="toggleButton"
        onClick={() => {
          setIsEllipsisBig(!isEllipsisBig);
        }}
      >
        Toggle container size
      </button>
      <div className="ellipsisWrapper" data-big={isEllipsisBig}>
        <EllipsisVisibleWrapperWidthContext.Provider value={wrapperNodeWidth}>
          <Ellipsis />
        </EllipsisVisibleWrapperWidthContext.Provider>
      </div>
    </div>
  );
};

export default App;
