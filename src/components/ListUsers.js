import React, {useEffect, useState} from 'react';

import firebase from "../utils/firebase";

import User from "./User";

function ListUsers(props) {
  const [userList, setUserList] = useState();

  useEffect(()=>{
    const userRef = firebase.database().ref('User');

    userRef.on('value', (snapshot) => {
      const users = snapshot.val();
      const userList = [];
      for (let id in users) {
        userList.push({ id, ...users[id] });
      }
      setUserList(userList);
    });

  },[]);



  return (
    <div>
      {userList
        ? userList.map((user, index) => <User
          user={user}
          key={index}
          setActivities={props.setActivities}
          setName={props.setName}
          isEdit={props.isEdit}
          setIsEdit={props.setIsEdit}
          setUserId={props.setUserId}
        /> )
        : ''}
    </div>
  );
}

export default ListUsers;
