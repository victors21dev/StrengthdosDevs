const firebaseConfig = {
  apiKey: "AIzaSyDK9SCF6HGm_Dy7B63krpZi2Z-69WdirAE",
  authDomain: "strengthdosdevs.firebaseapp.com",
  projectId: "strengthdosdevs",
  storageBucket: "strengthdosdevs.appspot.com",
  messagingSenderId: "600657531927",
  appId: "1:600657531927:web:b09a21b60129e0416ff852"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let auth = firebase.auth()