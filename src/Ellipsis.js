import { useEllipsisVisible } from "react-hook-text-overflow";

import "./Ellipsis.css";

const Ellipsis = () => {
  const [isEllipsisVisible1, ellipsisVisibleRef1] = useEllipsisVisible();
  const [isEllipsisVisible2, ellipsisVisibleRef2] = useEllipsisVisible();
  const [isEllipsisVisible3, ellipsisVisibleRef3] = useEllipsisVisible();
  const [isEllipsisVisible4, ellipsisVisibleRef4] = useEllipsisVisible();
  return (
    <>
      <div className="indicators">
        <p>{isEllipsisVisible1 ? "Overflows" : "Visible"}</p>
        <p>{isEllipsisVisible2 ? "Overflows" : "Visible"}</p>
        <p>{isEllipsisVisible3 ? "Overflows" : "Visible"}</p>
        <p>{isEllipsisVisible4 ? "Overflows" : "Visible"}</p>
      </div>
      <div className="ellipsis">
        <p ref={ellipsisVisibleRef1}>Something relatively short</p>
        <p ref={ellipsisVisibleRef2}>Something which is slightly longer</p>
        <p ref={ellipsisVisibleRef3}>
          Something very very very very very very very very long here
        </p>
        <div className="flex">
          <p ref={ellipsisVisibleRef4}>
            Something very long with something else on the side
          </p>
          <div className="fixed">Something else</div>
        </div>
      </div>
    </>
  );
};

export default Ellipsis;
