import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const Item = ({id, name, price, imagen}) => {
    return (
        <div className="container d-flex flex-wrap flex-row justify-content-between">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text> ${price}.- </Card.Text>
                    <Button>
                        <Link to={"/item/" + id}> Más detalles</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
