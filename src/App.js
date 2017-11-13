import React, { Component } from "react";
import "./App.css";
import Step from "./Step";
import PersonalForm from "./PersonalForm";
import CardForm from "./CardForm";

const stepTitles = ["Personal information", "Card information", "Finish"];

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

  render() {
    return (
      <div className="container">
        <ul className="tab-panel">
          <li>
            <Step />
          </li>
          <li>
            <Step />
          </li>
          <li>
            <Step />
          </li>
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
