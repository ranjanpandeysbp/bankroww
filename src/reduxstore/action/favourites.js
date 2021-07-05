import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actionTypes/favourites";

export const addToFav = (data) => {
  console.log("Add");
  return {
    type: ADD_TO_FAV,
    data,
  };
};

export const removeFromFav = (data) => {
  console.log("Remove");
  return {
    type: REMOVE_FROM_FAV,
    data,
  };
};
