import React, { PureComponent } from "react";
import "./Step.css";

class Step extends PureComponent {
  render() {
    return (
      <div className="step">
        <div className="step__number">1</div>
        <div className="step__title">1</div>
      </div>
    );
  }
}

export default Step;
