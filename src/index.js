import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Search from "./Search";
import City from "./City";
import DateDescription from "./DateDescription";
import Icon from "./Icon";
import CurrentTemp from "./CurrentTemp";
import Conditions from "./Conditions";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div className="container">
        <div className="main">
          <Search />
          <City />
          <DateDescription />
          <div className="row todayResults">
            <div className="col-2">
              <Icon />
            </div>
            <div className="col-4 todayTemp">
              <CurrentTemp />
            </div>
            <div className="col-6">
              <Conditions />
            </div>
          </div>
          <div className="weatherForecast" id="forecast"></div>
        </div>
      </div>
      <Footer />
    </div>
  </StrictMode>
);
