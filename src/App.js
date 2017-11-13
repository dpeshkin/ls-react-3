import React, { Component } from "react";
import "./App.css";
import Step from "./Step";
import PersonalForm from "./PersonalForm";
import CardForm from "./CardForm";

const stepTitles = ["Personal information", "Card information", "Finish"];
let id = 0;
function getNewId() {
  id += 1;
  return id;
}
class App extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    isTimeOver: false
  };

  handleTabClick = () => {};

  handleChangeForm = () => {};

  handleClickNextForm = () => {};

  handleChangeTimeOver = () => {};

  isFormCommitable = () => {};

  renderForm = () => {};

  checkStep = () => {};

  render() {
    return (
      <div className="container">
        <ul className="tab-panel">
          {stepTitles.map((step, index) => (
            <li key={getNewId()}>
              <Step
                title={step}
                onClick={this.handleTabClick}
                isSelected={true}
                number={index + 1}
                isClickable={false}
              />
            </li>
          ))}
        </ul>
        <div className="form-content">
          <PersonalForm />
        </div>
        <div className="button-panel">
          <button className="button-next">Next</button>
        </div>
      </div>
    );
  }
}

export default App;
