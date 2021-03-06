import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import BanksReducer from "../reducers/banks";
import FavouriteReducer from "../reducers/favourites";
import { banksSaga } from "../sagas/banks";

const sagas = function* sagas() {
  yield* banksSaga();
};
const rootReducer = combineReducers({
  banks: BanksReducer,
  favourites: FavouriteReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

// Exports
export { store };
