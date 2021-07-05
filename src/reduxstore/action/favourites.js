import {
  ADD_TO_FAV,
  REMOVE_FROM_FAV,
  UPDATE_PAGE_FAV,
  UPDATE_SHOW_SIZE_FAV,
} from "../actionTypes/favourites";

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

export const updateShowSizeFav = (size) => {
  return {
    type: UPDATE_SHOW_SIZE_FAV,
    size,
  };
};

export const updatePageFav = (page) => {
  return {
    type: UPDATE_PAGE_FAV,
    page,
  };
};
