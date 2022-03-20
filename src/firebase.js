import firebase from 'firebase/compat/app';

import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBcy88kilMnsgK462-sm6auSYGDthP0PxY",
    authDomain: "rtube-project.firebaseapp.com",
    projectId: "rtube-project",
    storageBucket: "rtube-project.appspot.com",
    messagingSenderId: "504625636797",
    appId: "1:504625636797:web:79c0806d00995a38099ed4"
  };

firebase.initializeApp(firebaseConfig)

export default firebase.auth()

