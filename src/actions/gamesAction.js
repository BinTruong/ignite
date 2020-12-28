import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//! ACTION CREATOR

export const loadGames = () => async (dispatch) => {
  //? FETCH AXIOS
  const popularGamesData = await axios.get(popularGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const newGamesURLData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesURLData.data.results,
    },
  });
};
