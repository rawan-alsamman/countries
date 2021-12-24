import axios from "axios";
import React, { useEffect, useState } from "react";
import CountyCard from "../Country/CountyCard";
import CountyTable from "../Country/CountyTable";
import * as CountryAction from "../../redux/actions/CountryAction";
import { useDispatch, useSelector } from "react-redux";
import * as constants from "../../constants/mainConstant";
import { Row, Col, Container } from "react-bootstrap";
import ToggleButton from "../ToggleButton/Toggle";
import SearchBox from "../SearchBox/SearchBox";
import RegionFilter from "../RegionFilter/RegionFilter";

const CountryList = () => {
  //get the view value (table or card)
  const currentView = useSelector((state) => state.uiReducer.view);
  const ListLoading = currentView === constants.CARD ? CountyCard : CountyTable;

  //dispatch
  const dispatch = useDispatch();
  //get all countries
  const countries = useSelector((state) => state.countryReducer.countries);
  //get is loading value
  const isLoading = useSelector((state) => state.countryReducer.isLoading);

  // for filtered countries
  const [filteredCountries, setFilteredCountries] = useState(countries);

  //filter country by keyword, get the search key word
  const searchKeyword = useSelector(
    (state) => state.countryReducer.searchKeyWord
  );
  //filter country by region, get the selected region
  const region = useSelector((state) => state.countryReducer.region);

  //effect for filtering by region
  useEffect(() => {
    const _tempCountries = countries.filter((country) =>
      region !== ""
        ? country.region.toLowerCase() === region.toLowerCase()
        : country
    );
    setFilteredCountries(_tempCountries);
  }, [region, countries]);

  //effect for filtering by country searchKeyword
  useEffect(() => {
    const _tempCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setFilteredCountries(_tempCountries);
  }, [searchKeyword, countries]);

  // fetch countries data
  const fetchAllCountries = () => {
    if (countries.length === 0) {
      dispatch(CountryAction.fetchAllCountriesLoading());
      //axios call
      axios
        .get(`https://restcountries.com/v3.1/all`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          const countries = res.data;
          dispatch(CountryAction.fetchAllCountriesSuccess(countries));
        })
        .catch((err) => {
          dispatch(CountryAction.fetchAllCountriesFailure(err));
        });
    }
  };
  fetchAllCountries();

  //if it is not loading => render country component
  if (!isLoading)
    return (
      <div className="countrylist">
        <Row>
          <Col style={{ marginLeft: "15px" }}>
            <SearchBox></SearchBox>
          </Col>
          <Col xs={6} style={{ marginRight: "5px" }}></Col>
          <Col>
            <div
              style={{
                display: "flex",
                float: "left",
              }}
            >
              <ToggleButton onChange={() => ""}></ToggleButton>
              <RegionFilter></RegionFilter>
            </div>
          </Col>
        </Row>
        <Row>
          <ListLoading countries={filteredCountries} />
        </Row>
      </div>
    );

  //else showing Loading..
  return <p style={{ textAlign: "center", fontSize: "30px" }}>Loading ..</p>;
};
export default CountryList;
