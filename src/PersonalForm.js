import React, { Component } from "react";
import Title from "./Title";
import "./PersonalForm.css";

export class PersonalForm extends Component {
  handleChangeForm = () => {};
  render() {
    return (
      <div>
        <Title children="Персональная информация" />
        <div className="personal-form">
          <input type="text" name="firstName" placeholder="Ваше имя" />
          <input type="text" name="lastName" placeholder="Ваша Фамилия" />
          <input type="email" name="email" placeholder="Электронная почта" />
        </div>
      </div>
    );
  }
}

export default PersonalForm;
