import React from "react";
import { connect } from "react-redux";
import Header from "../Header";
import UserHeader from "./UserHeader";
import CourseList from "./CourseList";

function Staff(props) {
  return (
    <React.Fragment>
      <Header />
      <UserHeader />
      <CourseList />
    </React.Fragment>
  );
}

export default connect(
  null,
  null
)(Staff);
