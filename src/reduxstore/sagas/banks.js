import { call, put, takeEvery } from "redux-saga/effects";
import { banksUrl, cityList } from "../../constants/banks";
import {
  fetchALlBanksSuccess,
  fetchAllBanksFailure,
  fetchingData,
} from "../action/banks";
import { FETCH_ALL_BANKS } from "../actionTypes/banks";

async function fetchAllBanks(params) {
  const { city } = params;
  const url = banksUrl(city);
  const localData = localStorage.getItem(url);
  if (localData) {
    const bankLocal = JSON.parse(localData);
    return bankLocal;
  }
  const res = await fetch(url);
  const banks = await res.json();
  localStorage.setItem(url, JSON.stringify(banks));
  return banks;
}

function* fetchAllBanksSaga(params) {
  yield put(fetchingData());
  try {
    const data = yield call(fetchAllBanks, params);
    yield put(fetchALlBanksSuccess(data));
  } catch (e) {
    yield put(fetchAllBanksFailure());
  }
}

export function* banksSaga() {
  yield takeEvery(FETCH_ALL_BANKS, fetchAllBanksSaga);
}
