import "./Ellipsis.css";

const Ellipsis = ({ isBig }) => {
  return (
    <div className="ellipsisWrapper">
      <div className="indicators">
        <p>Visible</p>
        <p>Visible</p>
        <p>Visible</p>
        <p>Visible</p>
      </div>
      <div className="ellipsis" data-big={isBig}>
        <p>Something relatively short</p>
        <p>Something which is slightly longer</p>
        <p>Something very very very very very very very very long here</p>
        <div className="flex">
          <p>Something very very very long with something else on the side</p>
          <div className="fixed">Something else</div>
        </div>
      </div>
    </div>
  );
};

export default Ellipsis;
