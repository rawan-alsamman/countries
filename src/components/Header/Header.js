import "./header.css";
import { FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import * as UIAction from "../../redux/actions/UIAction";
import * as constants from "../../constants/mainConstant";

const Header = ({ title }) => {
  //get the current theme
  const currentTheme = useSelector((state) => state.uiReducer.theme);
  const dispatch = useDispatch();

  //change the theme
  const changeTheme = () => {
    if (currentTheme === constants.DARK_THEME) {
      dispatch(UIAction.updateTheme(constants.LIGHT_THEME));
    } else {
      dispatch(UIAction.updateTheme(constants.DARK_THEME));
    }

    const countryCardlist = document.querySelector(".countryCardlist");
    countryCardlist?.classList.toggle("dark");

    const main = document.querySelector(".main");
    main?.classList.toggle("dark");

    const header = document.querySelector(".header");
    header?.classList.toggle("dark");

    const App = document.querySelector(".App");
    App?.classList.toggle("dark");

    const searchbox = document.querySelector(".searchbox");
    searchbox?.classList.toggle("dark");

    const title = document.querySelector(".title");
    title?.classList.toggle("dark");

    const countryTable = document.querySelector(".countryTable");
    countryTable?.classList.toggle("dark");

    const tabletd = document.querySelectorAll(".tabletd");
    tabletd?.forEach((td) => {
      td.classList.toggle("dark");
    });

    const left = document.querySelectorAll(".left");
    left?.forEach((l) => {
      l?.classList.toggle("dark");
    });

    const right = document.querySelectorAll(".right");
    right?.forEach((r) => {
      r?.classList.toggle("dark");
    });

    const card = document.querySelectorAll(".card");
    card?.forEach((c) => {
      c?.classList.toggle("dark");
    });
  };

  return (
    <>
      <header className="header">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="themeDiv">
          <button className="themeBtn" size="sm" onClick={(e) => changeTheme()}>
            <FaMoon style={{ margin: "5px" }} />
            {currentTheme === constants.DARK_THEME ? "Light mood" : "Dark mood"}
          </button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {
  title: "Countries Card View",
};

export default Header;
