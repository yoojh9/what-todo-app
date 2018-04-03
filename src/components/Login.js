import React, { Component } from 'react';
import { Link } from 'react-router';
import {FontIcon, RaisedButton} from "material-ui";
import Avatar from 'material-ui/Avatar';
import {loginWithGoogle, currentUser} from "../../build/firebase/Auth";
import {firebaseAuth} from "../../build/firebase/config";

export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      errors: {},
      user: null,
    }

    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
  }

  componentWillMount(){
    const localUser = localStorage.user;

    if(localUser){
      this.setState({
        user: JSON.parse(localUser)
      })
    }

    // else {
    //   firebaseAuth().onAuthStateChanged(user => {
    //     if (user) {
    //         console.log("User signed in: ", JSON.stringify(user));
    //         this.setState({
    //           user:user
    //         });
    //         localStorage.user = JSON.stringify(this.state.user);
    //     }
    //   })
    // }
  }

  handleGoogleLogin() {
    let promise = loginWithGoogle();

    promise.then(result => {
      let user = result.user;
      console.log(user);

      firebaseAuth().onAuthStateChanged(user => {
        if (user) {
            console.log("User signed in: ", JSON.stringify(user));
            this.setState({
              user:user
            });
            localStorage.user = JSON.stringify(this.state.user);
        }
      })
    });

    promise.catch(e => {
      console.log(e.message);
    })
    // loginWithGoogle()
    //   .catch(function (error) {
    //       alert(error); // or show toast
    // });
  }

  render() {
    const iconStyles = {
        color: "#ffffff"
    };

    if(this.state.user){
      console.log(this.state.user)
      return (
        <Avatar src={this.state.user.photoURL} />
      )
    } else {
      return (
        <div>
          <RaisedButton
            label="Sign in with Google"
            labelColor={"#ffffff"}
            backgroundColor="#dd4b39"
            icon={<FontIcon className="fa fa-google-plus" style={iconStyles}/>}
            onClick={this.handleGoogleLogin}
          />
        </div>
      )
    }
  }
}
