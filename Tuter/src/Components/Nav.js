import React, { Component } from "react";
import firebase from 'firebase';
import '../App.css';

class Nav extends Component 
{
    //Get a reference to the storage service, which is used to create references in your storage bucket
    // var storage = firebase.storage();

    // // Create a storage reference from our storage service
    // var storageRef = storage.ref();

    // // Create a child reference
    // var imagesRef = storageRef.child('Transcripts');
    // // imagesRef now points to 'images'

    // // Child references can also take paths delimited by '/'
    // //var spaceRef = storageRef.child('Transcripts/image_picker2445122431296381245.jpg');
    // // spaceRef now points to "images/space.jpg"
    // // imagesRef still points to "images"

    // // Find all the prefixes and items.
    // imagesRef.listAll().then(function(res) {
      
    //   res.items.forEach(function(itemRef) {
    //       print(itemRef);
    //     // All the items under listRef.
    //   });
    // }).catch(function(error) {
    //   // Uh-oh, an error occurred!
    //   print("error message on itemRef");
    // });



    render() 
    {
        return(
           
        <div className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <button type="button" id="SearchButton" class="btn btn-link btn-sm order-1 order-lg-0"  >Reports</button>
        <button type="button" id="SearchButton" class="btn btn-link btn-sm order-1 order-lg-0"  >Unverified Transcripts</button>
        <button type="button" id="SearchButton" class="btn btn-link btn-sm order-1 order-lg-0" onClick={() => firebase.auth().signOut()}>Sign-out</button>
        </div>
            
        )
    }
} export default Nav;