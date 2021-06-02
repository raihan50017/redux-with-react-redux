import React from "react";
import { decrement, increment } from "../store/actions/type";
import { connect } from "react-redux";
import Test from "./Test";

const Counter = ({ count, add, sub }) => {
  return (
    <div>
      <h4>
        <u>Counter</u>
      </h4>
      <p>Count value: {count}</p>
      <button onClick={() => add()}>Increment</button>
      <button onClick={() => sub()}>Decrement</button>
      <Test></Test>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch({ type: increment }),
    sub: () => dispatch({ type: decrement }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
