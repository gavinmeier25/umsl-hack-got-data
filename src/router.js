import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Layout from './layout/Layout';
import StudentPro from "./pages/StudentPro";
import EmployeePro from "./pages/EmployeePro";
import Feed from "./pages/Feed";
import Login from "./pages/Login";

const Router = () => {
  return (
    <Layout>
      <BrowserRouter>
        <div className="view">
          <Switch>
            <Route exact path="/employee" component={EmployeePro} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/student" component={StudentPro} />
          </Switch>
        </div>
      </BrowserRouter>
    </Layout>
  );
};

export default Router;
