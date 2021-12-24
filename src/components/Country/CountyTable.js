import { Card } from "react-bootstrap";
import { Table, Row, Form } from "react-bootstrap";
import "./country.css";
import { useDispatch, useSelector } from "react-redux";
import * as CountryAction from "../../redux/actions/CountryAction";
import { useNavigate } from "react-router-dom";
import * as constants from "../../constants/mainConstant";

const CountyTable = (props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  //dispatch action Select Country
  const selectCountry = (country) => {
    dispatch(CountryAction.fetchSelectedCountry(country));
    navigate(`/countries/${country.name.common}`);
  };

  //get currencies
  const getCurrencies = (country) => {
    let crn = "";
    if (country.currencies !== undefined) {
      Object.keys(country.currencies).map((crny, index) => {
        if (Object.keys(country.currencies).length - 1 === index) {
          crn = crn + country.currencies[crny].symbol?.toString();
        } else {
          crn = crn + country.currencies[crny].symbol?.toString() + " , ";
        }
      });
    }

    return crn;
  };

  return (
    <>
      {/* <CountryHeader /> */}
      <div className="countryTable">
        <Table
          style={{ overflow: "auto", display: "inline-table", layout: "auto" }}
        >
          <thead className="headerTable">
            <tr>
              <th></th>
              <th>Population</th>
              <th>Region</th>
              <th>Capital</th>
              <th>Country</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {props.countries.map((country) => (
              <tr
                key={country.cca2}
                onClick={() => {
                  selectCountry(country);
                }}
              >
                <td className="tabletd">
                  <img
                    style={{
                      width: "100%",
                      maxWidth: "60px",
                      minWidth: "40px",
                      height: "auto",
                      borderRadius: "5px",
                    }}
                    src={country.flags.png}
                  />
                </td>
                <td className="tabletd">{country.population}</td>
                <td className="tabletd">{country.region}</td>
                <td className="tabletd">{country.capital}</td>
                <td className="tabletd">{country.name.common}</td>
                <td className="tabletd">{getCurrencies(country)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default CountyTable;
