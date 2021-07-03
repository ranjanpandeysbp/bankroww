import {
  CHANGE_CATEGORY,
  FETCHING_DATA,
  FETCH_ALL_BANKS,
  FETCH_ALL_BANKS_FAILURE,
  FETCH_ALL_BANKS_SUCCESS,
  SEARCH_BANKS,
  UPDATE_PAGE,
  UPDATE_SHOW_SIZE,
} from "../actionTypes/banks";
export const fetchAllBanks = (city) => {
  return {
    type: FETCH_ALL_BANKS,
    city,
  };
};

export const fetchALlBanksSuccess = (data) => {
  return {
    type: FETCH_ALL_BANKS_SUCCESS,
    data,
  };
};

export const fetchAllBanksFailure = (error) => {
  return {
    type: FETCH_ALL_BANKS_FAILURE,
    error,
  };
};

export const fetchingData = () => {
  return {
    type: FETCHING_DATA,
  };
};

export const updateShowSize = (size) => {
  return {
    type: UPDATE_SHOW_SIZE,
    size,
  };
};

export const updatePage = (page) => {
  return {
    type: UPDATE_PAGE,
    page,
  };
};

export const changeCategory = (cat) => {
  return {
    type: CHANGE_CATEGORY,
    cat,
  };
};

export const searchBanks = (query) => {
  return {
    type: SEARCH_BANKS,
    query,
  };
};
