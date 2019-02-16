import React, { Component } from "react";

import StudentInfoCard from "../components/StudentInfoCard";
import ContactInfoCard from "../components/ContactInfoCard";

export default class StudentPro extends Component {
  render() {
    return (
      <>
        <ContactInfoCard
          lastName="Barth"
          firstName="Lucas"
          email="lucasrbarth@gmail.com"
          phone="(314) 422-7578"
        />
        <StudentInfoCard
          schoolName="University of Missouri - St. Louis"
          desiredField="Software Engineer"
          goals="Bacon ipsum dolor amet biltong porchetta shank jerky shankle ball tip pork loin. Beef ribs short ribs burgdoggen beef meatloaf pastrami sirloin jerky kielbasa ribeye venison filet mignon meatball porchetta tongue."
        />
      </>
    );
  }
}
