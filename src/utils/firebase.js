import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyAfXY6fQbPt8b-83u5NhDYN2ogOaA5ujSg",
  authDomain: "crud-reactjs-98cb5.firebaseapp.com",
  databaseURL: "https://crud-reactjs-98cb5.firebaseio.com",
  projectId: "crud-reactjs-98cb5",
  storageBucket: "crud-reactjs-98cb5.appspot.com",
  messagingSenderId: "54509121756",
  appId: "1:54509121756:web:f6e81ab1dca58badfd0419"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;