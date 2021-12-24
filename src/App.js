import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home></Home>
      </div>
      <Footer></Footer>
    </Provider>
  );
}

export default App;
