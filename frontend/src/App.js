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
          clientId="<GOOGLE CLIENT ID>"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

      </div>
    );
  }
}

export default App;