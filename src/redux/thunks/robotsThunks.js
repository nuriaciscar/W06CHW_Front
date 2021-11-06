import { loadRobotsAction } from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_URL_API;

export const loadRobotsThunk = () => async (dispatch) => {
  const response = await fetch(urlApi);
  const robots = await response.json();
  dispatch(loadRobotsAction(robots));
};

export default loadRobotsThunk;
