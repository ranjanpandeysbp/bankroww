import {
  ADD_TO_FAV,
  REMOVE_FROM_FAV,
  UPDATE_PAGE_FAV,
  UPDATE_SHOW_SIZE_FAV,
} from "../actionTypes/favourites";

const initialState = {
  favourites: [],
  totalBanks: 0,
  currentPage: 1,
  showCount: 10,
  favIFSC: [],
};

const FavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV: {
      const { data } = action;
      return {
        ...state,
        favourites: [...state.favourites, data],
        favIFSC: [...state.favIFSC, data.ifsc],
      };
    }
    case REMOVE_FROM_FAV: {
      const { data } = action;
      const deletedArray = state.favourites.filter(
        (item) => item.ifsc !== data.ifsc
      );
      const deletedFavIFSC = state.favIFSC.filter((item) => item !== data.ifsc);
      return {
        ...state,
        favourites: deletedArray,
        favIFSC: deletedFavIFSC,
      };
    }
    case UPDATE_PAGE_FAV: {
      const { page } = action;

      return {
        ...state,
        currentPage: page,
      };
    }
    case UPDATE_SHOW_SIZE_FAV: {
      const { size } = action;

      return {
        ...state,

        showCount: size,
      };
    }
    default:
      return state;
  }
};

export default FavouriteReducer;
