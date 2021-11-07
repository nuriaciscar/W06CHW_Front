import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRobotsThunk,
  loadRobotsThunk,
} from "../redux/thunks/robotsThunks";

const useRobots = () => {
  const robots = useSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const deleteRobots = useCallback(
    (idRobot) => {
      dispatch(deleteRobotsThunk(idRobot));
    },
    [dispatch]
  );

  return { robots, dispatch, loadRobots, deleteRobots };
};

export default useRobots;
