// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import Admin from '../Pages/Admin';

// Configure Firebase.
const config = {
    // IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // Enter our config info here, unsecure to have this info on GitHub:
    apiKey: "AIzaSyDsrj2vt11ZICQq-bJru4_wkdv8ysxz1YI",
    authDomain: "large-project-cop4331.firebaseapp.com",
    databaseURL: "https://large-project-cop4331.firebaseio.com",
    storageBucket: "large-project-cop4331.appspot.com",
};
firebase.initializeApp(config);

class SignInScreen extends React.Component {

  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,

    signInOptions: [
        
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false
        }
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>
        <Admin/>
      </div>
    );
  }
} export default SignInScreen;