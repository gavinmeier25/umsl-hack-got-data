import React, { Component } from "react";

import CompanyInfoCard from "../components/CompanyInfoCard";

export default class EmployeePro extends Component {
  render() {
    return (
      <>
        <CompanyInfoCard
          companyName="Perficient"
          position="Technical Consultant"
        />
      </>
    );
  }
}
