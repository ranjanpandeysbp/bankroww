import {
  FETCHING_DATA,
  FETCH_ALL_BANKS_FAILURE,
  FETCH_ALL_BANKS_SUCCESS,
} from "../actionTypes/banks";

const initialState = {
  isLoading: true,
  bankList: [],
  isError: false,
  currentCity: "Mumbai",
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
      return {
        ...state,
        bankList: data,
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
    default:
      return state;
  }
};

export default BanksReducer;
