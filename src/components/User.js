import React from 'react';
import firebase from "../utils/firebase";

function User(props) {

  const destroy = () => {
    const userRef = firebase.database().ref('User').child(props.user.id);
    userRef.remove();

  };

  const edit = () => {
    // const userRef = firebase.database().ref('User').child(props.user.id);
    //console.log(props.user.activities)
    debugger
    props.setActivities(props.user.activities);
    props.setName(props.user.name);
    props.setIsEdit(true);
    props.setUserId(props.user.id);

  };

  return (
    <div>
      <div >
        {props.user.name}
        <button onClick={destroy}>Destroy</button>
        <button onClick={edit}>Edit</button>
      </div>
    </div>
  );
}

export default User;
