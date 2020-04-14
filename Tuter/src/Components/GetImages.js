import firebase from 'firebase';
import '../Assets/css/Note.css';
require("firebase/firestore");

//const db = firebase.firestore();

// let ImagesRef = db.collection('Images');
// let getDoc = ImagesRef.get()
//   .then(doc => {
//     if (!doc.exists) {
//       console.log('No matching documents.');
//     }  

//     else {
//       console.log('Document data: ', doc.data());
//     }
//   })
//   .catch(err => {
//     console.log('Error getting documents', err);
//   });

function GetImages(name)
{
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
          itemRef.getMetadata().then(function(metadata) {
            names.push(metadata.name);
            //console.log(names);
            
            // Metadata now contains the metadata for 'images/forest.jpg'
          }).catch(function(error) {
            console.log(error);
            // Uh-oh, an error occurred!
          });

         // console.log(names);

          
        // All the items under listRef.
      });
      //console.log(names);
    }).catch(function(error) {
      console.log(error);
      // Uh-oh, an error occurred!
      console.log("error message on itemRef");
    });

    console.log(names);

    return names;

}

export default GetImages;