import { call, put, takeEvery } from "redux-saga/effects";
import { banksUrl, cityList } from "../../constants/banks";
import { fetchALlBanksSuccess, fetchAllBanksFailure } from "../action/banks";
import { FETCH_ALL_BANKS } from "../actionTypes/banks";

async function fetchAllBanks(params) {
  const { city } = params;
  const url = banksUrl(city);
  const res = await fetch(url);
  const banks = await res.json();
  console.log(banks);
  return banks;
}

function* fetchAllBanksSaga(params) {
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
