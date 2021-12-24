import { Card } from "react-bootstrap";
import { Col, Row, Form } from "react-bootstrap";
import "./country.css";
import { Link } from "react-router-dom";
import * as CountryAction from "../../redux/actions/CountryAction";
import { useDispatch, useSelector } from "react-redux";
import * as constants from "../../constants/mainConstant";

const CountyCard = ({ countries }) => {
  const dispatch = useDispatch();

  //dispatch action Select Country
  const selectCountry = (country) => {
    dispatch(CountryAction.fetchSelectedCountry(country));
  };

  return (
    <>
      {/* <CountryHeader /> */}
      <div className="countryCardlist">
        {countries.map((country) => (
          <Link
            to={`/countries/${country.name.common}`}
            key={country.cca2}
            onClick={() => {
              selectCountry(country);
            }}
          >
            <Card
              className="card"
              style={{
                width: "18rem",
                height: "100%",
                borderRadius: "5px",
              }}
              key={country.cca2}
            >
              <Card.Img
                style={{
                  objectFit: "cover",
                  height: "100%",
                  maxHeight: "180px",
                }}
                src={country.flags.png}
              />
              <Card.Body>
                <Card.Title>{country.name.common}</Card.Title>
                <Card.Text>
                  <div>
                    <Row>Population: {country.population}</Row>
                    <Row>Region: {country.region}</Row>
                    <Row>Capital: {country.capital}</Row>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CountyCard;
