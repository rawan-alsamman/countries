import React from "react";
import { useDispatch } from "react-redux";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import "./searchbox.css";
import * as CountryAction from "../../redux/actions/CountryAction";
import { useSelector } from "react-redux";
import axios from "axios";

const SearchBox = () => {
  const dispatch = useDispatch();
  //for assign the previous search key value
  const prevValue = useSelector((state) => state.countryReducer.searchKeyWord);

  //handle input change
  const inputChange = (e) => {
    dispatch(CountryAction.fetchAllCountriesLoading());
    dispatch(CountryAction.fetchFilteredCountries(e));
  };

  return (
    <div className="searchbox">
      <Input
        onChange={(e) => {
          inputChange(e.target.value);
        }}
        value={prevValue}
        placeholder="Search for a country"
        disableUnderline={true}
      />
      <SearchIcon />
    </div>
  );
};

export default SearchBox;
