import Robot from "../Robot/Robot";
import useRobots from "../../hooks/useRobots";

const RobotList = () => {
  const { robots } = useRobots();

  return (
    <>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <ul className>
              {robots.map((robot) => (
                <li key={robot._id}>
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
