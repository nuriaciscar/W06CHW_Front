import Robot from "../Robot/Robot";
const RobotList = () => {
  return (
    <>
      <h1>My Robots</h1>
      <ul>
        <li key={robot.id}>
          <Robot />
        </li>
      </ul>
    </>
  );
};

export default RobotList;
