const Robot = () => {
  // const robot = {
  //   _id,
  //   name,
  //   url,
  //   features,
  //   speed,
  //   stamina,
  //   creationDate,
  // };

  return (
    <li className="robot">
      <image className="robot_image"></image>
      <h2 className="robot_name">Robot</h2>
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
