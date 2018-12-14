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
        <form id='signup'>
          <div id='signupheader'>
            <h2 className='logo'>Highhand</h2>
            <h3 className='gray bold'>Sign up to see photos and videos
            from your friends.</h3>
          </div>
          <div id='or-divider'>
            <div className='line'></div>
            <h3 className='gray bold'> OR </h3>
            <div className='line'></div>
          </div>
          <input type="text" onChange={this.updateEmail} placeholder="Email"></input>
          <input type="password" onChange={this.updatePassword} placeholder="Password"></input>
          <button onClick={this.signUp}>
            Sign Up
          </button>
        </form>);

    }
}

export default SignUp;
