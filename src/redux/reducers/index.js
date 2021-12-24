import { combineReducers } from "redux";
import countryReducer from "./CountryReducer";
import uiReducer from "./UIReducer";

const reducers = combineReducers({
  countryReducer: countryReducer,
  uiReducer: uiReducer,
});
export default reducers;
