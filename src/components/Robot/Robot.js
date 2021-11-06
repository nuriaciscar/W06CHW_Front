const Robot = ({ url, name }) => {
  return (
    <li className="robot">
      <img
        className="robot_image"
        src={url}
        width="100"
        height="100"
        alt="Robot"
      ></img>
      <h2 className="robot_name">{name}</h2>
      <div className="robot_features">
        <p className="robot_features_title">Features: </p>
        <ul className="robot_features_list">
          <li className="robot_features_item">Speed</li>
          <li className="robot_features_item">Stamina</li>
          <li className="robot_features_item">creationDate</li>
        </ul>
      </div>
      <button>DELETE</button>
      <button>CREATE</button>
    </li>
  );
};

export default Robot;
