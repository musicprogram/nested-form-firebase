import React,{useState, useEffect} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function InputAdd(props) {

  useEffect(()=>{
  },[props.activities]);

  const addInput = ()=>{
    props.setActivities([...props.activities,{activity: ''} ])
  }

  const handleChange = (e)=>{
    e.preventDefault();
    let valArray = []
    const valuesActivities = document.querySelectorAll('.activity');
    for (var i = 0; i < valuesActivities.length; i++) {
      if(valuesActivities[i].value !== ""){
        valArray = [...valArray, {activity: valuesActivities[i].value}]
      }

      //setActivities([{activity: valuesActivities[i].value}])
    }
    props.setActivities(valArray)
  }

  return (
    <div>
      <Button variant="outline-secondary" onClick={addInput}>Add Activities</Button>
      {
        props.activities.map((activity, id)=>{

          return(
            <div key={id}>
              <Form.Group>
                <Form.Label>Activity</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  className={'activity'+ ' ' + activity.activity}
                  value={activity.activity}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          )
        })
      }
    </div>
  );
}

export default InputAdd;
