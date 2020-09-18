// import React from "react";

// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dash";
import Review from "./components/profile";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Dashboard} />
          <Route exact path={"/:id"} component={Review} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
