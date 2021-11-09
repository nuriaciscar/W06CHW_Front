import axios from "axios";
import {
  deleteRobotsAction,
  loadRobotsAction,
} from "../actions/actionCreators";

// const urlApi = process.env.REACT_APP_URL_API;

// export const loadRobotsThunk = () => {
//   return async (dispatch) => {
//     const response = await fetch("https://app-robots2.herokuapp.com/robots");
//     const robots = await response.json();
//     dispatch(loadRobotsAction(robots));
//   };
// };

export const deleteRobotsThunk = (idRobot) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://app-robots2.herokuapp.com/robots/delete/${idRobot}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    await response.json();

    dispatch(deleteRobotsAction(idRobot));
  };
};

export const loadRobotsThunk = () => async (dispatch) => {
  const token = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_KEY)
  );

  const response = await axios.get("http://localhost:5000/robots", {
    headers: { Authorization: "Bearer " + token },
  });

  dispatch(loadRobotsAction(response.data));
};
