export const Options = ({ objeckt, valueReset, onClicks, total }) => {
  const isVisible = total > 0;
  const handleReset = () => {
    valueReset({ ...objeckt });
  };
  return (
    <div className="btn">
      <button onClick={() => onClicks('good')}>Good</button>
      <button onClick={() => onClicks('neutral')}>Neutral</button>
      <button onClick={() => onClicks('bad')}>Bad</button>
      {isVisible && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

