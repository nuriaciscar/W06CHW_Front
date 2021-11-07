const Robot = ({ url, name, features }) => {
  return (
    <div class="col">
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
        <h2 className="robot_name">{name}</h2>
        <div className="card-body">
          <p className="card-text">Features: </p>
          <ul className="robot_features_list">
            <li className="robot_features_item">Speed: {features.speed}</li>
            <li className="robot_features_item">Stamina:{features.stamina}</li>
            <li className="robot_features_item">
              Creation Date:{features.creationDate}
            </li>
          </ul>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">
              DELETE
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              CREATE
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Robot;
