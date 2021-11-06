import Robot from "../Robot/Robot";
import useRobots from "../../hooks/useRobots";

const RobotList = () => {
  const { robots } = useRobots();
  console.log("hola");
  return (
    <>
      <ul className>
        {robots.map((robot) => (
          <li>
            <Robot key={robot._id} {...robot} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotList;
