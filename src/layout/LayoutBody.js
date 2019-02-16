import React, { Component } from "react";

import styled from "styled-components";

class LayoutBody extends Component {
  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}

const StyledLayoutBody = styled(LayoutBody)`
  height: 100vh;
`;

export default StyledLayoutBody;
