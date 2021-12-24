import axios from "axios";
import store from "../store";
import * as actionTypes from "../../constants/actionTypes";

//fetch all countries
export function fetchAllCountriesLoading() {
  return {
    type: actionTypes.FETCH_COUNTRIES_LOADING,
    payload: null,
  };
}

// fetch all countries success
export function fetchAllCountriesSuccess(countries) {
  return {
    type: actionTypes.FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  };
}

// fetch all countries failure
export function fetchAllCountriesFailure(error) {
  return {
    type: actionTypes.FETCH_COUNTRIES_FAILURE,
    payload: error,
  };
}

export function fetchFilteredCountries(searchKeyWord) {
  return {
    type: actionTypes.FETCH_COUNTRIES_FILTER,
    payload: searchKeyWord,
  };
}

export function fetchRegionCountries(region) {
  return {
    type: actionTypes.FETCH_REGION_COUNTRIES_FILTER,
    payload: region,
  };
}
export function fetchSelectedCountry(country) {
  return {
    type: actionTypes.FETCH_SELECTED_COUNTRY,
    payload: country,
  };
}

export function fetchSelectedCountryFailure(error) {
  return {
    type: actionTypes.FETCH_SELECTED_COUNTRY_FAILURE,
    payload: error,
  };
}
