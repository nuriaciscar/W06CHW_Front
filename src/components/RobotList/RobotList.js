import Robot from "../Robot/Robot";
import useRobots from "../../hooks/useRobots";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const RobotList = () => {
  const { robots, loadRobots } = useRobots();

  const dispatch = useDispatch();

  useEffect(() => {
    loadRobots();
  }, [dispatch, loadRobots]);

  return (
    <>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <ul className>
              {robots.map((robot) => (
                <li key={robot.idRobot}>
                  <Robot
                    url={robot.url}
                    name={robot.name}
                    speed={robot.features.speed}
                    stamina={robot.features.stamina}
                    creationDate={robot.features.creationDate}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RobotList;
