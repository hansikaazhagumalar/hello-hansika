import React, { useState, createContext, useContext, Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import useAuth from "../hooks/useAuth";
import AuthContext from '../context/AuthProvider';
import App from '../App';
import { Navigate } from 'react-router-dom';

export  class Signin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userProfileResponse: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit = async (event) =>  {

    event.preventDefault();
    var data = { "username": this.state.username, "password": this.state.password };

    try {
      const response = await axios.post('http://localhost:5000/login', 
        data,
        {
          Headers: {'Content-Type' : 'application/json'},
          withCredentials: false
        }
      );
      if (response.status == 200) {
        console.log(response);
        console.log(response?.data);
        this.setState({ userProfileResponse: response?.data });
        localStorage.removeItem('username');
        localStorage.setItem('username', response?.data?.username);

      } else {
        console.log("Error");
        this.setState({ userProfileResponse: {"message" : "invalid user"} });
      }

    } catch(err) {
      console.log(err);
    }
  }

  render() {

    const { userProfileResponse } = this.state;

    return( 
      <div>
        <form onSubmit={ this.handleSubmit }>
          <table align='center' style={{ display:"flex",  alignContent: "center"}}>
              <tr>
                  <td><label>Enter your Username: </label>
                      <input 
                      type="text"
                      id="username" 
                      name="username"
                      value={this.state.username}
                      onChange={this.handleInputChange}
                      />
                  </td>
                </tr>
              <tr>
                  <td><lable>Enter your password: </lable>
                      <input
                      type="text"
                      id="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      />
                    </td>
                </tr>    
                <tr>
                  <td>
                  <input type="submit"  value="login"/>

                  </td>
                </tr>
              </table>
            </form>
            <div>
            <span style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
              {JSON.stringify(userProfileResponse, null, 4)}
            </span>
            </div>
          </div>
      );
  } 
}
export default Signin;