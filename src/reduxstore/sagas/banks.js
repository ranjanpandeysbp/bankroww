import { call, put, takeEvery } from "redux-saga/effects";
import { banksUrl, cityList } from "../../constants/banks";
import { fetchALlBanksSuccess, fetchAllBanksFailure } from "../action/banks";
import { FETCH_ALL_BANKS } from "../actionTypes/banks";

async function fetchAllBanks() {
  const cities = cityList;
  let tempData = [];
  for (let i = 0; i < cities.length; i++) {
    const url = banksUrl(cities[i]);
    const res = await fetch(url);
    const banks = await res.json();
    tempData = tempData.concat(banks);
  }
  return tempData;
}

function* fetchAllBanksSaga() {
  try {
    const data = yield call(fetchAllBanks);
    yield put(fetchALlBanksSuccess(data));
  } catch (e) {
    yield put(fetchAllBanksFailure());
  }
}

export function* banksSaga() {
  yield takeEvery(FETCH_ALL_BANKS, fetchAllBanksSaga);
}
