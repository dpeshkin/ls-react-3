import React, { PureComponent } from "react";
import "./Step.css";

class Step extends PureComponent {
  handleClick = () => {};
  render() {
    const { title, index } = this.props;
    return (
      <div className="step">
        <div className="step__number">{this.props.number}</div>
        <div className="step__title">{this.props.title}</div>
      </div>
    );
  }
}

export default Step;
