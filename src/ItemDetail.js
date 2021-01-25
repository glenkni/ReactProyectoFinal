import React, {useState} from 'react'
import ItemCount from './ItemCount'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ItemDetail = ({id, name, imagen, description, price, stock, initial, item}) => {

    const [ counter, setCounter ] = useState(initial)

    function add(){
        if (counter < stock ){
            setCounter(counter+1)
        }
    }

    function substract() {
        if (counter > initial ){
            setCounter(counter-1)
        }
    }


    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text> {description} </Card.Text>
                    <Card.Text>  ${price}.- </Card.Text>
                    <Card.Text>  Stock: {stock} </Card.Text>
                    <Button variant="primary">Agregar item</Button>
                </Card.Body>
            </Card>     
            <div className="itemDetail__counter">
                <ItemCount initial={initial} stock={stock} add={add} substract={substract} item={item} counter={counter}  id={id}/>
          </div>      
        </div>
    )
}

export default ItemDetail
