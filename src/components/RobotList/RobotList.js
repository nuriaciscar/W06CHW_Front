import Robot from "../Robot/Robot";
import useRobots from "../../hooks/useRobots";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const RobotList = () => {
  const { robots, deleteRobots, loadRobots } = useRobots();
  const dispatch = useDispatch();
  const onDelete = (idRobot) => {
    deleteRobots(idRobot);
  };

  useEffect(() => {
    loadRobots();
  }, [dispatch, loadRobots]);

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <ul className="col">
            {robots.map((robot) => (
              <li key={robot._id}>
                <Robot
                  _id={robot._id}
                  url={robot.url}
                  name={robot.name}
                  speed={robot.features.speed}
                  stamina={robot.features.stamina}
                  creationDate={robot.features.creationDate}
                  onDeleteClick={onDelete}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RobotList;
