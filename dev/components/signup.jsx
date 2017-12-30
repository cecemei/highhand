import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {email:'', password:''};
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  updateEmail(e){
    e.preventDefault();
    this.setState({email:e.currentTarget.value});
  }
  updatePassword(e){
    e.preventDefault();
    this.setState({password:e.currentTarget.value});
  }
  signUp(e){
    e.preventDefault();
    const {email, password} = this.state;
    this.props.signup({email, password});
  }
    render(){
      return (
        <form>
          <div>
            <label>
              Enter your email
            </label>
            <input type="text" onChange={this.updateEmail}></input>
          </div>
          <div>
            <label>
              Enter the password
            </label>
            <input type="password" onChange={this.updatePassword}></input>
          </div>
          <div>
            <button onClick={this.signUp}>
              Create an Account!
            </button>
          </div>
        </form>);

    }
}

export default SignUp;
