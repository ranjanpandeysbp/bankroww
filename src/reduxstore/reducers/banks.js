import {
  CHANGE_CATEGORY,
  FETCHING_DATA,
  FETCH_ALL_BANKS_FAILURE,
  FETCH_ALL_BANKS_SUCCESS,
  SEARCH_BANKS,
  UPDATE_PAGE,
  UPDATE_SHOW_SIZE,
} from "../actionTypes/banks";

const initialState = {
  isLoading: true,
  bankList: [],
  toChangeBankList: [],
  favourites: [],
  listToShow: [],
  isError: false,
  currentCity: "Mumbai",
  totalBanks: 0,
  currentPage: 1,
  showCount: 10,
  searchCriteria: "bank_name",
};

const BanksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA: {
      return {
        ...state,
        totalBanks: 0,
        currentPage: 1,
        isLoading: true,
      };
    }
    case FETCH_ALL_BANKS_SUCCESS: {
      const { data } = action;
      const toShow = data.slice(
        (state.currentPage - 1) * state.showCount,
        state.currentPage * state.showCount
      );
      return {
        ...state,
        currentCity: toShow[0].city,
        bankList: data,
        toChangeBankList: data,
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
      const toShow = state.toChangeBankList.slice(
        (page - 1) * state.showCount,
        page * state.showCount
      );
      return {
        ...state,
        currentPage: page,
        listToShow: toShow,
      };
    }
    case UPDATE_SHOW_SIZE: {
      const { size } = action;
      const toShow = state.toChangeBankList.slice(
        (state.currentPage - 1) * size,
        state.currentPage * size
      );
      return {
        ...state,
        listToShow: toShow,
        showCount: size,
      };
    }
    case SEARCH_BANKS: {
      const { query } = action;
      const toSearch = query.toUpperCase();
      const res = state.bankList.filter((bank) =>
        bank[state.searchCriteria].includes(toSearch)
      );
      const toShow = res.slice(0, state.showCount);
      return {
        ...state,
        listToShow: toShow,
        toChangeBankList: res,
        totalBanks: res.length,
        currentPage: 1,
      };
    }
    case CHANGE_CATEGORY: {
      const { category } = action;
      const toShow = state.bankList.slice(0, state.showCount);
      return {
        ...state,
        searchCriteria: category,
        toChangeBankList: state.bankList,
        listToShow: toShow,
      };
    }
    default:
      return state;
  }
};

export default BanksReducer;
