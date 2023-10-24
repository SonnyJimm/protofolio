const Card = ({ id, indexes, children }) => {
  const classNameBuilder = () => {
    let classes = "card ";
    if (indexes.current === id) {
      return classes + " active";
    }
    if (indexes.current > id) {
      return classes + "inactive-left";
    } else {
      return classes + "inactive-right";
    }
  };
  return (
    <div className={classNameBuilder()}>
      <div key={id} className="card-content">
        <div className="card-content-wrapper">{children}</div>
      </div>
      {id === indexes.current && (
        <div className="card-fader-group">
          <div className="card-fader"></div>
          <div className="card-fader"></div>
          <div className="card-fader"></div>
          <div className="card-fader"></div>
          <div className="card-fader"></div>
          <div className="card-fader"></div>
          <div className="card-fader"></div>
          <div className="card-fader"></div>
        </div>
      )}
    </div>
  );
};
export default Card;
