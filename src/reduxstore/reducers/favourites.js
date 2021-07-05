import {
  ADD_TO_FAV,
  REMOVE_FROM_FAV,
  UPDATE_PAGE_FAV,
  UPDATE_SHOW_SIZE_FAV,
} from "../actionTypes/favourites";

const localFavs = localStorage.getItem("favs");
const localFavsIFSC = localStorage.getItem("favsIFSC");
const initialState = {
  favourites: localFavs ? JSON.parse(localFavs) : [],
  totalBanks: 0,
  currentPage: 1,
  showCount: 10,
  favIFSC: localFavsIFSC ? JSON.parse(localFavsIFSC) : [],
};

const FavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV: {
      const { data } = action;
      const localData = [...state.favourites, data];
      const localIFSC = [...state.favIFSC, data.ifsc];
      localStorage.setItem("favs", JSON.stringify(localData));
      localStorage.setItem("favsIFSC", JSON.stringify(localIFSC));
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
      localStorage.setItem("favs", JSON.stringify(deletedArray));
      localStorage.setItem("favsIFSC", JSON.stringify(deletedFavIFSC));
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
