import { Col, Row, Container, Form } from "react-bootstrap";
import "./countrydetails.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as CountryAction from "../../redux/actions/CountryAction";
import axios from "axios";
import { useParams } from "react-router";

const CountyDetails = () => {
  //dispatch
  const dispatch = useDispatch();
  //get selected country
  const country = useSelector((state) => state.countryReducer.selectedCountry);
  //get is loading value
  const isLoading = useSelector((state) => state.countryReducer.isLoading);

  //get country name from path
  const { name } = useParams();

  // fetch selected country data if the ngrx store is null
  //this is if the user write the country name in the path manually (not selected from the list)
  const fetchCountry = () => {
    if (country === null) {
      //axios call
      axios
        .get(`https://restcountries.com/v3.1/name/${name}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          const ctry = res.data;
          dispatch(CountryAction.fetchSelectedCountry(ctry[0]));
        })
        .catch((err) => {
          dispatch(CountryAction.fetchSelectedCountryFailure(err));
        });
    }
  };
  fetchCountry();

  //back to home => assign selected country to null
  const back = () => {
    dispatch(CountryAction.fetchSelectedCountry(null));
  };

  //get language
  const getLan = (country) => {
    let lang = "";
    Object.keys(country.languages).map((lan, index) => {
      if (Object.keys(country.languages).length - 1 === index) {
        lang = lang + country.languages[lan].toString();
      } else {
        lang = lang + country.languages[lan] + ", ";
      }
    });
    return lang;
  };

  //get currencies
  const getCurrencies = (country) => {
    let crn = "";
    if (country.currencies !== undefined) {
      Object.keys(country.currencies).map((crny, index) => {
        if (Object.keys(country.currencies).length - 1 === index) {
          crn = crn + country.currencies[crny].name?.toString();
        } else {
          crn = crn + country.currencies[crny].name?.toString() + " , ";
        }
      });
    }
    return crn;
  };

  //get borders
  const getTLD = (country) => {
    let tlds = "";
    if (country.tld !== undefined) {
      country.tld.map((t, index) => {
        if (country.tld.length - 1 === index) {
          tlds = tlds + t?.toString();
        } else {
          tlds = tlds + t?.toString() + " , ";
        }
      });
    }
    return tlds;
  };

  if (!isLoading)
    return (
      <Container className="container">
        <Row>
          <Link
            to="/"
            style={{ float: "left", width: "10rem", margin: "12px" }}
            className="btn btn-light"
            onClick={() => {
              back();
            }}
          >
            <i className="fas fa-arrow-left"></i> Back Home
          </Link>
        </Row>
        <Row>
          <Col md="4" style={{ alignSelf: "center" }}>
            <img
              className="imgCol"
              src={country.flags.png}
              alt={country.name.common}
            />
          </Col>

          <Col md="8">
            <Row xs={1} md={2} className="detailsCol">
              <Col>
                <h1 className="left">{country.name.common}</h1>
              </Col>
            </Row>
            <Row className="detailsCol">
              <Col>
                <h6 className="left">Native Name:&nbsp;</h6>
                <h6 className="right">{country.name.common}</h6>
              </Col>
              <Col>
                <h6 className="left">Top Level Domain:&nbsp;</h6>
                <h6 className="right">{getTLD(country)}</h6>
              </Col>
            </Row>
            <Row className="detailsCol">
              <Col>
                <h6 className="left">Population:&nbsp;</h6>
                <h6 className="right">
                  {country.population.toLocaleString("en")}
                </h6>
              </Col>
              <Col>
                <h6 className="left">Currencies:&nbsp;</h6>
                <h6 className="right">{getCurrencies(country)}</h6>
              </Col>
            </Row>
            <Row className="detailsCol">
              <Col>
                <h6 className="left">Region:&nbsp;</h6>
                <h6 className="right">{country.region}</h6>
              </Col>
              <Col>
                <h6 className="left">Languages:&nbsp;</h6>
                <h6 className="right">{getLan(country)}</h6>
              </Col>
            </Row>
            <Row className="detailsCol">
              <Col>
                <h6 className="left">Sub-region:&nbsp;</h6>
                <h6 className="right">{country.subregion}</h6>
              </Col>
            </Row>
            <Row className="detailsCol">
              <Col>
                <h6 className="left">Capital:&nbsp;</h6>{" "}
                <h6 className="right">{country.capital}</h6>
              </Col>
            </Row>
            <Row></Row>
            <Row className="detailsCol">
              <Col>
                <h6 className="left">Border Countries:&nbsp;</h6>{" "}
                <h6 style={{ float: "left" }}>
                  {country.borders?.map((border) => (
                    <button
                      key={border}
                      className="btn btn-secondary disabled"
                      style={{
                        marginRight: "5px",
                        minWidth: "80px",
                        maxHeight: "30px",
                        minHeight: "20px",
                        height: "30px",
                        lineHeight: "30px",
                        padding: "0px",
                      }}
                    >
                      {border}
                    </button>
                  ))}
                </h6>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  return <p style={{ textAlign: "center", fontSize: "30px" }}>Loading ..</p>;
};

export default CountyDetails;
