import React from "react";

import NavBar from "./NavBar";
import LayoutBody from "./LayoutBody";


const Layout = (props) => (
  <div>
    <NavBar />
    <LayoutBody>{props.children}</LayoutBody>
  </div>
);

export default Layout;
