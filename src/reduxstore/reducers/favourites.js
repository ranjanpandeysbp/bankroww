import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actionTypes/favourites";

const initialState = {
  favourites: [],
  totalBanks: 0,
  currentPage: 1,
  showCount: 10,
};

const FavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV: {
      const { data } = action;
      return {
        ...state,
        favourites: [...state.favourites, data],
      };
    }
    case REMOVE_FROM_FAV: {
      const { data } = action;
      const deletedArray = state.favourites.filter(
        (item) => item.ifsc !== data.ifsc
      );
      return {
        ...state,
        favourites: deletedArray,
      };
    }
    default:
      return state;
  }
};

export default FavouriteReducer;
