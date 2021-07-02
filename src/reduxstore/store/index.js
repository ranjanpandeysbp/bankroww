import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import BanksReducer from "../reducers/banks";

const sagas = function* sagas() {};
const rootReducer = combineReducers({
  banks: BanksReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

// Exports
export { store };
