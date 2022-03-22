import React from 'react'
import {Card,Button} from 'react-bootstrap'
const Profile = (props) => {
const handlName =()=> alert (`my name is : ${props.name}`)
  return (
    <div>
    <Card style={{ width: '18rem',marginLeft:530 ,marginTop:30}}>
      {props.children}
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      {props.age} ans
      <br/>
      {props.professions}
    </Card.Text>
    <Button variant="primary" onClick={handlName} >click</Button>

  </Card.Body>
</Card>
</div>
    
  )
}

export default Profile