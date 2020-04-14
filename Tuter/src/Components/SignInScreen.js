// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { DB_CONFIG } from '../fire';
import Note from '../Components/Note';
import '../Assets/css/Note.css'
import Nav from './Nav';
require("firebase/firestore");

firebase.initializeApp(DB_CONFIG);

const db = firebase.firestore();

const docRef = db.collection("Tutors").where("verified", "==", false);


class SignInScreen extends React.Component {
  
  constructor(props)
  {
    super(props);
    this.removeNote = this.removeNote.bind(this);
    // this.app = firebase.initializeApp(DB_CONFIG);
     this.database = db.collection("Tutors");
      
      //setup the React state of our component
      this.state =
      {
        Tutors: [],
      }
  }


  // The component's Local state.
  state =
  {
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


  componentWillMount()
  {
    const previousTutors = this.state.Tutors;

    docRef.onSnapshot(function(querySnapshot) 
    {
      querySnapshot.forEach(function(doc) 
      {
        console.log(doc.data().key);
        previousTutors.push(
        {
          id: doc.id,
          email: doc.data().email,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          major: doc.data().major,
        })
      });
    });
    console.log(previousTutors);
    this.setState({
      Tutors: previousTutors
    }) 

  }
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() 
  {
    
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user}) );
    
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  removeNote(noteId){
    console.log("from the parent: " + noteId);
    this.database.doc(noteId).delete();
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
      
      {/* <div className="sb-topnav navbar navbar-expand navbar-dark bg-dark"> */}
        {/* <button type="button" id="SearchButton" className="btn btn-link btn-sm order-1 order-lg-0"  >Unverified Transcripts</button> */}
        <button type="button" className="btn-primary btn-link btn-sm order-1 order-lg-0"  >Verify Tutor</button>
        <button type="button" id="SearchButton" className="btn-primary btn-link btn-sm order-1 order-lg-0" onClick={() => firebase.auth().signOut()}>Sign-out</button>
      {/* </div> */}

      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">Unverified Tutors</div>
        </div>
        <div className="notesBody">
          {
            this.state.Tutors.map((note) => {
              return (
                <Note email={note.email} 
                noteId={note.id}
                key={note.id}
                firstName={note.firstName} 
                lastName={note.lastName}
                major={note.major} 
                removeNote ={this.removeNote}/>
              )
            })
          }
        </div>
      </div>
    </div>  
    );
  }
} export default SignInScreen;