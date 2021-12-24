import * as actionTypes from "../../constants/actionTypes";
import * as constants from "../../constants/mainConstant";

const initiState = {
  theme: constants.LIGHT_THEME,
  view: constants.CARD,
};

export default function uiReducer(state = initiState, action) {
  switch (action.type) {
    // update the theme
    case actionTypes.UPDATE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case actionTypes.TABLE_CARD_VIEW:
      return {
        ...state,
        view: action.payload,
      };
    default:
      return state;
  }
}
