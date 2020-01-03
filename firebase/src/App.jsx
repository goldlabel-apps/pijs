import React from 'react';
import './App.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
};
firebase.initializeApp(config);

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ]
};

function App() {
  
  // console.log()
  return (
    <div className="App">
      <div className="appShell">
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
    </div>
  );
}

export default App;
