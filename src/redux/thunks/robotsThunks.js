import {
  deleteRobotsAction,
  loadRobotsAction,
} from "../actions/actionCreators";

// const urlApi = process.env.REACT_APP_URL_API;

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const response = await fetch("https://app-robots2.herokuapp.com/robots");
    const robots = await response.json();
    dispatch(loadRobotsAction(robots));
  };
};

export const deleteRobotsThunk = (idRobot) => async (dispatch) => {
  const response = await fetch(
    `https://app-robots2.herokuapp.com/robots/delete/:${idRobot}`,
    {
      method: "DELETE",
    }
  );
  await response.json();

  dispatch(deleteRobotsAction(idRobot));
};
