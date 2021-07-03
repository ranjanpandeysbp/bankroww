import {
  FETCHING_DATA,
  FETCH_ALL_BANKS,
  FETCH_ALL_BANKS_FAILURE,
  FETCH_ALL_BANKS_SUCCESS,
} from "../actionTypes/banks";
export const fetchAllBanks = (city) => {
  console.log("here");
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
