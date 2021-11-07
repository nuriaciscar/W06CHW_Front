import useRobots from "../../hooks/useRobots";

const Robot = ({ url, name, speed, stamina, creationDate, idRobot }) => {
  const { deleteRobots } = useRobots();

  const deleteOnClick = () => {
    deleteRobots(idRobot);
  };

  return (
    <div className="col">
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
            <li className="robot_features_item">Speed: {speed}</li>
            <li className="robot_features_item">Stamina:{stamina}</li>
            <li className="robot_features_item">
              Creation Date:{creationDate}
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              onClick={deleteOnClick}
            >
              DELETE
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              UPDATE
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Robot;
