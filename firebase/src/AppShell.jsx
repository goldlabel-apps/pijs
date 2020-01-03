import React from 'react';
import './AppShell.css';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
// };
// firebase.initializeApp(config);

// const uiConfig = {
//   signInFlow: 'popup',
//   signInOptions: [
//     firebase.auth.GithubAuthProvider.PROVIDER_ID,
//   ]
// };

function AppShell() {
  return (
    <div className="App">
      <div className="appShell">
        <div>
          <h3>PiJS Admin</h3>
        </div>
          {/* <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          /> */}
        </div>
    </div>
  );
}

export default AppShell;
