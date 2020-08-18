import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home/home";
import Korea from "../components/Korea/korea";

import "./syles.scss";

function Routes() {
  const [select, setSelect] = useState("start");

  return (
    <Router>
      <Switch>
        <Route path="/">
          {select === "start" ? (
            <div className="selectLang">
              <div className="korea" onClick={() => setSelect("korea")}>
                한국어
              </div>
              <div className="japan" onClick={() => setSelect("japan")}>
                日本語
              </div>
            </div>
          ) : (
            <></>
          )}

          {select === "korea" ? <Korea></Korea> : <></>}
          {select === "japan" ? <Home></Home> : <></>}
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
