import React,{useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import firebase from '../utils/firebase';

import InputAdd from "./InputAdd";
import ListUsers from "./ListUsers";


function FormUser(props) {
  const [name,setName] = useState('');

  const [isEdit,setIsEdit] = useState(false);

  const [activities, setActivities] = useState([]);

  const [userId,setUserId] = useState('');

  const handleChange = (e)=>{
    setName(e.target.value);
  };

  const handleSubmit = (e) =>{

    e.preventDefault();

    const user = {
      name: name,
      activities
    }
    if(isEdit){
      let userRef = firebase.database().ref('User').child(userId);
      userRef.update(user);
    }else{
      let userRef = firebase.database().ref('User');
      userRef.push(user);
    }
    setName('')
    setActivities([]);
    setIsEdit(false);
  }

  const handleCancel = ()=>{
    setName('');
    setActivities([]);
    setIsEdit(false);
  };

  return (
    <div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-6">

            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={handleChange}
                />
              </Form.Group>
              <InputAdd
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                setActivities={setActivities}
                activities={activities}/>
              <br/>
              <Button variant="outline-success mt-4" type="submit">Save</Button>
              <Button variant="outline-danger mt-4 ml-4" onClick={handleCancel}>Cancel</Button>
            </Form>

          </div>
          <div className="col-6">
            <ListUsers
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              setActivities={setActivities}
              setName={setName}
              setUserId={setUserId}
            />
          </div>
        </div>

      </div>







    </div>
  );
}

export default FormUser;
