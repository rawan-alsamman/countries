import CountryList from "../CountryList/CountryList";
import Header from "../Header/Header";
import "./home.css";
import CountyDetails from "../CountryDetails/CountyDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  //get the view value (table or card)
  const currentView = useSelector((state) => state.uiReducer.view);

  return (
    <>
      <Header
        title={
          currentView === "CARD"
            ? "Countries Card View"
            : "Countries Table View"
        }
      ></Header>
      <div className="main">
        <Router>
          <Routes>
            <Route exact path="/" element={<CountryList />} />
            <Route element={<CountyDetails />} path="/countries/:name"></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default Home;
