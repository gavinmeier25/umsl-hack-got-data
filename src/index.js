import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import "./styles/index.css";
import theme from "./styles/theme/theme";
import Router from "./router";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router />
      </div>
    </MuiThemeProvider>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
