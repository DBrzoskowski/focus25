import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import googleLogin from "./services/GoogleAuthService"
import './App.css';

class App extends Component {

  render() {
    const responseGoogle = async(response) => {
      let googleResponse  = await googleLogin(response.accessToken)
      console.log(googleResponse);
      console.log(response);
    }

    return (
      <div className="App">
        <GoogleLogin
          clientId="922438377414-nclhsj3bve0m39gdu7jnq67uj7u261o4.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />

      </div>
    );
  }
}

export default App;