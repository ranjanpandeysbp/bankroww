import {
  FETCHING_DATA,
  FETCH_ALL_BANKS,
  FETCH_ALL_BANKS_FAILURE,
  FETCH_ALL_BANKS_SUCCESS,
} from "../actionTypes/banks";
export const fetchAllBanks = () => {
  return {
    type: FETCH_ALL_BANKS,
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
