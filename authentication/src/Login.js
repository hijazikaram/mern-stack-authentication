import React, { Component } from 'react';
import './Login.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
class Login extends Component {
  constructor() {
    super();
    this.state = {
        email: '',
        password: ''
    }
} 
onChange = (e) => {
   const state = this.state;
   state[e.target.name] = e.target.value;
   this.setState(state);
} 
  render() {
    console.log(this.state);
    return (
      <div className="login">
          <h3>Login</h3>
          <FormControl fullWidth>
              <Input type="text" placeholder="karam@gmail.com" className="input" name="email" onChange={this.onChange}/>         
          </FormControl>
          <FormControl fullWidth>
              <Input type="password" placeholder="password" className="input" name="password" onChange={this.onChange}/>
          </FormControl>
          <div>
            <Button type="submit" variant="contained" color="primary" className="loginBtn">Login</Button>
          </div>
      </div>
    );
  }
}

export default Login;
