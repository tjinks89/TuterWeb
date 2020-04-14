// import React from "react";
// import ReactDOM from 'react-dom';
// import firebase from 'firebase';
// import '../App.css';
// import Verify from "../Pages/Verify";

// function Nav(props)  
// {
//     //Get a reference to the storage service, which is used to create references in your storage bucket
//     var storage = firebase.storage();

//     // Create a storage reference from our storage service
//     var storageRef = storage.ref();

//     // Create a child reference
//     var imagesRef = storageRef.child('Transcripts');
//     // imagesRef now points to 'images'

//     // Child references can also take paths delimited by '/'
//     //var spaceRef = storageRef.child('Transcripts/image_picker2445122431296381245.jpg');
//     // spaceRef now points to "images/space.jpg"
//     // imagesRef still points to "images"

//     // imagesRef.listAll().then(function(res) {
//     //   res.prefixes.forEach(function(folderRef) {
//     //     console.log('success');
//     //     // All the prefixes under listRef.
//     //     // You may call listAll() recursively on them.
//     //   });
//     //   res.items.forEach(function(itemRef) {
//     //     console.log('success again');
//     //     // All the items under listRef.
//     //   });
//     // }).catch(function(error) {
//     //   console.log(error);
//     //   // Uh-oh, an error occurred!
//     // });
    

//     // Find all the prefixes and items.
//     // imagesRef.listAll().then(function(res) {
      
//     //   res.items.forEach(function(itemRef) {
//     //       itemRef.getMetadata().then(function(metadata) {
//     //         console.log(metadata.name)
//     //         // Metadata now contains the metadata for 'images/forest.jpg'
//     //       }).catch(function(error) {
//     //         console.log('error message on metadata');
//     //         // Uh-oh, an error occurred!
//     //       });
          
//     //      // console.log(itemRef);
//     //     // All the items under listRef.
//     //   });
//     // }).catch(function(error) {
//     //   // Uh-oh, an error occurred!
//     //   console.log("error message on itemRef");
//     // });

//     // const verify = async event =>
//     // {
//     //     ReactDOM.render(
//     //     <div>

//     //       <Verify/>,

//     //     </div>)
//     // }



  
//         return(
           
//         <div className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        
//         <button type="button" id="SearchButton" className="btn btn-link btn-sm order-1 order-lg-0"  >Unverified Transcripts</button>
//         <button type="button" id="SearchButton" className="btn btn-link btn-sm order-1 order-lg-0"  >Verify Tutor</button>
//         <button type="button" id="SearchButton" className="btn btn-link btn-sm order-1 order-lg-0" onClick={() => firebase.auth().signOut()}>Sign-out</button>
//         </div>
            
//         )
    
// } export default Nav;