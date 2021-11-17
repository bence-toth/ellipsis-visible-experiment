import React, { useState, useCallback, useContext, useEffect } from "react";

const EllipsisVisibleWrapperWidthContext = React.createContext();

const useEllipsisVisibleWrapper = () => {
  const [wrapperNode, setWrapperNode] = useState(null);
  const [wrapperNodeWidth, setWrapperNodeWidth] = useState(null);

  const wrapperRef = useCallback((node) => {
    setWrapperNode(node);
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentBoxSize) {
          // Firefox implements `contentBoxSize` as a single content rect, rather than an array
          const contentBoxSize = Array.isArray(entry.contentBoxSize)
            ? entry.contentBoxSize[0]
            : entry.contentBoxSize;
          setWrapperNodeWidth(contentBoxSize.inlineSize);
        }
      }
    });
    if (wrapperNode instanceof HTMLElement) {
      resizeObserver.observe(wrapperNode);
    }
    return () => {
      if (wrapperNode instanceof HTMLElement) {
        resizeObserver.unobserve(wrapperNode);
      }
    };
  }, [wrapperNode]);

  return { wrapperNodeWidth, wrapperRef };
};

const useEllipsisVisible = () => {
  const wrapperNodeWidth = useContext(EllipsisVisibleWrapperWidthContext);

  useEffect(() => {
    console.log(wrapperNodeWidth);
  }, [wrapperNodeWidth]);
};

export {
  useEllipsisVisibleWrapper,
  EllipsisVisibleWrapperWidthContext,
  useEllipsisVisible,
};
