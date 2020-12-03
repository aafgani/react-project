import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      email: '',
      errors: [],
      showSecret:false
    };
    this.validateUsernameOnBlur = this.validateUsernameOnBlur.bind(this);
    this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this);
    this.validatePasswordConfirmationOnBlur =      this.validatePasswordConfirmationOnBlur.bind(this);
    this.validateEmailOnBlur = this.validateEmailOnBlur.bind(this);
  }
  displayForm() {
    return (
      <div>
        Username: <input type="text" onBlur={this.validateUsernameOnBlur} /><br />
        Password: <input type="text" onBlur={this.validatePasswordOnBlur} /><br />
        Password Confirmation: <input type="text" onBlur={this.validatePasswordConfirmationOnBlur} /><br />
        Email: <input type="text" onBlur={this.validateEmailOnBlur} /><br />
        <br />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
  validatePasswordConfirmationOnBlur(event){
    const passwordConfirmation = event.target.value;
    const errors = this.state.errors;
    if (passwordConfirmation !== this.state.password) {
      errors.push("Password must match password confirmation.");
    }
    this.setState({ passwordConfirmation, errors });
  }
  validateEmailFormat(fieldName, value) {
    let [lhs, rhs] = value.split('@');
    lhs = lhs || '';
    rhs = rhs || '';
    if (lhs.length <= 0 || rhs.length <= 0) {
      return `${fieldName} must be in a standard email format.`;
    }
  }
  validateEmailOnBlur(event){
    const email = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateEmailFormat("Email", email));
    this.setState({ email, errors });
  }
  validatePasswordOnBlur(event){
    const password = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Password", password));
    this.setState({ password, errors });
  }
  validateUsernameOnBlur (event) {
    const username = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Username", username));
    this.setState({ username, errors });
  }
  submitForm(event) {
    console.log("Submitting the form now...");
    console.log(event);
  }
  displayError(event){
    return(
      <div className="errors">
        {this.state.errors.map((err, i)=><p key={`err-${i}`}>{err}</p>)}
      </div>
    )
  }
  validateNotEmpty(fieldName, value){
    if (value.length <= 0) {
      return `${fieldName} must be filled out.`;
    }
  }
buttonSecret(){
  return(
    <div className="App">
      <button onClick={this.toggleSecretMessage.bind(this)}> Click to { this.state.showSecret ? "hide" : "show" } the secret message!</button>
      { this.state.showSecret ? this.secretMessage() : null }
    </div>
  )
}
secretMessage(){
  return (
    <div className="secret-message">
     I am the secret message!
    </div>
   )
}
toggleSecretMessage() {
  this.setState({
    showSecret: !this.state.showSecret
  });
}
  render() {
    return (
      <div className="App">
          Create Account
          {this.displayError()}
        <hr />
          {this.displayForm()}
          <hr/>
          {this.buttonSecret()}
      </div>
    )
  }

}

export default App;