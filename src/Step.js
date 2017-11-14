import React, { PureComponent } from "react";
import "./Step.css";

class Step extends PureComponent {
  handleClick = () => {
    const { isClickable, onClick, number } = this.props;
    isClickable ? onClick(number) : null;
  };

  render() {
    const { isSelected, isClickable, number } = this.props;
    return (
      <div
        className={
          "step" +
          (isSelected ? " step-selected" : "") +
          (isClickable ? " step-clickable" : "")
        }
        onClick={this.handleClick}
      >
        <div className="step__number">{number}</div>
        <div className="step__title">{this.props.children}</div>
      </div>
    );
  }
}

export default Step;
