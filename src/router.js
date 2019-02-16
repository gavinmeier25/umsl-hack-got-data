import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import StudentPro from "./pages/StudentPro";
import EmployeePro from "./pages/EmployeePro";
import Feed from "./pages/Feed";
import Login from "./pages/Login";

const Router = () => {
  return (
      <BrowserRouter>
        <div className="view">
          <Switch>
            <Route exact path="/employeeprofile" component={EmployeePro} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/student" component={StudentPro} />
          </Switch>
        </div>
      </BrowserRouter>
  );
};

export default Router;
