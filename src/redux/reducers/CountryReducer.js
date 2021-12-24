import * as actionTypes from "../../constants/actionTypes";

const initiState = {
  countries: [],
  isLoading: true,
  error: "",
  searchKeyWord: "",
  region: "",
  selectedCountry: null,
};

export default function countryReducer(state = initiState, action) {
  switch (action.type) {
    // fetch country, loading true
    case actionTypes.FETCH_COUNTRIES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    //if fetching is successful
    case actionTypes.FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        countries: action.payload,
        error: "",
      };
    //if fetching has any errors
    case actionTypes.FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case actionTypes.FETCH_COUNTRIES_FILTER:
      return {
        ...state,
        isLoading: false,
        error: "",
        searchKeyWord: action.payload,
      };
    case actionTypes.FETCH_REGION_COUNTRIES_FILTER:
      return {
        ...state,
        isLoading: false,
        error: "",
        region: action.payload,
      };
    case actionTypes.FETCH_SELECTED_COUNTRY:
      return {
        ...state,
        isLoading: false,
        error: "",
        selectedCountry: action.payload,
      };
    default:
      return state;
  }
}
