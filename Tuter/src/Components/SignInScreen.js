// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { DB_CONFIG } from '../fire';
import Note from '../Components/Note';
import '../Assets/css/Note.css';
import Nav from './Nav';
require("firebase/firestore");


firebase.initializeApp(DB_CONFIG);

  //Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = firebase.storage();
  // Create a storage reference from our storage service
  const storageRef = storage.ref();
  // Create a child reference
  const imagesRef = storageRef.child('Transcripts');
  //imagesRef now points to 'images'
  
  var names = [];
  imagesRef.listAll().then(function(res) {  
    res.items.forEach(function(itemRef) {
        // itemRef.getMetadata().then(function(metadata) {
          names.push(itemRef);
          console.log(itemRef.name);
          // Metadata now contains the metadata for 'images/forest.jpg'
        });
      }).catch(function(error) {
          console.log(error);
          // Uh-oh, an error occurred!
        });
  // var transcript = names.entries;
  // for (tra)
  // console.log(names);
    

class SignInScreen extends React.Component {
  
  constructor(props)
  {
    super(props);
      
      //setup the React state of our component
      this.state =
      {
        Images: names,
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

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }

    return (
      // <div>
      //   <Nav/>
      // </div>
    <div>
      
      <div className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <button type="button" id="SearchButton" className="btn btn-link btn-sm order-1 order-lg-0"  >Unverified Transcripts</button>
        <button type="button" id="SearchButton" className="btn btn-link btn-sm order-1 order-lg-0"  >Verify Tutor</button>
        <button type="button" id="SearchButton" className="btn btn-link btn-sm order-1 order-lg-0" onClick={() => firebase.auth().signOut()}>Sign-out</button>
      </div>

      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">New Transcripts</div>
        </div>
        <div className="notesBody">
          {
            this.state.Images.map((note) => {
              return (
                <Note ImageArray={note.ImageArray} 
                noteId={note.id} 
                key={note.id} 
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