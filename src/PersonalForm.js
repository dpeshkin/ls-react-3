import React, { Component } from "react";
import Title from "./Title";
import "./PersonalForm.css";

export class PersonalForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleChangeForm = this.handleChangeForm.bind(this);
  // }
  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name, " ", value);
    onChangeForm(name, value);
  };
  render() {
    return (
      <div>
        <Title children="Персональная информация" />
        <div className="personal-form">
          <input
            type="text"
            name="firstName"
            placeholder="Ваше имя"
            onChange={this.handleChangeForm}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Ваша Фамилия"
            onChange={this.handleChangeForm}
          />
          <input
            type="email"
            name="email"
            placeholder="Электронная почта"
            onChange={this.handleChangeForm}
          />
        </div>
      </div>
    );
  }
}

export default PersonalForm;
