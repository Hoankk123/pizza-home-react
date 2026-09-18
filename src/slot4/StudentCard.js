import React from 'react'
import {  Card } from 'react-bootstrap'

function StudentCard({student}) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={student.image} />
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>
          {student.id}
          <br/>
          {student.age}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default StudentCard
