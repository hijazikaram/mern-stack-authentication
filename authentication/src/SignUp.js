import React, { Component } from 'react';
import './SignUp.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
class SignUp extends Component {
   constructor() {
       super();
       this.state = {
           firstName: '',
           lastName: '',
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
      <div className="signUp-container">
        <h3>SignUp</h3>
        <FormControl fullWidth>
            <Input type="text" placeholder="First Name" className="input" name="firstName" onChange={this.onChange}/>         
        </FormControl>
        <FormControl fullWidth>
            <Input type="text" placeholder="Last Name" className="input" name="lastName" onChange={this.onChange}/>
        </FormControl>
        <FormControl fullWidth>
            <Input type="text" placeholder="Email" className="input" name="email" onChange={this.onChange}/>
        </FormControl>
        <FormControl fullWidth>
            <Input type="password" placeholder="password" className="input" name="Password" onChange={this.onChange}/>
        </FormControl>
        <div>
            <Button type="submit" variant="contained" color="primary" className="signUpBtn">SignUp</Button>
        </div>
      </div>
    );
  }
}

export default SignUp;
