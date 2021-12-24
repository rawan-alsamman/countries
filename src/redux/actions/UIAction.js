import * as actionTypes from "../../constants/actionTypes";

//update the theme
export function updateTheme(theme) {
  return {
    type: actionTypes.UPDATE_THEME,
    payload: theme,
  };
}

//update the table or gird view
export function updateView(view) {
  return {
    type: actionTypes.TABLE_CARD_VIEW,
    payload: view,
  };
}
