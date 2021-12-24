import React from "react";
import { useDispatch } from "react-redux";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import "./regionfilter.css";
import * as CountryAction from "../../redux/actions/CountryAction";
import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";

const RegionFilter = () => {
  //assign the init selected dropDown value
  const [dropDownValue, setSelected] = useState("Filter by region");

  const dispatch = useDispatch();

  //handle region change
  const changeValue = (region) => {
    setSelected(region);
    dispatch(CountryAction.fetchAllCountriesLoading());
    dispatch(
      CountryAction.fetchRegionCountries(region === "All" ? "" : region)
    );
  };

  return (
    <div className="dropdown">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">{dropDownValue}</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={(e) => changeValue(e.target.textContent)}>
            All
          </Dropdown.Item>
          <Dropdown.Item onClick={(e) => changeValue(e.target.textContent)}>
            Africa
          </Dropdown.Item>

          <Dropdown.Item onClick={(e) => changeValue(e.target.textContent)}>
            Americas
          </Dropdown.Item>
          <Dropdown.Item onClick={(e) => changeValue(e.target.textContent)}>
            Asia
          </Dropdown.Item>
          <Dropdown.Item onClick={(e) => changeValue(e.target.textContent)}>
            Europe
          </Dropdown.Item>
          <Dropdown.Item onClick={(e) => changeValue(e.target.textContent)}>
            Oceania
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default RegionFilter;
