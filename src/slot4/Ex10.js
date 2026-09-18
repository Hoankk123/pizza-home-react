import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Ex10({pizza}) {
  return (
      <Card className="bg-dark text-white mb-4" style={{ border: '1px solid #444'}}>
      <Card.Img variant="top" src={pizza.image}
      style={{height: '200px', objectFit: 'cover'}} 
      />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
          {pizza.price}
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  )
}

export default Ex10
