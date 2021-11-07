const Robot = ({
  url,
  name,
  speed,
  stamina,
  creationDate,
  _id,
  onDeleteClick,
}) => {
  return (
    <li className="card shadow-sm">
      <img
        className="bd-placeholder-img card-img-top"
        src={url}
        width="100%"
        height="225"
        alt="Robot"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      ></img>
      <h2 className="fw-light text-center display-5">{name}</h2>
      <div className="card-body">
        <p className="card-text">Features: </p>
        <ul className="robot_features_list">
          <li className="robot_features_item">Speed: {speed}</li>
          <li className="robot_features_item">Stamina:{stamina}</li>
          <li className="robot_features_item">Creation Date:{creationDate}</li>
        </ul>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="btn-group">
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary m"
            onClick={() => onDeleteClick(_id)}
          >
            DELETE
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary disabled"
          >
            UPDATE
          </button>
        </div>
      </div>
    </li>
  );
};

export default Robot;
