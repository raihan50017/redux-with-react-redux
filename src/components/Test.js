import React from "react";
import { connect } from "react-redux";

const Test = ({ count }) => {
  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(Test);
