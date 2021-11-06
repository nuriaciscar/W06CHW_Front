import Robot from "../Robot/Robot";
const RobotList = () => {
  return (
    <>
      <h1 className>My Robots</h1>
      <ul className>
        <li key={robot.id}>
          <Robot />
        </li>
      </ul>
    </>
  );
};

export default RobotList;
