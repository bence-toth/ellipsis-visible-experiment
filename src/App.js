import { useState } from "react";

import Ellipsis from "./Ellipsis";

import {
  useEllipsisVisibleWrapper,
  EllipsisVisibleWrapperWidthContext,
} from "./useEllipsisVisible";

import "./App.css";

const App = () => {
  const [isEllipsisBig, setIsEllipsisBig] = useState(true);

  const { wrapperRef, wrapperNodeWidth } = useEllipsisVisibleWrapper();

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
