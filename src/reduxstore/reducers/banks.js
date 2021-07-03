import {
  FETCHING_DATA,
  FETCH_ALL_BANKS_FAILURE,
  FETCH_ALL_BANKS_SUCCESS,
  UPDATE_PAGE,
  UPDATE_SHOW_SIZE,
} from "../actionTypes/banks";

const initialState = {
  isLoading: true,
  bankList: [],
  favourites: [],
  listToShow: [],
  isError: false,
  currentCity: "Mumbai",
  totalBanks: 0,
  currentPage: 1,
  showCount: 10,
};

const BanksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_ALL_BANKS_SUCCESS: {
      const { data } = action;
      const toShow = data.slice(
        (state.currentPage - 1) * state.showCount,
        state.currentPage * state.showCount - 1
      );
      return {
        ...state,
        bankList: data,
        totalBanks: data.length,
        listToShow: toShow,
        isLoading: false,
      };
    }
    case FETCH_ALL_BANKS_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case UPDATE_PAGE: {
      const { page } = action;
      const toShow = state.bankList.slice(
        (page - 1) * state.showCount,
        page * state.showCount - 1
      );
      return {
        ...state,
        currentPage: page,
        listToShow: toShow,
      };
    }
    case UPDATE_SHOW_SIZE: {
      const { size } = action;
      const toShow = state.bankList.slice(
        (state.currentPage - 1) * size,
        state.currentPage * size - 1
      );
      return {
        ...state,
        listToShow: toShow,
        showCount: size,
      };
    }
    default:
      return state;
  }
};

export default BanksReducer;
