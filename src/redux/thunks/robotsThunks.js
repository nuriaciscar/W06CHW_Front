import { loadRobotsAction } from "../actions/actionCreators";

// const urlApi = process.env.REACT_APP_URL_API;

export const loadRobotsThunk = () => async (dispatch) => {
  const response = await fetch("https://app-robots.herokuapp.com/robots");
  const robots = await response.json();
  dispatch(loadRobotsAction(robots));
};

export default loadRobotsThunk;
