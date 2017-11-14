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

  handleTabClick = step => {
    this.setState({ step });
  };

  handleChangeForm = (field, value) => {
    this.setState({ [field]: value });
  };

  handleClickNextForm = () => {
    const step = this.state.step;
    this.setState({ step: step + 1 });
  };

  handleChangeTimeOver = value => {
    this.setState({ isTimeOver: value });
  };

  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    switch (step) {
      case 1:
        if (
          firstName !== "" &&
          lastName !== "" &&
          email !== "" &&
          email.includes("@")
        )
          return true;
        break;
      case 2:
        if (cardNumber.length === 16) return true;
        break;
      default:
        return false;
    }
  };

  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    switch (step) {
      case 1:
        return (
          <PersonalForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 2:
        return (
          <CardForm
            cardNumber={cardNumber}
            onChangeForm={this.handleChangeForm}
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );
      case 3:
        return "Поздравляем!";
      default:
        return alert("Здесь должна быть форма");
    }
  };

  render() {
    const { step, isTimeOver } = this.state;

    return (
      <div className="container">
        <div className="tab-panel">
          {stepTitles.map((title, index) => (
            <Step
              key={title}
              onClick={this.handleTabClick}
              isSelected={index + 1 === step}
              number={index + 1}
              isClickable={index + 1 < step}
            >
              {title}
            </Step>
          ))}
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            disabled={!this.isFormCommitable() || isTimeOver}
            onClick={this.handleClickNextForm}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
